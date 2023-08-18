import React, {useState, useEffect} from 'react'
import { useParams, Link, useLocation } from 'react-router-dom';

function UserDetail() {
    const {id} = useParams();
    // const params = useParams();

    const location = useLocation(); // tarayıcının geçmişine kaydeder. Doğrudan user/8 e giderse bir önceki sayfada data fetch edilmediği için sayfa görüntülenmez
    console.log(location)

    const [user, setUser] = useState(location.state)
    // const [user,setUser] = useState(null);

    useEffect(()=>{
    if(!user?.id){ // user varsa ve altında id varsa
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=> res.json())
        .then((data)=> setUser(data));
    }
    },[id, user]) // mount edildiğinde ve id değiştiğinde çalışır

  return (
    <div>
      <h2>User Details:</h2>

      <div>
        {user && <pre>{JSON.stringify(user,null,2)}</pre>}
        {/* {location.state && <pre>{JSON.stringify(location.state,null,2)}</pre>} */}
        {/* {user && <pre>{JSON.stringify(user,null,2)}</pre>} */}

        <Link to={`/users/${Number(id)+1}`}>Sonraki kullanıcı</Link>
      </div>
    </div>
  )
}

export default UserDetail
