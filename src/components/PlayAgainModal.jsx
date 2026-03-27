import {Stack, Modal, Typography, Button} from '@mui/material';

const PlayAgainModal = ({playAgain, isCorrect, guessCounter}) => {
    console.log(isCorrect)
    return (
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
    );
}

export default PlayAgainModal;