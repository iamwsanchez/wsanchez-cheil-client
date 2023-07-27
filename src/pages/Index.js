import React, { useEffect, useState } from 'react'
import CarsService from '../services/cars-service'

export const Home = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
  
    useEffect(() => {
        setLoading(true)
        CarsService.getAll()
            .then(({ data }) => {
              setData(data)
            })
            .catch(err => console.dir(err))
            .finally(() => setLoading(false))
    }, [])

    return (  
      <section className="App">
        <table className="highlight responsive-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th>Selling price</th>
              <th>Present price</th>
              <th>Kms Driven</th>
              <th>Fuel type</th>
              <th>Seller type</th>
              <th>Transmission</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            {loading && "Cargando..."}
            {!!data && data.length > 0 ? data.map((car) => {
                return(
                  <tr>
                    <td>{car.Car_Name}</td>
                    <td>{car.Year}</td>
                    <td>{car.Selling_Price}</td>
                    <td>{car.Present_Price}</td>
                    <td>{car.Kms_Driven}</td>
                    <td>{car.Fuel_Type}</td>
                    <td>{car.Seller_Type}</td>
                    <td>{car.Transmission}</td>
                    <td>{car.Owner}</td>
                  </tr>
                )   
              }):(<tr><td colSpan={9}>API no ha retornado ningún auto, intentalo nuevamente.</td></tr>)
            }
          </tbody>
        </table> 
        
      </section>
    )
}