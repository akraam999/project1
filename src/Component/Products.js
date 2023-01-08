import {useEffect, useState } from "react";
import React from 'react'
import './style/css.css'
import {Link, useNavigate, useParams} from "react-router-dom";

export function Product(){
    const [data,updateData]=useState([]);
    useEffect(()=>{
        async function GetAll(){
            const result = await fetch("http://localhost:8080/all_produit",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                },
            });
            if(result.status===202){
                const data_product = await result.json();
                updateData(data_product);
            }
        }
        GetAll();
    },[]);
    return (
        <div className="container_product">
        {data.map((p,index)=>(
        <div className="card" style={{width: "18rem"}} key={index}>
            <img className="card-img-top" src={"data:image/png;base64," + p.photo} alt="Card image cap" id="img_produit" />
                <div className="card-body">
                    <div style={{height:"150px"}}>
                    <h5 className="card-title">{p.libelle}</h5>
                    <p className="card-text">{p.prix}</p>
                    </div>
                    <Link to={"/produit/"+p.id_produit} className="btn btn-primary">Voir le produit</Link>
                </div>

        </div>
            ))}
        </div>
    )

}