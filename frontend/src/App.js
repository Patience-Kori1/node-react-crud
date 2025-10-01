import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Student from './components/Student';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router
        // Je rajoute cette ligne pour accepter le flag des futurs améliorations
        future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path='/' element={<Student />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
