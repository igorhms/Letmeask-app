import copyImg from '../assets/images/copy.svg'

import '../styles/room-code.scss'

export function RoomCode () {
    return(
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Copy room code" />
                <span>Sala #123123123</span>
            </div>
        </button>
    );
}