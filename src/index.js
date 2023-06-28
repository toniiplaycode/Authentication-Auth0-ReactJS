import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
// import Auth0 để Auth0Provider bọc hết ứng dụng, và có 3 props tương ứng, đó là setup chứ các components con không dùng các props đó
import { Auth0Provider } from '@auth0/auth0-react'; 

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri = {window.location.origin} // dùng để chuyển hướng trang mặc định về sau khi đăng nhập, đăng xuất xong, phải là "redirectUri" chứ "redirectUri" là sai
  >
    <App />
  </Auth0Provider>
);
