function isEvenlyDivisible(a, b) {
  // if a is evenly divisible by b
  //  if(a % b === 0){
  //   return true
  //  } else {
  //   return false
  //  }
  return a % b === 0
}

function halfSquare(num) { // ** is how you add an exponent
    return num ** 2 / 2
}

function isLong(str) {
  return str.length >= 15
}


function exclaim(str) {
  //loops
    const splitStr = str.split("")
    for(let i = str.length - 1; i >= 0; i--){ // this is how you make a for loop backwards 
      //check if there isn't an exclamation point
      if(str[i] !== "!"){
        return str + "!"
      } else if (splitStr[i - 1] === "!"){
       splitStr.pop()
        }else{
          return splitStr.join("")
        }
      }
}
"Hello, world!"
"Hello, world!!!"
"Hello, world"

function countWords(str) {
  let count = 0
  let words = false
  for(let i = 0; i < str.length; i++){
    let char = str[i]
    if(char !== " " && !words){
      count++
      words = true
    } else if(char === " ") {
      words = false
    }
  }
  return count
}

function containsDigit(str) {
  for(let i = 0; i < str.length; i++){
    let char = str[i]
    if(char >= '0' && char <= '9'){
        return true
      }
  }
  return false
}

function containsLowerCase(str) {
  for(let i = 0; i < str.length; i++){
    let char = str[i]
    if(char >= 'a' && char <= 'z'){
      return true
    }
  }
  return false
}

function containsUpperCase(str) {
  for(let i = 0; i < str.length; i++){
    let char = str[i]
    if(char >= 'A' && char <= 'Z'){
      return true
    }
  }
  return false
}

function containsNonAlphanumeric(str) {
  for(let i = 0; i < str.length; i++){
    let char = str[i]
    if(!(char >= 'a' && char <= 'z') && !(char >= 'A' && char <= 'Z') && 
    !(char >= '0' && char <= '9')){
      return true
    }
  }
  return false
}

function containsSpace(str) {
  for(let i = 0; i < str.length; i++){
    if(str[i] === ' '){
      return true
    }
  }
  return false
}

function digits(num) {
 let str = "" + num
 let result = []
 for(let i = 0; i < str.length; i++){
  let char = str[i]
  if(char >= '0' && char <= '9'){
    result.push(Number(char))
  }
}
return result
}

function truncate(str) {
   if(str.length >= 15){
    let shortStr = ''
    for(let i = 0; i < 8; i++){
      shortStr += str[i]
    }
    return shortStr + '...'
  } else {
    return str
  }
}

function isValidPassword(str) {
  if(!containsLowerCase(str)) return false
  if(!containsUpperCase(str)) return false
  if(!containsDigit(str)) return false
  if(!containsNonAlphanumeric(str)) return false
  if(containsSpace(str)) return false
  return true
}

function onlyPunchy(titles) {
  let result = []
  for(let i = 0; i < titles.length; i++){
    let title = titles[i]
    let lastRealChar = -1
    for(let j = 0; j <title.length; j++){
      if(title[j] !== '!'){
        lastRealChar = j
      }
    }
    let cleaned = ''
    for(let j = 0; j <= lastRealChar; j++){
      cleaned += title[j]
    }
    if(cleaned.length < 15){
      result.push(cleaned + '!')
    }
  }
  return result
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}
