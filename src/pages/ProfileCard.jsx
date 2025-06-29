import React from "react";

function ProfileCard(props){    
    return(
        <>
            
                    <div className="col-4 custom-card">
                        <h5 className="card-title">Name: {props.name}</h5>
                        <br />
                      <p>email: {props.email}</p>
                      <p>age: {props.age}</p>
                      <p>index :{props.index}</p>
                      {props.age < 18 ? <button className="btn btn-warning btn-sm ">Minor</button>:<button className="btn btn-primary btn-sm">Adult</button>}
                      <button className="btn btn-sm btn-danger ms-3" value={props.index} onClick={() => props.fun(props.index)}>delete</button>
                    </div>
        </>
    );
}

export default ProfileCard;