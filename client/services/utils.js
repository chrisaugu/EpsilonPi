
function generateUid() {
    function s4() {
        return Math.floor(( 1 + Math.random() ) * 0x10000).toString(16).substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substr(1);
}

function capitalizeAll(string) {
    var words = string.trim().split(" ");

    for (var i = 0; i < words.length; i++) {
        words[i] = capitalize(words[i]);
    }

    return words.join(" ");
}

function isObjectEmpty(obj) {
    var prop;

    for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }

    return true;
}

function matchObject(sourceObj, objToMatch) {
    var obj = {},
        key;

    if (typeof sourceObj === "object" && sourceObj !== null && typeof objToMatch === "object" && objToMatch !== null) {
        for (key in objToMatch) {
            if (objToMatch.hasOwnProperty(key)) {
                if (typeof sourceObj[key] !== "undefined") {
                    obj[key] = sourceObj[key];
                }
            }
        }
    }

    return obj;
}

function sizeToString(bytes) {
    var size, unit,
        sizeString;

    bytes = parseInt(bytes);

    if (isNaN(bytes)) {
        sizeString = "";
    }
    else if (bytes < 100) {
        size = bytes;
        unit = "B";
    }
    else if (bytes < 100 * 1024) {
        size = bytes / 1024;
        unit = "KB";
    }
    else if (bytes < 100 * 1024 * 1024) {
        size = bytes / ( 1024 * 1024 );
        unit = "MB";
    }
    else {
        size = bytes / ( 1024 * 1024 * 1024 );
        unit = "GB";
    }

    if (typeof size !== "undefined") {
        // round to 1 decimal point
        size = Math.round(size * 10) / 10;

        sizeString = size + unit;
    }

    return sizeString;
}

function isValidDate(year, month, day) {
    var date,
        months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
        monthIndex,
        isValid = true;

    year = parseInt(year);

    monthIndex = months.indexOf(month);
    if (monthIndex != -1) {
        month = monthIndex;
    }
    month = parseInt(month);

    day = parseInt(day);

    if (isNaN(year) || isNaN(month) || isNaN(day)) {
        isValid = false;
    }
    else {
        date = new Date(year, month, day);

        if (date.getFullYear() != year) {
            isValid = false;
        }
        else if (date.getMonth() != month) {
            isValid = false;
        }
        else if (date.getDate() != day) {
            isValid = false;
        }
    }

    return isValid;
}

function getWordByCount(word, count) {
    var result = "";

    if (count === 0) {
        result = "No " + word + "s";
    }
    else if (count == 1) {
        result = "1 " + word;
    }
    else {
        result = count + " " + word + "s";
    }

    return result;
}

function randomInRange(from, to) {
    return from + Math.floor(Math.random() * ( to - from + 1 ));
}
function getRandomInRange( n1, n2 ) {
    return n1 + Math.floor( Math.random() * ( n2 - n1 + 1 ) );
}

function gifInFavorite ( userData, id ) {
    var isFavorite = false;
    
    if ( userData  && userData.indexOf( id ) != -1 ) {
        isFavorite = true;
    }
    
    return isFavorite;
}

var Utils = {
    generateUid: generateUid,
    capitalize: capitalize,
    capitalizeAll: capitalizeAll,
    isObjectEmpty: isObjectEmpty,
    matchObject: matchObject,
    sizeToString: sizeToString,
    isValidDate: isValidDate,
    getWordByCount: getWordByCount,
    randomInRange: randomInRange,
    getRandomInRange: getRandomInRange,
    gifInFavorite: gifInFavorite
};
