export default function SideBar() {
    const sugestoes = [
        { foto: "imagens/badvibesmemes 1.png", nome: "bad.vibes.memes" },
        { foto: "imagens/chibirdart 1.png", nome: "chibirdart" },
        { foto: "imagens/razoesparaacreditar 1.png", nome: "razoesparaacreditar" },
        { foto: "imagens/adorableanimals 1.png", nome: "adorable_animals" },
        { foto: "imagens/smallcutecats 1.png", nome: "smallcutecats" },
    ];

    const sugestaoUsuario = { foto: "imagens/catanacomics 1.png", nome: "catanacomics", usuario: "Catana" };

    return (
        <div className="sideBar">

            <SugestaoPrincipal foto={sugestaoUsuario.foto} nome={sugestaoUsuario.nome} usuario={sugestaoUsuario.usuario} />

            <div className="elementos-secundarios">
                <div className="titulo-sugestoes">
                    <p>Sugestões para você</p>
                    <p>Ver tudo</p>
                </div>

                {sugestoes.map(element => <Sugestoes dados={element} />)}

                <div className="infos">
                    <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                        Termos • Localizações • Contas mais relevantes • Hashtags •
                        Idioma
                    </p>
                    <p>© 2021 INSTAGRAM DO FACEBOOK</p>
                </div>
            </div>
        </div>
    );
}

function Sugestoes(props) {

    return (
        <div className="sugestoes">
            <div className="sugestao"><img src={props.dados.foto} />
                <div>
                    <p>{props.dados.nome}</p>
                    <p className="p1">Segue você</p>
                </div>
                <p className="p2">Seguir</p>
            </div>
        </div>
    );
}

function SugestaoPrincipal(props) {
    return (
        <div className="elemento-principal">
            <img src={props.foto} />
            <div className="descricao">
                <p>{props.nome}</p>
                <p>{props.usuario}</p>
            </div>
        </div>
    );
}