import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Counter from './pages/Counter';
import Todo from './pages/Todo';


function App() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/counter'>Counter</Link>
        <Link to='/todo'>Todo</Link>
      </nav>

      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/todo' element={<Todo/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
