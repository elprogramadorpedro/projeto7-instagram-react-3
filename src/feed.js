export default function Feed() {
    const feed = [
        { nome: "meowed", fotouser: "imagens/meowed 2.png", fotoprincipal: "imagens/gato-telefone 1.png", fotocurtidas: "imagens/respondeai 2.png", curtidas: ["respondeai", "101.523"], comentarios: ["1 467", "respondeai", "barked", "😜😜😜"] },
        { nome: "barked", fotouser: "imagens/barked 2.png", fotoprincipal: "imagens/video.mp4", fotocurtidas: "imagens/adorableanimals 2.png", curtidas: ["adorable_animals", "99.159"], comentarios: ["2 363", "respondeai", "barked", "🧸🧸🧸🧸"] },
        { nome: "meowed", fotouser: "imagens/meowed 2.png", fotoprincipal: "imagens/gato-telefone 1.png", fotocurtidas: "imagens/respondeai 2.png", curtidas: ["respondeai", "101.523"], comentarios: ["1 467", "respondeai", "barked", "😜😜😜"] }
    ];

    return (
        <div className="feed">
            {feed.map(element => <Posts dados={element} />)}
        </div>
    );
}

function Posts(props) {
    let isImg = null;
    let ext = props.dados.fotoprincipal.split(".")[1]
    if (ext === "png" || ext === "jpg") {
        isImg = true;
    } else if (ext === "mp4" || ext === "ogv") {
        isImg = false;
    }

    return (
        <div className="principal">
            <div className="username"><img src={props.dados.fotouser} /><p>{props.dados.nome}</p><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
            {isImg && <div className="foto"><img src={props.dados.fotoprincipal} /></div>}
            {!isImg && <div className="foto"><video autoPlay loop muted src={props.dados.fotoprincipal} /></div>}
            <div className="icon-configfoto"><ion-icon name="heart-outline"></ion-icon><ion-icon name="chatbubble-outline"></ion-icon><ion-icon name="paper-plane-outline"></ion-icon><ion-icon name="bookmark-outline"></ion-icon></div>
            <div className="curtidas"><img src={props.dados.fotocurtidas} /><p>Curtido por <strong>{props.dados.curtidas[0]}</strong> e <strong>{props.dados.curtidas[1]} pessoas</strong></p></div>
            <div className="comentarios">
                <div><p>Ver todos {props.dados.comentarios[0]} comentários</p></div>
                <div className="comentario1"><p><strong>{props.dados.comentarios[1]}</strong> {props.dados.nome}</p><ion-icon name="heart-outline"></ion-icon></div>
                <div className="comentario2"><p><strong>{props.dados.comentarios[2]}</strong> {props.dados.comentarios[3]}</p><ion-icon name="heart-outline"></ion-icon></div>
            </div>

            <div className="comentario3">
                <ion-icon className="icon-smile" name="happy-outline"></ion-icon>
                <input type="text" placeholder="Escreva aqui seu comentário..." />
                <button className="publicar">Publicar</button>
            </div>
        </div>
    );
}