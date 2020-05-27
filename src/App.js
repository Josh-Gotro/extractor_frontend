import React, { Component } from 'react';
import './App.css';
import DisplayColors from './components/DisplayColors'
import DisplayFeatureImage from './components/DisplayFeatureImage'
import MatchedImages from './components/MatchedImages'

// import ColorThief from '../node_modules/colorthief/dist/color-thief.mjs'
// const ColorThief = require('colorthief');



class App extends Component {
  constructor() {
    super()
    this.state = {
      allImages: null,
      allColors: null,
      featuredImage: []
    }
  }

  componentDidMount = () => {
    fetch("http://localhost:3001/images").then(r => r.json()).then(allImages => this.setState({ allImages }));
    fetch("http://localhost:3001/colors").then(r => r.json()).then(allColors => this.setState({ allColors }));
  }

  chooseFeaturedImage = (imageInfo) => {
    console.log("we did it yay", imageInfo)
    this.setState({featuredImage: imageInfo})
  }

  featureClick = () => {
    console.log("ooooo mmmm gggg")
  }


  render() {
    return (
      <div className="App">
        <div className={"Card"} >
          <span className="Splotch" >
            < DisplayColors />
          </span>
          <span className="Splotch" >
            < DisplayColors />
          </span>
          <span className="Splotch" >
            < DisplayColors />
          </span>
          <span>
            < DisplayFeatureImage featureImage={this.state.featuredImage} featuredClick={this.featureClick}/>
          </span>
        </div>
        < MatchedImages allImages={this.state.allImages} chooseFeatured={this.chooseFeaturedImage}/>
      </div>
    )
    }

};


export default App;






