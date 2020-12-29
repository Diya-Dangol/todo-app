import TodoHome from './component/todoHome'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
       <Route path='/' exact>
         <TodoHome />
       </Route>
     </Router>
    </div>
  );
}

export default App;
