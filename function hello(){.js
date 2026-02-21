function hello(){
alert("Welcome to Shreyank Thakur's Website 🚀");
}

const text="Hi, I'm Shreyank Thakur";
let i=0;

function typing(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,80);
}
}
typing();