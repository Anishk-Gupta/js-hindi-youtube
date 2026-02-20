function outer(){
    let name = "anishk"
    function inner(){
        console.log(name)
    }
    return inner
}
const callMe = outer()
callMe()


// yaha samjne ki baat ye hai ki outer function inner function ka refrence return kar rha hai aur wo call me ke andar 
// ja rha hai lekin keval inner loop ka hi refrence nhi ja rha rha balki pura lexical scope ja rha hai matlab outer bhi
// tab hi to name print ho rha hai kyonki inner loop ke andar to name ki koi property hai lekin outer bhi sath me ja rha hai
// isliye possible hai
