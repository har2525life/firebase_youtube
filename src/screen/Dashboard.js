import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {

    const navigate = useNavigate()

    const logOut = async () => {
        await signOut(auth)
        navigate('/login/')
    }

    return (
        <>
        <p>hello</p>
        <button onClick={logOut}>sign out</button>
        </>
    )
}

export default Dashboard