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

    let side1 = Number(document.getElementById("side1").value)
    let side2 = Number(document.getElementById("side2").value)

    document.getElementById("square").innerHTML= REC

}

function v05() {
    const EVEN = "even";
    const ODD = "odd";

    let number3 = Number(document.getElementById("number3").value)
    if (number3 % 2 == 0){
        document.getElementById("even").innerHTML = EVEN
    } else {
        document.getElementById("even").innerHTML = ODD

    }

}

function v06() {
    const ZERO = "zero";
    const POSITIVE = "positive";
    const NEGATIVE = "negative";


    let number3 = Number(document.getElementById("number3").value)

    if (number3 > 0){
        document.getElementById("positive").innerHTML = POSITIVE
    } else if (number3 < 0) {
        document.getElementById("positive").innerHTML = NEGATIVE
    } else {
        document.getElementById("positive").innerHTML = ZERO

    }
}

function v07() {
    let digit_a = Number(document.getElementById("digit_a").value)
    let digit_b = Number(document.getElementById("digit_b").value)
    let digit_c = Number(document.getElementById("digit_c").value)
    let digit_d = Number(document.getElementById("digit_d").value)

    if (digit_a < digit_b) {
        document.getElementById("smallest").innerHTML = digit_a

    } else if (digit_b < digit_c) {
        document.getElementById("smallest").innerHTML = digit_b

    } else if (digit_c < digit_d) {
        document.getElementById("smallest").innerHTML = digit_c

    } else {
        document.getElementById("smallest").innerHTML = digit_d

    }


    let biggest = digit_a
    if (digit_b > biggest){
        biggest= digit_b
    }

    if (digit_c > biggest){
        biggest= digit_c
    }

    if (digit_d > biggest){
        biggest= digit_d
    }
    document.getElementById("biggest").innerHTML = biggest;
}

function v08() {


    let yearx = Number(document.getElementById("yearx").value)


    if (yearx % 4 === 0){
        if (yearx % 100 === 0){
            if ( yearx % 400 ===0){
                document.getElementById("leap_year").innerHTML ="is leap year";
            }else{
                document.getElementById("leap_year").innerHTML ="is not leap year";
            }

        }else {
            document.getElementById("leap_year").innerHTML = "is leap year";
        }
    }else {
        document.getElementById("leap_year").innerHTML = "is not leap year";

    }
}

function v09() {
	const FLOWER1 = '<img alt="flower1" src="img/flower1.png">';
	const FLOWER2 = '<img alt="flower2" src="img/flower2.png">';
	const FLOWER3 = '<img alt="flower3" src="img/flower3.png">';
    const FLOWER4 = '<img alt="flower4" src="img/flower4.png">';  
    
    let number4 = Number(document.getElementById("number4").value)

    if ( number4 % 3 == 0){
        document.getElementById("flower").innerHTML = FLOWER1
    } else {
        document.getElementById("flower").innerHTML = FLOWER2

    }


}
