//write a simple tween object -2개만
var morphTween21 = KUTE.to(
     '#rectangle',  // target shape
   { path: '#cat' }, // from shape
   { // options
       easing: 'easingCubicInOut', 
       yoyo: true,
       repeat: 1, 
       duration: 2000,
       delay:0
      }
 )

 var morphTween22 = KUTE.to(
  '#rectangle',  // target shape
{ path: '#star' }, // from shape
{ // options
    easing: 'easingCubicInOut', 
    yoyo: true,
    repeat: 1, 
    duration: 2000,
    delay:0
   }
)

try{
  morphTween21.chain(morphTween22).start();
 // morphTween22.chain(morphTween21);
 
}catch(e){
	console.error(e+"TweenBase doesn\'t support chain method")
}


var morphall = document.getElementById('wrapper');
morphall.addEventListener('click', function(){
  if ( !morphTween21.playing && !morphTween22.playing ) {  
     morphTween21.start(); 
  } 
});