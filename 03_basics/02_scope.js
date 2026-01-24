let a  = 300
if(true){
    let a = 10
    const b = 30
    //console.log(a);
    
}
//console.log(a)

function one(){
    const userName = "hitesh"
    function two(){
        const website = "youtube"
       // console.log(userName)
    }
    //console.log(website);
    two()
}
one()
if(true){
    const userName = "hitesh"
    if(userName==="hitesh"){
        const website = " youtube"
       // console.log(userName + website)
    }
    //console.log(website);
    
}
//console.log(userName);

// +++++++++++++++++++++++++++++++++++++++INTERESTING++++++++++++++++++++++++++++++
addOne(5);
function addOne(num){  // isme function call intialization se phle or baad dono tarah se kar sakte hai
    console.log(num+1)
}
addTwo(5)
const addTwo = function(num){  // jab is tarah se function declare karte hai tab intialization ke baad function call hona chahiye
    return num+2;
}