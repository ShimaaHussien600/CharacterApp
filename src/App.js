import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import CharacterDetailsLayout from './Pages/CharacterDetails/CharacterDetailsLayout';
import TestLayOutScreen from './Pages/Home/HomeScreenLayout';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={< TestLayOutScreen />} />
        <Route exact path="/character_details/:characterID/" element={<CharacterDetailsLayout />} />
      </Routes >
    </Router>
  );
}
export default App;