function shoppingCartClick(){
    alert("Your Cart is empty!");
}
function change_featured_img(){
    document.getElementById("mainImage").src="imgs/succulents-2.jpg"
}
function removeImage(){
    document.getElementById("mainImage").src="imgs/succulents-1.jpg"
}
function IAcceptButton(){
    document.getElementById("bottomWindowAlert").hidden=true;
    console.log("IAcceptButton");
}