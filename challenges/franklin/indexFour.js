function profitableGamble(prob, prize, pay) {
    return prob * prize > pay > 0 ? true : false;
}

console.log(profitableGamble(0.9, 1, 2));