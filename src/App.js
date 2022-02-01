import './App.css';
import Container from './Container';
import Footer from './Footer';
import GameBoard from './GameBoard';
import Scoreboard from './Scoreboard';

function App() {
  return (
    <div className="App">
      <Container>
        <Scoreboard className="App-header" />
        <GameBoard />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
