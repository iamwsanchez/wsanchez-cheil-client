import httpCommon from "./http-common";

const CarsService = {
    getAll() {
        let cars = httpCommon.get("/cars/readAll")
        console.log("cars: ", cars)
        return cars;
    }
};

export default CarsService;