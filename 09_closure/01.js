// lexical scoping => inner function outer function ke jitne bhi variables hai un sabhi ko access kar pata hai

function outer(){
    let name = "anishk"
    function inner(){
        console.log(name)
    }
    inner()
}
outer()