let butn=document.getElementsByClassName('butn');
let sty=butn[0].style;
butn[0].addEventListener('mouseenter',butnenter,true);
butn[0].addEventListener('click',butnclick,true);
butn[0].addEventListener('mouseout',butnleave,false);
let fname=document.getElementsByClassName('fname');
let lname=document.getElementsByClassName('lname');
let email=document.getElementsByClassName('email');
let pass=document.getElementsByClassName('pass');
function butnenter(e){
    e.target.style.cursor='pointer';
    e.target.style.backgroundColor="#77E2B4";
}
function butnleave(e){
    e.target.style=sty;
}
function butnclick(e){
    var txt;
    if(fname[0].textContent==="")
    {
        txt="First Name cannot be empty";
        create(txt,fname[0]);

    }
    if(lname[0].textContent==="")
    {
        txt="Last Name cannot be empty";
        create(txt,lname[0]);

    }
    if(email[0].textContent==="")
    {
        txt="Looks like this is not an email";
        create(txt,email[0]);

    }
    if(pass[0].textContent==="")
    {
        txt="Password cannot be empty";
        create(txt,pass[0]);

    }


}
//add paragraph
function create(text,element){
    element.style.borderColor="red";
    element.style.backgroundImage="url('./images/icon-error.svg')";
    element.style.backgroundRepeat="no-repeat";
    element.style.backgroundPosition="center right";
    let p=document.createElement('p');
    p.style.position='relative';
    p.style.right='-430px';
    p.style.top='-18px';
    p.style.color='red';
    p.innerText=text;
    element.parentNode.insertBefore(p, element.nextSibling);
    if(element.value==="Email Address"){
        element.value="email@example/com";
        element.style.color="red";
        element.style.fontWeight="bold";


    }


}