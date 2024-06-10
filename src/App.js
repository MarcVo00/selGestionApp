import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormComponent from './Components/FormComponent';
import MethodologySuggestionComponent from './Components/MethodologySuggestionComponent';
import ResultComponent from './Components/ResultComponent';
import MethodeComponent from './Components/MethodeComponent';
import OutilComponent from './Components/OutilComponent';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/form"  element={<FormComponent/>} />
          <Route path="/suggestions" element={<MethodologySuggestionComponent/>} />
          <Route path="/suggestions/:nomMethodology" element={<ResultComponent />} />
          <Route path="/methode/:nomMethode" element={<MethodeComponent />} />
          <Route path="/outil/:nomOutil" element={<OutilComponent />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
