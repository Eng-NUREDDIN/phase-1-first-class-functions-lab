// Code your solution in this file!
const returnFirstTwoDrivers = (driversName)=>  driversName.slice(0,2)
const returnLastTwoDrivers=(driversName)=> driversName.slice(-2)
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]
function createFareMultiplier(fare){
    return  (ride )=> fare*ride ;
}
const fareDoubler=createFareMultiplier(2)
const fareTripler=createFareMultiplier(3)
function selectDifferentDrivers(driversList,fn){
    return fn(driversList);
}