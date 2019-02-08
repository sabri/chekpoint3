import React, { Component } from 'react';
import Box from './Box/Box';
import'./index.css';
class App extends Component {


  render() {
    return (
      <div className="container">
      <div className="block">
     <Box  title={"FULL TIME PROGRAM"} color={{color:"#daecf3"}} style={{background:"#daecf3"}}
     paragraph={"un programme intensif de 3 mois pour devenir développeur fullstack js ou java. Un coaching technique et professionnel régulier et des liens très forts avec le monde de l'entreprise."}/>
     <Box  title={"PART TIME PROGRAM"} color = {{color:"#fe424d"}} style={{background:"#fe424d"}}
     paragraph={"Tu peux développer ton produit technologique pendant l'année scolaire si tu es étudiant ou en parallèle de ton travail si tu es un professionnel. Ça se passe tous les weekends (demi-journée Samedi ou dimanche) dans notre Hackerspace !"}/>
     <Box  title={"SUMMER ACADEMY"} color = {{color:"#022d41"}} style={{background:"#022d41"}} 
     paragraph={"Développe ton produit technologique pendant 3 semaines pendant l'été. Un expérience très riche d'apprentissage et de rencontres avec des passionnés de la technologie."}/>
      </div>
      <h1>ou se passant les sessions </h1>
      <p> les sessions se passant dans hackerspace de gomycode : les place est limité</p>
      <div>

        </div>
      </div>
      
      
      
      
    
    );
  }
}

export default App;
