import './Input.css'
import Send from './Send.jsx'


const Input = ({accion})=>{

    return(
        <div className='input'>
            <input className='input-mjs' type="text" />
            <Send 
            accion={accion}
            />
        </div>
    )
}


export default Input