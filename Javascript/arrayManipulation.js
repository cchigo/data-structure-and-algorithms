
function solution(n, queries){
    //create an array of n and fill it with zeros
 let resultArr = new Array(n).fill(0);

console.log(resultArr);

for(let i of queries){//in kotlin use in
    console.log(i)

//turning the 1-index array to zero
    let start = i[0] -1 //returning the value at a
    let stop = i[1] -1 //returning the value at b
    let k = i[2] // returning the value of k

    for(let j = start; j<=stop; j++ ){
        resultArr[j] += k
    }
}
    return Math.max(...resultArr)

}


console.log(solution(5, [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100]

]))