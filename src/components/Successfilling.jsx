import Styles from "../Styles/Succesfilling.module.css";

const SuccessFilling = ({ Character_name, Franchise_name }) => {
    return (
        <div className={Styles['successfilling-container']}>
            <h1>Todo Listo Hermano!!!</h1>
            <p>Nombre: {Character_name}</p>
            <p>Franquicia: {Franchise_name}</p>
        </div>
    );
};

export default SuccessFilling;