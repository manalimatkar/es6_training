

const max = getMax(numbers);
max;

const strings = ['john','marry','jil','David','sameer','man'];

function filterStr(strings) {
    let longestName;
    let nameLen = 0;
    strings.forEach(str => {
        if(str.length > nameLen){
            nameLen = str.length;
            longestName = str;
        }
    });   
    return longestName 
}

const longestName = filterStr(strings)
longestName