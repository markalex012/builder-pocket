(function(root){
const rad=Math.PI/180;
function normalize(a){return(a%360+360)%360}
function calculate(beta,gamma,screen=0){const b=beta*rad,g=gamma*rad,s=screen*rad;const x=Math.cos(b)*Math.sin(g),y=Math.sin(b),z=Math.cos(b)*Math.cos(g);const sx=x*Math.cos(s)+y*Math.sin(s),sy=-x*Math.sin(s)+y*Math.cos(s);return{x:Math.atan2(sx,Math.hypot(sy,z))/rad,y:Math.atan2(sy,Math.hypot(sx,z))/rad,faceUp:z>0}}
const api={normalize,calculate};root.sensorMath=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window==='undefined'?globalThis:window);
