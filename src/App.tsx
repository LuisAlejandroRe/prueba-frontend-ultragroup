import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import WelcomeView from './views/WelcomeView';
import TravelerDashboard from './views/TravelerDashboard';
import AgentDashboard from './views/AgentDashboard';
import NotFound from './views/NotFound';

function App() {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<WelcomeView />} />
        <Route path="/traveler-dashboard/*" element={<TravelerDashboard />} />
        <Route path="/agent-dashboard/*" element={<AgentDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
