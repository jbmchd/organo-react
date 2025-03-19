import "./CampoTexto.css";

const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`;

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input 
                type="text"
                placeholder={placeholderModificada} 
                required={props.obrigatorio} 
                value = {props.valor}
                onChange = {aoDigitado}
            />
        </div>  
    )
}

export default CampoTexto;