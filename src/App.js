import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  const {isAuthenticated} = useAuth0();

  return (
    <div className='container mt-4 text-center'>
      <h1>Login/Logout with Auth0</h1>
      {isAuthenticated
      ?
      <LogoutButton/>
      :
      <LoginButton/>
      }
      <Profile />
    </div>
  );
}

export default App;
