import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import NavigationBar from './components/navigationBar';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Onboarding/Home';
import Login from './components/Onboarding/Login';
import Registration from './components/Onboarding/Registration';
import Wall from './components/Commiunity/Wall';
import Profile from './components/Profile Coms/Profile';
import Jobs from './components/Jobs_Category/jobs';
import CreatePost from './components/Create/CreatePost';
import CreateJob from './components/Create/CreateJob';
import  Bio from './components/Profile Coms/Bio';
import {jwtDecode} from 'jwt-decode';
import EditProfile from './components/Profile Coms/EditProfile';
import Gallery from './components/Gallery/Gallery';
import Connect from './components/Commiunity/Connect';

function App() {

  const [user, setUser] = useState(null);

 /* useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ token }); // Fetch more user info if needed
    }
  }, []);

  useEffect(() => {
    // Retrieve token from local storage
    const token = localStorage.getItem('token');
    if (token) {
        const userData = {
            id: '66519d232b9cd939fd32fcfd',   // Example userId, ideally should decode from token or fetch from server
            token
        };
        setUser(userData);
    }
}, []);*/

useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
    const decodedToken = jwtDecode(token);
    const userData = {
      id: decodedToken.userId,
      token
    };
    setUser(userData);
  }
}, []);


  return (
    <>
     
      <Router>
        <NavigationBar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login setUser={setUser}/>} />
        <Route path="/Reg" element={<Registration />} />
        <Route path="/communi" element={<Wall />} />
        <Route path="/profile" element={user ?<Profile user={user}/> : <Navigate to="/login" />} />
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/createPost" element={<CreatePost user={user}/>}/>
        <Route path="/postJob" element={<CreateJob/>}/>
        <Route path="/editBio" element={user ? <Bio user={user} /> : <Navigate to="/login" />} />
        <Route path="/getBio" element={user ? <Bio user={user} /> : <Navigate to="/login" />}/>
        <Route path='/editProfile' element={<EditProfile/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/connect' element={<Connect/>}/>
      </Routes>
      </Router>
      
    </>
  );
}

export default App;
