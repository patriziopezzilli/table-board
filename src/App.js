import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from "react-bootstrap";
import BoardPoll from './components/boardPoll';
import SlideShowComp from './components/slideShow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Inter - Cagliari</h2>
        <Container>
          <Col>
            <Row>
              <SlideShowComp></SlideShowComp>
            </Row>
            <Row>
              <BoardPoll></BoardPoll>
            </Row>
          </Col>
        </Container>
      </header>
      <body>
      </body>
    </div>
  );
}

export default App;
