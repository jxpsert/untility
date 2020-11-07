module.exports = class randomUtilities {
    fromArray(array) {
        if(!array.isArray) throw new Error("Expected Array, got " + typeof array);
        if(array.length <= 1) return array[0];
        return array[(Math.round(Math.random() * array.length))];
    }
    number(min = 0, max) {
        if(typeof min != 'number' || typeof max != 'number') throw new Error("Expected Number, got NaN");
        return Math.round((Math.random() * max - 1)+min);
    }
}