import {Stack} from '@mui/material';
import RatingInput from './RatingInput';
import data from '../data.json';
import { useState } from 'react';
import PlayAgainModal from './PlayAgainModal.jsx';
const Game = () => {
    const [isCorrect, setIsCorrect] = useState(false);
    const [randIndex, setRandIndex] = useState(Math.floor(Math.random() * data.length));
    const [feedback, setFeedback] = useState("");
    const [guessCounter, setGuessCounter] = useState(0);

    const animeToGuess = data[randIndex];
    const ratingToGuess = parseFloat(animeToGuess.score).toFixed(1);
    const playAgain = () => {
        setIsCorrect(false);
        setRandIndex(Math.floor(Math.random() * data.length));
        setGuessCounter(0);
        return;
    }
    return (
        <Stack sx={{flex: 8, alignItems: 'center', justifyContent: 'center'}}>
            <img src={animeToGuess.image} />
            {animeToGuess.name}
            <RatingInput key={randIndex} ratingToGuess={ratingToGuess} onGuess={setIsCorrect} sendFeedback={setFeedback} guessCounter={guessCounter} setGuessCounter={setGuessCounter}/>
            {feedback}
            <PlayAgainModal playAgain={playAgain} isCorrect={isCorrect} guessCounter={guessCounter}/>
            
        </Stack>
    );
}

export default Game;