import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react'
import './App.css'
// importing sidebar components by its path
import Sidebar from '../src/components/sidebar/Sidebar'
//importing header components by its path
import Header from '../src/components/header/Header'
// importing content section
import Dashboard from './components/content/Dashboard';
import Scheduler1 from './components/content/Scheduler1';
import Patients from './components/content/Patients';



function App() {
  const [option, setoption] = useState("Dashboard")
  const getOption=(item)=>{
    setoption(item);
  }
  return (
    <div className="App">
      <div className="container-fluid bg-sucss">
        <div className="row">
          {/* sidebar section */}
          <div className="sidebar col-md-2 col-12 d-flex justify-content-md-end justify-content-center">
            <Sidebar getOption={getOption} />
          </div>
          <div className="rightside col-md-10 flex-column">
            {/* header section */}
              <div className="row header">
                <Header />
              </div>
              {/* content section */}
              <div className="row content">
                {(option==="Dashboard" && <Dashboard/>)}
                {(option==="Scheduler" && <Scheduler1/>)}
                {(option==="Patients" && <Patients/>)}
                

                
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
