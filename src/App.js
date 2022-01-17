//dt162g projekt besökar/client-sida Alice Fagerberg HT21
import React, { Component } from "react";

//funktion returnera client-sidans komponenter/funktioner
function app(){
  return (
    <>
      <Titlelist></Titlelist>
      <Topiclist></Topiclist>
       
    </>
  ) 
  
}

///////////////////////

//KOMPONENT Topiclista titlar
class Titlelist extends Component {

  //Constructor med state-objekt
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
    
  }

  //Funktion för att hämta data
  getData(){
    //Fetch get metod - hämtar lista med topics
    fetch('https://dreamcatcher-restapi.herokuapp.com/dreamtopics')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    })
    
  }

  //Mounta till träd
  componentDidMount() {
    // Kör funktion hämta data
    this.getData();
    
  }

 

  render () {

    //Använder state objekt
    const { isLoaded, items } = this.state;
    // Om listan inte är redo
    if (!isLoaded) {
      return <div className="loading">List loading...</div>;
    }
    // Ladda när listan är redo
    else {
      
      items.sort((a, b) => (a.topic > b.topic) ? 1 : -1);
      return (
        <div id= "introtitles">
        <h2>Drömtopics från A-ö</h2>
        <ul id="titlelist">
          {items.map(item => (
        
            <li key={item._id}><a href={`#${item._id}`}>{item.topic} </a></li>
          ))} 
          
        </ul>
        </div>
      )
    }

    
  }
}

/////////////////////////////////

//KOMPONENT Lista med topics och beydelser
class Topiclist extends Component {

  //Constructor med state-objekt
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
    
  }

  //Funktion för att hämta data
  getData(){
    //Fetch get metod - hämtar lista med topics
    fetch('https://dreamcatcher-restapi.herokuapp.com/dreamtopics')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    })
    
  }

  //Mounta till träd
  componentDidMount() {
    // Kör funktion hämta data
    this.getData();
    
  }

  render () {

    // Använder state-objekt
    const { isLoaded, items} = this.state;
    // om listan inte är redo
    if (!isLoaded) {
      return <div className="loading">List loading...</div>;
    }
    // Ladda lista när den är redo
    else {
      
      items.sort((a, b) => (a.topic > b.topic) ? 1 : -1);
      return (
        <div id= "topicitems">
          <h2>Topicbetydelser</h2>
        <ul>
          {items.map(item => (
            <li key={item._id} id={item._id}><strong>{item.topic} </strong><p>{item.tMeaning}</p>  {new Date(item.created).toDateString()} </li>
          ))} 
          
        </ul>
        </div>
      )
    }

    
  }
}


export default app; 
