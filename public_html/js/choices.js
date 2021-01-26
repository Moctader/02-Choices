/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

/*
 * Student name :
 * Started date :
 * Ended   date :
 * 
 */

function v01() {
    var greeting;
    let birthYear = Number(document.getElementById("year").value)
    let today = new Date(); // current date
    let current_year = today.getFullYear();
    let age = current_year - birthYear;

    if (age >= 18){
        document.getElementById("allow").innerHTML="Welcome!"
    } else {
        document.getElementById("allow").innerHTML="too young"
    }

    

}

function v02() {
    let number1 = Number(document.getElementById("number1").value)
    let number2 = Number(document.getElementById("number2").value)

    if (number1 < number2){
        document.getElementById("smaller").innerHTML= number1

    } else {
        document.getElementById("smaller").innerHTML= number2
    }
}


function v03() {
    const NEG = "One of the numbers is negative."
    const POS = "Both numbers are either positive or negative."

    let number1 = Number(document.getElementById("number1").value)
    let number2 = Number(document.getElementById("number2").value)

    let mul =  number1 * number2;

    if (mul > 0) {
        document.getElementById("negative").innerHTML= POS

    } else {
        document.getElementById("negative").innerHTML= NEG

    }

    
}

function v04() {
    const REC = "rectangle";
    const SQ = "square";

}

function v05() {
    const EVEN = "even";
    const ODD = "odd";

}

function v06() {

}

function v07() {

}

function v08() {

}

function v09() {
	const FLOWER1 = '<img alt="flower1" src="img/flower1.png">';
	const FLOWER2 = '<img alt="flower2" src="img/flower2.png">';
	const FLOWER3 = '<img alt="flower3" src="img/flower3.png">';
	const FLOWER4 = '<img alt="flower4" src="img/flower4.png">';  

}
