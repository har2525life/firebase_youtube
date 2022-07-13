import React, { useState, useEffect } from 'react';
import { googleLogin, auth } from '../firebase/firebaseConfig';
import { Avatar, Box, Button, Container, TextField, Typography, Grid } from '@mui/material';
import { LockOutlined } from '@mui/icons-material'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { Navigate, Link} from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((credentialUser) => {
                console.log(credentialUser)
            }).catch((error) => {
                console.log(error)
            })
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
                                <Typography component='h1' variant="h5">Login</Typography>
                                <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                    <TextField
                                        name="email"
                                        type="email"
                                        label='Email Address'
                                        fullWidth
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoFocus
                                    />
                                    <TextField
                                        name="password"
                                        type="password"
                                        label='Password'
                                        required
                                        fullWidth
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        sx={{ mt: 2 }}
                                    />
                                    <Button
                                        type='submit'
                                        variant="contained"
                                        fullWidth
                                        sx={{ mt: 3 }}
                                    >
                                        LOGIN
                                    </Button>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        sx={{ mt: 1, mb: 2 }}
                                        onClick={googleLogin}
                                    >
                                        google login
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link to={`/register/`}>新規作成はこちら</Link>
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

export default Login