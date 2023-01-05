$("button").click(function(){
    $("h1").css("color","purple")
})

// $("#hi").keypress((e)=>{
//     $("h1").text($("h1").text()+e.key);
// })


// $("h1").on("mouseover",(e)=>{
//     $("h1").css("color","red");
//     setTimeout((e)=>{
//         $("h1").css("color","black")
//     }, 500)
// })


// $("button").on("click",(e)=>{
//     $("h1").toggle();
// })


$("button").on("click",(e)=>{
    $("h1").slideToggle();
})

