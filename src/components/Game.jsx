import {Stack, Typography, Box} from '@mui/material';
import RatingInput from './RatingInput';
import data from '../data.json';
import { useState } from 'react';
import PlayAgainModal from './PlayAgainModal.jsx';

const Game = ({selectedGame}) => {
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
        <Stack sx={{flex: 7, alignItems: 'center', justifyContent: 'center'}}>
            <Stack sx={{display: (selectedGame[0] == true) ? 'flex' : 'none', alignSelf: 'stretch', alignItems: 'center', '& > *': {margin:1}}}>
                <Box
                component="img"
                src={animeToGuess.image}
                sx={{objectFit: 'cover', width: {xs: '60%', sm: '300px'}}}
                />
                <Typography>{animeToGuess.name}</Typography>
                <RatingInput key={randIndex} ratingToGuess={ratingToGuess} onGuess={setIsCorrect} sendFeedback={setFeedback} guessCounter={guessCounter} setGuessCounter={setGuessCounter}/>
                <Typography>{feedback}</Typography>
                <PlayAgainModal playAgain={playAgain} isCorrect={isCorrect} guessCounter={guessCounter}/>
            </Stack>
            <Stack sx={{display: (selectedGame[1] == true) ? 'flex' : 'none', alignSelf: 'stretch', alignItems: 'center'}}>
                <Stack sx={{flexDirection:'row', justifyContent:'center'}}>
                    <Box
                    component="img"
                    src={animeToGuess.image}
                    sx={{objectFit: 'cover', width: {xs: '40%', sm: '200px'}, margin: 2}}
                    />
                    <Box
                    component="img"
                    src={animeToGuess.image}
                    sx={{objectFit: 'cover', width: {xs: '40%', sm: '200px'}, margin: 2}}
                    />
                </Stack>
                <Stack sx={{flexDirection:'row', justifyContent:'center'}}>
                    <Box
                    component="img"
                    src={animeToGuess.image}
                    sx={{objectFit: 'cover', width: {xs: '40%', sm: '200px'}, margin: 2}}
                    />
                    <Box
                    component="img"
                    src={animeToGuess.image}
                    sx={{objectFit: 'cover', width: {xs: '40%', sm: '200px'}, margin: 2}}
                    />
                </Stack>
                <Typography>{animeToGuess.name}</Typography>
            </Stack>
        </Stack>
    );
}

export default Game;

