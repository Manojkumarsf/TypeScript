let userIDAutoincrement=1011;
let CusIdAutoincrement=101;
let CurrentUser="";
class User
{
UserId:string;
UserName:string;
UserAge:number;
UserPhonenumber:number;
constructor(Name: string, Age: number, PhoneNumber: number)
{
    userIDAutoincrement++;
    this.UserId = "OC"+ userIDAutoincrement;
    this.UserName = Name;
    this.UserAge = Age;
    this.UserPhonenumber = PhoneNumber;
}

}
class Enrollcourses
{
    Cusid:string;
    courseName:string
    requiredDays:number
    UserId:string;
    constructor(course:string,required:number ,userID:string) {
        this. courseName = course;
        this.  requiredDays =required;
        this.UserId=userID;
        this.Cusid="CI"+CusIdAutoincrement;
    }
}
let EnrollList: Array<Enrollcourses> = new Array<Enrollcourses>();
let userList:Array<User>=new Array<User>();
function userregistration()
{
    (document.getElementById('main')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('Registration')as HTMLDivElement).style.visibility="visible";
    (document.getElementById('login')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('Available')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('AvailableCourses')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('Enroll')as HTMLDivElement).style.visibility="hidden";
}
function login()
{
    (document.getElementById('main')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('Registration')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('login')as HTMLDivElement).style.visibility="visible";
    (document.getElementById('Available')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('AvailableCourses')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('Enroll')as HTMLDivElement).style.visibility="hidden";
}
function add()
{
    let name=(document.getElementById('name')as HTMLInputElement).value;
    let age=((document.getElementById('age')as HTMLInputElement).value);
    let mobilenumber=(document.getElementById('number')as HTMLInputElement).value;
    var user=(new User(name,+age,+mobilenumber));
    userList.push(user);
    alert("your registration process is complete your user id is: " +user.UserId);
    (document.getElementById('main')as HTMLDivElement).style.visibility="visible";
    (document.getElementById('Registration')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('login')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('Available')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('AvailableCourses')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('Enroll')as HTMLDivElement).style.visibility="hidden";
}
function Validation()
{
     let userId=((document.getElementById('validation')as HTMLInputElement).value);
    for (let i = 0; i < Array.length; i++) 
   {
        
        if (userList[i].UserId== userId)
        { 
            CurrentUser = userList[i].UserId;
            alert('Hello '+userList[i].UserName);
            (document.getElementById('main')as HTMLDivElement).style.visibility="hidden";
            (document.getElementById('Registration')as HTMLDivElement).style.visibility="hidden";
            (document.getElementById('login')as HTMLDivElement).style.visibility="hidden";
            (document.getElementById('Available')as HTMLDivElement).style.visibility="visible";
            (document.getElementById('AvailableCourses')as HTMLDivElement).style.visibility="hidden";
            (document.getElementById('Enroll')as HTMLDivElement).style.visibility="hidden"; 

        }
       
   }
       
}
function Availablecourses()
{
    (document.getElementById('main')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('Registration')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('login')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('Available')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('AvailableCourses')as HTMLDivElement).style.visibility="visible";
    (document.getElementById('Enroll')as HTMLDivElement).style.visibility="hidden";
}
                     
function Enrolled()
{
    let courselist = document.getElementById('userchoice') as HTMLSelectElement;
    (document.getElementById('main')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('Registration')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('login')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('Available')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('AvailableCourses')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('Enroll')as HTMLDivElement).style.visibility="visible";
    let count:number=0;
    let details:string="";
    let duration:number=0;
    for(let i=0;i<EnrollList.length;i++)
    {
        if(CurrentUser==EnrollList[i].UserId)
        {
            duration=duration+EnrollList[i].requiredDays;
            details=count+EnrollList[i].courseName+",";
            count++;
        }
    }
    let printdetails:string="number of courses: "+details+"and the no of courses you enroll"+count.toString()+"no of days required "+duration.toString()
    document.getElementById("course").innerHTML=printdetails;
}
function Enroll()
{
    alert('you have joned a course sucessfully');
    let courseList = (document.getElementById('userchoice') as HTMLInputElement).value;
    var details=(document.getElementById('details')as HTMLInputElement).value;
    let CourseName =new Enrollcourses(courseList,+details,CurrentUser)
    EnrollList.push(CourseName);
    alert("you have been enroll the course successfully and your course id is: "+CourseName.Cusid);
   
    alert("You have "+ + "days to complete your courses");
    (document.getElementById('main')as HTMLDivElement).style.visibility="visible";
    (document.getElementById('Registration')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('login')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('Available')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('AvailableCourses')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('Enroll')as HTMLDivElement).style.visibility="hidden";
  
}

    

function submit()
{
   
    (document.getElementById('main')as HTMLDivElement).style.visibility="visible";
    (document.getElementById('Registration')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('login')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('Available')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('AvailableCourses')as HTMLDivElement).style.visibility="hidden";
    (document.getElementById('Enroll')as HTMLDivElement).style.visibility="hidden";
  
  

}
