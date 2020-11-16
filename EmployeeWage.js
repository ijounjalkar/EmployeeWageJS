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
let empHrsMap = new Map();
let empDailyWageMap = new Map();
let empDailyHrsAndWageArr = new Array();
function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}
while(totalEmpHrs < MAX_WORKING_HRS && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10)%3;
    let empHrs = getWorkingHrs(empCheck);
    totalEmpHrs += empHrs;
    empWageArr.push(calcDailyWage(empHrs));//Storing the daily wage in an array
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));//Storing day wise wage in map

     empHrsMap.set(totalWorkingDays, empHrs);
     empDailyHrsAndWageArr.push({
        dayNum : totalWorkingDays,
        dailyHours : empHrs,
        dailyWage: calcDailyWage(empHrs),
        toString(){
            return "\nDay "+ this.dayNum + " => Working Hours is "+
                    this.dailyHours+" And Wage Earned = "+this.dailyWage;
        }
    });
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

console.log("UC8 Emp wage map totalHrs: "+Array.from(empDailyWageMap.values()).reduce(totalWages,0));

const findTotal = (totalVal, dailyVal) => {
    console.log("Findtotal: "+totalVal);
    return totalVal+dailyVal;
}

let totalHours = Array.from(empHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal,0);
console.log("UC9 Total hours: "+totalHours + " Total Salary: "+totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

empHrsMap.forEach((value, key) => {
    if(value == 8) fullWorkingDays.push(key);
    else if(value == 4) partWorkingDays.push(key);
    else  nonWorkingDays.push(key);
});

console.log("Full working days: "+ fullWorkingDays);
console.log("Part working days: "+ partWorkingDays);
console.log("Non working days: "+ nonWorkingDays);

console.log("UC10: " + empDailyHrsAndWageArr );

let totalwages = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                    .reduce((totalWage,dailyHrsAndWage) => totalWage +=dailyHrsAndWage.dailyWage,0);

let totalhours = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                    .reduce((totalHours,dailyHrsAndWage) => totalHours +=dailyHrsAndWage.dailyHours,0);

console.log("UC11A Total hours: "+ totalhours+ " total wage: "+totalwages);

console.log("UC11B Logging full work days");
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                    .forEach(dailyHrsAndWage => console.log(dailyHrsAndWage.toString()));

let partWorkingDaysArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                                                .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("UC11C Part working days: "+ partWorkingDaysArr);

let fullWorkingDaysArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                                                .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("UC11D Part working days: "+ fullWorkingDaysArr);

class EmployeePayrollData {
    id;
    salary;

    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get name(){ return this._name;}
    set name(name){ this._name = name;}

    toString(){
        return "id = "+this.id + ", name = "+this.name + ", salary = "+this.salary;
    }
}

let employee = new EmployeePayrollData(1, "James",30000);
console.log(employee.toString());
employee.name = "Mark";
console.log(employee.toString());  