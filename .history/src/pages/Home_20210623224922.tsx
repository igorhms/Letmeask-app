import { useContext } from 'react';
import { useHistory } from 'react-router';

import { auth, firebase } from '../services/firebase';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import { TestContext } from '../App'

import '../styles/auth.scss'

export function Home(){
    const history = useHistory();
    const { value, setValue } = useContext(TestContext)

    function handleCreateRoom() {
        const provider = new firebase.auth.GoogleAuthProvider();
        console.log("oi")

        auth.signInWithPopup(provider).then(result => {
            console.log(result);

            history.push('/rooms/new')
        });

    }
    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas sua audiência em dúvida em tempo real</p>
            </aside>
            <main>
                <h1>{value}</h1>
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