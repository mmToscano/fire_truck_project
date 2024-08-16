import "./styles.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function AvailableShipmentRow({rowInfo}) {
    return(
        <div className="mainAvailableShipmentRow">
            <h3>{rowInfo.vehicle}</h3>
            <h3>{rowInfo.origin}</h3>
            <h3>{rowInfo.destiny}</h3>
            <div className="lastRow">
                <h3>{rowInfo.distance}km</h3>
                <FontAwesomeIcon className="arrowIcon" icon={faArrowRight}/>
            </div>
        </div>
    )
}

export default AvailableShipmentRow;