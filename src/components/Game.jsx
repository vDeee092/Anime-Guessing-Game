import {Stack} from '@mui/material';
import RatingInput from './RatingInput';
import data from '../data.json';

const Game = () => {
    const randIndex = Math.floor(Math.random() * data.length);
    const animeToGuess = data[randIndex];

    return (
        <Stack sx={{flex: 8, alignItems: 'center', justifyContent: 'center'}}>
          <img src={animeToGuess.image} />
          {animeToGuess.name}
          <RatingInput />
        </Stack>
    );
}

export default Game;