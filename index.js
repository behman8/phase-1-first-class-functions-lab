const returnFirstTwoDrivers = drivers => {return drivers.slice(0,2)};

const returnLastTwoDrivers = drivers => {return drivers.slice(2)};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function theMultiplier(fare) {
        return fare * integer;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, fn) {
    return fn(arrayOfDrivers);
}