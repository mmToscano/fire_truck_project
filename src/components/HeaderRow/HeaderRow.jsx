import "./styles.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function HeaderRow({ columns }) {
    return(
        <div className="mainHeaderRow">
            {columns.map((column) => (
                <div className="column" key={column.id}>
                    <h3>{column.name}</h3>
                    <FontAwesomeIcon icon={faAngleDown}/>
                </div>
            ))}
        </div>
    )
}

export default HeaderRow;