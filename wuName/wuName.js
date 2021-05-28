

const myWuNameIs = (firstName, lastName, birthMonth, birthDay) => {
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  var smallFirstName = firstName.toLowerCase();
  var firstNameArr = smallFirstName.split('');
  var firstNameScore = [];
  for (let i = 0; i < firstNameArr.length; i++) {
    firstNameScore.push(alphabet.indexOf(firstNameArr[i]) + 1)
  }
  var firstNameTotal = firstNameScore.reduce((a, b) => a + b, 0)

  var smallLastName = lastName.toLowerCase();
  var lastNameArr = smallLastName.split('');
  var lastNameScore = [];
  for (let i = 0; i < lastNameArr.length; i++) {
    lastNameScore.push(alphabet.indexOf(lastNameArr[i]) + 1)
  }
  var lastNameTotal = lastNameScore.reduce((a, b) => a + b, 0)

  var smallMonth = birthMonth.toLowerCase();
  var monthScore = 0;
  switch (smallMonth) {
    case 'january':
         monthScore = 1;
         break;
    case 'february':
         monthScore = 2;
         break;
    case 'march':
          monthScore = 3;
          break;
    case 'april':
         monthScore = 4;
         break;
    case 'may':
          monthScore = 5;
          break;
    case 'june':
          monthScore = 6;
          break;      
    case 'july':
          monthScore = 7;
          break;
    case 'august':
          monthScore = 8;
          break;
    case 'september':
          monthScore = 9;
          break;
    case 'october':
          monthScore = 10;
          break;
    case 'november':
          monthScore = 11;
          break;
    case 'december':
          monthScore = 12;
          break;
    default:
      console.log('That\'s not a month');
  }

  var wuFirstNameTotal = firstNameTotal + monthScore;
  var wuLastNameTotal = lastNameTotal + birthDay;

  return `first name: ${firstNameTotal} wu name: ${wuFirstNameTotal} last name: ${lastNameTotal} wu name: ${wuLastNameTotal}`;
} ;

console.log(myWuNameIs("Will", "Rhoda", 'July', 20));



/**/