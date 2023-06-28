import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

const Profile = () => {
    const {user, isAuthenticated} = useAuth0(); // user là biến có sẵn của auth0, dùng để show dữ liệu của account đang login
    console.log(user);

    return (
        isAuthenticated &&
        <div>
            <img src={user.picture} style={{with: "100px", borderRadius: "5px", margin: "10px 0"}}/>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            <JSONPretty data={user} />
        </div>
    )
}

export default Profile;