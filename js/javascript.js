
let fullDate = "2022-12-03T13:00:00";


var end = new Date(fullDate).getTime();
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'LLEGO EL DÍA!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        if(days > 1){
		document.getElementById('countdown').innerHTML =+ days + ' días, ';
        } 
		if(days == 0){
		document.getElementById('countdown').innerHTML = '';
		}
		if(days == 1){
		document.getElementById('countdown').innerHTML =+ days + ' día,';
		}
		document.getElementById('countdown').innerHTML += hours + ' hs, ';
        document.getElementById('countdown').innerHTML += minutes + ' min y ';
        document.getElementById('countdown').innerHTML += seconds + ' seg <br>';
    }

    timer = setInterval(showRemaining, 1000);

   function nombreCumplea(){
    var nombre =prompt("Quien cumple años","Pepito")
     document.getElementById("cumplea").innerHTML = nombre;
   }