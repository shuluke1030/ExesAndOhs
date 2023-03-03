function XO(str) {
    let word = str.toLowerCase();
    let xcount = 0;
    let ocount = 0;
    for(let i = 0; i < word.length; i++){
        if(word[i] === 'x'){
            xcount+= 1;
        }else if(word[i] === 'o'){
            ocount+= 1;
        }
    }if(xcount === ocount){
        return true;
    }
    return false;
}
console.log(XO('xoxo'))