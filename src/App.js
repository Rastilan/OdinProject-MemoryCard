import './App.css';

import React, {useState} from 'react';

function Card(props) {

  return (
    <button 
    className = 'card'
    onClick={props.onClick}
    >
      <img src={props.imgURL} alt="test"/>
      
    </button>
  );
}



const Board = () => {

  //const [board, resetBoard] = useState(false);
  let [cardClicked, setCardClicked] = useState(Array(12).fill(false));
  let [score, setScore] = useState(0);


  const stateCardClicked = (i) => {
    if(cardClicked[i] === true){
      setCardClicked(Array(12).fill(false));
      setScore(0);
    } else{
      cardClicked[i] = true;
      setScore(score +1);
    }
    
    console.log(cardClicked[0], score)
  };


  const imgURL = [
    'https://ygoprodeck.com/pics/36609518.jpg',
    'https://ygoprodeck.com/pics/41232647.jpg',
    'https://ygoprodeck.com/pics/35306215.jpg',
    'https://ygoprodeck.com/pics/82773292.jpg',
    'https://ygoprodeck.com/pics/16960120.jpg',
    'https://ygoprodeck.com/pics/40398073.jpg',
    'https://ygoprodeck.com/pics/88453933.jpg',
    'https://ygoprodeck.com/pics/32600024.jpg',
    'https://ygoprodeck.com/pics/65741786.jpg',
    'https://ygoprodeck.com/pics/10802915.jpg',
    'https://ygoprodeck.com/pics/21057444.jpg',
    'https://ygoprodeck.com/pics/68018709.jpg',
    
  ];

  

  const renderCard = (i) => {


    return <Card 
    
    id={i}
    imgURL={imgURL[i]}
    onClick={() => stateCardClicked(i)}
    
    
    
    
    />;
  };



  


    return (
      <div className="App">
        <div>
          Score : {score}
        </div>
        <div>
        {renderCard(0)}
        {renderCard(1)}
        {renderCard(2)}
        {renderCard(3)}
        {renderCard(4)}
        {renderCard(5)}
        {renderCard(6)}
        {renderCard(7)}
        {renderCard(8)}
        {renderCard(9)}
        {renderCard(10)}
        {renderCard(11)}
        </div>
        

      </div>
    );
  }



function App() {
return (
 <Board />
    );
    
}


export default App;
