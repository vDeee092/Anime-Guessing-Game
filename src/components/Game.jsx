import {Stack, Modal, Typography, Button} from '@mui/material';
import RatingInput from './RatingInput';
import data from '../data.json';
import { useState } from 'react';
const Game = () => {
    const [isCorrect, setIsCorrect] = useState(false);
    const [randIndex, setRandIndex] = useState(Math.floor(Math.random() * data.length));
    const [feedback, setFeedback] = useState("");
    const [guessCounter, setGuessCounter] = useState(0);
    //const [animeToGuess, setAnimeToGuess] = useState(data[randIndex]);
    //const randIndex = Math.floor(Math.random() * data.length);
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
            <RatingInput ratingToGuess={ratingToGuess} onGuess={setIsCorrect} sendFeedback={setFeedback} guessCounter={guessCounter} setGuessCounter={setGuessCounter}/>
            {feedback}
            <Modal
            open={isCorrect}>
                <Stack>
                    <Typography>
                        Congratulations
                    </Typography>
                    <Typography>
                        You guessed the rating in {guessCounter} tries!
                    </Typography>
                    <Button onClick={playAgain}>
                        Play Again
                    </Button>
                </Stack>
            </Modal>
        </Stack>
    );
}

export default Game;