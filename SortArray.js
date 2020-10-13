function solve(array, string) {
    function sortRequirement(string) {
        if (string == 'asc') {
            return (a, b) => a - b;
        }
        else {
            return (a, b) => b - a;
        }
    }
    let sortFunction = sortRequirement(string);
    let resultArray = array.sort(sortFunction);
    return (resultArray);
}
function argumentInfo(...args) {
    let result ={} 
    args.forEach(element => {
        let type = typeof (element);
        console.log(`${type}: ${element}`);
        if (!(type in result)) {
           result[type]=0;
        }
       result[type]++;
    });
   
    for (const key in result) {
        console.log(`${key} = ${result[key]}`)
    };
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });