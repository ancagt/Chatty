import './UserHeader.css';
import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert } from '@material-ui/icons';
import { useState } from 'react';
function UserHeader() {

    const [typeProfileUser, setTypeProfileUser] = useState(true);
    return (
        <div className='sidebarHeader'>
                <IconButton>
                    <Avatar />
                </IconButton>

            {typeProfileUser && <div className='rightHeader'>
                <IconButton>
                    <DonutLarge className='iconsColor' />
                </IconButton>
                <IconButton>
                    <Chat className='iconsColor' />
                </IconButton>
                <IconButton>
                    <MoreVert className='iconsColor' />
                </IconButton>
            </div>}
        </div>
    );
}

export default UserHeader;
