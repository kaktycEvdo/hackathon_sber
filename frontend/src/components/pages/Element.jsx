import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component, useState } from "react";
import { useParams } from "react-router-dom";

function Element({data, logo}) {
    let [disabled, setDisabled] = useState(true);
    let params = useParams();
    console.log(data)
    return (
        <div className='main_form'>
            <div className='form_logo'>{logo}</div>
            {data[params.formID].map((object, index) => {
                console.log()
                return <div key={index}>
                        <div className={object['dtype'] === 'file' ? "file_input" : null}>
                            <label htmlFor={object['dtype']+index}>
                                {Object.keys(object)[0]}
                                {object['dtype'] === 'file' ? <FontAwesomeIcon icon={faDownload}/> : null}
                            </label>
                        </div>
                        <br/>
                        {object['dtype'] === 'textarea'
                        ? <textarea disabled={disabled} id={object['dtype']+index} hidden={object['dtype'] === 'file' ? true : false}
                        type={object['dtype']} defaultValue={object['dtype'] === 'file' ? '' : Object.values(object)[0]}/>
                        : <input disabled={disabled} id={object['dtype']+index} hidden={object['dtype'] === 'file' ? true : false}
                        type={object['dtype']} defaultValue={object['dtype'] === 'file' ? '' : Object.values(object)[0]}/>}
                    </div>
            })}
        <button onClick={() => {() => setDisabled(false)}}>Редактировать</button>
        <button>Далее</button>
        </div>
    )
}

export default Element;