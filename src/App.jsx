import { Stack, createTheme, ThemeProvider, CssBaseline, Typography} from '@mui/material';
import Game from './components/Game';
import Navbar from './components/Navbar';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#dddddd'
    },
    secondary: {
      main: '#aaaaaa'
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiTypography: {
      defaultProps: {
        align: 'center',
        color: '#dddddd'
      }
    }
  }
});


function App() {
  const [selectedGame, setSelectedGame] = useState([true, false]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack sx={{height:'100vh'}}>
        {/* header */}
        <Stack sx={{alignItems:"center", bgcolor:'#121212', borderBottom:'1px solid #4d4d4d', padding:2, position:'sticky', top:0, left:0, right:0, zIndex:10}}>
          <Typography>Anime Guessing Game</Typography>
        </Stack>

        {/* contents */}
        <Stack sx={{flexDirection:{xs: 'column', sm: 'row'}, flex:1, paddingBottom:1}}>
          {/* nav bar */}
          <Navbar selectedGame={selectedGame} setSelectedGame={setSelectedGame}/>
          {/* game */}
          <Game selectedGame={selectedGame}/>
		      <Stack sx={{flex: 1.5}}/>
        </Stack>

        {/* footer */}
        <Stack sx={{display:{xs:'none', sm:'block'}, alignItems:"center", borderTop:'1px solid #4d4d4d', padding:1, bottom:0, left: 0, right: 0}}>
          <Typography color="secondary" sx={{fontSize:11, display: {xs: 'none', md: 'block'}}}>This game is a small project made for fun. All data and images are sourced from MyAnimeList. This project is not affiliated with, sponsored, or endorsed by MyAnimeList.</Typography>
          <Typography color="secondary" sx={{fontSize:11, display: {xs: 'block', md: 'none'}}}>This game is a small project made for fun. All data and images are sourced from MyAnimeList...</Typography>
        </Stack>
      </Stack>
    </ThemeProvider>
  )
}

export default App
