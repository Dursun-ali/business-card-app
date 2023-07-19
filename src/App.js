import './App.css';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import User from './views/User';
import UserDetails from './views/UserDetails';
import UserCard from './views/UserCard';

function App() {
  return (
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/UserDetails/:id" element={<UserDetails />} />
        <Route path="/UserCard" element={<UserCard />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
