import './Card.css'

export default function CardFront(){
    const index = 1;
    const questions = [
        {title:"O que é JSX?", response: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ullamcorper at quis eu. Malesuada iaculis viverra a tincidunt arcu nullam. Orci tortor arcu placerat id sit et. Elementum in erat cras tortor at auctor diam."},
        {title:"O React é __", response: "O React é uma biblioteca JavaScript para construção de interfaces."}
    ];



    return(
        <div className="card front">
            <div className='position'>{index+1}/{questions.length}</div>
            <div className='title'>{questions[index].title}</div>
            <div className='seta'><ion-icon name="arrow-undo"></ion-icon></div>
            
        </div>
    );
}