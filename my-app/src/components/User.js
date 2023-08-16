/* rfce yazarak hızlıca oluşturduk bu componenti */
import React from 'react' 
import PropTypes from 'prop-types';

function User(props) { {/* props | sadece data | {data : {name,age,city,surname}} */}
    
    const data = props.data;
    const friends = props.friends;
    const {age,name,surname,city} = props.data;
    console.log(friends)
  return (
    <div>
      {/* <div>İsim: {name} {surname}</div>
      <div>Yaş: {age}</div>
      <div>Şehir: {city}</div> */}
      <div>İsim: {data.name} {data.surname}</div>
      <div>Yaş: {data.age}</div>
      <div>Şehir: {data.city}</div>
      {/* <div>İsim: {props.name} {props.surname}</div>
      <div>Yaş: {props.age}</div>
      <div>Şehir: {props.city}</div> */}

      <h3>Arkadaşları</h3>
      {
        friends.map((friend, i) => (
            <div key={i}>{friend}</div>
        ))
      }

    </div>
  )
}

User.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        surname: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
      }).isRequired,
    friends: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default User
