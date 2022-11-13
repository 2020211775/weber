 #level 1
 const ob = {}
 var ob = {}
 let ob = {}
 var ob = new obect()
 function fun(uname,age,sex)
 {
     this.name = uname;
     this.age = age;
     this.sex = sex;
 }
 
 #level 2
 function add(b)
{
    switch(b)
    {
        case 1:
            console.log(1);
            break;
        case 2:
            console.log(2);
            break;
        case 3:
            console.log(3);
            break;
        case 4:
            console.log(4);
            break;
    }

}

for(var j = 1; j < 5; j++)
{
    add(j)
}