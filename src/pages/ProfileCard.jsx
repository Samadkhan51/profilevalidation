import React from "react";

function ProfileCard(props){    
    return(
        <>
            
                    <div className="col-3 m-3">
                        <div className="card" style={{width: '18rem'}}>
                          <img className="card-img-top" src={props.img} alt="profile" />
                          <div className="card-body">
                            <h5 className="card-title">Name: {props.name}</h5>
                            <p className="card-text"><strong>Email:</strong>: {props.email}</p>
                            <p className="card-text"><strong>Age:</strong>: {props.age}</p>
                            <p className="card-text"><strong>Location:</strong>:{props.location}</p>
                            {props.age < 18 ? <button className="btn btn-sm btn-warning">Minor</button>:<button className="btn btn-sm btn-primary">Adult</button>}
                            <br />
                            <button className="btn btn-sm btn-danger mt-3 w-100" onClick={() => props.fun(props.index) }>Delete</button>
                          </div>
                        </div>
                   </div>
        </>
    );
}

export default ProfileCard;