
import './App.css';
import AppRouter from './appRouter';
import { Save } from './Context/Provider';

function App() {
  return (
    <Save>
   <AppRouter />
   </Save>
  
  );
}

export default App;
