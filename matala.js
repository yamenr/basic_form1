var pname,price,description,barcode,p_image;
var divStart = '<div>';
var divEnd = '</div>';
var h1Start = '<h1>';
var h1End = '</h1>';
var h2Start = '<h2>';
var h2End = '</h2>';
var h3Start = '<h2>';
var h3End = '</h2>';
var imgStart = '<img src="';
var imgEnd = '">';
var br = '<br>';
var buttonStart = '<button type="button" onclick="';
var buttonEnd = '</button>';
var buttonOnclickEnd = '">';

var products = [];

class Product {
    constructor(pname,price,description,barcode,p_image) {
        this.pname = pname;
        this.price = price;
        this.description = description;
        this.barcode = barcode;
        this.p_image = p_image;
    }
}

function readData() {
    pname = document.getElementById("PName").value;
    price = document.getElementById("Price").value;
    description = document.getElementById("Description").value;
    barcode = document.getElementById("Barcode").value;
    p_image = document.getElementById("PImage").value;
}

function validateData() {
    if (pname == "" || price == "" || description == "" || barcode == "" || p_image == ""  ) {
        alert("please fill all fields!");
        return false;
    } 
    else {
        return true;
    }
}

function saveData() {
    readData();
    if (validateData() == true);
    {
        let product1 = new Product(pname,price,description,barcode,p_image);
        products.push(product1);
        localStorage.setItem("products", JSON.stringify(products));

        showData();
    }

}

function showData() {

    let productsDiv = '';
    for(let i = 0; i < products.length; i++)
    {
        let divProduct = h1Start + products[i].pname + h1End +
        h2Start + products[i].price + h2End +
        h3Start + products[i].description + h3End +
        h3Start + products[i].barcode + h3End +                        
        imgStart + products[i].p_image + imgEnd +
        buttonStart + deleteProduct(i) + buttonOnclickEnd + "Delete" + buttonEnd;

        productsDiv += divProduct;
    }

    document.getElementById("container").innerHTML = productsDiv;
}

function deleteProduct(i)
{
    products.splice(i,1);
}
