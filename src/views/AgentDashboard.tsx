import AgentNavbar from '../components/AgentNavbar';
import AgentRoutes from '../routes/AgentRoutes';

const AgentDashboard = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-8 py-12">
      <AgentNavbar />
      <AgentRoutes />
    </main>
  );
};

export default AgentDashboard;
