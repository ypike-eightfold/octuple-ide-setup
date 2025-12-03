// React is used via JSX transform
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import { CandidateDetails } from './pages/CandidateDetails';
import { PeoplePage } from './pages/People/PeoplePage';
import { ProfilePage } from './pages/Profile/ProfilePage';

/**
 * Main App with routing for multiple example pages
 * Uses HashRouter for GitHub Pages compatibility
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/candidates/details" element={<CandidateDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
