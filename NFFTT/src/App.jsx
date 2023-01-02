import Install from './components/Install.jsx';
import Home from './components/Home.jsx';

function App() {

    if (window.ethereum) {
        return <Home />;
    } else {
        return <Install />
    }
}

export default App;