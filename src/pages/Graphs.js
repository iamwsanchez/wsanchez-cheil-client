import React, { useEffect, useState } from 'react'
import AvgChart from '../components/AvgChart'
import VehicleService from '../services/vehicle-service'

export const Graphs = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const properties = [
        "compactness",
        "circularity",
        "distance_circularity",
        "radius_ratio",
        "pr_axis_aspect_ratio",
        "max_length_aspect_ratio",
        "scatter_ratio",
        "elongatedness",
        "pr_axis_rectangularity",
        "max_length_rectangularity",
        "scaled_variance",
        "scaled_variance_1",
        "scaled_radius_of_gyration",
        "scaled_radius_of_gyration_1",
        "skewness_about",
        "skewness_about_1",
        "skewness_about_2",
        "hollows_ratio"
    ];
    useEffect(() => {
        setLoading(true)
        VehicleService.getVehicleMean()
            .then(({ data }) => {
              setData(data)
            })
            .catch(err => console.dir(err))
            .finally(() => setLoading(false))
    }, [])

    return(
        <>
            <div id="charts-container"  className="row">
                <p>{loading && "Cargando..."}</p>
                {!!data && data.length > 0 ? properties.map((prop) => {
                    let keys = [];
                    let values = [];
                    data.forEach(item =>{
                                keys.push(item["class"]);
                                values.push(item[prop]);
                                });                    
                        return(
                        <AvgChart propertyName={prop} keys={keys}  values={values}/>
                        )   
                    }):(<p>API no ha retornado ningún auto, intentalo nuevamente.</p>)                      
                }
            </div>
        </>
    )
}

export default Graphs;