var player = document.getElementById("player");
var isPlaying = false;

function togglePlay() {
var item = document.querySelector("#control-btn i");
	if(isPlaying) {
	    player.pause();
	    item.classList.remove("fa-pause");
	    item.classList.add("fa-play");
	} else {
		player.play();
		item.classList.remove("fa-play");
		item.classList.add("fa-pause");
	}
};

player.onplaying = function(){
	isPlaying = true;
};

player.onpause = function(){
	isPlaying = false;
};