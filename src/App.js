import './App.css';
import Container from './Container';
import GameBoard from './GameBoard';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Container>
        <Header className="App-header" />
        <GameBoard />
      </Container>
    </div>
  );
}

export default App;
