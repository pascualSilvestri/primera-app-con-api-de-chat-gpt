import './Conversacion.css'



const Conversacion=({rol='none',mensaje})=>{
    return(
        <div className={rol}>
            <h2 className='name-conversacio'>{rol}</h2>
            <div className='conversacion'>
                <p>{mensaje}</p>
            </div>
        </div>
    )
}


export default Conversacion