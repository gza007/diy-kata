const humanCatDogYears = (number) => {
    let Human = number;
    let Cat = 24+((number-2)*4);
    let Dog = 24+((number-2)*5);
    if (number <= 0) {
        return [0, 0, 0];
    } else {
        return [Human, Cat, Dog];
    };
};

// formulas
// 15+9+((number-2)*4) = cat
// 24+((number-2)*4) = cat

// change 4 to 5 for the Dog

 
module.exports = humanCatDogYears;
