import copyImg from '../assets/images/copy.svg'

import '../styles/room-code.scss'

export function RoomCode () {
    function copyRoomCodeToClipBoard(){
        navigator.clipboard.writeText('-MczoY_5yxJTlQepjO3r')
    }

    return(
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #123123123</span>
        </button>
    );
}