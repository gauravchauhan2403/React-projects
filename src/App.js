import Main from './breakingBad/main';
import Chart from './chart/Chart';
import Text from './TextUtil/Text';
import Timer from './Timer/Timer';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';

const App = () => {

  return (
    <Router>
      <div className="App">
      <nav>
        <ul className='Navbar'>
          <li className='list'><Link className='link' to='/'>Breaking Bad</Link></li>
          <li className='list'><Link className='link' to='/charts'>Charts</Link></li>
          <li className='list'><Link className='link' to='/textUtils'>Text-Util</Link></li>
          <li className='list'><Link className='link' to='/timer'>Timer</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/charts' element={<Chart /> } />
        <Route exact path='/textUtils' element={<Text /> } />
        <Route exact path='/timer' element={<Timer /> } />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
