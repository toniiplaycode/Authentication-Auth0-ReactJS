import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0(); // loginWithRedirect là hàm build sẵn để login của auth0

    return(
        <button className="btn btn-success" onClick={()=>loginWithRedirect()}>
            Log in
        </button>
    )
}

export default LoginButton;