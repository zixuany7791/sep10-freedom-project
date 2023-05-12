window.onresize = windowSize;
window.onload = windowSize;

function windowSize() {
  let myWidth = window.innerWidth;
  console.log(myWidth)
  //document.getElementById("screen").innerHTML = myWidth + "x" + myHeight;

  if(myWidth > 992){
    document.querySelector('sidebar').style.display = "block";
    document.querySelector('#nav').style.display = "none";
  } else {
    document.querySelector('sidebar').style.display = "none";
    document.querySelector('#nav').style.display = "block";
  }

};