// import { useContext } from 'react';
import { useHistory } from 'react-router';

// import { AuthContext } from '../contexts/AuthContext';
import { useAuth } from '../hooks/userAuth';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss'
import { useAuth } from '../hooks/userAuth';

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();

    async function handleCreateRoom() {
        if (!user){
            await signInWithGoogle();
        }

        history.push('/rooms/new')
    };
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas sua audiência em dúvida em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button >
                    </form>
                </div>
            </main>
        </div>
    )
}