import './style/style1.css'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import ReactDOM from "react-dom/client";
export function Login(){
const [email,setEmail]= useState();
const [password,setPassword]= useState();
const navigate = useNavigate();
async function log(e) {
        e.preventDefault();
        const login = {
            email: email,
            password: password
        }
        const result = await fetch("http://localhost:8080/login", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify(login)
        })
        if (result.status === 202) {
            const data = await result.json();
            localStorage.setItem('user',data);
            navigate('/');
        }
        else {
            const d = <p style={{color:"red"}}>Email ou mot de passe incorrect !</p>
            const root =ReactDOM.createRoot(document.getElementById('invalid'));
            root.render(d);

        }
    }

    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                    <div className="card px-5 py-5" id="form1">
                        <div className="form-data">
                            <div className="forms-inputs mb-4"><span>Email or username</span>
                                <input style={{width:"540px"}} autoComplete="off" type="text" onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <div className="forms-inputs mb-4"><span>Password</span>
                                <input style={{width:"540px"}} type="password" onChange={(e)=>setPassword(e.target.value)} />
                                <div id="invalid"></div>
                            </div>
                            <div className="mb-3">
                                <button onClick={log} className="btn btn-dark w-100">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}