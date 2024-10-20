/* Your Code Here */
function createEmployeeRecord(array0) {
    let newObj = {
        firstName: array0[0],
        familyName: array0[1],
        title: array0[2],
        payPerHour: array0[3],
        timeInEvents: new Array(),
        timeOutEvents: new Array()
    }
    return newObj;
}

function createEmployeeRecords(array1) {
    let array2 = new Array();
    for (let element0 of array1) {
        array2.push(createEmployeeRecord(element0));
    }
    return array2
}

function createTimeInEvent(string0) {
    const date = string0.slice(0, 10);
    const time = parseInt(string0.slice(11, 15), 10);
    const newObj0 = {
        type: "TimeIn",
        hour: time,
        date: date,
    }
    this.timeInEvents.push(newObj0);
    return this
}

function createTimeOutEvent(string1) {
    const date = string1.slice(0, 10);
    const time = parseInt(string1.slice(11, 15), 10);
    const newObj1 = {
        type: "TimeOut",
        hour: time,
        date: date,
    }

    this.timeOutEvents.push(newObj1);
    return this
}

function hoursWorkedOnDate(string2) {
    const newArray0 = new Array();
    const newArray2 = new Array();

    const findTime = (newArray) => {
        for (let element0 of newArray) {
            const newArray1 = Object.values(element0);
            if (newArray1[2] === string2) {
                return newArray1[1];
            }
        }
    }

    newArray2.push(findTime(this.timeInEvents), findTime(this.timeOutEvents))
    const hoursWorked = (array0) => {
        return array0[1] - array0[0];
    }
    return Math.floor(hoursWorked(newArray2) / 100);
}

function wagesEarnedOnDate(string3) {
    return hoursWorkedOnDate.call(this, string3) * this.payPerHour;
}

function findEmployeeByFirstName(array3, firstName) {
    for (let element0 of array3) {
        if (element0.firstName === firstName) {
            return element0;
        } else return undefined;
    }
}

function calculatePayroll(array4) {
    let newArray5 = new Array ();
    array4.forEach(element => {
        newArray5.push(allWagesFor.call(element));
    });

    let newArray7 = newArray5.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
    return newArray7;
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
createTimeInEvent.call(cRecord, "2044-03-15 0900")
createTimeOutEvent.call(cRecord, "2044-03-15 1100")
console.log(wagesEarnedOnDate.call(cRecord, "2044-03-15"));