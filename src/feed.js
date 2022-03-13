
export default function Feed() {
    const feed = [
        { nome: "meowed", fotouser: "imagens/meowed 2.png", fotoprincipal: "imagens/gato-telefone 1.png", fotocurtidas: "imagens/respondeai 2.png", comentarios: ["Ver todos 1 467 comentários", "respondeai", "barked", "😜😜😜"] },
        { nome: "barked", fotouser: "imagens/barked 2.png", fotoprincipal: "imagens/video.mp4", fotocurtidas: "imagens/adorableanimals 2.png", comentarios: ["Ver todos 2 363 comentários", "respondeai", "barked", "🧸🧸🧸🧸"] },
        { nome: "meowed", fotouser: "imagens/meowed 2.png", fotoprincipal: "imagens/gato-telefone 1.png", fotocurtidas: "imagens/respondeai 2.png", comentarios: ["Ver todos 1 467 comentários", "respondeai", "barked", "😜😜😜"] }
    ];

    return (
        <div className="feed">
            {feed.map(element => <Posts info={element} />)}
        </div>
    );
}

function Posts(props) {
    let isImg = null;
    let ext = props.info.fotoprincipal.split(".")[1]
    if(ext === "png" || ext === "jpg"){
        isImg = true;
    } else if (ext === "mp4" || ext === "ogv"){
        isImg = false;
    }
    
    return (
        <div className="principal">
            <div className="username"><img src={props.info.fotouser} /><p>{props.info.nome}</p><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
            {isImg && <div className="foto"><img src={props.info.fotoprincipal} /></div>}
            {!isImg && <div className="foto"><video autoPlay loop muted src={props.info.fotoprincipal} /></div>}
            <div className="icon-configfoto"><ion-icon name="heart-outline"></ion-icon><ion-icon name="chatbubble-outline"></ion-icon><ion-icon name="paper-plane-outline"></ion-icon><ion-icon name="bookmark-outline"></ion-icon></div>
            <div className="curtidas"><img src={props.info.fotocurtidas} /><p>Curtido por <strong>respondeai</strong> e <strong>101.523 pessoas</strong></p></div>
            <div className="comentarios">
                <div><p>{props.info.comentarios[0]}</p></div>
                <div className="comentario1"><p><strong>{props.info.comentarios[1]}</strong>{props.info.nome}</p><ion-icon name="heart-outline"></ion-icon></div>
                <div className="comentario2"><p><strong>{props.info.comentarios[2]}</strong>{props.info.comentarios[3]}</p><ion-icon name="heart-outline"></ion-icon></div>
            </div>

            <div className="comentario3">
                <input type="text" placeholder="     Escreva aqui seu comentário..." />
                <button className="publicar">Publicar</button>
            </div>
        </div>
    );
}

