import * as React from 'react'
import Header from "./components/Header";
import "./App.css";
import { ThemeProvider, CssBaseline, PaletteMode, createTheme } from "@mui/material";
import { theme } from "./theme";
import { Button } from '@mui/material'

function App() {
  const [mode, setMode] = React.useState<PaletteMode>('light')
  
  const theme = React.useMemo(
    () => createTheme(mode === "light" ? 'light' : 'dark'),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Header />
      <div style={{ margin: "1em" }}>
        <Button color="primary" variant="contained">
          Primary
        </Button>
        <Button color="secondary" variant="contained">
          Secondary
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
