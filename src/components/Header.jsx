import { AppBar, Toolbar, Typography} from '@mui/material'
import Logo from '../assets/SpaceX-White.svg'
import {React} from 'react'

// HEADER
function Header() {
       
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography><img src={Logo} style={{width:'200px', height:'50px'}}alt="fireSpot"/></Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
