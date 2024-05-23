let first_date=document.getElementById('first_date')
let second_date=document.getElementById('second_date')
let result=document.getElementById('result')

let firstDate=prompt("Enter first date")
let secondDate=prompt("Enter second date")

function calculateDay(dateFirst, dateSecond) {
    const [day1, month1, year1] = dateFirst.split('.').map(Number);
    const [day2, month2, year2] = dateSecond.split('.').map(Number);
    
    const date1 = new Date(year1, month1 - 1, day1);
    const date2 = new Date(year2, month2 - 1, day2);
    console.log(date1)
    const differenceInMs = date2 - date1;
    
    const differenceInDays = Math.abs(Math.floor(differenceInMs / (1000 * 60 * 60 * 24)));
    
    return differenceInDays;
}
first_date.textContent=firstDate
second_date.textContent=secondDate
result.textContent=calculateDay(firstDate, secondDate)
