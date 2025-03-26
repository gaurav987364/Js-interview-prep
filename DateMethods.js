// All about the dates in js 
//! we have to remember that if number lie b/w 0-12 means it is noght
//! and if number 12-24 lie karega to its day

const d = new Date(); 
// on console simply 2024-11-16T06:15:29.297Z
//? on simply console date() object return and obj but when we do .toISOString() it gives us string format date looks like before but it is string this output is in ISO 8601 date and time format.
//2024-11-16T06:15:29.297Z : breakdown 
//yyyy-mm-dd
//T is for seprate time and date
//hh-mm-ss-sss format me
// zulu time
//console.log(d.toISOString());


// There are 9 ways to create a new date object:

// new Date()
// new Date(date string)
// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)

// new Date(year,month,day,hours,minutes)
 // 5 numbers specify year, month, day, and hour:

// new Date(year,month,day,hours,minutes,seconds) 
// 6 numbers specify year, month, day, hour, minute, second:

// new Date(year,month,day,hours,minutes,seconds,ms) 
//7 numbers specify year, month, day, hour, minute, second, and millisecond

//! when we give only one number in js date so it will treated as millisencods for eg put 2020 so it give us //?thu 01 jan 1970
// new Date(milliseconds)


//const newDate = new Date(2018, 11, 24, 10, 33, 30, 0)
//?Note: js counts month from 0-11 means {0: january, 11:december}
 // 2018-12-24T05:03:30.000Z // 11 hmne diyato 12 aya 
 //console.log(d.toDateString()) // more readable date


// from cheatsheet of js
const date = new Date();
//when we get date with these two types directly in coonsole
// Date()
// 'Sat Nov 16 2024 12:18:20 GMT+0530 (India Standard Time)'
// Date.now()
// 1731739720063
console.log(date)

//? Conversions
//! thease above 3 and below 3 looks same but format is different
console.log(date.toString()); //Sat Nov 16 2024 12:25:38 GMT+053(IST)
console.log(date.toDateString()) // more readable format
console.log(date.toTimeString()) //12:27:02 GMT+0530 (IST)

console.log(date.toISOString()) //2024-11-16T06:58:09.878Z

//!below 3
console.log(date.toLocaleString()) //16/11/2024, 12:29:06 pm
console.log(date.toLocaleDateString()) //16/11/2024
console.log(date.toLocaleTimeString()) // 12:29:06 pm

// to get time
console.log(date.getTime()) //1731740411234
console.log(Date.now()) //1731740411234
//? always remember that ye tiem ka number hamehsa 13 num ka hota hai

//? Get Methods
console.log(date.getFullYear()); // 2024
console.log(date.getMonth()); // 10
console.log(date.getDate()); // 16
console.log(date.getDay()); // 6 related to week ok like saturday
console.log(date.getHours()) //12
console.log(date.getMinutes()) //45
console.log(date.getSeconds()) //22
console.log(date.getMilliseconds()) //239

console.log(date.getTimezoneOffset()) -330
// timeZoneOffset give us the value which are the total number of minutes hai jitna hmara local time zone UTC se pivhe ya aage chal rha haai 


//? Set Methods
console.log(date.setFullYear(2023))
console.log(date.setMonth(5))
console.log(date.setDate(20))
console.log(date.setHours(10))
console.log(date.setMinutes(20))
console.log(date.setSeconds(30))
console.log(date.setMilliseconds(200))
console.log(date.setTime(1731740411234))
console.log(date.toString())

console.log(date.valueOf(1698241799297)) // return timestamp of millisecnods


// All other senarios of js Dates;

// add 1 day (means find tomorow)
const tomorow = new Date(date);
tomorow.setDate(date.getDate() + 5) // 21 tarik

// Subtract 1 hour
const oneHourAgo = new Date(date);
oneHourAgo.setHours(date.getHours() - 1);
console.log(oneHourAgo, tomorow);


// difference b/w dates and convert rates;;

