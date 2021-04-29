const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = () => drivers.slice(0, 2)
const returnLastTwoDrivers = () => drivers.slice(2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = (multiplier) => {
    const fareCalculater = (fare) => fare * multiplier
        return fareCalculater
} 



const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


const selectDifferentDrivers = (array, callback) => {
    return callback(array)
}
