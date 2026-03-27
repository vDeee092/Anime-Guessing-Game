import { Button, Stack, Divider, Collapse} from '@mui/material';
import { useState } from "react";

const Navbar = () => {
    const [showGame, setShowGame] = useState(false);
    return (
        <Stack sx={{flex: 1.5, justifyContent:{sm:'center'}}}>
            <Button variant="text" onClick={() => setShowGame(!showGame)}>Change Game</Button>
            <Collapse in={showGame}>
              <Button fullWidth variant="text">Guess the Rating</Button>
              <Button fullWidth variant="text">Matching Game</Button>
            </Collapse>
            <Divider />
            <Button variant="text">Leaderboard</Button>
        </Stack>
    );
}

export default Navbar;