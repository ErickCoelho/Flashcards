import './Main.css';

export default function Main({ setPage, setDeck }) {
    const deckReact = [
        {
            title: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript",
            status: 'not answered'
        },
        {
            title: "O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces",
            status: 'not answered'
        },
        {
            title: "Componentes devem iniciar com __",
            answer: "letra maiúscula",
            status: 'not answered'
        },
        {
            title: `Podemos colocar __ dentro do JSX`,
            answer: "expressões",
            status: 'not answered'
        },
        {
            title: "O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma",
            status: 'not answered'
        },
        {
            title: "Usamos o npm para __",
            answer: "gerenciar os pacotes necessários e suas dependências",
            status: 'not answered'
        },
        {
            title: "Usamos props para __",
            answer: "passar diferentes informações para componentes",
            status: 'not answered'
        },
        {
            title: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
            status: 'not answered'
        },
    ];
    const deckCSS = [
        {
            title: "O que é CSS?",
            answer: "Cascading Style Sheets (Folhas de Estilo em Cascata) é uma linguagem de estilo utilizada para definir a apresentação de um documento HTML.",
            status: 'not answered'
        },
        {
            title: "Como podemos aplicar estilos em um elemento HTML usando CSS?",
            answer: "Podemos aplicar estilos em um elemento HTML utilizando seletores CSS, propriedades e valores.",
            status: 'not answered'
        },
        {
            title: "Quais são as formas de aplicar estilos em CSS?",
            answer: "Existem três formas principais de aplicar estilos em CSS: inline (estilos diretamente nos elementos HTML), embedded (estilos em um bloco `<style>` dentro do documento HTML) e external (estilos em um arquivo CSS separado que é referenciado pelo documento HTML).",
            status: 'not answered'
        },
        {
            title: "O que são seletores CSS?",
            answer: "Os seletores CSS são padrões utilizados para selecionar os elementos HTML que desejamos estilizar. Podemos usar seletores de tag, classe, ID, descendência, entre outros.",
            status: 'not answered'
        },
        {
            title: "Quais são algumas propriedades CSS comuns?",
            answer: "Algumas propriedades CSS comuns incluem `color` (cor do texto), `font-size` (tamanho da fonte), `background-color` (cor de fundo), `margin` (margem externa), `padding` (preenchimento interno), `border` (borda), `width` (largura), `height` (altura), entre muitas outras.",
            status: 'not answered'
        },
        {
            title: "O que é o box model em CSS?",
            answer: "O box model é um conceito fundamental em CSS que define como os elementos HTML são renderizados e ocupam espaço na página. Ele consiste em margem (margin), borda (border), preenchimento (padding) e conteúdo (content).",
            status: 'not answered'
        },
        {
            title: "O que é o seletor de classe em CSS?",
            answer: "O seletor de classe em CSS permite selecionar elementos HTML com base no valor do atributo `class`. É uma forma comum de aplicar estilos a múltiplos elementos com a mesma classe.",
            status: 'not answered'
        },
        {
            title: "O que é o seletor de ID em CSS?",
            answer: "O seletor de ID em CSS permite selecionar um elemento HTML específico com base no valor do atributo `id`. É usado quando desejamos aplicar estilos a um único elemento com um ID exclusivo.",
            status: 'not answered'
        },
    ];

    return (
        <div className="initial-page">
            <div className='initial-page-container'>
                <img className="logo" src="assets/logo.png" alt="Logo" />
                <button onClick={() => {setPage('deck'); setDeck(deckReact)}}>Praticar React<ion-icon name="play-forward"></ion-icon></button>
                <button onClick={() => {setPage('deck'); setDeck(deckCSS)}}>Praticar CSS<ion-icon name="play-forward"></ion-icon></button>
            </div>
            <div></div>
        </div>
    );
}