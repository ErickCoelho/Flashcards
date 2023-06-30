import './FinalMessage.css';

export default function FinalMessage(){
    const success = false;

    if(success)
        return(
            <div className='container'>
                <div className="title">Parabéns 🥳</div>
                <div className="text">Você não esqueceu de nenhum flashcard!</div>
            </div>
        );
    else
        return(
            <div className='container'>
                <div className="title">Putz.. 😥</div>
                <div className="text">Você esqueceu alguns flashcards..
                    Não desanime! Na próxima você consegue!</div>
            </div>
        );
}