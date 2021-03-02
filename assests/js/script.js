var rowEl = document.querySelectorAll('.task');
var timeBlockEl = document.querySelectorAll(".row");

//function for updated time and date 
$(document).ready(function  (){
  

 //for current date    
    var dayTime = moment().format('MM-DD-YYYY  - dddd')
    $("#currentDay").text(dayTime)

   console.log(dayTime)

  //for current time  
   var dayTime2 = moment().format('hh : mm')
   $("#currentDay2").text(dayTime2)




 //check for button clicks inside an on click
$('.saveBtn').on('click',function(){

//to connect id and text 
var task = $(this).siblings('.task').val();
var time = $(this).parent().attr("id");


//save them to localStorage
localStorage.setItem(time,task);


});

//write a function to update the hours in the time blocks
    //get current time use moment

var currentTime = moment().format('HH')
console.log(currentTime)

//loop over our time blocks hint (look up .each)

for(let i = 0;i < timeBlockEl.length; i++){

let hourTime = timeBlockEl[i].id;

console.log(hourTime)


localStorage.getItem(hourTime);

rowEl[i].value = localStorage.getItem(hourTime)

let timeId = hourTime.split('-');

let oneHour = Number(timeId[1]);
console.log(timeId);








//check idto see if we have moved past the current time
if(timeId < currentTime){
  
    rowEl[i].classList.add('past');

//check to see if it is the current time  

}else if(timeId == currentTime){
    
      rowEl[i].classList.add('present');

  //check to see if time is future

}else if (timeId > currentTime){

     rowEl[i].classList.add('future')

}
}

})

console.log("my javascript hit")

