function getsumset (id) {

    var str = document.getElementById(id).value, i;
    str = str.replace(",",".");
    str = str.replace(/[^0-9. ]+/g,"");
    str = str.split(/\s+\s*/);

    var arr = [];

    for ( i = 0; i < str.length; i += 1) {

        if (!isNaN(parseFloat(str[i]))) {

            console.log(str[i])
            arr.push(parseFloat(str[i]))
        }
    }

    return arr;
}

function getexpectedvalue (id) {

    var str = document.getElementById(id).value;
        str = str.replace(",","."),
        val = parseFloat(str);

    return val;
}

function gettol (id) {

    var str = document.getElementById(id).value;
    str = str.replace(",",".");
    var val = parseFloat(str);

    if (isNaN(val)) {
        return 0;
    }

    return val;
}

function solver(sum_set) {

    "use strict";

    var i, j,  
        len_n = sum_set.length,
        iter = 0,
        arr_sol = [],
        mask = 0,
        sum_;
    
    for (i = 0; i < (Math.pow(2, len_n) - 1); i += 1) {
        
        var solution = [];
        //Apply binary mask to solution
        for (j = 0; j < len_n; j += 1) {
            mask = i >> j & 1;
            solution.push(mask * sum_set[j]);
        }
        
        sum_ = solution.reduce(function(acc, val) { return acc + val; }, 0); //Sum of all elements
    
        arr_sol.push([sum_,[solution]]);
    }

    return arr_sol;
}

function find_solution_range (arr, value, tol) {

    var new_arr = [];

    if (isNaN(value)) {
        return arr;
    }

    for (var i = 0; i < arr.length; i += 1) {

        if (arr[i][0] <= value + tol && arr[i][0] >= value - tol) {
            new_arr.push(arr[i])
        }
    }

    return new_arr;
}

function printer (arr) {

    var i,
        str = "";
    
    for ( i = 0; i < arr.length ; i += 1 ) {
        str += arr[i][0].toString() + "<br>" + "[" + arr[i][1].toString() + "]<br>";
    }
    
    return str;
}

function main() {

    "use strict";

    var id_sumset = "sumset",
        id_expectedvalue = "expectedvalue",
        id_tol = "tolerance",
        sum_set = getsumset(id_sumset),
        expectedvalue = getexpectedvalue(id_expectedvalue),
        tol = gettol(id_tol);

    var result = find_solution_range(solver(sum_set), expectedvalue, tol);
    document.getElementById("demo").innerHTML = printer(result);

}

main();
