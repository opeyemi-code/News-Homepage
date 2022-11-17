
const navLink = document.querySelector('.nav-link');

const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');

const navImg = document.querySelectorAll('nav img');

navImg.forEach(img => img.addEventListener('click', toggleMenu));

function toggleMenu (e) {
  if (e.currentTarget.classList.contains('menu-open')){
    
    toggleMenuOpen();
    
}
else{
  
  toggleMenuClose();
  
}
}


function toggleMenuOpen (){
  navLink.style.display = 'block';
  
  menuOpen.style.display = 'none';
  
  menuClose.style.display = "block";
}

function toggleMenuClose (){
  navLink.style.display = 'none';
  
  menuOpen.style.display = 'block';
  
  menuClose.style.display = "none";
}

class Vehicle {
   constructor(make,model, color){
     this.make = make;
     this.model = model;
     this.color = color;
   }
   vehicleDecription (){
     return `The car outside is a ${this.make} model ${this.model} and it's a ${this.color} car.`;
   }
 }
 
 let vehicle1 = new Vehicle('Toyota', 'Ty-2012', 'blue');
 console.log(Object.getPrototypeOf(vehicle1));
 
 function Player (name,club,num){
   this.name = name;
   this.club = club;
   this.num = num;
   
 }
const player = new Player("C. Ronaldo", "Manchester United", 07);
const player2 = new Player("Lionel Messi", "Paris Saint German (PSG)", 10);

Player.prototype.playerDecription = function(){
     return `${this.name} plays for ${this.club}, his Jersey number is ${this.num}.`;
}
console.log(player.constructor === Player);
console.log(player2 instanceof Player);

let ownProp = [];
let prototypeProp = [];
for (key in player){
  if(player.hasOwnProperty(key)){
  ownProp.push(key);
  }else{
    prototypeProp.push(key);
  }
}
console.log(ownProp);
console.log(prototypeProp);
console.log(Object.getPrototypeOf(new Date()));

