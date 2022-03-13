export default function Topo() {
    return (
        <header>
            <div className="barra-superior">
                <div className="icon-instagram"><ion-icon name="logo-instagram"></ion-icon></div>
                <div className="separador-vertical"></div>
                <div className="logo-instagram"><img src="imagens/logo.png" /></div>
                <div className="pesquisar"><p>Pesquisar</p></div>
                <div className="icon-compartilhar"><ion-icon name="paper-plane-outline"></ion-icon></div>
                <div className="icon-dm"><ion-icon name="compass-outline"></ion-icon></div>
                <div className="icon-coracao"><ion-icon name="heart-outline"></ion-icon></div>
                <div className="icon-perfil"><ion-icon name="person-outline"></ion-icon></div>
            </div>
        </header>
    );
}