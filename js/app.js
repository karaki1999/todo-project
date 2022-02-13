function myFunction() {
    var name, gender, age, answer;
    name = prompt("Please Enter Your Name : ");
    console.log("Name : ", name);
    gender = prompt ("Please Enter Your Gender : ")
    age = prompt("please Enter Your Age : ")
    if (age <= 0)
    {
    alert (age, "age is less than or equal to zero")
    }
    else
    {
        console.log("Age : ", age)
    }
    answer = confirm("Confirm if you wants to skip the welcoming message");
    //answer = prompt("Confirm if you want to skip welcoming message - \"confirm\" :")
debugger;
    switch(answer) {
        case true : break;
        default :
        if (gender == "male" || gender == "female")
        {
            if (gender == "male")
            {
                gender = "Mr";
                alert ("Welcome To Our Web Site " + gender +". " + name);
                console.log("Welcome To Our Web Site " + gender +". " + name);
            }
            else
            {
                gender = "Ms"
                alert ("Welcome To Our Web Site " + gender +". " + name);
                console.log("Welcome To Our Web Site " + gender +". " + name);
            } 
            
        }
        else{
            alert("Welcome To Our Web Site");
        }
        break;
    }
}