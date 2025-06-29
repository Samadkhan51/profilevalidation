  import React from 'react'
  import ProfileCard from './ProfileCard';
  import samad from '../assets/img/samad.png'
  import abeer from '../assets/img/abeer.png'
  import aizel from '../assets/img/aizel.jpg'
  const users = [
  {id:1, name:'Abdul Samad Khan', age:22,img:samad },
  {id:2,name:'Abeer-ur-Rahim',age:21,img:abeer },
  {id:3,name:'aizel',age:1.5,img:aizel},
]
  function Home_new() {
    return(
      <>
      <div className="container">
        <div className="row">
          {users.map((user)=>(
            <ProfileCard name={user.name} age={user.age} img={user.img}/>
          ))}
        </div>
      </div>
     </>
    );
  }
  export default Home_new
