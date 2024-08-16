import AvailableShipments from "../../pages/AvailableShipments/AvailableShipments";
import "./styles.css"

function DisplayArea({ title="Fretes disponíveis" }) {

    return(
        <div className="displayAreaMain">
            <h1>{title}</h1>
            <div className="containerData">
                <AvailableShipments/>
            </div>
        </div>
    )
}

export default DisplayArea;