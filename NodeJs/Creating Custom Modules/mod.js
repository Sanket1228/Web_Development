console.log("This is mode ");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}

// module.exports = {
//     avg : average,
//     name : "Sanket",
//     repo : "GitHub" 
// }

module.exports.name = "Sanket"