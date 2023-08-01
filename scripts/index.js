let img = document.getElementsByClassName('Photographer-img');

let em = document.getElementsByClassName('Email');
let en = document.getElementsByClassName('ename');
let esms = document.getElementsByClassName('esms');


function sendMail() {
    Email.send({
        SecureToken : "59976694-915a-4f96-a635-ac24431ca219",
        To : 'codezamzam@gmail.com',
        From : 'codezamzam@gmail.com',
        Subject : "From " + em[0].value,
        Body : esms[0].value
    }).then(
      message => alert(message)
      
    );
}


// 5b6ad36a-c534-4596-add8-afbbf3fcc284