
function count(stringone,stringtwo) {
    let count=0
    for (let i = 0; i < stringtwo.length; i++) {
        if (stringtwo[i] === stringone) {
            count++;
        }

        
    }
    return count;
    
}

  console.log(count("a", "fikrcamp")); 
  console.log(count("c", "bootcamp")); 
  console.log(count("o", "fikrcamp coding bootcamp")); 


