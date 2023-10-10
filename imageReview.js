const prevButton = document.querySelector('.prevBtn');
const nextButton = document.querySelector('.nextBtn');
const randomButton = document.querySelector('.randomBtn');

let image = document.querySelector('.image');
let firstName = document.querySelector('.firstName');
let lastName = document.querySelector('.lastName');
let email = document.querySelector('.email');
let iD = document.querySelector('.id');

let reviews = [];


let newObj ={};
let currentIndex = 0;



async function myReviews(){
  const response = await fetch('https://reqres.in/api/users?page=2');
  const result = await response.json();
  reviews = result;
  console.log(result);
  newObj= result.data[currentIndex]
  console.log(newObj);
}
 

 const displayReviews = async()=>{
  try{
    const result = await myReviews();
    console.log(result);
  } catch{
    console.log('error');

  }
  
 }
 
 myReviews();
console.log(newObj);


//  let currentObj = [];
//  function objReviews(){
//   for(let i =0; i< reviews.length; i++){
//      currentObj.push(reviews);
     
//   }
//   console.log(currentObj);
//  }
//  console.log(objReviews());

//  window.addEventListener('DOMContentLoaded', ()=>{
//    updateDetails(currentItem);
   
//    });
  




function updateDetails(newObj){
  firstName.textContent = newObj.first_name;
  image.src = newObj.avatar;
  lastName.textContent = newObj.last_name;
  iD.textContent = newObj.id;
  email.textContent = newObj.email;
}


 nextButton.addEventListener('click',()=>{
  if(currentIndex === reviews.data.length-1){
    return;
  }
  currentIndex ++;
  newObj = reviews.data[currentIndex]
  updateDetails(newObj);
  
 })