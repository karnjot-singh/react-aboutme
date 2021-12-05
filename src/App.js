import './App.css';
import Nav from 'react-bootstrap/Nav'
import { useState } from 'react';
import About from './components/About'
import Town from './components/Town'

function App() {
  const [menuItem, setMenuItem] = useState('about')

  return (
    <div className="App container">
        <br />
        <Nav variant="tabs" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link eventKey="about" style={{color: menuItem=="about"?'#349ceb':'black'}} active={menuItem=="about" ? true : false} onClick={() => setMenuItem("about")}>About me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="town" style={{color: menuItem=="town"?'#349ceb':'black'}} active={menuItem=="town" ? true : false} onClick={() => setMenuItem("town")}>My Town</Nav.Link>
          </Nav.Item>
        </Nav>
        {
          menuItem=="about" ? <About /> : <Town />
        }
    </div>
  );
}

export default App;
