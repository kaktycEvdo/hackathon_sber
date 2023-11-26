import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Index from './components/pages/Index.jsx';
import App from './App.jsx';
import sberLogo from './assets/sber_logo_full.svg'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Element from './components/pages/Element.jsx';
import axios from "axios";
import config from "../env.js";
import ChatRoom from './components/pages/ChatRoom.jsx';

let data = await axios.get(config.SERVER_HOST)


const router = createBrowserRouter([
  {
    path: "/",
    element: <App logo = {<img src={sberLogo}/>}/>,
    children:[
      {
        path: "",
        element: <Index data = {data.data.responce}/>
      },
      {
        path: ":formID",
        element: <Element logo = {<img src={sberLogo}/>} data = {data.data.responce}/>
      },
      {
        path: "chat",
        element: <ChatRoom SERVER_HOST={config.SERVER_HOST}/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
