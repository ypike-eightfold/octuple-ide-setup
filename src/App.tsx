// React is used via JSX transform
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CandidateDetails } from './pages/CandidateDetails';
import { PeoplePage } from './pages/People/PeoplePage';
import { ProfilePage } from './pages/Profile/ProfilePage';

/**
 * Main App with routing for multiple example pages
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/people" replace />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/candidates/details" element={<CandidateDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
