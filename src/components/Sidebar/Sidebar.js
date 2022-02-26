import './Sidebar.css';
import { Input } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import UserHeader from '../Users/UserHeader';
function Sidebar() {
    return (
        <div className="Sidebar">
           
           <UserHeader userType={'profileUser'}/>

            <div className='sidebarSearch'>
                <div className='searchContainer'>
                    <Input className='input' placeholder='Search or start a new chat' variant="standard" />
                    <SearchOutlined />
                </div>
            </div>
            <div className='sidebarChats'>
                <h2 className="h2">Add new chat</h2>
                <UserHeader userType="chatUser"/>
            </div>
        </div >
    );
}

export default Sidebar;
