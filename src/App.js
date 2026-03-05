import './App.css';
import './styles/abb.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PolicyViewer from './PolicyViewer.js';
import PolicyList from './pages/PolicyList.jsx';

function App() {
  console.log("App component rendered");
  console.log("Current location:", window.location.pathname);
  
  return (
    <Router basename="/ABB-MobileDistribution">
      <Routes>
        <Route path="/" element={<PolicyList />} />
        <Route path="/view/:appName/:fileName" element={<PolicyViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
