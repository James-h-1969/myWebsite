import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme, GlobalStyle} from './Functionality/Themes.js';
import { NavBar } from './Components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => { // function to change themes on button press
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div className="App">
        <NavBar />      
        <Button onClick={toggleTheme} style={{ padding: 10, margin: 30, backgroundColor: "transparent", border: `2px solid ${theme === 'light'? lightTheme.text: darkTheme.text}`, borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", width: "40px", height: "40px" }}>
          {theme === 'light' ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-alt-high-fill" viewBox="0 0 16 16" style={{ color: lightTheme.text }}>
              <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16" style={{ color: darkTheme.text }}>
              <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
            </svg>
          )}
        </Button>
              </div>
    </ThemeProvider>
  )
}

export default App
