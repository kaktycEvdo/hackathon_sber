import Modal from './components/UI/Modal/Modal'
import { useState } from 'react';
import { faDownload, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from "./components/UI/Header/Header"
import { Link, Outlet } from 'react-router-dom';
import SideMenu from './components/UI/SideMenu/SideMenu';
import chatlogo from './assets/gigachat_logo.jpg';

function App({logo}) {
    let [opened, setOpened] = useState(false);
    let [slided, setSlided] = useState(false);

    return (
        <>
            <Header
            logo = {logo}
            lk_href = {"chat/"}
            lk_icon = {<img src={chatlogo}/>}
            class = {"sber_header"}
            >
                <button className='gigachat-logo' onClick={() => setSlided(slided ? false : true)}></button>
            </Header>
            <main>
                <Outlet/>
            </main>
            <SideMenu slided = {slided}>
                    <Link to={"/"}>Home</Link>
                </SideMenu>
        </>
    );
}

export default App;