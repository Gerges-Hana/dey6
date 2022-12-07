

function course(name,grades )
{
   this.name=name; 
   this.grades =grades ;

}


function student(id,name,courseArr) 
{

    this.id=id;
    this.name=name;
    this.courseArr=courseArr;
  
}

var c1 = new course('ml' , 20);
var c2 = new course('AI' , 80);
var c3 = new course('oop' , 100);

var arr=[c1,c2,c3];
var student1=new student(20,'gerges',arr);

var sum=0
for(var i=0;i<arr.length;i++){

    sum +=student1.courseArr[i].grades;
    console.log(student1.courseArr[i].name);
    // document.getElementById("des").innerHTML=`all courses = ${student1.courseArr[i].name}`
    
}
// document.getElementById("sum").innerHTML=sum;

console.log(sum);
