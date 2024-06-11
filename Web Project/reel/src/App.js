import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import NavigationBar from './components/navigationBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Onboarding/Home';
import Login from './components/Onboarding/Login';
import Registration from './components/Onboarding/Registration';
import Wall from './components/Commiunity/Wall';
import Profile from './components/Profile Coms/Profile';
import Jobs from './components/Jobs_Category/jobs';
import CreatePost from './components/Create/CreatePost';
import CreateJob from './components/Create/CreateJob';
import  Bio from './components/Profile Coms/Bio';

function App() {
  return (
    <>
     
      <Router>
        <NavigationBar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Reg" element={<Registration />} />
        <Route path="/communi" element={<Wall />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/createPost" element={<CreatePost/>}/>
        <Route path="/postJob" element={<CreateJob/>}/>
        <Route path="/editBio" element={<Bio/>}/>
        <Route path="/getBio" element={<Bio/>}/>
      </Routes>
      </Router>
      
    </>
  );
}

export default App;
