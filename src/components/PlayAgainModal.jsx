import {Stack, Modal, Typography, Button} from '@mui/material';

const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 500,
    bgcolor: "background.paper"
}

const PlayAgainModal = ({playAgain, isCorrect, guessCounter}) => {
    console.log(isCorrect)
    return (
        <Modal
        open={isCorrect}>
            <Stack sx={styles}>
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