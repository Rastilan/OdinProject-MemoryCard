import './App.css';
import Card from './modules/Card.js';
import React, {useState} from 'react';





const Board = () => {

  let [cardClicked, setCardClicked] = useState(Array(12).fill(false));
  let [score, setScore] = useState(0);
  let [highScore, setHighScore] = useState(0);

// Adds to the score counter or resets all cards click state depending on if the card was already clicked
  const stateCardClicked = (i) => {
    if(cardClicked[i] === true){
      if(score > highScore){
        setHighScore(score);
      }
      setCardClicked(Array(12).fill(false));
      setScore(0);
    } else{
      
      cardClicked[i] = true;
      setScore(score +1);
      if(score >= highScore){
        setHighScore(score+1);
      }
    }
  };

// All the img urls, this could be swapped for a random image via an API
  const imgURL = [
    'https://ygoprodeck.com/pics/15754711.jpg',
    'https://ygoprodeck.com/pics/41232647.jpg',
    'https://ygoprodeck.com/pics/57416183.jpg',
    'https://ygoprodeck.com/pics/24799107.jpg',
    'https://ygoprodeck.com/pics/16960120.jpg',
    'https://ygoprodeck.com/pics/40398073.jpg',
    'https://ygoprodeck.com/pics/88453933.jpg',
    'https://ygoprodeck.com/pics/32600024.jpg',
    'https://ygoprodeck.com/pics/77515704.jpg',
    'https://ygoprodeck.com/pics/76782778.jpg',
    'https://ygoprodeck.com/pics/42055234.jpg',
    'https://ygoprodeck.com/pics/40110009.jpg',
    
  ];

  

  const renderCard = (i) => {
    return <Card 
    
    id={i}
    imgURL={imgURL[i]}
    onClick={() => stateCardClicked(i)}
    />;
  };

const startSeq = [0,1,2,3,4,5,6,7,8,9,10,11],
        randSeq = [];

let i = startSeq.length,
    j = 0;

while (i--) {
  j = Math.floor(Math.random() * (i+1));
  randSeq.push(startSeq[j]);
  startSeq.splice(j, 1);
}

 


    return (
      <div className="App">
        <div>
          <div id="score">
            Score : {score}
          </div>
          <div id="highscore">
            Highest Score : {highScore}
          </div>
        </div>

        <div>
        
        {renderCard(randSeq[0])}
        {renderCard(randSeq[1])}
        {renderCard(randSeq[2])}
        {renderCard(randSeq[3])}
        {renderCard(randSeq[4])}
        {renderCard(randSeq[5])}
        {renderCard(randSeq[6])}
        {renderCard(randSeq[7])}
        {renderCard(randSeq[8])}
        {renderCard(randSeq[9])}
        {renderCard(randSeq[10])}
        {renderCard(randSeq[11])}


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
