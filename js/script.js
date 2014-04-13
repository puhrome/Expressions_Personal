/**
 * Expressions Personal Created by Phirom Yim on 4/13/14.
 */
//Calculate how much money if I save 15 percent from each paycheck before June 1, 2014 for Vacation
var paycheckWeekly;//declaring variable
paycheckWeekly = 100; //declaring variable
//totalCash is equal to paycheckWeekly times the amount of weeksLeft until June
var weeksLeft = 7;
var totalCash = paycheckWeekly * weeksLeft;
console.log(totalCash);
//totalCash minus 15 percent is equal to the amount in savings
var savings; //declaring variable
savings = .15; //defining percentage expression
var percentage;// declaring money for vacation
percentage = totalCash * savings; //defining how much money will be saved from total cash minus 15 percent
console.log(percentage);
var vacationMoney;
vacationMoney = totalCash - percentage;
var a = " dollars saved for Vacation"; //concatenating the string dollars saved for Vacation after expression
console.log(vacationMoney + a);

