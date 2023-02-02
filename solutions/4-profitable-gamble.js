const profitableGamble = (prob, prize, pay) => {
   return (prob * prize) > pay;
}

console.log(profitableGamble(0.9, 3, 2));