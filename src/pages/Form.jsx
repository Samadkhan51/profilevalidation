import React from "react";
import { useState } from "react";
import { useRef } from "react";
import ProfileCard from "./ProfileCard";

function Form(){
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [age,setAge] = useState();
    const [img,setImg] = useState();
    const [location,setLocation] = useState();
    const [errors,setErrors] = useState({});
    const [users,setUser] = useState([]);
    const [success,setSuccess] = useState();
    const clearing = useRef(null);
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
        if(!location)
        {
            newError.location = "location is required";
            hasError = true;
        }
        setErrors(newError);
        if(!hasError)
        {
          setUser([...users,{name,email,age,location,img}])
          setName("");
          setEmail("");
          setAge("");
          setLocation("");
          clearing.current.value = null;
          alert('Profile added successfully')
        }
    }

    const handleDelete = (a)=>{
            const newUser = users.filter((user,index)=>{
                return index !== a
            })
        setUser(newUser)
        alert('profile Deleted Successfully')
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
                            {errors.location && <li className="text-danger">{errors.location}</li>}
                           </ul>
                            <form action="#" onSubmit={handleSubmit}>
                                <label htmlFor="username" className="form-label">Username<small className="text-danger">*</small></label>
                            <input type="text" className="form-control" value={name} onChange={(e)=> setName(e.target.value)}/>
                            <label htmlFor="email" className="form-label">Email<small className="text-danger">*</small></label>
                            <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <label htmlFor="age" className="form-label">Age<small className="text-danger">*</small></label>
                            <input type="number" className="form-control"value={age} onChange={(e)=>setAge(e.target.value)}/>
                            <label htmlFor="location" className="form-label">Location <small className="text-danger">*</small></label>
                            <input type="text" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} />
                            <label htmlFor="img" className="form-label">Profile Image</label>
                            <input type="file" className="form-control" ref={clearing}  onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))} />
                            <input type="submit" value="submit" className="w-100 mt-2 btn btn-primary"/>
                            </form>
                        </div>
                </div>
            </div>
        </div>
                 {/* SENDING DATA USING PROPS */}
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                    <h2 className="text-center">Profiles</h2>
                    {users.map((user,index)=>(
                        <ProfileCard index={index} name={user.name} email={user.email} age={user.age} img={user.img} location={user.location} fun={handleDelete}/>
                    ))}
            </div>
        </div>
        </>
    );
}
export default Form;