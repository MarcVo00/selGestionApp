import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormComponent from './Components/FormComponent';
import MethodologySuggestionComponent from './Components/MethodologySuggestionComponent';
import ResultComponent from './Components/ResultComponent';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/form"  element={<FormComponent/>} />
          <Route path="/suggestions" element={<MethodologySuggestionComponent/>} />
          <Route path="/suggestions/:idMethodology" element={<ResultComponent />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
