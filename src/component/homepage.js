import React from 'react'

const Homepage = ({setLoginUser}) => {

    const handlechange = () =>{
        setLoginUser({})
        window.localStorage.removeItem("isLoggedIn")
    }

    return (
        <div className="homepage">
            <h1>Hello Homepage</h1>
            <button onClick={handlechange} >Logout</button>
        </div>
    )
}

export default Homepage
