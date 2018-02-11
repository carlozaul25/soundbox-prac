var cNote = document.getElementById('cAudio');
$('#c').mousedown(function(){
	cNote.currentTime = 0;
    cNote.play();
});

var dNote = document.getElementById('dAudio');
$('#c').mousedown(function() {
	dNote.currentTime = 0;
	dNote.play();
});