import { useState } from 'react'
import sberLogo from './assets/sber_logo_full.svg'
import Header from './components/UI/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import Main from './components/Main'

function App() {
	return(
		<>

		<main>
			<Main logo = {<img src={sberLogo}/>} lk_href = {"lk/"}/>
		</main>
		</>
	)
}

export default App
