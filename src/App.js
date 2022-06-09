import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component';

const HatsPage = props => (
  <div>
    {console.log(props)}
    <h1>HATS PAGE</h1>
  </div>
);

const HatsDetailPage = props => {
  let param = useParams();
  // console.log(hatId);
  return (
    <div>
      <h1>HATS DETAIL PAGE {param.hatId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route path='/hats' element={<HatsPage />}></Route>
        <Route path='/hats/:hatId' element={<HatsDetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
