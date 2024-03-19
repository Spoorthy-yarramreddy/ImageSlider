import './App.css';
import React, {Component} from 'react';
import PhotoContainer from './PhotoContainer';

class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
      photos:[]
    };
  }
  componentDidMount(){
    this.fetchData();

    }
    async  fetchData(){
      try{
   const response=  await fetch("https://api.thedogapi.com/v1/images/search?limit=10");
   const json= await response.json();
   this.setState({photos: json});
      }
      catch(error){
        console.erroe(error);
      }
  }

  render(){
    const imageContainerStyles ={
      height: "280px",
      width: "500px",
      margin: "0 auto"
      
  }
   
    return (
      
    <div className="App" style={imageContainerStyles}>
      <p>Here are some dogs</p>
      <PhotoContainer photos={this.state.photos}/>
    </div>
  );
  }
}

export default App;
