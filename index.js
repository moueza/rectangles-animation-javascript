(
function(){
console.log("in consol v13");
  // jQuery methods go here...
document.getElementById("div1").innerHTML = "Hello JavaScript!";
  
  //https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
  const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);
}
)();
