const { req, res} = require("express");
const express = require("express");
const cartItems = express.Router();

const cartList = [
{
    id: 1, 
    product: 'lipstick',
    price: 15, 
    quanitity: 34

},

{
    id: 2, 
    product: 'lip gloss',
    price: 15, 
    quanitity: 40

},

{
    id: 3, 
    product: 'eyeshadow',
    price: 20, 
    quanitity: 15

},

{
    id: 4, 
    product: 'blush',
    price: 30, 
    quanitity: 45

}];


// GET /cart-items
cartItems.get("/", (req, res) =>{
    res.status(200);
    res.json(cartList);

});

// GET /cart-items/:id
cartItems.get("/:id", (req, res) =>{
    const id = req.params.id;

    const item = cartList.find((id)=> {

        if(cartList.id ===id){
            return cartList.id ===id;
            res.json(item);
            res.status(200);
        } else{
            return 'ID Not Found';
            res.status(400);
        }  
    })
});


// POST /cart-items
cartItems.post("/", (req, res) => {
 const newCartItem = req.body;
 cartItems.push(newCartItem);


 res.status(201);
 res.json(cartList);
});


// PUT /cart-items/:id

cartItems.put("/:id", (req, res) =>{

    const id = req.params.cartIDs;
    const index = cartList.findIndex((cartID) => {
        return cartList.id ===id;
    })

    const newCartItem = req.body;
    cartItems.splice(index, 1, newCartItem);
    
    res.json(newCartItem);
    res.status(200);
});


//delete Items


cartItems.delete("/:id", (req, res) => {
    const index = cartList.findIndex((cartID) =>{
        return cartList.id ===req.parapms.id;
    })

    cartItems.splice(index, 1);
    res.status(204);
    res.json("Deleted");
    
});

module.exports = cartItems;