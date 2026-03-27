import { Button, Stack, Divider, createTheme, ThemeProvider, CssBaseline, Typography} from '@mui/material';
import Game from './components/Game';

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#f5f5f5'
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
        align: 'center'
      }
    }
  }
});


function App() {
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
          <Stack sx={{flex: 1.5, justifyContent:{sm:'center'}}}>
            <Button variant="text">Change Game</Button>
            <Divider />
            <Button variant="text">Leaderboard</Button>
          </Stack>
          {/* game */}
          <Game />
		      <Stack sx={{flex: 1.5}}/>
        </Stack>
      </Stack>
    </ThemeProvider>
  )
}

export default App
