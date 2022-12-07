
var cartoona=0
function box(width,height,booksNumber)
{
   this.width=width; 
   this.height=height;
   this.booksNumber=booksNumber;
//    sum 

    // area 
    var area=width*height;
    document.getElementById("area").innerHTML=area;

}


function Book(id,name,writeName,numOfPages) 
{

    this.id=id;
    this.name=name;
    this.writeName=writeName;
    this.numOfPages=numOfPages;
    console.log(this.numOfPages)
  
}

var Book1 = new Book(1 , 'gerBook' , 'gerges', 20);
var Book2 = new Book(7 , 'gerBook' , 'gerges', 20);

var arr=[Book1,Book2];
var box1=new box(20,20,arr);
// console.log(box1);
// console.log(Book1);

var sum=0
for(var i=0;i<arr.length;i++){

    sum +=box1.booksNumber[i].numOfPages;
    
}
document.getElementById("sum").innerHTML=sum;

console.log(sum);
