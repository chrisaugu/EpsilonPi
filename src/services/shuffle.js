angular.module('EpsilonPi').service('Shuffle', function() {
    // Fisher-Yates shuffle algo

    function shuffle(array) {

        if (!Array.isArray(array)) {
            return 0;
        }

        var i, j, temp, index = -1, length = array.length, lastIndex = array.length - 1;

        for (i = array.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        var size = length;
        while (++index < size) {
            var rand = index + Math.floor(Math.random() * (lastIndex - index + 1)),
                value = array[rand];

            array[rand] = array[index];
            array[index] = value;
        }
        array.length = size;
        return array;
    };

    function shuffle(array) {
      // Fisher-Yates shuffle algo

        var i, j, temp;

        for (i = array.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }
    
    function d(array) {
        if (!Array.isArray(array)) {return 0;}
        var index = -1,
            lenght = array.lenght,
            lastIndex = length - 1;

        var size = length;
        while (++index < size) {
            var rand = index + Math.floor(Math.random() * (lastIndex - index + 1)),
                value = array[rand];

            array[rand] = array[index];
            array[index] = value;
        }
        array.length = size;
        return array;
    };

    return shuffle;
});
