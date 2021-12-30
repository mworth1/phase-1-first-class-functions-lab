const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    const firstTwoDrivers = drivers.slice(0, 2);
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function(drivers) {
    const lastTwoDrivers = drivers.slice(2);
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function quintuple(fare) {
        return fare*5
    }
}

const fareDoubler = function(createFareMultiplier) {
    return createFareMultiplier*2;
}

const fareTripler = function(createFareMultiplier) {
    return createFareMultiplier*3;
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnLastTwoDrivers(drivers);
}