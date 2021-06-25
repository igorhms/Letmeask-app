import logoImg from '../assets/images/logo.svg'

export function Room() {
    return (
        <div id="pageRoom">
            <header>
                <div className="content">
                    <img src={logoImg} alt="" />
                    <div>Codigo</div>
                </div>
            </header>

            <main className="content">
                <div className="room-title">
                    <h1>Sala React</h1>
                </div>
            </main>
        </div>
    );
}