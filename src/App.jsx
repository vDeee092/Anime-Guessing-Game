import { Stack, createTheme, ThemeProvider, CssBaseline, Typography} from '@mui/material';
import Game from './components/Game';
import Navbar from './components/Navbar';

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
          <Navbar />
          {/* game */}
          <Game />
		      <Stack sx={{flex: 1.5}}/>
        </Stack>
        <Stack sx={{display:{xs:'none', sm:'block'}, alignItems:"center", borderTop:'1px solid #4d4d4d', padding:1, bottom:0, left: 0, right: 0}}>
          <Typography color="secondary" sx={{fontSize:11}}>Footer</Typography>
        </Stack>
      </Stack>
    </ThemeProvider>
  )
}

export default App
