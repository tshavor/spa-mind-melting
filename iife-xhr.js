console.log ("Hello World");

function showCarnivores (carnivores) {
	var list= document.querySelector('.carnivores')

	carnivores.forEach(function (carnivore){
		list.innerHTML += `<li>carnivore</li>`

	})
	}

function showHerbivores (herbivores) {
var list= document.querySelector('.herbivores')

	herbivores.forEach(function (herbivores){
		list.innerHTML += `<li>herbivores</li>`

	})
}

Predator.getCarnivores(showCarnivores);
Predator.getHerbivores(showHerbivores);
