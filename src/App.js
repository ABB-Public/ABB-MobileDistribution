import './App.css';
import './styles/abb.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PolicyViewerPage from './pages/PolicyViewer.jsx';
import CodeOfConductPage from './pages/CodeOfConduct.jsx';
import PolicyList from './pages/PolicyList.jsx';
import Closer from './pages/Closer.jsx';

function App() {
  // console.log("App component rendered");
  // console.log("Current location:", window.location.pathname);

  return (
    <Router basename="/ABB-MobileDistribution">
      <Routes>
        {<Route path="/" element={<PolicyList />} />}
        <Route path="/view/:appName/:fileName" element={<PolicyViewerPage />} />
        <Route path="/CodeOfConduct" element={<CodeOfConductPage />} />
        <Route
          path="/view/acknowledgments/r2r-academy"
          element={
            <PolicyViewerPage
              defaultAppName="r2r-academy"
              defaultFileName="index.md"
              basePath="acknowledgments"
            />
          }
        />
        <Route
          path="/view/acknowledgments/r2r-academy/:fileName"
          element={<PolicyViewerPage defaultAppName="r2r-academy" basePath="acknowledgments" />}
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
