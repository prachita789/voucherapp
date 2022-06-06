
// let money = JSON.parse(localStorage.getItem("user")) || 0;

// document.querySelector("amount").innerHTML = JSON.parse(localStorage.getItem("user"))



async function vouchers(){
    const url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;
    try{
        let res = await fetch (url);
        let data = await res.json();
        appendData(data);
        console.log(data)
    }catch(err){
        console.log(err);
    }
}
vouchers();


function appendData(data){
data.map(function(el){

        let div1 = document.createElement("div")
        

        let name = document.createElement("p")
        name.innerText = el.name;

        let img = document.createElement("img")
        img.src = el.img;

        let price = document.createElement("p")
        price.innerText = el.price;

        let btn = document.createElement("button")
        btn.innerText = "Buy Now";
        btn.addEventListener("click",function(){
            buyNow(el)
        })


        div1.append(img,name,price,btn)
        document.getElementById("voucher_list").append(div1);

    })
   

}


function cards(i,n,p){
    this.img = i;

    this.name = n;
    
    this.price = p
}


 let items = JSON.parse(localStorage.getItem("purchase")) || []
function buyNow(el){
    
    let img = el.image;
    let name = el.name;
    let price = el.price;
    let p1= new cards(img,name,price)

    items.push(p1);
    localStorage.setItem("purchase",JSON.stringify(items));
   
}