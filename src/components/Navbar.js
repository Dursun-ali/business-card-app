import React from 'react';
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import logoImg from '../assets/logo.png'

const Navbar = () => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            className='navbar-box-sidebar'
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className='navbar-icon-sidebar'>
                <div class="logo-img-container-sidebar">
                    <img src={logoImg} alt="" />
                </div>
            </List>
            <List className='navbar-write-sidebar'>
                <ul class="write-ul">
                    <li style={{ backgroundColor: "rgb(22, 73, 124)", color: "rgb(255, 255, 255)" }}><span class="me-4 ms-3"></span> Kartvizit Yönetimi</li>
                    <li><span class="me-4 ms-3"></span>Admin Yönetimi</li>
                    <li><span class="me-4 ms-3"></span>Ayarlar</li></ul>
            </List>
        </Box>
    );
    return (
        <div>
            <div className='navbar-wrapper'>
                <div className='d-flex align-items-center'>

                    {['left'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <div className='viewHeadlineIcon-wrapper' onClick={toggleDrawer(anchor, true)}>
                                <MenuIcon sx={{color:"#F6F6F6"}}/>
                            </div>
                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}
                    <div className='navbar-write'>
                        PERSONEL LİSTESİ
                    </div>
                </div>
                <div className='navbar-admin-wrapper'>
                    <div className='img-profile'>
                        <img className='rounded-circle' src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" />
                    </div>
                    <div className='admin-write'>
                        Admin
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
