import React, { useState } from 'react';
import Misfilling from "./Misfilling.jsx";
import Successfilling from "./Successfilling.jsx";
import Styles from "../Styles/Form.module.css";

const Form = () => {
    const [error, setError] = useState(() => ({
        character: false,
        franchise: false
    }));

    const [answer, setAnswer] = useState(() => ({
        character: "",
        franchise: ""
    }));

    const handleSubmit = (e) => {
        e.preventDefault();
        const characterValue = e.target[0].value.trim();
        const franchiseValue = e.target[1].value.trim();

        const characterIsValid = characterValue.length >= 4 && !characterValue.startsWith(" ");
        const franchiseIsValid = franchiseValue.length >= 7 && !franchiseValue.startsWith(" ");

        setError({
            character: !characterIsValid,
            franchise: !franchiseIsValid
        });

        if (characterIsValid && franchiseIsValid) {
            setAnswer({
                character: characterValue,
                franchise: franchiseValue
            });
        }
    };

    return (
        <div className={Styles['form-container']}>
            <form onSubmit={handleSubmit}>
                <label for="favorite_character">Personaje Favorito?</label>
                <input id="favorite_character" type="text" placeholder="Escribe Sin miedo al Exito" />

                <label for="favorite_franchise">Fraquicia Favorita?</label>
                <input id="favorite_franchise" type="text" placeholder="No te reprimas sacalo desde dentro!" />

                <button type="submit">Enviar</button>
            </form>
            {(error.character || error.franchise) && <Misfilling Character={error.character} Franchise={error.franchise} />}
            {!(error.character || error.franchise) && answer.character && answer.franchise && <Successfilling Character_name={answer.character} Franchise_name={answer.franchise} />}
        </div>
    );
};

export default Form;