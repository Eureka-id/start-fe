//문제 1
const year = 2022;
const month = 11;
const day = 3;
var dateString;
if(day<10){
dateString = `${year}-${month}-0${day}`
}
else if (day>=10){
    dateString = `${year}-${month}-${day}`
}