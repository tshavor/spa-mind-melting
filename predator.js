var Predator = (function (){
	var carnivore = [];
	var herbivore = [];

return {
	getCarnivores: function (callback) {
		// get the data (XHR-Http request)
		var xhr= new XMLHttpRequest()
		xhr.open('GET', 'carnivores.json')
			xhr.addEventListener('load', function(event){
		// store it in a private variable
				carnivores= JSON.parse(event.target.responseText)
				callback(carnivores)

			})
			xhr.send()

		// execute the callback

	},
	getHerbivores: function (callback) {

		// get the data (XHR-Http request)
		var xhr= new XMLHttpRequest()
		xhr.open('GET', 'herbivores.json')
			xhr.addEventListener('load', function(event){
		// store it in a private variable
				herbivores= JSON.parse(event.target.responseText)
				callback(herbivores)

			})
			xhr.send()

	},

}











}())
