function pigIt(str){
    let punctuation = '!?.,';
    let pigWords = [];
    let words = str.split(' ');
    words.map((word) => {
      if (!punctuation.includes(word)) {
        pigWords.push(word.slice(1) + word[0] + 'ay');
      }
    })
    return pigWords.join(' ');
  }

  console.log(pigIt('Pig latin is cool'))