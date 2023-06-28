import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout } = useAuth0(); // logout là hàm build sẵn để logout của auth0

    return(
        <button className="btn btn-danger" onClick={()=>logout()}>
            Log out
        </button>
    )
}

export default LogoutButton;