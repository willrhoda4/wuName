

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
      return 'That\'s not a month';
  }

  var wuFirstNameTotal = firstNameTotal + monthScore;
  var wuLastNameTotal = lastNameTotal + birthDay;
  var wuFirstNameScore = wuFirstNameTotal.toString().slice(-2);
  var wuLastNameScore = wuLastNameTotal.toString().slice(-2);

  var wuFirstName = '';
  switch (wuFirstNameScore) {
    case '00':
      wuFirstName = 'Witty';
         break;
    case '01':
     wuFirstName = 'Unpredictable';
        break;
    case '02':
      wuFirstName = 'Talented';
         break;
    case '03':
      wuFirstName = 'Natural';
          break;
    case '04':
      wuFirstName = 'Intergalactic';
         break;
    case '05':
      wuFirstName = 'Pyrotechnic';
          break;
    case '06':
      wuFirstName = 'Psychedelic';
          break;      
    case '07':
      wuFirstName = 'Renegade';
          break;
    case '08':
      wuFirstName = 'Ruthless';
          break;
    case '09':
      wuFirstName = 'Indefatigable';
          break;
    case '10':
      wuFirstName = 'Relentless';
         break;
    case '11':
     wuFirstName = 'Perpetrating';
        break;
    case '12':
      wuFirstName = 'Prophetic';
         break;
    case '13':
      wuFirstName = 'Miraculous';
          break;
    case '14':
      wuFirstName = 'Lunatic';
         break;
    case '15':
      wuFirstName = 'Brilliant';
          break;
    case '16':
      wuFirstName = 'Merciless';
          break;      
    case '17':
      wuFirstName = 'Party-Rocking';
          break;
    case '18':
      wuFirstName = 'Fiendish';
          break;
    case '19':
      wuFirstName = 'Devious';
          break;
    case '20':
      wuFirstName = 'Diabolic';
         break;
    case '21':
     wuFirstName = 'Disingenuous';
        break;
    case '22':
      wuFirstName = 'Arbitrary';
         break;
    case '23':
      wuFirstName = 'Indestructible';
          break;
    case '24':
      wuFirstName = 'Soul-Searching';
         break;
    case '25':
      wuFirstName = 'Ruckus-Bringing';
          break;
    case '26':
      wuFirstName = 'Phantasmagoric';
          break;      
    case '27':
      wuFirstName = 'Avant-Garde';
          break;
    case '28':
      wuFirstName = 'Mutant';
          break;
    case '29':
      wuFirstName = 'Proletariat';
          break;
    case '30':
      wuFirstName = 'Next-Level';
         beak;
    case '31':
     wuFirstName = 'Pompous';
        break;
    case '32':
      wuFirstName = 'Razor-Sharp';
         break;
    case '33':
      wuFirstName = 'Rudimentary';
          break;
    case '34':
      wuFirstName = 'Wandering';
         break;
    case '35':
      wuFirstName = 'Reclusive';
          break;
    case '36':
      wuFirstName = 'Intellectual';
          break;      
    case '37':
      wuFirstName = 'Psychopathic';
          break;
    case '38':
      wuFirstName = 'Pretentious';
          break;
    case '39':
      wuFirstName = 'Liquid';
          break;
    case '40':
      wuFirstName = 'Serpentine';
         break;
    case '41':
     wuFirstName = 'Plant-Based';
        break;
    case '42':
      wuFirstName = 'Carnivorous';
         break;
    case '43':
      wuFirstName = 'Incredible';
          break;
    case '44':
      wuFirstName = 'Sword-Swinging';
         break;
    case '45':
      wuFirstName = 'Wise';
          break;
    case '46':
      wuFirstName = 'Sage';
          break;      
    case '47':
      wuFirstName = 'Irreverent';
          break;
    case '48':
      wuFirstName = 'Deluxe';
          break;
    case '49':
      wuFirstName = 'Supreme';
          break;
    case '50':
      wuFirstName = 'Fortified';
         break;
    case '51':
     wuFirstName = 'Armoured';
        break;
    case '52':
      wuFirstName = 'Vicious';
         break;
    case '53':
      wuFirstName = 'Sadistic';
          break;
    case '54':
      wuFirstName = 'Party-Rocking';
         break;
    case '55':
      wuFirstName = 'Clairvoyant';
          break;
    case '56':
      wuFirstName = 'Monstrous';
          break;      
    case '57':
      wuFirstName = 'Exquisite';
          break;
    case '58':
      wuFirstName = 'Delectable';
          break;
    case '59':
      wuFirstName = 'Tree-Hugging';
          break;
    case '60':
      wuFirstName = 'Angry';
         break;
    case '61':
     wuFirstName = 'Jubilant';
        break;
    case '62':
      wuFirstName = 'Perplexed';
         break;
    case '63':
      wuFirstName = 'Terrific';
          break;
    case '64':
      wuFirstName = 'Triumphant';
         break;
    case '65':
      wuFirstName = 'Telepathic';
          break;
    case '66':
      wuFirstName = 'Torturous';
          break;      
    case '67':
      wuFirstName = 'Ravenous';
          break;
    case '68':
      wuFirstName = 'Swaggalicious';
          break;
    case '69':
      wuFirstName = 'Nocturnal';
          break;
    case '70':
      wuFirstName = 'Day-Walking';
         break;
    case '71':
     wuFirstName = 'Ghoulish';
        break;
    case '72':
      wuFirstName = 'Fearless';
         break;
    case '73':
      wuFirstName = 'Courageous';
          break;
    case '74':
      wuFirstName = 'Imaginative';
         break;
    case '75':
      wuFirstName = 'Highly Durable';
          break;
    case '76':
      wuFirstName = 'Weather-Resistant';
          break;      
    case '77':
      wuFirstName = 'Blissed-Out';
          break;
    case '78':
      wuFirstName = 'Inebriated';
          break;
    case '79':
      wuFirstName = 'Insecure';
          break;
    case '80':
      wuFirstName = 'Futuristic';
         break;
    case '81':
     wuFirstName = 'Old-School';
        break;
    case '82':
      wuFirstName = 'Venomous';
         break;
    case '83':
      wuFirstName = 'Delusional';
          break;
    case '84':
      wuFirstName = 'Sub-Zero';
         break;
    case '85':
      wuFirstName = 'Miraculous';
          break;
    case '86':
      wuFirstName = 'Game-Changing';
          break;      
    case '87':
      wuFirstName = 'Ambitious';
          break;
    case '88':
      wuFirstName = 'Anti-Social';
          break;
    case '89':
      wuFirstName = 'Gregarius';
          break;
    case '90':
      wuFirstName = 'Draconian';
         break;
    case '91':
     wuFirstName = 'Pathological';
        break;
    case '92':
      wuFirstName = 'Neurotic';
         break;
    case '93':
      wuFirstName = 'Super-Fly';
          break;
    case '94':
      wuFirstName = 'Unstable';
         break;
    case '95':
      wuFirstName = 'Mega-Big';
          break;
    case '96':
      wuFirstName = 'Erratic';
          break;      
    case '97':
      wuFirstName = 'Irrational';
          break;
    case '98':
      wuFirstName = 'Passionate';
          break;
    case '99':
      wuFirstName = 'Practical';
          break;                                      
    default:
      return 'Ahh shit, looks like we ain\'t protect our necks, and now our code is broken!';
  }

  var wuLastName = '';
  switch (wuLastNameScore) {
    case '00':
      wuLastName = 'Lunatic';
         break;
    case '01':
     wuLastName = 'Rebel';
        break;
    case '02':
      wuLastName = 'Microphone Rocker';
         break;
    case '03':
      wuLastName = 'Bedroom Warrior';
          break;
    case '04':
      wuLastName = 'Gladiator';
         break;
    case '05':
      wuLastName = 'Hustler';
          break;
    case '06':
      wuLastName = 'Soverign';
          break;      
    case '07':
      wuLastName = 'Peasant';
          break;
    case '08':
      wuLastName = 'Juggernaut';
          break;
    case '09':
      wuLastName = 'Jester';
          break;
    case '10':
      wuLastName = 'Pit Bull';
         break;
    case '11':
     wuLastame = 'Boss';
        break;
    case '12':
      wuLastName = 'Engineer';
         break;
    case '13':
      wuLastName = 'Architect';
          break;
    case '14':
      wuLastName = 'Nomad';
         break;
    case '15':
      wuLastName = 'Homosapien Machinery';
          break;
    case '16':
      wuLastName = 'Destroyer';
          break;      
    case '17':
      wuLastName = 'Wallet Sweller';
          break;
    case '18':
      wuLastName = 'Charisma Bomb';
          break;
    case '19':
      wuLastName = 'Risk Dismisser';
          break;
    case '20':
      wuLastName = 'Serial Iller';
         break;
    case '21':
     wuLastName = 'Illusionist';
        break;
    case '22':
      wuLastName = 'Dominatrix';
         break;
    case '23':
      wuLastName = 'Submissive';
          break;
    case '24':
      wuLastName = 'Marathoner';
         break;
    case '25':
      wuLastName = 'Samurai';
          break;
    case '26':
      wuLastName = 'Hairless Cat';
          break;      
    case '27':
      wuLastName = 'Punisher';
          break;
    case '28':
      wuLastName = 'Pleasure Seeker';
          break;
    case '29':
      wuLastName = 'Heathen';
          break;
    case '30':
      wuLastName = 'Day Dreamer';
         beak;
    case '31':
     wuLastName = 'Night Crawler';
        break;
    case '32':
      wuLastName = 'Programmer';
         break;
    case '33':
      wuLastName = 'Conductor';
          break;
    case '34':
      wuLastName = 'Gavel Swinger';
         break;
    case '35':
      wuLastName = 'Pantomime';
          break;
    case '36':
      wuLastName = 'Vagabond';
          break;      
    case '37':
      wuLastName = 'Beatnik';
          break;
    case '38':
      wuLastName = 'Mastodon';
          break;
    case '39':
      wuLastName = 'Power Ranger';
          break;
    case '40':
      wuLastName = 'Psychonaut';
         break;
    case '41':
     wuLastName = 'Lager Enthusiast';
        break;
    case '42':
      wuLastName = 'Manta Ray';
         break;
    case '43':
      wuLastName = 'Game Changer';
          break;
    case '44':
      wuLastName = 'Technician';
         break;
    case '45':
      wuLastName = 'Quantum Mechanic';
          break;
    case '46':
      wuLastName = 'Revolutionary';
          break;      
    case '47':
      wuLastName = 'Investigator';
          break;
    case '48':
      wuLastName = 'Soprano';
          break;
    case '49':
      wuLastName = 'Tyrannosaur';
          break;
    case '50':
      wuLastName = 'Prodigy';
         break;
    case '51':
     wuLastName = 'Phenom';
        break;
    case '52':
      wuLastName = 'Accidental Poet';
         break;
    case '53':
      wuFLastName = 'Reptile';
          break;
    case '54':
      wuLastName = 'Tire Kicker';
         break;
    case '55':
      wuLastName = 'Knockout Artist';
          break;
    case '56':
      wuLastName = 'Contortionist';
          break;      
    case '57':
      wuLastName = 'Phantom';
          break;
    case '58':
      wuLastName = 'Believer';
          break;
    case '59':
      wuLastName = 'Idealist';
          break;
    case '60':
      wuLastName = 'Mercenary';
         break;
    case '61':
     wuLastName = 'Mutineer';
        break;
    case '62':
      wuLastName = 'Contract Killer';
         break;
    case '63':
      wuLastName = 'Assassin';
          break;
    case '64':
      wuLastName = 'Hippie';
         break;
    case '65':
      wuLastName = 'Official';
          break;
    case '66':
      wuLastName = 'Authoritarian';
          break;      
    case '67':
      wuLastName = 'Royalty';
          break;
    case '68':
      wuLastName = 'Stunt Puller';
          break;
    case '69':
      wuLastName = 'Virologist';
          break;
    case '70':
      wuLastName = 'Bodhisattva';
         break;
    case '71':
     wuLastName = 'Truth Seeker';
        break;
    case '72':
      wuLastName = 'Conspiracy Theorist';
         break;
    case '73':
      wuLastName = 'Diplomat';
          break;
    case '74':
      wuLastName = 'Live Wire';
         break;
    case '75':
      wuLastName = 'Deceptacon';
          break;
    case '76':
      wuLastName = 'Pragmatist';
          break;      
    case '77':
      wuLastName = 'Caffeine Fiend';
          break;
    case '78':
      wuLastName = 'Glutton';
          break;
    case '79':
      wuLastName = 'Shit Disturber';
          break;
    case '80':
      wuLastName = 'Propaganda Pusher';
         break;
    case '81':
     wuLastName = 'Destabilizer';
        break;
    case '82':
      wuLastName = 'Ivory Tickler';
         break;
    case '83':
      wuLastName = 'Brainiac';
          break;
    case '84':
      wuLastName = 'Maximizer';
         break;
    case '85':
      wuLastName = 'Cyclops';
          break;
    case '86':
      wuLastName = 'Citizen Journalist';
          break;      
    case '87':
      wuLastName = 'Pacifist';
          break;
    case '88':
      wuLastName = 'Practitioner';
          break;
    case '89':
      wuLastName = 'Winter Walker';
          break;
    case '90':
      wuLastName = 'Circus Freak';
         break;
    case '91':
     wuLastName = 'Alien Lifeform';
        break;
    case '92':
      wuLastName = 'Status Quo Rejecter';
         break;
    case '93':
      wuLastName = 'Blunt Burner';
          break;
    case '94':
      wuLastName = 'Booty Squeezer';
         break;
    case '95':
      wuLastName = 'Sandal Rocker';
          break;
    case '96':
      wuLastName = 'Green Thumb';
          break;      
    case '97':
      wuLastName = 'Convention Defier';
          break;
    case '98':
      wuLastName = 'Merry Prankster';
          break;
    case '99':
      wuLastName = 'Executioner';
          break;                                      
    default:
      return 'Ahh shit, looks like we ain\'t protect our necks, and now our code is broken!';
  }
  return `From here on out you shall be referred to as the ${wuFirstName} ${wuLastName}.`;

} ;

console.log(myWuNameIs('Anthony', 'Munoz', 'July', 20));



/**/