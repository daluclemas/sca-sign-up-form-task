
const container=document.querySelector('.container');
const preload=document.querySelector('.loader-container');
const formS=document.querySelector('form');

//paragraphs with the feed back messages
const paragraph=document.querySelector('.fnamediv');
const lnameParagraph=document.querySelector('.lnamep');
const emailp=document.querySelector('.emailp');
const cemailp=document.querySelector('.cemailp');
const passwordp=document.querySelector('.passwordp');
const cpasswordp=document.querySelector('.cpasswordp');
const dobp=document.querySelector('.feedback');

//sign up btn
const btn=document.querySelector('.btn');

//checckbox
const checkBox=document.querySelector('.tc');

//regular expression
const regXp=/[0-9]/g;

//remove the loader after 5 secs
setTimeout(()=>{

    preload.style.display='none';
    container.style.display='grid';

},5000);

//form validation
formS.addEventListener('submit',(e)=>{
    e.preventDefault();

    const firstName=document.querySelector('.fname');
    // console.log(firstName);//logged the first name value to the console to be sure;

    //lastname
    const lastName=document.querySelector('.lname');
    // console.log(lastName);

    //email
    const emailAddress=document.querySelector('.email');
    // console.log(emailAddress);

    //confirm email
    const cemail=document.querySelector('.cemail');
    // console.log(cemail);

    //password 
    const pasword=document.querySelector('.password');

    //confirm password
    const cpasword=document.querySelector('.cpassword');

    //dob
    const doB=document.querySelector('.dob');
    console.log(doB.value);




    //calling the functions

    //callthe first namefunction
    getFirstName(firstName);

    //call the last name validation function
    getLastName(lastName);

    //call the email function
    emailCheck(emailAddress);

    //call the confirm email function
    confirmEmail(cemail,emailAddress);

    //call the password function
    passWord(pasword);

    //call the confirm password function
    confirmPassword(cpasword,pasword);

    //call the dob function
    // dob(doB);
});

//firstname
const getFirstName=(item)=>{
    if(item.value===''|| item.value.match(regXp)){
        // alert('input value');
        eMessage(paragraph);

    }else{
        // alert('thanks')
        sMessage(paragraph)
    }
};

//lastname
const getLastName=(item)=>{
    if(item.value===''|| item.value.match(regXp)){
        // alert('input value');
        eMessage(lnameParagraph);

    }else{
        // alert('thanks')
        sMessage(lnameParagraph);
    }
};

//emailvalidation
const emailCheck=(item)=>{
    let mailformat=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(mailformat.test(item.value)|| item.value!==''){
        // return true;
        sMessage(emailp);

    }
    else{
        // alert('check email');
        eMessage(emailp);

    }
};

//confirm email
const confirmEmail=(item,content)=>{
    if(item.value!==content.value|| item.value===''){

        eMessage(cemailp);

    }else{
        sMessage(cemailp);
    }
};

//password validation
const passWord=(item)=>{
    if(item.value.length < 8 || item.value===''){
        eMessage(passwordp);

    }else{
        sMessage(passwordp);
    }
}


//confirm password
const confirmPassword=(item,content)=>{
    if(item.value!==content.value|| item.value===''){

        eMessage(cpasswordp);

    }else{
        sMessage(cpasswordp);
    }
};

//dob

// const dob=(item)=>{
//     if(item.value===""){
//         eMessage(dobp);

//     }else{
//         sMessage(dobp);
//     }
// };


//error  message
const eMessage=(item)=>{
    item.innerHTML=`<i class="fas fa-times-circle"></i>`;
    item.style.color='red';
};

//success message
const sMessage=(item)=>{
    item.innerHTML=`<i class="fas fa-check-circle"></i>`;
    item.style.color='green';
};

checkBox.addEventListener('input',(e)=>{
    e.preventDefault();

    if(checkBox.checked){

        btn.removeAttribute('disabled');

    }else{
        btn.setAttribute('disabled','disabled');
    }
});

