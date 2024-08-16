import AvailableShipmentRow from "../../components/AvailableShipmentRow/AvailableShipmentRow";
import HeaderRow from "../../components/HeaderRow/HeaderRow";
import "./styles.css"

function AvailableShipments() {

    const headerRowColumns = [
        {id:0, name: "Veículo"},
        {id: 1, name: "Origem"},
        {id: 2, name: "Destino"},
        {id: 3, name: "Distância"}
    ]

    const rows = [
        {id:0, vehicle: "Caminhão", origin: "São josé do vale do rio preto,MG", destiny: "São Paulo,SP", distance: 587.5},
        {id:1, vehicle: "Furgão", origin: "Uberlândia,MG", destiny: "São Paulo,SP", distance: 587.5},
        {id:2, vehicle: "Caminhonete", origin: "Uberlândia,MG", destiny: "São Paulo,SP", distance: 587.5},
        {id:3, vehicle: "Furgão", origin: "Uberlândia,MG", destiny: "São Paulo,SP", distance: 587.5},
        {id:4, vehicle: "Caminhonete", origin: "Uberlândia,MG", destiny: "São Paulo,SP", distance: 587.5},
        {id:5, vehicle: "Caminhonete", origin: "Uberlândia,MG", destiny: "São Paulo,SP", distance: 587.5},
        {id:6, vehicle: "Caminhonete", origin: "Uberlândia,MG", destiny: "São Paulo,SP", distance: 587.5},
        {id:7, vehicle: "Caminhonete", origin: "Uberlândia,MG", destiny: "São Paulo,SP", distance: 587.5},
        {id:8, vehicle: "Caminhonete", origin: "Uberlândia,MG", destiny: "São Paulo,SP", distance: 587.5},
        {id:9, vehicle: "Caminhonete", origin: "Uberlândia,MG", destiny: "São Paulo,SP", distance: 587.5},
        {id:10, vehicle: "Caminhonete", origin: "Uberlândia,MG", destiny: "São Paulo,SP", distance: 587.5},
        {id:11, vehicle: "Caminhonete", origin: "Uberlândia,MG", destiny: "São Paulo,SP", distance: 587.5},
    ]

    return(
        <div className="mainAvailableShipments">
            <HeaderRow columns={headerRowColumns}/>
            {rows.map((row) => (
                <AvailableShipmentRow rowInfo={row} key={row.id}/>
            ))}
            
        </div>
    )
}

export default AvailableShipments;