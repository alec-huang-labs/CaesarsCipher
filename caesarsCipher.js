function rot13(str) {
    let arr = str.split('');
    let letters = /[A-Z]/;
    let final = "";
    arr.map(function(val){
        if (letters.test(val)){
            if (val.charCodeAt(0) <= 77){
                final += String.fromCharCode(val.charCodeAt(0)+13);
            } else if (val.charCodeAt(0) >= 77){
                final += String.fromCharCode(val.charCodeAt(0)-13);
            }
        } else {
            final += val;
        }
    })
    console.log(final);
    return final;
  }
  rot13("SERR PBQR PNZC");
  rot13("SERR CVMMN!");
