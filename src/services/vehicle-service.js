import httpCommon from "./http-common";

const VehicleService = {
    getVehicleStd() {
        let data = httpCommon.get("/vehicles/getVehicleStd");
        console.log("getVehicleStd: ", data);
        return data;
    },
    getVehicleMean() {
        let data = httpCommon.get("/vehicles/getVehicleMean");
        console.log("getVehicleMean: ", data);
        return data;
    }
};

export default VehicleService;