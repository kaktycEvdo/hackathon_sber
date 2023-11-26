import Modal from '../UI/Modal/Modal'
import { useState } from 'react';
import { faDownload, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from "../UI/Header/Header"
import { Link } from 'react-router-dom';

function Index({data}) {

    return (
        <>
            <main>
                    {data.map((_, jndex) => {
                        return <div>
                            <Link to={""+(jndex+1)}>
                            {jndex}
                            </Link>
                        </div>
                    })}
            </main>
        </>
    );
}

export default Index;