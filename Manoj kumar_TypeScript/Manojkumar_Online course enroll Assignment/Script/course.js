var userIDAutoincrement = 1011;
var CusIdAutoincrement = 101;
var CurrentUser = "";
var User = /** @class */ (function () {
    function User(Name, Age, PhoneNumber) {
        userIDAutoincrement++;
        this.UserId = "OC" + userIDAutoincrement;
        this.UserName = Name;
        this.UserAge = Age;
        this.UserPhonenumber = PhoneNumber;
    }
    return User;
}());
var Enrollcourses = /** @class */ (function () {
    function Enrollcourses(course, required, userID) {
        this.courseName = course;
        this.requiredDays = required;
        this.UserId = userID;
        this.Cusid = "CI" + CusIdAutoincrement;
    }
    return Enrollcourses;
}());
var EnrollList = new Array();
var userList = new Array();
function userregistration() {
    document.getElementById('main').style.visibility = "hidden";
    document.getElementById('Registration').style.visibility = "visible";
    document.getElementById('login').style.visibility = "hidden";
    document.getElementById('Available').style.visibility = "hidden";
    document.getElementById('AvailableCourses').style.visibility = "hidden";
    document.getElementById('Enroll').style.visibility = "hidden";
}
function login() {
    document.getElementById('main').style.visibility = "hidden";
    document.getElementById('Registration').style.visibility = "hidden";
    document.getElementById('login').style.visibility = "visible";
    document.getElementById('Available').style.visibility = "hidden";
    document.getElementById('AvailableCourses').style.visibility = "hidden";
    document.getElementById('Enroll').style.visibility = "hidden";
}
function add() {
    var name = document.getElementById('name').value;
    var age = (document.getElementById('age').value);
    var mobilenumber = document.getElementById('number').value;
    var user = (new User(name, +age, +mobilenumber));
    userList.push(user);
    alert("your registration process is complete your user id is: " + user.UserId);
    document.getElementById('main').style.visibility = "visible";
    document.getElementById('Registration').style.visibility = "hidden";
    document.getElementById('login').style.visibility = "hidden";
    document.getElementById('Available').style.visibility = "hidden";
    document.getElementById('AvailableCourses').style.visibility = "hidden";
    document.getElementById('Enroll').style.visibility = "hidden";
}
function Validation() {
    var userId = (document.getElementById('validation').value);
    for (var i = 0; i < Array.length; i++) {
        if (userList[i].UserId == userId) {
            CurrentUser = userList[i].UserId;
            alert('Hello' + userList[i].UserName);
            document.getElementById('main').style.visibility = "hidden";
            document.getElementById('Registration').style.visibility = "hidden";
            document.getElementById('login').style.visibility = "hidden";
            document.getElementById('Available').style.visibility = "visible";
            document.getElementById('AvailableCourses').style.visibility = "hidden";
            document.getElementById('Enroll').style.visibility = "hidden";
        }
    }
}
function Availablecourses() {
    document.getElementById('main').style.visibility = "hidden";
    document.getElementById('Registration').style.visibility = "hidden";
    document.getElementById('login').style.visibility = "hidden";
    document.getElementById('Available').style.visibility = "hidden";
    document.getElementById('AvailableCourses').style.visibility = "visible";
    document.getElementById('Enroll').style.visibility = "hidden";
}
function Enrolled() {
    var courselist = document.getElementById('userchoice');
    document.getElementById('main').style.visibility = "hidden";
    document.getElementById('Registration').style.visibility = "hidden";
    document.getElementById('login').style.visibility = "hidden";
    document.getElementById('Available').style.visibility = "hidden";
    document.getElementById('AvailableCourses').style.visibility = "hidden";
    document.getElementById('Enroll').style.visibility = "visible";
    var count = 0;
    var details = "";
    var duration = 0;
    for (var i = 0; i < EnrollList.length; i++) {
        if (CurrentUser == EnrollList[i].UserId) {
            duration = duration + EnrollList[i].requiredDays;
            details = count + EnrollList[i].courseName + ",";
            count++;
        }
    }
    var printdetails = "number of courses: " + details + "and the no of courses you enroll" + count.toString() + "no of days required " + duration.toString();
    document.getElementById("course").innerHTML = printdetails;
}
function Enroll() {
    alert('you have joned a course sucessfully');
    var courseList = document.getElementById('userchoice').value;
    var details = document.getElementById('details').value;
    var CourseName = new Enrollcourses(courseList, +details, CurrentUser);
    EnrollList.push(CourseName);
    alert("you have been enroll the course successfully and your course id is: " + CourseName.Cusid);
    alert("You have " + +"days to complete your courses");
    document.getElementById('main').style.visibility = "visible";
    document.getElementById('Registration').style.visibility = "hidden";
    document.getElementById('login').style.visibility = "hidden";
    document.getElementById('Available').style.visibility = "hidden";
    document.getElementById('AvailableCourses').style.visibility = "hidden";
    document.getElementById('Enroll').style.visibility = "hidden";
}
function submit() {
    document.getElementById('main').style.visibility = "visible";
    document.getElementById('Registration').style.visibility = "hidden";
    document.getElementById('login').style.visibility = "hidden";
    document.getElementById('Available').style.visibility = "hidden";
    document.getElementById('AvailableCourses').style.visibility = "hidden";
    document.getElementById('Enroll').style.visibility = "hidden";
}
