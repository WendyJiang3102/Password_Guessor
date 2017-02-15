// JavaScript File
$(document).ready(function(){

$("button").click(function(){
    var password= "hsfirox";
    var submit= $("#input").val();
    if(submit === password){
    $("#a").append("correct!");
    $("div").css("color","green");
    }
    else{
    $("#a").append("incorrect!");
    $("div").css("color","red");
    }
});

});
