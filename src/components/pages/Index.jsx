import Modal from '../UI/Modal/Modal'
import { useState } from 'react';
import { faDownload, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from "../UI/Header/Header"

function Index({data, logo}) {
    let [opened, setOpened] = useState();
    let [disabled, setDisabled] = useState();

    return (
        <>
            <Header
            lk_href = {"lk/"}
            lk_icon = {<FontAwesomeIcon icon={faUser}/>}
            class = {"sber_header"}
            />
            <main>
                <Modal opened={opened} close={() => setOpened(false)}>a</Modal>
                    {data.map((element, jndex) => {
                        return <div className='main_form'>
                            <div className='form_logo'>{logo}</div>
                            {element.map((object, index) => {
                                console.log()
                                return <div key={index}>
                                        <div className={object['dtype'] === 'file' ? "file_input" : null}>
                                            <label htmlFor={object['dtype']+index+""+jndex}>
                                                {Object.keys(object)[0]}
                                                {object['dtype'] === 'file' ? <FontAwesomeIcon icon={faDownload}/> : null}
                                            </label>
                                        </div>
                                        <br/>
                                        {object['dtype'] === 'textarea'
                                        ? <textarea disabled={disabled} id={object['dtype']+index+""+jndex} hidden={object['dtype'] === 'file' ? true : false}
                                        type={object['dtype']} defaultValue={object['dtype'] === 'file' ? '' : Object.values(object)[0]}/>
                                        : <input disabled={disabled} id={object['dtype']+index+""+jndex} hidden={object['dtype'] === 'file' ? true : false}
                                        type={object['dtype']} defaultValue={object['dtype'] === 'file' ? '' : Object.values(object)[0]}/>}
                                    </div>
                            })}
                        <button onClick={() => {() => setDisabled(false)}}>Редактировать</button>
                        <button>Далее</button>
                        </div>
                    })}
            
                <menu>
                    <button onClick={() => this.setState({opened: true})}>Сезам откройся</button>
                </menu>
            </main>
        </>
    );
}

export default Index;