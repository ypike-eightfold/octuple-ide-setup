// React is used via JSX transform
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';

// Talent Management
import { PeoplePage } from './pages/TalentManagement/People/PeoplePage';
import { ProfilePage } from './pages/TalentManagement/Profile/ProfilePage';

// Talent Acquisition
import { CandidateDetails } from './pages/TalentAcquisition/CandidateDetails';

/**
 * Main App with routing for multiple example pages
 * Uses HashRouter for GitHub Pages compatibility
 * 
 * Pages are organized by Eightfold product line:
 * - TalentManagement: Employee profiles, people search, org charts
 * - TalentAcquisition: Candidate details, job postings
 * - PersonalCareerSite: Career pages, job search (coming soon)
 * - WorkforceExchange: Marketplace features (coming soon)
 * - AIAgents: AI-powered features (coming soon)
 * - ResourceManagement: Resource allocation (coming soon)
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />
        
        {/* Talent Management */}
        <Route path="/talent-management/people" element={<PeoplePage />} />
        <Route path="/talent-management/profile" element={<ProfilePage />} />
        
        {/* Talent Acquisition */}
        <Route path="/talent-acquisition/candidates" element={<CandidateDetails />} />
        
        {/* Legacy routes for backwards compatibility */}
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/candidates/details" element={<CandidateDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
