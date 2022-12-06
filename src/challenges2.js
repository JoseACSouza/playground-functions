// Desafio 11 - Crie a função generatePhoneNumber

const generatePhoneNumber = (phoneArray) => {
  let repetition = [];
  let fourthNumber=[];
  let lastNumbers = [];
  if(phoneArray.length != 11){
      return 'Array com tamanho incorreto';
  } else {
      for(let index = 0; index < phoneArray.length; index +=1 ){
          repetition[index] = 0;
          if(phoneArray[index] < 0 || phoneArray[index] > 9){
              return `não é possível gerar um número de telefone com esses valores`;
          }
          for(let count = 0; count< phoneArray.length; count+=1){
              if(phoneArray[index]=== phoneArray[count]){
                  repetition[index] +=1;
              }
          }
      }
  }
  for (let index = 0; index < repetition.length; index+=1){
      if(repetition[index]>=3){
          return `não é possível gerar um número de telefone com esses valores`;
      }
  }
  for (let index = 2; index < 6; index+=1){
      fourthNumber.push(phoneArray[index]);
  }
  for (let index = 6; index < 10; index+=1){
      lastNumbers.push(phoneArray[index]);
  }
return `(${phoneArray[0]}${phoneArray[1]}) ${fourthNumber.join('')}-${lastNumbers.join('')}`
}

// Desafio 12 -  Crie a função triangleCheck

const triangleCheck= (lineA, lineB, lineC) =>{
  if(((lineA < lineB + lineC)&& lineA > Math.abs(lineB-lineC))||((lineB < lineA + lineC)&& lineB > Math.abs(lineA-lineC))||((lineC < lineB + lineA)&& lineC > Math.abs(lineB-lineA))){
      return true;
  } else if ((lineA < lineB + lineC)&&(lineB < lineA + lineC)&&(lineC < lineB + lineA)){
      return true;
  } else {return false}
}

// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
