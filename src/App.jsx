// import Home from "./Home";
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Routes
// import Search from "./Search";

// const App=()=>{
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// }
// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Routes
import Home from './Home'; // Import your Home component
import Search from './Search'; // Import your Search component

const App = () => {
  return (
    <Router> {/* Wrap the app in Router to enable routing */}
      <Routes> {/* Define the routes */}
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/search" element={<Search />} /> {/* Search route */}
      </Routes>
    </Router>
  );
};

export default App;
