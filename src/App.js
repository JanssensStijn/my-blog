import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetails from './pages/BlogDetails';
import NotFound from './pages/NotFound';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  //const person = {name: yoshi, age: 30};
  const link = "http://www.google.com";

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
