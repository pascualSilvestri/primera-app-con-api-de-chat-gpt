import './Chat.css'
import Input from './Input.jsx'
import ContenedorConversacion from './ContenedorConversacion'
import { useEffect, useState } from 'react'


const api_key_gpt = import.meta.env.VITE_OPENAI_API_KEY

const Chat = ()=>{
    const [mensajes,setMensajes] = useState([])
    const [enviando,setEnviando] = useState(true)

    useEffect(()=>{
        if(mensajes.length>0&& enviando ){
            respuesta(mensajes[mensajes.length-1][1])
        }
        
    },[mensajes])

    function ingresoMensaje(role,mensaje) {
        let data = [role,mensaje]
        setMensajes((prevMensajes) => [...prevMensajes, data]);
        setEnviando(true)
    }

    async function respuesta(prompt){
        

        console.log(prompt)
        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(api_key_gpt)
            },
            body: JSON.stringify({
                'model': 'gpt-3.5-turbo',
                'messages': [{ role: 'user', content: prompt }],
                'temperature': 0.1,
                'max_tokens': 20,
                'top_p': 1,
                'frequency_penalty': 0,
                'presence_penalty': 0.5,
                'stop': [''],
            })
        };
        try{
            fetch('https://api.openai.com/v1/chat/completions', request)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                let dat = ['assistant', data['choices'][0].message.role]
                if(enviando){
                    setMensajes((prevMensajes) => [...prevMensajes, dat]);
                    setEnviando(false)
                }
                
            })
            .catch(err => {
                console.log("Ran out of tokens for today! Try again tomorrow!"+err);
            });
        }catch(e){
            console.log(e)
        }finally{
            setEnviando(false)
        }
        
    }


    return(
        <div className="chat">
            <ContenedorConversacion mensajes={mensajes}/>
            <Input 
            accion={ingresoMensaje}
            />
        </div>
    )
}


export default Chat