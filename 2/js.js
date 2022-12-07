function Point3D(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
  }
var pt = new Point3D(0,0,0);
var p1 = new Point3D(4,6,9);
var p2 = new Point3D(7,1,9);

document.getElementById("def").innerHTML=`default =(${pt.x},${pt.y},${pt.z})`;
document.getElementById("p1").innerHTML=`p1 =(${p1.x},${p1.y},${p1.z})`;
document.getElementById("p2").innerHTML=`p2 =(${p2.x},${p2.y},${p2.z})`;

calculateDistance(p1,p2);

function calculateDistance(p1,p2){
    
var result=(p2.x-p1.x)*(p2.x-p1.x)-(p2.y-p1.y)*(p2.y-p1.y)-(p2.z-p1.z)*(p2.z-p1.z);
console.log(result);
console.log(p1);
console.log(typeof(p1));
console.log(JSON.parse(p1));
console.log(typeof(p1));
document.getElementById("des").innerHTML=result;

}
