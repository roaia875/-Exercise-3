//רואיה חבשה - רואן חבשה 


// מערך של מספרים שלמים
const numbers = [5, 1, 0, 2, 0, 6, 0];

// חישוב כמות האפסים במערך
const zeroCount = numbers.reduce((count, num) => count + (num === 0 ? 1 : 0), 0);

// הדפסת התוצאה
console.log(zeroCount);

//הקוד ידפיס 3
