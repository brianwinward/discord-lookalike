import NavBar from "../NavBar/NavBar"
import ChatWindow from '../ChatWindow/ChatWindow'
import UserRail from '../UserRail/UserRail'

function CurrentServerContainer() {
    return (
        <div className='w-full h-screen'>
            <NavBar />
            <div className='h-[calc(100%-48px)] flex flex-row'> 
                <ChatWindow />
                <UserRail />
            </div>
        </div>
    )
}

export default CurrentServerContainer