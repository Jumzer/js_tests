/*
function factorielle(nbr) 
{
  // Si nbr = 0 la factorielle retournera automatiquement 1
  if (nbr === 0)
  {
     return 1;
  }
  // sinon, la fonction récupère le chiffre qu'elle multipliera avec lui-même-1
  return nbr * factorielle(nbr-1);
}


nombre = prompt("De quel nombre veux tu connaitre la factorielle ?")
console.log(factorielle(nombre));
*/


number = prompt("De quel nombre veux tu connaitre la factorielle ?")

let factorial_number = 1;
    for (i = 1; i <= number; i++) {
        factorial_number *= i;
    }
    console.log(`The factorial of ${number} is ${factorial_number}.`);



// pyramid

/*
let floor = prompt(
  "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
);

let pyramidRight = function (floor) {
  for (let i = 1; i <= floor; i++) {
    let str = "";

    //Add the white space to the left
    for (let j = 1; j <= floor - i; j++) {
      str += " ";
    }

    //Add the '#' for each row
    for (let k = 1; k <= i; k++) {
      str += "#";
    }

    //Print the pyramid pattern for each row
    console.log(str);
  }
};
console.log(pyramidRight(floor));
*/