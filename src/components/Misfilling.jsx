import Styles from '../Styles/Misfilling.module.css';

const Error = ({ Character, Franchise }) => {
    return (
        <div className={Styles['misfilling-container']}>
            {Character && <p>El personaje favorito ingresado no es válido.</p>}
            {Franchise && <p>La franquicia favorita ingresada no es válida.</p>}
        </div>
    );
};

export default Error;