import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import CategoryForm from './components/Category/CategoryForm';

function App() {


  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={LoginForm} />
          <Route path='/categories' Component={CategoryForm} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;
