let card=document.querySelector(".card")
let openshop=document.querySelector(".shopping")
let closeshop=document.querySelector(".closeshop")
let list=document.querySelector(".list")
let listcart=document.querySelector(".listcart")
let q=document.querySelector("h3 .quantity")
let tabcard=[]
openshop.addEventListener('click',()=>{
    card.style.display="block"
})

const products = [
    {
      id: 0,
      name: "T-shirt 1",
      price: 29.99,
      instock: 100,
      imgSrc: "t1.png",
    },
    {
      id: 1,
      name: "T-shirt 2",
      price: 24.99,
      instock: 43,
      imgSrc: "t2.png",
    },
    {
      id: 2,
      name: "T-shirt 3",
      price: 19.99,
      instock: 10,
      imgSrc: "t3.png",
    },
    {
      id: 3,
      name: "T-shirt 4",
      price: 25.99,
      instock: 5,
      imgSrc: "t4.png",
    },
    {
      id: 4,
      name: "T-shirt 5",
      price: 29.99,
      instock: 4,
      imgSrc: "t5.png",
    },
    {
      id: 5,
      name: "T-shirt 6",
      price: 39.99,
      instock: 40,
      imgSrc: "t6.png",
    },
  ];

function remplir(){
 products.forEach((prod)=>{
 let newDiv=document.createElement('div');
 newDiv.setAttribute('class','item')
 newDiv.innerHTML=
 `<img src="img/${prod.imgSrc}"/>
 <h3>${prod.name}</h3>
 <h3>${prod.price}$</h3>
 <button class="btn" onclick="updatecard(${prod.id})">Add to Card</button>
  `
 
 list.appendChild(newDiv)})

}
 
remplir();

/*tabcard=[]
function addtocart(id) {
  if(tabcard.some((obj)=>obj.id===id)){
    alert('product already exist into card')
  }
  else{const item=products.find((prod)=>prod.id===id)
    tabcard.push(({...item,quanunit:1}))
  q.textContent++;
}
}*/
function updatecard(id){
  
    const item=products.find((prod)=>prod.id===id)
    /*tabcard.push({...item,quanunit:1})
   let newArray = tabcard.filter(()=>(tabcard.some((item)=>item.id===id))) 
   console.log(newArray)
   if(newArray.length>1){
      alert('product already exist into card')}
else{*/
  q.textContent++;
  let btn=document.querySelectorAll('.btn')
  let newLi=document.createElement('li');
  newLi.setAttribute('class','itemcard')
  newLi.innerHTML=
  `<div><img src="img/${item.imgSrc}"/></div>
  <div>${item.name}</div>
  <div>${item.price}$</div>
  <div class="plus">+</div>
  <div class="qte">1</div>
  <div class="moin">-</div>

   
  `

    listcart.appendChild(newLi)
btn.setAttribute("disabled", "")
    
}

  
  
  
    
  
 
  
 /*closeshop.addEventListener('click',()=>{
  card.style.display="none";
  listcart.removeChild('li')
  tabcard=[]
  
  
})*/


  
