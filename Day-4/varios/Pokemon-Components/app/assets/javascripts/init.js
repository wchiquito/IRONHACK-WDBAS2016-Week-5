if (window.PokemonApp === undefined) {
	window.PokemonApp = {};
}

PokemonApp.init = function () {
	console.log("PokemonApp Online");
};

$(document).on("ready", function (){
	PokemonApp.init();
});
