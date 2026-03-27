import { Button, Stack, Divider} from '@mui/material';
import { useState } from "react";

const Navbar = () => {
    const [showGame, setShowGame] = useState(false);
    return (
        <Stack sx={{flex: 1.5, justifyContent:{sm:'center'}}}>
            <Button variant="text" onClick={() => setShowGame(!showGame)}>Change Game</Button>
            <Divider />
            <Button variant="text">Leaderboard</Button>
        </Stack>
    );
}

export default Navbar;