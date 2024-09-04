function fibonacciNunber (number){
    let a = 0;
    let b = 1;

    if (number === a || number === b) {
        return true;
    }

    for (let i = 2; i <= number; i++){
        let c = a + b;

        if (c ===number) {
            return true;
        }

        a = b;
        b = c;

        if (c > number) {
            break;
        }

      return false;

    }
}

let infoNumber = 21;

  if (fibonacciNunber(infoNumber)) {
    console.log(`${infoNumber} pertence a sequência!`);
  } else {
    console.log(`${infoNumber} não pertence a sequência!`);
  }

  //Questão 2//

  function checkLetter(text) {
    let cont = 0;
    let minText = text.toLowerCase();
  
    for (let i = 0; i < minText.length; i++) {
      if (minText[i] === 'a') {
        cont++;
      }
    }
  
    if (cont > 0) {
      console.log(`A letra "a" aparece ${cont} vezes na string.`);
    } else {
      console.log(`A letra "a" não aparece na string.`);
    }
  }
  
  let text = "Gostaria muito de ganhar esta oportunidade!";
  checkLetter(text);

  // Questão 3 //

let ind = 12;
let sum = 0;

   for(let k = 1; k < ind; k++) {
    sum = sum + (k + 1);
   }

console.log(sum)   


// Questão 4 //

let a = [1, 3, 5, 7];
let nextA = a[a.length - 1] + 2; 
console.log(nextA); 

let b = [2, 4, 8, 16, 32, 64];
let nextB = b[b.length - 1] * 2; 
console.log(nextB);

let c = [0, 1, 4, 9, 16, 25, 36];
let nextC = Math.pow(c.length, 2); 
console.log(nextC); 

let d = [4, 16, 36, 64];
let nextD = Math.pow((d.length + 1) * 2, 2);
console.log(nextD); 

let e = [1, 1, 2, 3, 5, 8];
let nextE = e[e.length - 1] + e[e.length - 2]; 
console.log(nextE); 3

let f = [2, 10, 12, 16, 17, 18, 19];
let nextF = 200; 
console.log(nextF); 

//Questão 5//

function verifyLamps() {
   
    let lamps = {
        lamp1: { lit: false, hot: false },
        lamp2: { lit: false, hot: false },
        lamp3: { lit: false, hot: false }
    };

   
    lamps.lamp1.lit = true;
    lamps.lamp1.hot = true;

 
    lamps.lamp1.lit = false;
    lamps.lamp2.lit = true;

   
    if (lamps.lamp2.lit) {
        console.log("A Lampada 2 está conectada ao Interruptor 2.");
    }

    if (!lamps.lamp1.lit && lamps.lamp1.hot) {
        console.log("A Lampada 1 está conectada ao Interruptor 1.");
    }

    if (!lamps.lamp3.lit && !lamps.lamp3.hot) {
        console.log("A Lampada 3 está conectada ao Interruptor 3.");
    }
}

verifyLamps();