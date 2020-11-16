//Usecase1:
{
    const IS_ABSENT = 0
    let empCheck = Math.floor(Math.random() * 10)%2;
    if(empCheck == IS_ABSENT){
        console.log("UC1 - Employee is Absent");
        return;
    }else{
        console.log("UC1 - Employee is Present");
    }
}
//Usecase3:
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_WORKING_HRS = 160;
function getWorkingHrs(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
                return PART_TIME_HRS;
        case IS_FULL_TIME:
                return FULL_TIME_HRS;
        default:
                return 0;
    }
}

//Usecase4:
let empHrs = 0;
for(var i = 0; i < NUM_OF_WORKING_DAYS; i++){
    let empCheck = Math.floor(Math.random() * 10)%3;
    empHrs+= getWorkingHrs(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total hrs: "+empHrs+ " Emp wage is : " + empWage);

//Usecase6:
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empWageArr = new Array();
function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}
while(totalEmpHrs < MAX_WORKING_HRS && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10)%3;
    let empHrs = getWorkingHrs(empCheck);
    totalEmpHrs += empHrs;
}
let employeeWage = calcDailyWage(totalEmpHrs);
console.log("Total hrs: "+totalEmpHrs+" Total Employee Wage is: "+employeeWage);
//Usecase7:
let totalEmpWage = 0;
function sum(dailyWage){
    totalEmpWage +=dailyWage;
}
empWageArr.forEach(sum);
console.log("UC7A Total employee wage using forEach: "+totalEmpWage);

function totalWages(totalWage, dailyWage){
    console.log("TotalWages function: "+totalWage)
    return totalEmpWage + dailyWage;
}
console.log("UC7A: with reduce "+empWageArr.reduce(totalWages,0));
let dailyCounter = 0;
function dayAlongWithWage(dailyWage){
    dailyCounter++;
    return dailyCounter + " = " + dailyWage;
}
let mapDayWithWage = empWageArr.map(dayAlongWithWage);
console.log("7B: Day along with daily wage ");
console.log(mapDayWithWage);

function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWage.filter(fullTimeWage);
console.log("7C Full Time wage : ");
console.log(fullDayWageArr);

console.log("7D Find first occurence of full time wage: "+ mapDayWithWage.find(fullTimeWage));

function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("7E Check all elements have full time wage: "+fullDayWageArr.every(isAllFullTimeWage));

function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("7F Check if any part time wage: "+mapDayWithWage.some(isAnyPartTimeWage));
function totalDaysWorked(numOfDays,dailyWage){
    if(dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("7G Number of days emp worked: "+ empWageArr.reduce(totalDaysWorked,0));
