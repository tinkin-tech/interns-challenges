
function minMax(arr) {

    let min;
    let max;

    arr.forEach((item) => {
        
        min = item;
        max = item;

        arr.forEach((elem) => {

            if(elem <= min) {
                min = elem;
            }
            if(elem >= max) {
                max = elem;
            }

        })
        
    });

    return [min, max];

}

console.log(minMax([2334454, 5]));