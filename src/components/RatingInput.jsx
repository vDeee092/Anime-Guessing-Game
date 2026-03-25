import { useState } from 'react';
import RatingTextField from './RatingTextField';
import {Button, Stack} from '@mui/material';

const RatingInput = () => {
    const [rating, setRating] = useState("");

    const handleClick = () => {
        console.log(rating);
    }

    return (
        <Stack flex-direction="row">
          <RatingTextField value={rating} onChange={setRating}/>
          <Button onClick={handleClick}>Enter</Button>
        </Stack>
    );
}

export default RatingInput;