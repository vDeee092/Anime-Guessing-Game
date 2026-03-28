import {Stack, Modal, Typography, Button} from '@mui/material';

const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs:'75%', sm:400},
    height: {xs:'50%', sm:500},
    bgcolor: "background.paper"
}

const PlayAgainModal = ({selectedGame, playAgain, isCorrect, guessCounter}) => {
    return (
        <Modal
        open={isCorrect}>
            <Stack sx={styles}>
                {selectedGame == 0 && <Stack>
                    <Typography>Congratulations</Typography>
                    <Typography>You guessed the rating in {guessCounter} tries!</Typography>
                </Stack>}
                {selectedGame == 1 && <Stack>
                    <Typography>Correct!</Typography>
                </Stack>}
                <Button onClick={() => playAgain(selectedGame)}>
                    Play Again
                </Button>
            </Stack>
        </Modal>
    );
}

export default PlayAgainModal;