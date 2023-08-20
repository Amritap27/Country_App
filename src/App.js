import react from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Filter from './components/Filter';
import Countries from './components/Countries';
import Country from './components/Country';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Filter Filter={Filter} />
                <Countries Countries={Countries} />
              </>
            }
          ></Route>
          <Route path="/countries/:name" element={<Country />}></Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
