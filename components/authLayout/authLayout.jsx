import React from 'react'

export default function authLayout() {
    axios.post('/https://auth-api-epc6.onrender.com/api/v1/auth/login', {

        User: 'jperez',
        password: 'mystrongpassword'
        
    })

    .then(function (login) {
        console.log(login)
    })
    .catch(function(error){
        console.log(error);
    })

    return (
        <div>

        </div>
    )
}
