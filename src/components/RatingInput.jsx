import { useState } from 'react';
import RatingTextField from './RatingTextField';
import {Button, Stack} from '@mui/material';

const RatingInput = ({ratingToGuess, onGuess}) => {
    const [rating, setRating] = useState("");

    const handleClick = () => {
        let correctAnswer = false;
        if (rating == "") {
            console.log("Enter a value");
            return;
        } 
        
        console.log("rating " + rating + ", ratingToGuess " + ratingToGuess);

        if (rating > ratingToGuess)
            console.log("Lower");
        else if (rating < ratingToGuess)
            console.log("Higher");
        else {
            console.log("Correct!");
            correctAnswer = true;
        }
        onGuess(correctAnswer);
    }

    return (
        <Stack direction="row" alignItems="flex-start">
          <RatingTextField value={rating} onChange={setRating}/>
          <Button onClick={handleClick}>Enter</Button>
        </Stack>
    );
}

export default RatingInput;