console.log("Hello.")

function filter(v, f){
    let result = []
    for(let i =0; i < v.length; i++){
        if(f(v[i])){
            result.push(v[i]);
        }
    }
    return result;
}

console.log(filter([1,2,1], c => c > 1));

function map(v, f){
    let result = []
    for(let i = 0; i < v.length; i++){
        result.push(f(v[i]))
    }
    return result;
}

console.log(map([1,2,3], c => c*2) );