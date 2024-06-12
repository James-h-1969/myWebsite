import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme, GlobalStyle} from './Functionality/Themes.js';
import { NavBar } from './Components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Components/Header.jsx'
import { AboutMe } from './Components/About.jsx';
import { Experience } from './Components/Experience.jsx';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => { // function to change themes on button press
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
        <div className="App" style={{paddingBottom:"200px"}}>
          <NavBar theme={theme} changeTheme={toggleTheme}/>  
          <Header />   
          <AboutMe /> 
          <Experience />
        </div>
    </ThemeProvider>
  )
}

export default App
