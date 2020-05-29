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
    // this.setState({})
  }

  featureClick = (image) => {
    //console.log("ooooo mmmm gggg", this.state)
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


  render() {
    return (
      <div className="App">
        <div className={"Card"} >
          <span>
            <DisplayFeatureImage featureImage={this.state.featuredImage} featuredClick={this.featureClick}/>
          </span>
        </div>
      

        <Palette src={this.state.featuredImage.html} crossOrigin="Anonymous" colorCount={3}>
          {({ data }) => ( 
            <div className={"Row"}  style={{ color: data }}>
              {data.map(color => (
                <DisplayColors color={color} /> 
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






