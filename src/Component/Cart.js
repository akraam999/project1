import {useDispatch, useSelector} from "react-redux";
import {Delete_item} from "../redux/action";

export function Cart(){
    const state = useSelector((state)=>state.HandleCart);
    const dispatch = useDispatch();
    const DeleteProduct=(product)=>{
        dispatch(Delete_item(product));
    }
    return (
        <div className="cart">
            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Libelle</th>
                    <th scope="col">Prix</th>
                    <th scope="col">Quantité</th>
                    <th scope="col">Remove</th>
                </tr>
                </thead>
                <tbody>
                {state.map((x,index)=>(
                    <tr key={index}>
                        <th scope="row">{x.id_produit}</th>
                        <td>{x.libelle}</td>
                        <td>{x.prix*x.quantite}</td>
                        <td>{x.quantite}</td>
                        <td><a onClick={()=>DeleteProduct(state[index])} className="btn btn-danger">Supprimer</a></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}