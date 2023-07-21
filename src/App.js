import './App.css';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import User from './views/User';
import UserDetails from './views/UserDetails';
import UserCard from './views/UserCard';
import Page404 from './views/Page404';

function App() {
  return (
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/UserDetails/:id" element={<UserDetails />} />
        <Route path="/UserCard" element={<UserCard />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
