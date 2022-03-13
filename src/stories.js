export default function Stories() {
    const stories = [
        { foto: "imagens/9gag 1.png", nome: "9gag" },
        { foto: "imagens/meowed 1.png", nome: "meowed" },
        { foto: "imagens/barked 1.png", nome: "barked" },
        { foto: "imagens/nathanwpylestrangeplanet 1.png", nome: "nathanwpyle..." },
        { foto: "imagens/wawawiwacomicsa 1.png", nome: "wawawiwac..." },
        { foto: "imagens/respondeai 1.png", nome: "respondeai" },
        { foto: "imagens/filomoderna 1.png", nome: "filomoderna" },
        { foto: "imagens/memeriagourmet 1.png", nome: "memeriago." }
    ];

    return (
        <div className="stories">
            {stories.map(element => <Storie info={element} />)}
            <div className="setinha"><img src="imagens/Vector2.png" /></div>
        </div>
    );
}

function Storie(props) {
    return (
        <div className="stories1">
            <img src="imagens/stories_background1.png" />
            <div className="stories2">
                <img src={props.info.foto} />
                <p>{props.info.nome}</p>
            </div>
        </div>
    );
}