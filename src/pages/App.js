import '../styling/App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import PostHeader from './PostHeader';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="app">
      <Router>

        {/* Keep things that you always want to render outside of the routes tag */}
        <Header />

        <PostHeader />

        <Routes>

          <Route path='/search' element={<SearchPage />} />
          
          <Route path='/' element={<Home />} />

        </Routes>


        <Footer />
        
      </Router>
    </div>
  );
}

export default App;


// {/* Home ✅ */}

//   {/* Header ✅ */}

//   {/* Post Header ✅ */}
  
//   {/* Banner ✅ */}
  
//   {/* Cards ✅ */}
  
//   {/* Footer ✅ */ }

// {/* SearchPage */}
//   {/* Header */}
