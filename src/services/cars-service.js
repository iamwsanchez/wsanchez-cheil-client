import httpCommon from "./http-common";

const CarsService = {
    getAll() {
        return httpCommon.get("/cars/readAll");
    }
};

export default CarsService;