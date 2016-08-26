console.log('\'Allo \'Alex!');
var sekunden = 0;

setInterval(sagWieLangeWirSchonWarten,1000);



function sagWieLangeWirSchonWarten() {
	sekunden++;
	jQuery("#sekundenZaehler").html(sekunden + " Sek")
	//console.log("Wir warten seit " + sekunden + " Sekunden");
}