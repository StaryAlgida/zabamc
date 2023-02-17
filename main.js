const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function (){
    this.classList.toggle('is-active');
    menu.classList.toggle('is-active');
})

function copy(){
    navigator.clipboard.writeText("mc.zabamc.pl")
}


function createUser(name , desc, selec){
    
    const div = document.createElement('div');
    div.className = 'user';

    const img = document.createElement('img');
    img.src = 'https://minotar.net/helm/'+name+'/64';

    const pName = document.createElement('p');
    pName.innerText = name;
    const pDesc = document.createElement('p');
    pDesc.innerText = desc;


    div.append(img, pName, pDesc);
    selec.append(div);
}

const ekipaUsers = document.querySelector('.ekipa-users');

const users = [{name:"Pacio__",desc:"WŁAŚCICIEL"}, {name:"yaaQub",desc:"HEADADMIN"}, {name:"Stary_Algida",desc:"XD"}];

users.map(data =>{
    createUser(data.name, data.desc, ekipaUsers);
});

// createUser("Pacio__", "WŁAŚCICIEL", ekipaUsers)
// createUser("yaaQub", "ADMIN", ekipaUsers)