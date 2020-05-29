import React, { Component } from 'react';
import './App.css';
import DisplayColors from './components/DisplayColors'
import DisplayFeatureImage from './components/DisplayFeatureImage'
import MatchedImages from './components/MatchedImages'
import { Palette } from 'color-thief-react';


// import ColorThief from '../node_modules/colorthief/dist/color-thief.mjs'
// const ColorThief = require('colorthief');



class App extends Component {
  constructor() {
    super()
    this.state = {
      allImages: null,
      allColors: null,
      featuredImage: [],
      colors: [],
    }
  
  }

  componentDidMount = () => {
    fetch("http://localhost:3001/images").then(r => r.json()).then(allImages => this.setState({ allImages }));
    fetch("http://localhost:3001/colors").then(r => r.json()).then(allColors => this.setState({ allColors }));
  }

  chooseFeaturedImage = (imageInfo) => {

    //console.log("we did it yay", imageInfo)
    this.setState({ featuredImage: imageInfo })
   

  }

  featureClick = (e, image) => {
    //console.log("ooooo mmmm gggg", this.state)
    // e.preventDefault()
    this.setState({
      allImages: 
        this.state.allImages.map(img => {
          if (img.id === image.id) {
           img.pinned = true
          }
          return img
        })
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
    fetch(`http://localhost:3001/images/${id}`, {
      method: "DELETE",
    });
    this.setState({featuredImage: []});
    this.setState({allImages: 
       this.state.allImages.filter(img => img.id !==id)
    })
  }

  saveColor = (color) => {
    console.log(color);
    this.setState({colors: color});
    fetch(`http://localhost:3001/colors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({rgb: color})

    }).then(r => r.json()).then(console.log("hi"));

  }


  render() {
    return (
      <div className="App">
        {/* <nav className="RowTwo"><h1>nav</h1></nav> */}
        <div className={"Card"} >
          <span>
            <DisplayFeatureImage featureImage={this.state.featuredImage} featuredClick={this.featureClick} handleClick={this.deleteMe} savedColor={this.state.colors}/>
          </span>
        </div>
      

        <Palette src={this.state.featuredImage.html} crossOrigin="Anonymous" colorCount={3}>
          {({ data }) => ( 
            <div className={"Row"}  style={{ color: data }}>
              {data.map(color => (
                <DisplayColors key={color} color={color} colorClick={this.saveColor}/>
                
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






