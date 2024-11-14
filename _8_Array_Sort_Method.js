let a = [9,2,6,4,35,465,523]
let compare = (a,b) => {
    // console.log(a-b)         // for ascending
    // console.log(b-a)            // for descending
    return a-b
}
a.sort(compare)
console.log(a)