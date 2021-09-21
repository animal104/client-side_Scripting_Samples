/*	SDEV 250 Client-Side Scripting
 *	"Hacker-Space" version 1.0
 * 	Author: Saine, Michael A II
 *  Date:  14 Feburary 2021 

 *    Filename: tools.js
 */
 

<script type="text/javascript">  
 
 var dateObject = new Date();
 
 function inttostring () {
	var number = document.getElementById("number").value;
	   
	numberanswer = number.tostring(2);
	
	document.getElementById("numberanswer").innerHTML = scr; 	
 }
 
 
 
 function IPClass () {
	 
	var ipaddress = document.getElementById("ipaddress").innerHTML;
	 
	if (ipaddress == range(1.0.0.1-126.255.255.254)) {
	ipaddressanswer = "Class A" }
	
	else if ipaddress = range(128.1.0.1 - 191.255.255.254)) {
	ipaddressanswer = "Class B" }
	
	else if ipaddress == range(192.0.1.1 - 239.255.255.255)) {
	ipaddressanswer = "Class C" }
	
	else if ipaddress == range(224.0.0.0 - 239.255.255.255)) {
	ipaddressanswer = "Class D" }
	
	else if ip address == range(240.0.0.0 - 254.255.255.254)) {
	ipaddressanswer = "Class E" }
	
	else {ipaddressanswer == "That's not valid") }
	
	document.getElementById("ipaddressanswer").innerHTML = scr; 
	
 }

	
function calculatesubnet() {
  var inversemask = document.getElementById("inversemask").value;
  
  var inversemaskanswer = (255.255.255.255 - inversemask);

     updateResult(inversemask, inversemaskanswer);
	 
	 document.getElementById("inversemaskanswer").innerHTML = scr; 
  }
  
  function displayCalendar(whichMonth) {
    var date;
    var dateToday = new Date();
    var dayOfWeek;
    var daysInMonth;
    var dateCells;
    var captionValue;
    var month;
    var year;
    var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    if (whichMonth === -1) {
        dateObject.setMonth(dateObject.getMonth() - 1);
    } else if (whichMonth === 1) {
        dateObject.setMonth(dateObject.getMonth() + 1);
    }
    
    month = dateObject.getMonth();
    year = dateObject.getFullYear();
    dateObject.setDate(1);
    dayOfWeek = dateObject.getDay();
    captionValue = monthArray[month] + "" + year;
    document.querySelector("#cal table caption").innerHTML = captionValue;
    
    if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) {
        daysInMonth = 31;
    } else if (month === 1) { //Feb
        if (year % 4 === 0) { //leap year test
            if (year % 100 === 0) {
				//year ending in 00 not a leap year unless
				//divisible by 100
                if (year % 400 === 0) {
                    daysInMonth = 29;
                } else {
                    daysInMonth = 28;
                }
            } else {
                daysInMonth = 29;
            }
        } else {
            daysInMonth = 28;
        }
    } else {
        daysInMonth = 30;
    }
    
    dateCells = document.getElementsByTagName("td");
    for (var i = 0; i < dateCells.length; i++) {
        dateCells[i].innerHTML = "";
        dateCells[i].className = "";
    }
    
    for (var i = dayOfWeek; i < daysInMonth + dayOfWeek; i++) {
        dateCells[i].innerHTML = dateObject.getDate();
        dateCells[i].className = "date";
        if (dateToday < dateObject) {
            dateCells[i].className = "futuredate";
        }
        date = dateObject.getDate() + 1;
        dateObject.setDate(date);
    }
    
    dateObject.setMonth(dateObject.getMonth() - 1);
    document.getElementById("cal").style.display = "block";
}



document.getElementById("button1").addEventListener("click", convert, false);
document.getElementById("button2").addEventListener("click", convert, false);
document.getElementById("button3").addEventListener("click", convert, false);

