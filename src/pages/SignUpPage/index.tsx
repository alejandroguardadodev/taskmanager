import { styled } from '@mui/system'

import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"

import Divider from "@mui/material/Divider"

import Typography from '@mui/material/Typography'

import SignUpForm from './SignUpForm'

import SignUpImg from '../../assets/imgs/signupland.jpg'

const BoxContainer = styled(Box)(() => ({
    position: 'absolute',
    width: '90%',
    maxWidth: '1200px',
    height: '90%',
    maxHeight: '700px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '10px',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(0, 0, 0, 0.7)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden !important',
}))

const ImageContainer = styled(Box)(({ theme }) => ({
    width: '700px',
    height: '100%',
    padding: '0px !important',
    margin: '0px !important',
    background: 'red',
    backgroundImage: `url("${SignUpImg}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.down("lg")]: {
        display: 'none',
    }
}))

const SignUpPage = () => {
  return (
    <BoxContainer>
        <ImageContainer />
        <Stack sx={{
            flexGrow: 1,
            width: '100%',
            height: '100%',
            padding: '10px 30px'
        }}>
            <Typography className='non-mouse-event' variant='h3' component="p" sx={{ paddingTop: '15px', textTransform: 'capitalize', fontSize: '1.8rem' }}>Sign Up</Typography>
            <Typography className='non-mouse-event' variant='h4' component="p" sx={{ paddingTop: '3px', textTransform: 'none', fontSize: '1.3rem' }}>Discover new horizons</Typography>
            <Divider sx={{ padding: '5px 0px' }} />
            <Stack 
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                    width: '100%',
                    height: '100%',
                    flexGrow: 1,
            }}>
                <SignUpForm />
            </Stack>
        </Stack>
    </BoxContainer>
  )
}

export default SignUpPage