import React, { useEffect, useState } from "react";
import axios from "axios"

const app = () => {
//   const [users,setUsers]=useState([])

//   useEffect(()=>{
//     axios.get("http://localhost:4000/users")
//     .then((res)=>{
//       setUsers(res.data)
//     })
//     .catch((err)=>{
//       console.log(err); 
//     })
//   },[])
//   console.log(users);
  
  
//   return (
//     <>
//     <h2>Users list</h2>
//       <ul style={{ display: "flex", flexDirection: "column" }}>
//         {users.map((user,index) => {
//           return <li key={index}>{user.first_name}</li>;
//         })}
//       </ul>
//     </>
//   );
// };


const [count,setCount]=useState(0);

  useEffect(() => {
    console.log("Component mounted ✅");

    return () => {
      console.log("Component unmounted 🗑️");
    };
  }, []);

  
  return (
      <button onClick={()=>setCount(count+1)}>
        Count:{count}
      </button>
  )
}


export default app;
