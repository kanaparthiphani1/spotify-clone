import './App.css';
import Login from './components/Login';
import Dasboard from './components/Dasboard';
import { SpotifyProvider } from './Context/SpotifyProvider';
import { getCode } from './helpers/helperMethods';

const code = getCode()

function App() {
  return (
    <SpotifyProvider>
    {code?<Dasboard code={code}/> : <Login />}
    </SpotifyProvider>
  );
}

export default App;