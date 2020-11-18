import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link,useParams} from "react-router-dom";
import history from './history.js';
import LoginPage from './pages/login.js';
import DashboardBpba from './pages/dashboard-BPBA.js';
import DashboardBpbaPcu from './pages/dashboard-BPBA-PCU.js';
import DashboardBpbaPba from './pages/dashboard-BPBA-PBA.js';
import DashboardBpbaPbam from './pages/dashboard-BPBA-PBAM.js';
import DashboardPbam from '../src/pages/dashboard-PBAM';
import DashboardPbamPba from '../src/pages/dashboard-PBAM-PBA.js';
import DashboardPbamLaporan from '../src/pages/dashboard-PBAM-Laporan.js';
import DashboardPbamFeedback from '../src/pages/dashboard-PBAM-Feedback.js';

class LoginRole extends React.Component {
  render() {
    return(
      <Router history={history}>
      
       <Route path="/" component={LoginPage} exact/>
       <Route path="/bpba" exact component={DashboardBpba}/>
       <Route path="/bpbapcu" component={DashboardBpbaPcu}/>
       <Route path="/bpbapba" component={DashboardBpbaPba}/>
       <Route path="/bpbapbam" component={DashboardBpbaPbam}/>
       <Route path="/pbam" component={DashboardPbam}/>
       <Route path="/pbampba" component={DashboardPbamPba}/>
       <Route path="/pbamlaporan" component={DashboardPbamLaporan}/>
       <Route path="/pbamfeedback" component={DashboardPbamFeedback}/>
       
     </Router>
    );
  }
}

function App() {
  return (
    <LoginRole />
  );
}

export default App;
