window.setTimeout(function(){
    const dynamicHeading = document.getElementById("dynamic-typing");
    const timer = dynamicHeading.dataset.timeout;
    const wordList = JSON.parse(dynamicHeading.dataset.words);
    const maxIndex = wordList.length - 1;
    let actualIndex = 0;
    let letterIndex = 0;
    if (!dynamicHeading) return;
    
    const timed = function(){
        let actualWord = wordList[actualIndex];
        const maxLetterIndex = actualWord.length -1;
        let actualWordLetter = actualWord[letterIndex];
            dynamicHeading.innerText += actualWordLetter;
            letterIndex++;
            
            if (letterIndex > maxLetterIndex) {
                letterIndex = 0;
                
                actualIndex++;
                if (actualIndex > maxIndex) {
                    dynamicHeading.innerHTML +=".";
                    clearInterval(clearer);
                }
                else{
                    dynamicHeading.innerHTML +=",&nbsp;";
                }
            }
            
    };
    
    const clearer = window.setInterval(timed, timer);

}, 1000);