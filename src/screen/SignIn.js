import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth, googleLogin } from '../firebase/firebaseConfig'
import { TextField, Typography, Box, Button, Container, Avatar, Grid } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { Navigate, Link } from 'react-router-dom';


const SignIn = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("")
    const [user, setUser] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(
                auth, registerEmail, registerPassword
            )
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
    }, [])


    return (
        <>
            {
                user ? (
                    <Navigate to={`/`} />
                ) : (
                    <>
                        <Container component="main" maxWidth="xs">
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockOutlined />
                                </Avatar>
                                <Typography component='h1' variant="h5">Sign in</Typography>
                                <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                    <TextField
                                        name="email"
                                        type="email"
                                        label='Email Address'
                                        fullWidth
                                        required
                                        value={registerEmail}
                                        onChange={(e) => setRegisterEmail(e.target.value)}
                                        autoFocus
                                    />
                                    <TextField
                                        name="password"
                                        type="password"
                                        label='Password'
                                        required
                                        fullWidth
                                        value={registerPassword}
                                        onChange={(e) => setRegisterPassword(e.target.value)}
                                        sx={{ mt: 2 }}
                                    />
                                    <Button
                                        type='submit'
                                        variant="contained"
                                        fullWidth
                                        sx={{ mt: 3 }}
                                    >
                                        SIGN IN
                                    </Button>

                                    <Button
                                        type='submit'
                                        variant="contained"
                                        fullWidth
                                        sx={{ mt: 1, mb: 2 }}
                                        onClick={googleLogin}
                                    >
                                        Google SignIN
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link to={`/login/`}>ログインはこちら</Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Container>
                    </>
                )
            }
        </>

    )
}

export default SignIn