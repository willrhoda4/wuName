

const myWuNameIs = (firstName, lastName) => {
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




  return `first name: ${firstNameTotal} last name: ${lastNameTotal}`;
} ;

console.log(myWuNameIs("Will", "Rhoda"));



/**/