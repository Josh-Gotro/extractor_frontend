import React, { Component } from 'react';
import './App.css';
import DisplayColors from './components/DisplayColors'
import DisplayFeatureImage from './components/DisplayFeatureImage'
import MatchedImages from './components/MatchedImages'
import { Palette } from 'color-thief-react';
import About from './components/About'
import Pinned from './components/Pinned'
import { Link, Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allImages: null,
      allColors: null,
      featuredImage: [],
      colors: [],
      pinned: null
    }
  }

  componentDidMount = () => {
    fetch("http://localhost:3001/images").then(r => r.json()).then(allImages => this.setState({ allImages }));
    fetch("http://localhost:3001/colors").then(r => r.json()).then(allColors => this.setState({ allColors }));
    window.scrollTo(0, 0);
  }

  componentDidUpdate = () => {
    window.scrollTo(0, 0);
  }

  chooseFeaturedImage = (imageInfo) => {
    this.setState({ featuredImage: imageInfo })
    this.updatePinned(imageInfo.id)
  }

  featureClick = (image) => {
    this.setState({
      allImages:
        this.state.allImages.map(img => {
          if (img.id === image.id) {
            img.pinned = true;
          }
          return img
        })
    });

    this.state.allImages.filter(img =>{
      if (img.pinned === true) {
         this.setState({ pinned: img})
      }
      return img
    })
  }

  updatePinned = (id) => {
    fetch(`http://localhost:3001/images/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ pinned: true })
    })
  }

  imageSrc = () => {
    if (this.state.featuredImage !== null) {
      return this.state.featuredImage
    }
  }

  deleteMe = (e, id) => {
    e.preventDefault()
    console.log(id)
    console.log("deleted from db :P ")
    fetch(`http://localhost:3001/images/${id}`, {
      method: "DELETE",
    });
    this.setState({ featuredImage: [] });
    this.setState({
      allImages:
        this.state.allImages.filter(img => img.id !== id)
    })
  }

  saveColor = (color) => {
    console.log(color);
    this.setState({ colors: color });
    fetch(`http://localhost:3001/colors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ rgb: color })

    }).then(r => r.json()).then(console.log("saved to db"));

  }

  aboutClick = () => {
    console.log('clikarooni')
  }

  pinClick = () => {
    console.log("pin click")
  }


  render() {
    return (
      <div className="App">        
        <span>
          <Link className="Triangledown" to='/about'></Link>
          <Route path="/about" component={About} />
        </span>

        <div className={"Card"} >

          <span>
            <DisplayFeatureImage featureImage={this.state.featuredImage} featuredClick={this.featureClick} handleClick={this.deleteMe} savedColor={this.state.colors} />
          </span>

        </div>
        <div pinClick={this.pinClick}>
          <span>
            <Link className="Triangle" to='/pinned'></Link>
            <Route path="/pinned" component={Pinned}/>
          </span>
        </div>

        <Palette src={this.state.featuredImage.html} crossOrigin="Anonymous" colorCount={3}>
          {({ data }) => (
            <div className={"Row"} style={{ color: data }}>
              {data.map(color => (
                <DisplayColors key={color} color={color} colorClick={this.saveColor} />
              ))}
            </div>
          )}
        </Palette>

        <div className={"RowTwo"} >
          <MatchedImages allImages={this.state.allImages} chooseFeatured={this.chooseFeaturedImage} />
        </div>
    
      </div>
    )
  }
};

export default App;