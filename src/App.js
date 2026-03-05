import './App.css';
import './styles/abb.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PolicyViewer from './PolicyViewer.js';
import CoCPage from './pages/CodeOfConduct.jsx';
import PolicyList from './pages/PolicyList.jsx';
import Closer from './pages/Closer.jsx';

function App() {
  // console.log("App component rendered");
  // console.log("Current location:", window.location.pathname);
  
  return (
    <Router basename="/ABB-MobileDistribution">
      <Routes>
        { <Route path="/" element={<PolicyList />} />}
        <Route path="/view/:appName/:fileName" element={<PolicyViewer />} />
        <Route path="/CodeOfConduct" element={<CoCPage />} />
        <Route
          path="/acknowledgments/r2r-academy"
          element={
            <PolicyViewer
              defaultAppName="r2r-academy"
              defaultFileName="index.md"
              basePath="acknowledgments"
            />
          }
        />
        <Route
          path="/view/acknowledgments/r2r-academy/:fileName"
          element={<PolicyViewer defaultAppName="r2r-academy" basePath="acknowledgments" />}
        />
        <Route
          path="/Closer"
          element={<Closer />}
        />
      </Routes>
    </Router>
  );
}

export default App;
