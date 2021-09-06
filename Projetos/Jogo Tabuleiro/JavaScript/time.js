var time = 0;
var teste = 1;
var apertou = 0;

function noventaSegundos(){
    time = 90;
    timeFunc();
}
function sessentaSegundos(){
    time = 60;
    timeFunc();
}
function timeFunc(){
    setTimeout(function() { 
        teste = 1;
        var initialOffset = '440';
        var i = 1;

        /* Need initial run as interval hasn't yet occured... */
        $('.circle_animation').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));

        var interval = setInterval(function() {
            $('h2').text(i);
            if (i >= time) {  	
            clearInterval(interval);
            document.getElementById('numberH').innerHTML = '0'
            $('.circle_animation').css('stroke-dashoffset', initialOffset)
            return;
            }
            
            $('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
            i = i + teste;  
        }, 1000);
    }, 0)
};


function reset(){
    teste = 90;
    clearInterval(interval);
    timeFunc();
    console.log("Boa noite, bom dia ou boa tarde jovem dev")
    return;
};