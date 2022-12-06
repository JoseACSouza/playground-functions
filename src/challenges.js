// Desafio 1 - Crie a função compareTrue
const compareTrue = (animal1, animal2) => {
  if (animal1 === true && animal2 === true){
      return true;
  } else {return false};
}
// Desafio 2 - Crie a função splitSentence
const splitSentence = (sentence) => {
  const splitedSentence = sentence.split(' ');
  return splitedSentence; 
}
// Desafio 3 - Crie a função concatName
const concatName = (array) => `${array[array.length-1]}, ${array[0]}`;

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, tie) => (wins*3)+tie;

// Desafio 5 - Crie a função highestCount
const highestCount = (numbers) =>{
  let highestNumber = Number.NEGATIVE_INFINITY;
  let repetition = 0;
  for(let index = 0; index < numbers.length; index += 1){
      if(numbers[index] >= highestNumber){
          highestNumber = numbers[index];
      }
  }
  for(let index = 0; index < numbers.length; index += 1){
      if(numbers[index] == highestNumber){
          repetition += 1;
      }
  }
return repetition;    
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height) => base*height/2;
const calcRectangleArea = (base, height) => base*height;
const calcAllAreas = (base, height, form)=>{
    if (form == 'triângulo'){
        return `O valor da área do triângulo é: ${calcTriangleArea(base, height)}`
    } else if (form == 'retângulo'){
        return `O valor da área do retângulo é: ${calcRectangleArea(base, height)}`
    } else {return `Não foi possível fazer o cálculo, insira uma forma geométrica válida.`}
}

// Desafio 7 - Crie a função catAndMouse

const catAndMouse = (mouse, cat1, cat2) => {
  let position = [0,0]; // position[0] = cat1, position[1] = cat2 
      if ((mouse >= cat1) && (mouse >= cat2)){
          position[0] = mouse-cat1;
          position[1] = mouse-cat2;
      } else if((mouse <= cat1) && (mouse <= cat2)){
          position[0] = cat1-mouse;
          position[1] = cat2-mouse;
      } else if((mouse >= cat1) && (mouse <= cat2)){
          position[0] = mouse-cat1;
          position[1] = cat2-mouse;
      } else if((mouse <= cat1) && (mouse >= cat2)){
          position[0] = cat1-mouse;
          position[1] = mouse-cat1;
      }
      if (position[0] < position[1]){
          return `cat1`
      } else if (position[1] < position[0]){
          return `cat2`
      } else { return `os gatos trombam e o rato foge` }
  }

// Desafio 8 - Crie a função fizzBuzz

const fizzBuzz = (numberArray) =>{
  let result = [];
  for(let index =0; index < numberArray.length; index+=1){
      result[index]='';
      if (numberArray[index]%3===0 && numberArray[index]%5===0){
          result[index]='fizzBuzz';
      } else if (numberArray[index]%3===0){
          result[index]='fizz';
      } else if (numberArray[index]%5===0){
          result[index]='buzz';
      } else {result[index]='bug!';}
  }
return result;
}

// Desafio 9 - Crie a função encode e a função decode

const encode = (string) =>{
  let splitedString = string.split('')
  let result = [];
  for(let index = 0; index < string.length; index += 1 ){
      result[index] = '';
      if(splitedString[index] == 'a'){
          result[index] = 1;
      } else if(splitedString[index] == 'e'){
          result[index] = 2;
      } else if(splitedString[index] == 'i'){
          result[index] = 3;
      } else if(splitedString[index] == 'o'){
          result[index] = 4;
      } else if(splitedString[index] == 'u'){
          result[index] = 5;
      } else {result[index] = splitedString[index]}
  }
return result.join('')
}
const decode = (string) =>{
  let splitedString = string.split('')
  let result = [];
  for(let index = 0; index < string.length; index += 1 ){
      result[index] = '';
      if(splitedString[index] == '1'){
          result[index] = 'a';
      } else if(splitedString[index] == '2'){
          result[index] = 'e';
      } else if(splitedString[index] == '3'){
          result[index] = 'i';
      } else if(splitedString[index] == '4'){
          result[index] = 'o';
      } else if(splitedString[index] == '5'){
          result[index] = 'u';
      } else {result[index] = splitedString[index]}
  }
return result.join('')
}

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
