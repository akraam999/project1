const cart =localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')):[];
console.log(JSON.parse(localStorage.getItem('cart')));
export const HandleCart=(state=cart,action )=>{
    const product = action.payload;
    // check if product deja exist
    switch (action.type){
        case "ADDCART":
            const exist = state.find((x)=>x.id_produit===product.id_produit);
            if(exist){
                const tab = state.map((x)=>x.id_produit===product.id_produit ? {...x,quantite:+x.quantite +  +product.quantite}:x)
                localStorage.setItem('cart',JSON.stringify(tab));
                return tab;
            }else{
                const product =action.payload;
                const tab =[
                    ...state,
                    {
                    ...product,
                    quantite:product.quantite
                    }
                ]
                localStorage.setItem('cart',JSON.stringify(tab));
                return tab;
            }
            break;
        case "DELETEITEM":
            const exist1 =state.find((x)=>x.id_produit===product.id_produit);
            const tab = state.filter((x)=>x.id_produit!==exist1.id_produit);
            localStorage.setItem('cart',JSON.stringify(tab))
            return tab;
        default:
            return state
            break;
    }
}