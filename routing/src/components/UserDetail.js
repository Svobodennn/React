import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';

function UserDetail() {
    const {id} = useParams();
    // const params = useParams();

    const [user,setUser] = useState(null);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=> res.json())
        .then((data)=> setUser(data));
    
    },[id]) // mount edildiğinde ve id değiştiğinde çalışır
  return (
    <div>
      <h2>User Details:</h2>

      <div>
        {user && <pre>{JSON.stringify(user,null,2)}</pre>}

        <Link to={`/users/${Number(id)+1}`}>Sonraki kullanıcı</Link>
      </div>
    </div>
  )
}

export default UserDetail
