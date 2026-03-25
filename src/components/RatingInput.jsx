import { useState } from 'react';
import RatingTextField from './RatingTextField';
import {Button, Stack} from '@mui/material';

const RatingInput = () => {
    const [rating, setRating] = useState("");

    const handleClick = () => {
        if (rating == "") console.log("Enter a value");
        else console.log(rating);
    }

    return (
        <Stack direction="row" alignItems="flex-start">
          <RatingTextField value={rating} onChange={setRating}/>
          <Button onClick={handleClick}>Enter</Button>
        </Stack>
    );
}

export default RatingInput;