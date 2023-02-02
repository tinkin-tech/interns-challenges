const minMax = (numbers) => {
   const arrayReturn = [];
   const numberMin = Math.min(...numbers);
   const numberMax = Math.max(...numbers);

   arrayReturn.push(numberMin);
   arrayReturn.push(numberMax);

   return arrayReturn;
}

console.log(minMax([2334454, 5]));