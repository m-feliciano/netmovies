import {ReactComponent as Arrow} from "../../assets/img/arrow.svg";
import "./styles.css"
function Pagination() {
    return (
        <div className="netmovies-pagination-container">
            <div className="netmovies-pagination-box">
                <button className="netmovies-pagination-button" disabled={true}>
                    <Arrow/>
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="netmovies-pagination-button" disabled={false}>
                    <Arrow className="netmovies-flip-horizontal"/>
                </button>
            </div>
        </div>
    );
}

export default Pagination;