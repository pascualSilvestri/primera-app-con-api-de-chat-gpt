import './ContenedorConversacion.css'
import Conversacion from './Conversacion'

const ContenedorConversacion = ({ mensajes }) => {
    return (
        <div className='contenedorConversacion'>
            <div className='pizarra'>

                {mensajes.map((element) => (
                    <Conversacion
                        rol={element[0]}
                        mensaje={element[1]}
                        key={Math.random()}
                    />
                ))}


                {/* {mensajes ? mensajes.forEach((msj)=>{
                return (
                <Conversacion 
                userClass={'conversacionUser'}
                mensaje={{msj}}
                key={0}
                />
                )
            }
            ): (<h1>cargando...</h1>)
        } */}

            </div>
        </div>
    )
}

export default ContenedorConversacion