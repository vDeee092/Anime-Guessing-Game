import { Button, Stack, Divider, TextField} from '@mui/material';

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
        <Stack sx={{flex: 8, alignItems: 'center', justifyContent: 'center'}}>
          <img src="https://myanimelist.net/images/anime/1079/138100.jpg" />
        <div flex-direction="row">
			    <TextField type="text" placeholder="Guess rating score"/>
          <Button>Enter</Button>
        </div>
        </Stack>
		
		    <Stack sx={{flex: 1}}/>

      </Stack>
    </Stack>
  )
}


export default App
