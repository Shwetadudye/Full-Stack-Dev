
// CHECK NUMBER IS POSITIVE, NEGATIVE OR ZERO


let num = -5;

if ( num > 0 ) {
    console.log ( ' number is positive ' );
}
else if ( num < 0 ) {
    console.log ( ' number is negative ' );
}
else {
    console.log ( ' number is zero ' );
}




// CHECK EVEN OR ODD NUMBER
let number = 4;
if ( number % 2 == 0 ) {
    console.log ( ' number is even ' );
}
else if ( number % 2 != 0 ) {
    console.log ( ' number is odd ' );
}
else {
    console.log ( ' invalid number ' );
}




// FIND THE GREATEST BETWEEN TWO NUMBERS 

let num1 = 10;
let num2 = 20;

if ( num1 > num2 ) {
    console.log ( ' num1 is greater ' );

}
else if ( num2 > num1 ) {
    console.log ( ' num2 is greater ' );
}
else {
    console.log ( ' both are equal ' );
}

//



// FIND THE LARGEST AMONG THREE NUMBERS 


let a = 15;
let b = 25;
let c = 20;
if ( a > b && a > c ) {
    console.log ( ' a is largest ' );
}

else if ( b > a && b > c ) {
    console.log ( ' b is largest ' );
}

else if ( c > a && c > b ) {
    console.log ( ' c is largest ' );
}
else {
    console.log ( ' all are equal ' );
}


// CATOGARIZE PERSON BY AGE 

let AGE = 45;
if ( AGE >= 0 && AGE <= 12 ) {
    console.log ( ' person is a child ' );
}       
else if ( AGE > 12 && AGE <= 19 ) {
    console.log ( ' person is a teenager ' );
}

else if ( AGE >= 20 && AGE <= 59 ) {
    console.log ( ' person is an adult ' );
}

else if ( AGE >= 60 ) {
    console.log ( ' person is a senior citizen ' );
}
else {
    console.log ( ' invalid age ' );
}   



// STUDENTS SCORE IS GIVEN . PRINT THE GRADE BASED ON THE SCORE

let score = 85;
if ( score >= 90 && score <= 100 ) {
    console.log ( ' grade A ' );
}   
else if ( score >= 80 && score < 90 ) {
    console.log ( ' grade B ' );
}       
else if ( score >= 70 && score < 80 ) {
    console.log ( ' grade C ' );
}
else if ( score >= 60 && score < 70 ) {
    console.log ( ' grade D ' );
}

else if ( score >= 0 && score < 60 ) {
    console.log ( ' grade F ' );
}
else {
    console.log ( ' invalid score ' );
}