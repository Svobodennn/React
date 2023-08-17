import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Users() {
    
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      getData()
    }, [])

    const getData = async () => {
      try{ // try catch ile hata yakalama
        const { data: users } = await axios('https://jsonplaceholder.typicode.com/users') // await verilerin yüklenmesini bekler daha sonra diğer adıma geçer
        const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`)
        setUsers(users)
        setPosts(posts)
        setLoading(false)
      } catch(error) {
        console.log(error)
      }

    }

    // !!!aşağıda olduğu gibi bağlantılı veriler için sürekli iç içe axios çağırmaktansa yukarıdaki metodu uyguluyoruz!!!

    // useEffect(() => {
    //     axios('https://jsonplaceholder.typicode.com/users')
    //   .then((res) =>{ 
    //     setUsers(res.data)
        
    //     axios(`https://jsonplaceholder.typicode.com/posts?userId=${res.data[0].id}`)
    //     .then((res) => setPosts(res.data))
    //   })
    //   .catch((error) => {
    //    console.log("error", error) // hata yakalama
     // })
    //   .finally(() => setLoading(false))
    // }, [])


    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(data => setUsers(data))
    //   .finally(() => setLoading(false))
    // }, [])



  return (
    <div>
      <h2>Users</h2>

    {loading && <div>Yükleniyor...</div>}

     <ul>
        {
            users.map((user)=> (
                <li key={user.id}>{user.name}</li>
            ))
        }
     </ul>

     <h2>Posts</h2>
     <ul>
        {
            posts.map((post)=> (
                <li key={post.id}>{post.title}</li>
            ))
        }
     </ul>

    </div>
  )
}

export default Users
