
import './App.css';
import Main from './pages/Main'
import Mission from './pages/Mission';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
      <Routes>
        {/* Routes */}
        <Route strict exact path='/' element={<Main/>}/>
        <Route strict exact path="/:id" element={<Mission/>}/>
      </Routes>
  );
}

export default App;
