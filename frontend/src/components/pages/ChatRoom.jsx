import axios from "axios";
import { useState } from "react";

function ChatRoom({SERVER_HOST}) {
    let [query, setQuery] = useState();
    let [botResponce, setBotResponce] = useState();

    async function sendQuery(){
        await axios.post(SERVER_HOST+"gigachat/", {data: query, headers: {'Content-Type': 'application/json'}})
        .then(responce => {console.log(responce.data); setBotResponce(responce.data)});
    }

    return ( <>
    <textarea name="responce" id="gogo" cols="30" rows="10" disabled value={botResponce}/>
    <textarea name="query" id="ohsh" cols="30" rows="10" onChange={(e) => setQuery(e.target.value)} value={query}/>
    <button onClick={() => query ? sendQuery() : null}>Отправить</button>
    </> );
}

export default ChatRoom;