let arr = [{id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"karen", age:"19",profession:"admin"}]

const card_container = document.querySelector(".card-container");

 

function card_items(Element,index){
    let div = document.createElement("div");
    div.className = "card";
    let S_No = document.createElement("div");
    S_No.innerText = (index+1) + ".";
    let name = document.createElement("div");
    name.innerText = "Name :"+Element.name; 
    let profession = document.createElement("div");
    profession.innerText = "profession :"+Element.profession;
    let age = document.createElement("div");
    age.innerText = "Age :"+Element.age;
    div.appendChild(S_No);
    div.appendChild(name);
    div.appendChild(profession);
    div.appendChild(age);
    card_container.appendChild(div);
}
arr.forEach((Element,index) => {
    card_items(Element,index);
})

const profession= document.querySelector(".profession");
const status = document.getElementById("status");
const dis = document.getElementById("dis");

let show = function(){
    if( dis.style.display == "flex"){
        dis.style.display = "none"
       }
       else{
        dis.style.display = "flex";
       }
}

profession.addEventListener("click",show);

const dis_items = document.querySelectorAll("#dis span");

dis_items.forEach((ele) =>{
    ele.addEventListener("click",() =>{
        status.innerText = ele.innerText;
        dis.style.display ="none";
    })
})

const filter = document.querySelector(".filter");

filter.addEventListener("click",() =>{

    if(status.innerText == "Profession"){
        alert("select Profession");
    }
    else{
        card_container.innerHTML = "";
        if(status.innerText =="Developer")
         developer();
         else if(status.innerText == "Admin"){
            admin();
         }
         else{
            all();
         }
    }
})

function developer(){
    arr.forEach((Element,index) =>{
        if(Element.profession =="developer"){
            card_items(Element,index);
        }
    })  
}

function admin(){
    arr.forEach((Element,index) =>{
        if(Element.profession =="admin"){
            card_items(Element,index);
        }
    })  
}

function all(){
    arr.forEach((Element,index) =>{
         card_items(Element,index);
    })  
}


const input = document.querySelectorAll(".inputs input");
const addUser = document.querySelector(".add-user");



addUser.addEventListener("click",()=>{
    let check = true;
   input.forEach((ele)=>{
    if(ele.value==""){
        check = false;
    }})
    if(check){
      let Element ={
        id:arr.length-1,
        name:input[0].value,
        profession:input[1].value,
        age:input[2].value
    }
    arr.push(Element);
    card_items(Element,arr.length-1);
   }
})

