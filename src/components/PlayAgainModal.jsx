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

const PlayAgainModal = ({selectedGame, playAgain, isCorrect, guessCounter, matchCounter}) => {
    return (
        <Modal
        open={isCorrect}>
            <Stack sx={styles}>
                {selectedGame == 0 && <Stack>
                    <Typography>Congratulations</Typography>
                    <Typography>You guessed the rating in {guessCounter} tries!</Typography>
                </Stack>}
                {selectedGame == 1 && <Stack>
                    <Typography>Wrong!</Typography>
                    {matchCounter == 0 && <Stack>
                        <Typography>You're bad kid!</Typography>
                        <Typography>How are you losing without matching a single Anime right?</Typography>
                    </Stack>}
                    {matchCounter >= 1 && <Typography>You correctly matched the Anime {matchCounter} {matchCounter == 1 ? 'time (noob)' : 'times in a row!'}</Typography>}
                </Stack>}
                <Button onClick={() => playAgain(selectedGame)}>
                    Play Again
                </Button>
            </Stack>
        </Modal>
    );
}

export default PlayAgainModal;