//Disemvowel Trolls
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

//Correct the date-string
function dateCorrect(ds) {
    if (!ds) return ds;
    const [d, m, y] = ds.split(".").filter(x => !Number.isNaN(+x));
    if (!y) return null;
    return new Date(+y, +m - 1, +d).toLocaleDateString("ro-RO")
}

//DNA to RNA Conversion
function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
}

//Fizz Buzz - Without ifs
const fizzBuzz = n => {
    return (n % 15 === 0 && "FizzBuzz") || 
           (n % 3 === 0 && "Fizz") || 
           (n % 5 == 0 && "Buzz") || 
           n
}