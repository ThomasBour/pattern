const pattern2 = /cl(é|ef)s|cl(é|ef)/ig

const phrase = `In french the word "key" used to be written "clef", but now it is written with an accent : "clé".
You might find medieval stories, such as the "clefs sanglantes de barbe bleue" and more recents ones "les clés du mystère"`

if(phrase.match(pattern2)){
    let newsentence2 = phrase.replace(pattern2, ":key:")
    console.log(newsentence2);
}