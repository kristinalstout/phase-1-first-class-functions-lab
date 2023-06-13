// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
};
returnFirstTwoDrivers(["Antonia","Nuru","Amari","Mo"]);

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(2,drivers.length);
}
returnLastTwoDrivers(["Antonia","Nuru","Amari","Mo"]);

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
    return function(fare){
        return multiplier * fare;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers,type){
    return type(drivers);
}