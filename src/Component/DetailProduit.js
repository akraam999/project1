import {useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import "./style/css.css";
import {useDispatch, useSelector} from "react-redux";
import {Add_item, Delete_item} from '../redux/action'


export function DetailProduit(){
    const [data,updateData]=useState({});
    const params= useParams();
    const id_product = params.produitId;
    const [quantite,setQuantite]= useState(0);
    const dispatch = useDispatch();
    const [pro,setPro]= useState();

    const Add_Cart=(product)=>{
        dispatch(Add_item(product));

    }
    useEffect(()=>{
        async function GetDetail(){
             const result = await fetch("http://localhost:8080/produit/"+id_product,{
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                },
                method:"GET"
            });

            if(result.status===202){
                const donnes = await result.json();
                updateData(donnes);
                console.log(data);
                const produit ={
                    id_produit:data.id_produit,
                    libelle:data.libelle,
                    prix:data.prix,
                    quantite:quantite
                }
                setPro(produit);
            }

        }
        GetDetail();
    },[quantite])




    return (
        <div className="cont">
            <div>
            <img src={"data:image/png;base64,"+data.photo} id="img_d"/>
            </div>
            <div>
                <h1 id="titre">{data.libelle}</h1>
                <h2 id="prix">{data.prix} DH</h2>
                <div className="ak"><label >Quatité : </label><input id="quantite" type="number" name="quantite" onChange={(e)=>setQuantite(e.target.value)} />
                {data.quantite_dispo<quantite ? <p id="quantite_error" style={{color:"red"}}>La quantité demandé n'est plus dispo ! la quatité disponible est {data.quantite_dispo}</p>:null}</div>
                <p id="parag">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae pharetra risus. Integer augue quam, tempor nec mollis in, pharetra non leo. Aenean vitae neque porttitor, suscipit ante et, bibendum velit. Praesent nisi ex, facilisis ac sodales sit amet, condimentum ut felis. Aliquam vitae egestas tellus. Aliquam a massa vitae velit posuere facilisis vitae vel dolor. Aliquam imperdiet, magna nec sollicitudin congue, magna eros hendrerit dui, mattis rutrum turpis augue nec neque. Vestibulum et fringilla turpis. Quisque id tellus consectetur massa dapibus efficitur id nec nulla. In quis fermentum justo. Mauris et eros quam. Mauris sollicitudin ipsum a ligula dignissim, vel ullamcorper justo mattis. In blandit ex et velit mollis, ut lobortis dolor lacinia.
                </p>
                <button id="btn1" type="button" onClick={()=>Add_Cart(pro)} className="btn btn-info">Ajouter au panier </button>
            </div>
        </div>

    )

}

