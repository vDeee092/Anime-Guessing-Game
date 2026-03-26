import { useState, useRef, useEffect } from 'react';
import RatingTextField from './RatingTextField';
import {Button, Stack} from '@mui/material';

function usePrev(rating) {
    const ref = useRef();
    useEffect(() => {
        ref.current = rating;
    }, [rating])
    return ref.current;
}

const RatingInput = ({ratingToGuess, onGuess, sendFeedback, guessCounter, setGuessCounter}) => {
    const [rating, setRating] = useState("");
    const prevRating = usePrev(rating);

    const handleClick = () => {
        let correctAnswer = false;
        if (rating == "") {
            feedback = "Enter a value";
            sendFeedback(feedback);
            return;
        } 
        
        console.log("rating " + rating + ", ratingToGuess " + ratingToGuess);
        let feedback = "";
        if (rating > ratingToGuess)
            feedback = "Lower";
        else if (rating < ratingToGuess)
            feedback = "Higher";
        else {
            feedback = "";
            correctAnswer = true;
        }
        if (rating == prevRating) {
            feedback = feedback + " - Enter a different value";
            sendFeedback(feedback);
            return;
        }

        onGuess(correctAnswer);
        sendFeedback(feedback);
        setGuessCounter(guessCounter + 1);
    }

    return (
        <Stack direction="row" alignItems="flex-start">
          <RatingTextField value={rating} onChange={setRating}/>
          <Button onClick={handleClick}>Enter</Button>
        </Stack>
    );
}

export default RatingInput;