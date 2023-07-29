import React, { useEffect, useState } from 'react'
import VehicleService from '../services/vehicle-service'

export const Home = () => {
    const [loading, setLoading] = useState(false)
    const [dataStd, setDataStd] = useState(null)
    const [dataMean, setDataMean] = useState(null)
  
    useEffect(() => {
        setLoading(true)
        VehicleService.getVehicleStd()
            .then(({ data }) => {
              setDataStd(data)
            })
            .catch(err => console.dir(err))
            .finally(() => setLoading(false))   
            
            
          setLoading(true) 
          VehicleService.getVehicleMean()
            .then(({ data }) => {
              setDataMean(data)
            })
            .catch(err => console.dir(err))
    }, [])

    return (  
      <section className="App">
        <div className='table-container-h'>
          <table className="highlight responsive-table">
            <thead>
              <tr><th colSpan={19}><h5><b>Desviación Estandar</b></h5> {loading && "Cargando..."}</th></tr>
              <tr>
                <th>class</th>
                <th>compactness</th>
                <th>circularity</th>
                <th>distance_circularity</th>
                <th>radius_ratio</th>
                <th>pr_axis_aspect_ratio</th>
                <th>max_length_aspect_ratio</th>
                <th>scatter_ratio</th>
                <th>elongatedness</th>
                <th>pr_axis_rectangularity</th>
                <th>max_length_rectangularity</th>
                <th>scaled_variance</th>
                <th>scaled_variance_1</th>
                <th>scaled_radius_of_gyration</th>
                <th>scaled_radius_of_gyration_1</th>
                <th>skewness_about</th>
                <th>skewness_about_1</th>
                <th>skewness_about_2</th>
                <th>hollows_ratio</th>
              </tr>
            </thead>
            <tbody>
              {!!dataStd && dataStd.length > 0 ? dataStd.map((ds) => {
                  return(
                    <tr>
                      <td>{ds.class}</td>
                      <td>{ds.compactness}</td>
                      <td>{ds.circularity}</td>
                      <td>{ds.distance_circularity}</td>
                      <td>{ds.radius_ratio}</td>
                      <td>{ds.pr_axis_aspect_ratio}</td>
                      <td>{ds.max_length_aspect_ratio}</td>
                      <td>{ds.scatter_ratio}</td>
                      <td>{ds.elongatedness}</td>
                      <td>{ds.pr_axis_rectangularity}</td>
                      <td>{ds.max_length_rectangularity}</td>
                      <td>{ds.scaled_variance}</td>
                      <td>{ds.scaled_variance_1}</td>
                      <td>{ds.scaled_radius_of_gyration}</td>
                      <td>{ds.scaled_radius_of_gyration_1}</td>
                      <td>{ds.skewness_about}</td>
                      <td>{ds.skewness_about_1}</td>
                      <td>{ds.skewness_about_2}</td>
                      <td>{ds.hollows_ratio}</td>
                    </tr>
                  )   
                }):(<tr><td colSpan={9}>API no ha retornado ningún auto, intentalo nuevamente.</td></tr>)
              }
            </tbody>
          </table> 
        </div>        
        <div className='table-container-h'>
          <table className="highlight responsive-table">
            <thead>
              <tr><th colSpan={19}><h5><b>Promedio</b></h5> {loading && "Cargando..."}</th></tr>
              <tr>
                <th>class</th>
                <th>compactness</th>
                <th>circularity</th>
                <th>distance_circularity</th>
                <th>radius_ratio</th>
                <th>pr_axis_aspect_ratio</th>
                <th>max_length_aspect_ratio</th>
                <th>scatter_ratio</th>
                <th>elongatedness</th>
                <th>pr_axis_rectangularity</th>
                <th>max_length_rectangularity</th>
                <th>scaled_variance</th>
                <th>scaled_variance_1</th>
                <th>scaled_radius_of_gyration</th>
                <th>scaled_radius_of_gyration_1</th>
                <th>skewness_about</th>
                <th>skewness_about_1</th>
                <th>skewness_about_2</th>
                <th>hollows_ratio</th>
              </tr>
            </thead>
            <tbody>
              {!!dataMean && dataMean.length > 0 ? dataMean.map((dm) => {
                  return(
                    <tr>
                      <td>{dm.class}</td>
                      <td>{dm.compactness}</td>
                      <td>{dm.circularity}</td>
                      <td>{dm.distance_circularity}</td>
                      <td>{dm.radius_ratio}</td>
                      <td>{dm.pr_axis_aspect_ratio}</td>
                      <td>{dm.max_length_aspect_ratio}</td>
                      <td>{dm.scatter_ratio}</td>
                      <td>{dm.elongatedness}</td>
                      <td>{dm.pr_axis_rectangularity}</td>
                      <td>{dm.max_length_rectangularity}</td>
                      <td>{dm.scaled_variance}</td>
                      <td>{dm.scaled_variance_1}</td>
                      <td>{dm.scaled_radius_of_gyration}</td>
                      <td>{dm.scaled_radius_of_gyration_1}</td>
                      <td>{dm.skewness_about}</td>
                      <td>{dm.skewness_about_1}</td>
                      <td>{dm.skewness_about_2}</td>
                      <td>{dm.hollows_ratio}</td>
                    </tr>
                  )   
                }):(<tr><td colSpan={9}>API no ha retornado ningún auto, intentalo nuevamente.</td></tr>)
              }
            </tbody>
          </table> 
        </div>
      </section>
    )
}