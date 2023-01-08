//ajouter produit to cart
export function Add_item(product){
    return {
        type:"ADDCART",
        payload:product
    }
}
//supprimer produit from cart
export function Delete_item(product){
    return {
        type:"DELETEITEM",
        payload:product
    }
}