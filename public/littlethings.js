var things = [
    'ive never been to a concert or show before',
    'i never had a vocaloid phase',
    'ive been to a psych ward when i was 15',
    'my favorite furniture in animal crossing is the rococo collection',
    'i grew up on digimon and mlp',
    'when I was little I would tell people I was brown because I drank chocolate milk',
    'i have a crush on neil cicierega',
    'i like my coffee 87% cream',
    'the first ever game i played online was purble place',
    'my favorite dog breed is a boxer, ive owned 3 in my life',
    'aliases ive used have been overcookedeggs, sally33101, chefzygarde, allcopsarebottoms, and punkedwerewolf',
    'im a traumagenic system, mainly fictives though',
    'when i was younger i would make movies with my monster high dolls',
    'before i was a my chem emo, i was a twenty one pilots emo (sadly)',
    'i have all of lemon demon on a cd, not burned, but just mp3 files',
    'once i sharted in a human hamster ball',
    'i really believe i am a werewolf',
    'i have a waterbottle covered in hentai stickers',
    'i hate colonizers',
    'im an anarcho communist',
    'i only got into lemon demon in 2019',
    'my favorite snack when i was little was famous amos cookies',
    'i could walk at an early age',
    'over quarantine i gained 20 pounds',
    ]
    
function aboutMe () {
    var randomNumber = Math.floor(Math.random() * (things.length));
    document.getElementById('myFacts').innerHTML = things[randomNumber];
}