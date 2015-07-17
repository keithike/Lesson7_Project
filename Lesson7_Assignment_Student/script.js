/**
* Created with LIS2360_Lesson7_jQuery.
* User: keithike
* Date: 2015-07-17
* Time: 03:48 PM
* To change this template use Tools | Templates.
*/
/* Program Name: Recipe Display App
 * Author: Keith Eikevik
 * Date: 7/17/15
 * Filename: script.js
*/

function display(event){
    
    $(event.currentTarget).next().fadeIn("slow");
    
}// end of display()

/*
$("h3").click(display);
*/

function display2(event) {
    
    $(event.currentTarget).next().animate( { height: 'toggle'}, "slow");
}

/*
$("h3").click(display2);
*/

$("h3").hover(display2);

$("h3").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
});

