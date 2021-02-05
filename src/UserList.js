import React, { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
 const UserList=()=>{
const [listOfUsers,setListOfUsers]=useState([]);
const [error, setError] = useState(null);

useEffect(() => {
    function fetchData() {
      axios.get("https://jsonplaceholder.typicode.com/users")
        
        .then(res => setListOfUsers(res.data))
        .catch(err => setError(err)); 
    }
 
    fetchData();
  }, []);

return (
<div className='container'>
     <ul>
       {listOfUsers.map(names => (
         
           <li key={names.id}> {names.name}</li>
         
       ))}
     </ul>
   </div>


)


 }
 export default UserList;