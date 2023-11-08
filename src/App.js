import './App.css';
import Home from './components/Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Form from './components/Form';
import DrawerAppBar from './components/AppBar';

function App() {
  return (
    <>
    <DrawerAppBar/>
    <Home>
      <Form/>
    </Home>
    </>
  );
}

export default App;
