import './Sidebar.css';
import { Avatar, IconButton, Input } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
function Sidebar() {

    return (
        <div className="Sidebar">
            <div className='sidebarHeader'>
                <IconButton>
                    <Avatar src={`https://avatars.dicebear.com/api/human/aaaaaaa.svg`} />
                </IconButton>

                <div className='rightHeader'>
                    <IconButton>
                        <DonutLarge className='iconsColor' />
                    </IconButton>
                    <IconButton>
                        <Chat className='iconsColor' />
                    </IconButton>
                    <IconButton>
                        <MoreVert className='iconsColor' />
                    </IconButton>
                </div>
            </div>

            <div className='sidebarSearch'>
                <div className='searchContainer'>
                    <Input className='input' placeholder='Search or start a new chat' variant="standard" />
                    <SearchOutlined />
                </div>
            </div>
            <div className='sidebarChats'>

                <SidebarChat addNewChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div >
    );
}

export default Sidebar;
