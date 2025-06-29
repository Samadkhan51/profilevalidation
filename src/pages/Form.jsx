import React from "react";
import { useState } from "react";
import ProfileCard from "./ProfileCard";

function Form(){
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [age,setAge] = useState();
    const [errors,setErrors] = useState({});
    const [users,setUser] = useState([]);
    const newError = {};
    let hasError = false;
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name){
            newError.name = "username is required";
            hasError = true;
        }
        if(!email || !email.includes('@') || !email.includes('.'))
        {
            newError.email = "email must be valid";
            hasError = true;
        }
        if(!age || age<0)
        {
            newError.age = "age must be valid";
            hasError = true;
        }
        setErrors(newError);
        if(!hasError)
        {
          setUser([...users,{name,email,age}])
        }
    }

    const handleDelete = (a)=>{
            const newUser = users.filter((user,index)=>{
                return index !== a
            })
        setUser(newUser)
        } 
    return(
        <>
        <div className="container">
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-4 custom-form">
                        <div className="form-head">
                            <p className="text-center">Add Profile</p>
                        </div>
                        <div className="form pb-5">
                           <ul>
                            {errors.name && <li className="text-danger">{errors.name}</li>}
                            {errors.email && <li className="text-danger">{errors.email}</li>}
                            {errors.age && <li className="text-danger">{errors.age}</li>}
                           </ul>
                            <form action="#" onSubmit={handleSubmit}>
                                <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" value={name} onChange={(e)=> setName(e.target.value)}/>
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <label htmlFor="age" className="form-label">Age</label>
                            <input type="number" className="form-control"value={age} onChange={(e)=>setAge(e.target.value)}/>
                            <input type="submit" value="submit" className="w-100 mt-2 btn btn-primary"/>
                            </form>
                        </div>
                </div>
            </div>
        </div>
                 {/* SENDING DATA USING PROPS */}
        <div className="container mt-5">
            <div className="row">
                <div className="prc-head">
                    <h2 className="text-center">Profiles</h2>
                </div>
                    {users.map((user,index)=>(
                        <ProfileCard index ={index} name={user.name} email={user.email} age={user.age} fun={handleDelete}/>
                    ))}
            </div>
        </div>
        </>
    );
}
export default Form;