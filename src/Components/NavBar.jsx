import { Navbar, Container, Nav, Button} from "react-bootstrap";
import { lightTheme, darkTheme } from "../Functionality/Themes";



export function NavBar({ theme, changeTheme }) {
    const themeStruct = theme === 'light' ? lightTheme : darkTheme;

    return (
      <Navbar expand="lg" style={{ backgroundColor: themeStruct.body }}>
        <Container>
            <Button onClick={changeTheme} style={{ padding: 10, margin: 30, backgroundColor: "transparent", border: `2px solid ${themeStruct.text}`, borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", width: "40px", height: "40px" }}>
            {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-alt-high-fill" viewBox="0 0 16 16" style={{ color: themeStruct.text }}>
                <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4"/>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16" style={{ color: themeStruct.text }}>
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                </svg>
            )}
            </Button>
            <Nav className="me-auto">
                <Nav.Link href="#home" style={{color: themeStruct.text}}>About</Nav.Link>
                <Nav.Link href="#features" style={{color: themeStruct.text}}>Blog</Nav.Link>
                <Nav.Link href="#pricing" style={{color: themeStruct.text}}>Experience</Nav.Link>
          </Nav>
          <Navbar.Brand href="#home" style={{ color: themeStruct.text, fontSize:"30px", fontWeight:"bold" }}>
            James Hocking
          </Navbar.Brand>
          
        </Container>
      </Navbar>
    );
  }