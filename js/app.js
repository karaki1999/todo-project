function myFunction()
{
    question();
} 
function question()
{
    questionArray = ["You Like football ?", "Are you an athlete ?", "Are you a gamer ?"]    
    for (let i = 0; i < questionArray.length; i++)
    {
        let x = prompt(questionArray[i]);
        fillArray(x, i);
    }
}
function fillArray(x, i)
{
    entryAnswer = [];
    if (x.toUpperCase() == "YES" || x.toUpperCase() == "NO" )
    {
        entryAnswer[i] = x;
        console.log(entryAnswer[i]);
    }
    else
    {
        entryAnswer[i] = "invalid";
        console.log(entryAnswer[i]);
    }
}