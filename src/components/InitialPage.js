import './InitialPage.css';

export default function InitialPage(){
    return(
        <div className="initial-page">
            <div></div>
            <img className="logo" src="assets/logo.png" alt="Logo"/>
            <button>Praticar React<ion-icon name="play-forward"></ion-icon></button>
        </div>
    );
}