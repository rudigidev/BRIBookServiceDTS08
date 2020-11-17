import React from 'react';
import LoginPage from './pages/login';
import DashboardBpba from './pages/dashboard-BPBA.js';
import DashboardPbam from '../src/pages/dashboard-PBAM';
import DashboardPbamPba from '../src/pages/dashboard-PBAM-PBA.js';
import DashboardPbamLaporan from '../src/pages/dashboard-PBAM-Laporan.js';
import DashboardPbamFeedback from '../src/pages/dashboard-PBAM-Feedback.js';


function App() {
  return (
    // <LoginPage />
    // <DashboardBpba />
    // <DashboardPbam />
    // <DashboardPbamPba />
    // <DashboardPbamLaporan />
    <DashboardPbamFeedback />
  );
}

export default App;
