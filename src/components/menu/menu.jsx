import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import StorageIcon from '@mui/icons-material/Storage';
import SourceIcon from '@mui/icons-material/Source';

import './menu.css'
import Keys from '../keys/keys';

const Menu = () => {




    return (
        <div className='menu_container'>
            <div className='menu'>

                    <a href='/'>
                        <ListItemButton>
                        <ListItemIcon>
                            <VpnKeyIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Open AI API ключи" />
                        </ListItemButton>
                    </a>

                    <a href="/server">
                        <ListItemButton>
                        <ListItemIcon>
                            <StorageIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Состояние сервера" />
                        </ListItemButton>
                    </a>

                    <a href="/database">
                        <ListItemButton>
                        <ListItemIcon>
                            <SourceIcon />
                        </ListItemIcon>
                        <ListItemText primary="Ошибки" />
                        </ListItemButton>
                    </a>
            </div>

        </div>

    )
}

export default Menu