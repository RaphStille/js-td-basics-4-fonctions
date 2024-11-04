/*
FONCTIONS - PRÉPA 4 : Date valide - version 2
Écrire un programme JS qui teste si une date entrée par l'utilisateur est une date valide ou pas
- Déclarez deux fonctions :
  - isBissextile retourne true ou false selon que l'année est bissextile ou pas
  - isValid retourne true ou false selon que la date est valide ou pas
- Utilisez isBissextile dans isValid pour gérer le cas du mois de février
- Utilisez isValid pour décider si votre date est valide
  avant d'afficher votre message dans la console
*/

// Fonction pour vérifier si une année est bissextile

function isBissextile(year) {
    return (year % 4 === 0 && year % 100 > 0) || (year % 400 === 0);
}

// Fonction pour vérifier si une date est valide

function isValid(dateString) {
    const dateParts = dateString.split('.');

    if (dateParts.length !== 3) {
        return false;
    }

    const day = parseInt(dateParts[0],10);
    const month = parseInt(dateParts[1],10);
    const year = parseInt(dateParts[2],10);


    if (month < 1 || month > 12) {
        return false;
    }

    const daysMonth = [31, isBissextile(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    return day > 0 && day <= daysMonth[month - 1]
}


// Demander à l'utilisateur de saisir une date

function check() {
    const inputUser = prompt('Entrez une date valide dans le format "JJ.MM.AAAA"')

    if (isValid(inputUser)) {
        console.log("Date valide")
    } else console.log("Date invalide")
}

// Utilisation de la fonction isValid pour vérifier la date

check();