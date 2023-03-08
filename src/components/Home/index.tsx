import { useState } from "react"

function Home(){
    const [teste, setTeste] = useState('ola')
    function muda(){
        setTeste(`ola mundo  legal`)
    }
    return(
        <div>
            <h1>{teste}</h1>
            <button onClick={muda}>mudar</button>
        </div>
    )
}
export default Home