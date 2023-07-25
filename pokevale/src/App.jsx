
import './App.css';
import AppRouter from './appRouter';
import pokemonContext from './Context/Context';

function App() {
  return (
    <pokemonContext>
   <AppRouter />
   </pokemonContext>
  );
}

export default App;