// for convert milliseconds to seconds => find number of milliseconds of two dates by end - start / 1000 se
// for convert seconds to minutes => number of seconds / 60;
// for convert minutes into hours => number of minutes / 60;
// for convert minutes into days => number of hours / 24;
// for convert days into month => num of days / 30;
// for convert month into year => num of month / 365;

const start = new Date("2024-11-16T06:15:29.297Z");
const end = new Date("2024-11-17T06:15:29.297Z");

const diffMillis = end - start; // Difference in milliseconds
const diffSeconds = diffMillis / 1000; // Convert to seconds
const diffMinutes = diffSeconds / 60; // Convert to minutes
const diffHours = diffMinutes / 60; // Convert to hours
const diffDays = diffHours / 24; // Convert to days

console.log({ diffMillis, diffSeconds, diffMinutes, diffHours, diffDays });
//{
    // diffMillis: 86400000,
    // diffSeconds: 86400,
    // diffMinutes: 1440,
    // diffHours: 24,
    // diffDays: 1
//}


//format dates 
const formatted = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
console.log(formatted); // "2024-11-16 06:15:29"

// format using libraries
//* date-fns and moment.js

//! remeber (1000*60*60*24) retruns the 86,400,000 millisecnonds
// Countdown timer::
const targetDate = new Date("2024-12-31T23:59:59");
const today = new Date();
const diff = targetDate - today;

const day = Math.floor(diff / (1000*60*60*24));
const hours = Math.floor(diff % (1000*60*60*24) / (1000*60*60));
const minute= Math.floor(diff % (1000*60*60) / (1000*60));
const sec = Math.floor(diff % (1000*60) / (1000));

console.log(`{${day}:${hours}:${minute}:${sec}}`)


// age calculater
const dob = new Date("2000-12-02");
const now = new Date();
const difference = now - dob;
const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
console.log(years);



// calculate time ago 
function timeAgo(dat){
    let todaysDate = new Date();
    let differenced = todaysDate - new Date(dat);
    
    let s = Math.floor(differenced / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);
    let month = Math.floor(d / 30);
    let year = Math.floor(month / 365);

    if(year > 0) return year === 1 ? `1 year ago` : `${year} year ago`;
    if(month > 0) return month === 1? `1 month ago` : `${month} months ago`;
    if(d > 0) return d === 1? `1 day ago` : `${d} days ago`;
    if(h > 0) return h === 1? `1 hour ago` : `${h} hours ago`;
    if(m > 0) return m === 1? `1 minute ago` : `${m} minutes ago`;
    if(s > 0) return s === 1? `1 second ago` : `${s} seconds ago`;
}
console.log(timeAgo('2024-11-01T06:00:11.234Z'))
// accepts type only 2024-11-01T06:00:11.234Z & 1731740411234

// functio for count views in M,B,K format
function countViews(views){
    if(views >= 1_000_000_000){
        return (views / 1_000_000_000).toFixed(1) + "B"
    }
    if(views >= 1_000_000){
        return (views / 1_000_000).toFixed(1) + "M"
    }
    if(views >= 1_000){
        return (views / 1_000).toFixed(1) + "k"
    }
    return views.toString(); // if views are less than 1000 return as it is 2500 -> "2500" 1234567890 -> "1.2B" 2500000 -> "2.5M" 8900 -> "8.9K" 500 -> "500" etc. 12345678
}
console.log(countViews(1234567890)); // Output: "1.2B"
console.log(countViews(2500000));    // Output: "2.5M"
console.log(countViews(8900));       // Output: "8.9K"
console.log(countViews(500));        // Output: "500"


// calculate percentage
function calculatePercentage(part, whole) {
    if (whole === 0) return "N/A"; // Avoid division by zero
    return ((part / whole) * 100).toFixed(2) + "%";
}
console.log(calculatePercentage(50, 200)); // Output: "25.00%"
console.log(calculatePercentage(75, 0));   // Output: "N/A"



// thirty minutes from now 
function thirtyMinutesFromNow(){
    return new Date(date.now() + 30*24*60*60*1000);
}
// console.log(thirtyMinutesFromNow());

//generate token 
function generateToken(){
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
