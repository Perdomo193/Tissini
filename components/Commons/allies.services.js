const server = "http://40.84.223.108:4000" //puerto

// const server = "http://localhost:4000"

const services = {
    "LOGIN": server+"/login",
    "LOAD_ALL_PAYING": server+"/loadAllyPaying",
    "LOAD_ALL_ALLIES": server+"/loadAllies",
    "CREATE_PAYING": server+"/createPaying",
    "DELETE_PAYING": server+"/deletePaying",
    "LOAD_PAYING": server+"/loadPaying",
    "LOAD_ALL_RETENTION": server+"/loadAllyRetention",
    "CREATE_RETENTION": server+"/createRetention",
    "DELETE_RETENTION": server+"/deleteRetention",
    "LOAD_RETENTION": server+"/loadRetention",
    "GET_ALL_ALLIES": server+"/alliesget",
    "GET_ALLY_ONLY": server+"/getAllyOnly",
    "UPDATE_ALLY_ONLY": server+"/updateAllyOnly"
};
 
module.exports = {
    getServices() {
        return services;
    }
}