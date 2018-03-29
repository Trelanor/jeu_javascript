var nombreAleatoire = Math.floor(Math.random()*100); //déclaration de la vaiable pour choisir un nombre aléatoire
var input = document.getElementById("inp"); //déclaration de la variable pour l'input
var button = document.getElementById("button"); //déclaration de la variable pour le bouton validé
var result = document.getElementById("result"); //déclaration de la variable pour la partie résultat
var nbCoup = 0; //déclaration de la variable pour le nombre de coup		
console.log(nombreAleatoire) //commande pour voir le nombre aleatoire dans la console
button.addEventListener("click", function(event){ //évenement sur le bouton avec les conditions
	var value = input.value //récupération de la valeur dans l'input
	nbCoup++
console.log(value) //test dans la console qui doit affiché le nombre marqué dans le champs
		if (value<nombreAleatoire)//Si le nombre est inférieur au nombre aléatoire
		return result.innerHTML = "C'est plus !" //compare par rapport au résultat si c'est inférieur

		if (value>nombreAleatoire)//Si le nombre est supérieur au nombre aléatoire
		return result.innerHTML = " C'est moins ! " //compare par rapport au résultat si c'est supérieur

		else result.innerHTML = "Félicitation vous avez trouvé le bon chiffre en "+ nbCoup + " coups!!!"//sinon valide le résultat

})

