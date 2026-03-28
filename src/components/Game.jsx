import {Stack, Typography, Box, Button} from '@mui/material';
import RatingInput from './RatingInput';
import data from '../data.json';
import { useState } from 'react';
import PlayAgainModal from './PlayAgainModal.jsx';

function sampleIndices(length, n) {
    let samples = new Set();
    while (samples.size < n) {
        let sample = Math.floor(Math.random() * length);
        samples.add(sample);
    }
    return Array.from(samples);
}

const Game = ({selectedGame}) => {
    {/* guessing game */}
    const [isCorrect, setIsCorrect] = useState(false);
    const [randIndex, setRandIndex] = useState(Math.floor(Math.random() * data.length));
    const [feedback, setFeedback] = useState("");
    const [guessCounter, setGuessCounter] = useState(0);

    {/* matching game */}
    const [randIndices, setRandIndices] = useState(sampleIndices(data.length, 4));
    const [correctIndex, setCorrectIndex] = useState(Math.floor(Math.random() * randIndices.length));
    const [matchCounter, setMatchCounter] = useState(0);
    let animeChoices = [];
    for (let i = 0; i < randIndices.length; i = i + 1) {
        animeChoices[i] = {name: data[randIndices[i]].name, image: data[randIndices[i]].image};
    }

    const animeToGuess = data[randIndex];
    const ratingToGuess = parseFloat(animeToGuess.score).toFixed(1);
    const playAgain = (n) => {
        switch (n) {
            case 1:
                setRandIndices(sampleIndices(data.length, 4));
                setCorrectIndex(Math.floor(Math.random() * randIndices.length));
                setIsCorrect(false);
                setMatchCounter(0);
                break;
            default:
                setIsCorrect(false);
                setRandIndex(Math.floor(Math.random() * data.length));
                setGuessCounter(0);
        }
        return;
    }

    

    return (
        <Stack sx={{flex: 7, alignItems: 'center', justifyContent: 'center'}}>
            {/* guessing game */}
            <Stack sx={{display: (selectedGame[0] == true) ? 'flex' : 'none', alignSelf: 'stretch', alignItems: 'center', '& > *': {margin:1}}}>
                <Box
                component="img"
                src={animeToGuess.image}
                sx={{objectFit: 'cover', width: {xs: '60%', sm: '300px'}}}
                />
                <Typography>{animeToGuess.name}</Typography>
                <RatingInput key={randIndex} ratingToGuess={ratingToGuess} onGuess={setIsCorrect} sendFeedback={setFeedback} guessCounter={guessCounter} setGuessCounter={setGuessCounter}/>
                <Typography>{feedback}</Typography>
                <PlayAgainModal selectedGame={0} playAgain={playAgain} isCorrect={isCorrect && selectedGame[0]} guessCounter={guessCounter} matchCounter={matchCounter}/>
            </Stack>

            {/* matching game - isCorrect is true when player guesses wrong to show modal */}
            <Stack sx={{display: (selectedGame[1] == true) ? 'block' : 'none', alignSelf: 'stretch', alignItems: 'center', height:'100%'}}>
                <Stack sx={{flexDirection:'row', justifyContent:'center'}}>
                    <Box
                    component="img"
                    src={animeChoices[0].image}
                    sx={{
                        objectFit: 'cover', 
                        width: {xs: '40%', sm: '200px'}, 
                        margin: 2, 
                        '&:hover': {outline: '4px #121212', transform: 'scale(0.9)', outline: '2px solid white'},
                        outline: '3px solid rgba(255, 255, 255, 0.23)'
                    }}
                    onClick={() => {
                        if (0 != correctIndex) 
                            setIsCorrect(true);
                        else {
                            setMatchCounter(matchCounter + 1);
                            setRandIndices(sampleIndices(data.length, 4));
                            setCorrectIndex(Math.floor(Math.random() * randIndices.length));
                        };
                    }}
                    />
                    <Box
                    component="img"
                    src={animeChoices[1].image}
                    sx={{
                        objectFit: 'cover', 
                        width: {xs: '40%', sm: '200px'}, 
                        margin: 2, 
                        '&:hover': {outline: '4px #121212', transform: 'scale(0.9)', outline: '2px solid white'},
                        outline: '3px solid rgba(255, 255, 255, 0.23)'
                    }}
                    onClick={() => {
                        if (1 != correctIndex) 
                            setIsCorrect(true);
                        else {
                            setMatchCounter(matchCounter + 1);
                            setRandIndices(sampleIndices(data.length, 4));
                            setCorrectIndex(Math.floor(Math.random() * randIndices.length));
                        };
                    }}
                    />
                </Stack>
                <Stack sx={{flexDirection:'row', justifyContent:'center'}}>
                    <Box
                    component="img"
                    src={animeChoices[2].image}
                    sx={{
                        objectFit: 'cover', 
                        width: {xs: '40%', sm: '200px'}, 
                        margin: 2, 
                        '&:hover': {outline: '4px #121212', transform: 'scale(0.9)', outline: '2px solid white'},
                        outline: '3px solid rgba(255, 255, 255, 0.23)'
                    }}
                    onClick={() => {
                        if (2 != correctIndex) 
                            setIsCorrect(true);
                        else {
                            setMatchCounter(matchCounter + 1);
                            setRandIndices(sampleIndices(data.length, 4));
                            setCorrectIndex(Math.floor(Math.random() * randIndices.length));
                        };
                    }}
                    />
                    <Box
                    component="img"
                    src={animeChoices[3].image}
                    sx={{
                        objectFit: 'cover', 
                        width: {xs: '40%', sm: '200px'}, 
                        margin: 2, 
                        '&:hover': {outline: '4px #121212', transform: 'scale(0.9)', outline: '2px solid white'},
                        outline: '3px solid rgba(255, 255, 255, 0.23)'
                    }}
                    onClick={() => {
                        if (3 != correctIndex) 
                            setIsCorrect(true);
                        else {
                            setMatchCounter(matchCounter + 1);
                            setRandIndices(sampleIndices(data.length, 4));
                            setCorrectIndex(Math.floor(Math.random() * randIndices.length));
                        };
                    }}
                    />
                </Stack>
                <Typography>{animeChoices[correctIndex].name}</Typography>
                <PlayAgainModal selectedGame={1} playAgain={playAgain} isCorrect={isCorrect && selectedGame[1]} guessCounter={guessCounter} matchCounter={matchCounter}/>
            </Stack>
        </Stack>
    );
}

export default Game;

