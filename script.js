document.getElementById("btn").addEventListener('onclick',gen())
console.log('hi')
function gen(){
    var hex=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'],col='#',i,x;
    for(i=0;i<6;i++){
        x=hex[Math.round(Math.random()*15)]
        col += x;
    }
    document.getElementById("box").style.backgroundColor = col;
    document.getElementById("txt").style.backgroundColor = col;
}