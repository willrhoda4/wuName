

const myWuNameIs = (firstName) => {
  var smallName = firstName.toLowerCase();
  var nameArr = smallName.split('');
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var nameScore = [];
  for (let i = 0; i < nameArr.length; i++) {
    nameScore.push(alphabet.indexOf(nameArr[i]) + 1)
  }

  var totalScore = nameScore.reduce((a, b) => a + b, 0)
  return totalScore;
} ;

console.log(myWuNameIs("Will"));



/**/