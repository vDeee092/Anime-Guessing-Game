import { Button, Stack, Divider} from '@mui/material';
import Game from './components/Game';

function App() {
  return (
    <Stack>
      {/* header */}
      <Stack alignItems="center">
        Anime Thing
      </Stack>

      {/* contents */}
      <Stack direction="row">
        {/* nav bar */}
        <Stack sx={{flex: 1}}>
          <Button variant="text">Change Game</Button>
          <Divider />
          <Button variant="text">Leaderboard</Button>
        </Stack>
        {/* game */}
        <Game />
		
		    <Stack sx={{flex: 1}}/>

      </Stack>
    </Stack>
  )
}

export default App
