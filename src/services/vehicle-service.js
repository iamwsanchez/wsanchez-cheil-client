import httpCommon from "./http-common";

const VehicleService = {
    getVehicleStd() {
        let data = httpCommon.get("/vehicles/getVehicleStd");
        return data;
    },
    getVehicleMean() {
        let data = httpCommon.get("/vehicles/getVehicleMean");
        return data;
    }
};

export default VehicleService;