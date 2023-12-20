import React from "react";
import Card from "./card";
import Regiments from "./Regiments";


   function createcards(Regiment){
    return <Card 
          
          key= {Regiment.id}
          name= {Regiment.name}
          img= {Regiment.img}
          active= {Regiment.active}
          center= {Regiment.center}

    />
   }





function App() {
  console.log(Regiments);

  return (
    <div className="App">{Regiments.map(createcards)}</div>
   /* <div className="App">
      
      <div>
      <Card
        name={Regiment[0].name}
        img={Regiment[0].img}
        active={Regiment[0].active}
        center={Regiment[0].center}
      />

      <Card
        name={Regiment[1].name}
        img={Regiment[1].img}
        active={Regiment[1].active}
        center={Regiment[1].center}
      />

      <Card
        name={Regiment[2].name}
        img={Regiment[2].img}
        active={Regiment[2].active}
        center={Regiment[2].center}
      />

      <Card
        name={Regiment[3].name}
        img={Regiment[3].img}
        active={Regiment[3].active}
        center={Regiment[3].center}
      />

      <Card
        name={Regiment[4].name}
        img={Regiment[4].img}
        active={Regiment[4].active}
        center={Regiment[4].center}
      />

      <Card
        name={Regiment[5].name}
        img={Regiment[5].img}
        active={Regiment[5].active}
        center={Regiment[5].center}
      />

      <Card
        name={Regiment[6].name}
        img={Regiment[6].img}
        active={Regiment[6].active}
        center={Regiment[6].center}
      />

      <Card
        name={Regiment[7].name}
        img={Regiment[7].img}
        active={Regiment[7].active}
        center={Regiment[7].center}
      />

      <Card
        name={Regiment[8].name}
        img={Regiment[8].img}
        active={Regiment[8].active}
        center={Regiment[8].center}
      />

     <Card
        name={Regiment[9].name}
        img={Regiment[9].img}
        active={Regiment[9].active}
        center={Regiment[9].center}
      />
       
       <Card
        name={Regiment[10].name}
        img={Regiment[10].img}
        active={Regiment[10].active}
        center={Regiment[10].center}
      />
      </div>
    </div>*/
  );
}

export default App;
