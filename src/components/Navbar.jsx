import { Button, Stack, Divider, Collapse} from '@mui/material';
import { useState } from "react";

const Navbar = ({selectedGame, setSelectedGame}) => {
    const [showGame, setShowGame] = useState(false);
    const handleClick = (n) => {
        /*let nextSelectedGame = [];
        let i = 0;
        while (nextSelectedGame.length < selectedGame.length) {
            nextSelectedGame[i] = (i == n) ? true : false;
            i = i + 1;
        }*/
        const nextSelectedGame = selectedGame.map((value, i) => (i == n));
        setSelectedGame(nextSelectedGame);
    }
    return (
        <Stack sx={{flex: 1.5, justifyContent:{sm:'center'}}}>
            <Button variant="text" onClick={() => setShowGame(!showGame)}>Change Game</Button>
            <Collapse in={showGame}>
              <Button fullWidth variant="text" onClick={() => handleClick(0)}>Guess the Rating</Button>
              <Button fullWidth variant="text" onClick={() => handleClick(1)}>Matching Game</Button>
            </Collapse>
            <Divider />
            <Button variant="text">Leaderboard</Button>
        </Stack>
    );
}

export default Navbar;