import './FinalMessage.css';

export default function FinalMessage({success, setPage}){

    if(success)
        return(
            <div className='container'>
                <div className="title">Parabéns 🥳</div>
                <div className="text">Você não esqueceu de nenhum flashcard!</div>
                <button onClick={() => setPage('main')}>Voltar ao início<ion-icon name="play-forward"></ion-icon></button>
            </div>
        );
    else
        return(
            <div className='container'>
                <div className="title">Putz.. 😥</div>
                <div className="text">Você esqueceu alguns flashcards..
                    Não desanime! Na próxima você consegue!</div>
                <button onClick={() => setPage('main')}>Voltar ao início<ion-icon name="play-forward"></ion-icon></button>
            </div>
        );
}