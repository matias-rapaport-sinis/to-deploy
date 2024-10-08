import { useState } from "react";


export default function SeleccionUnica({ nombre, opciones, index, handleChangeAdd, handleChangeRemove }) {

    const [optionSelect, setOptionSelect] = useState("");

    const handleOnChange = (key, value) => {
        handleChangeRemove(optionSelect);
        handleChangeAdd({ key, value });
        setOptionSelect(key);
    }

    return (
        <div className="container" key={`seleccionUnica-${index}`}>
            <div className="row">
                <div className="col">
                    <h4>{nombre}</h4>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex flex-column" >
                    {opciones["$values"].map((valor, index) => (
                        <label key={`${nombre}-${index}`}>
                            <input type="radio"  onChange={()=>(handleOnChange(valor.id, valor.texto))} name={`grupo-${opciones["$id"]}`} value={valor.texto} />
                            {valor.texto}
                        </label>
                    ))}
                </div>
            </div>

        </div>
    )
}