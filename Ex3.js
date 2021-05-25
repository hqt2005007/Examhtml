function textContent(Text,select,random)
{
    if (confirm(Text)) select();
    else random();

}
function selectName()
{
    let name = prompt ("Enter your name :")
    alert("Hello " + name + " !!!");

}
function randomName()

{
    alert("Hello !!!")
}
textContent("Enter Your Name : ",selectName,randomName);
