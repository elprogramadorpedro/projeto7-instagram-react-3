import Stories from './stories';
import Feed from './feed';
import SideBar from './sidebar';

export default function Conteudo() {
    return (
        <main>
            <div className="principais">
                <Stories />
                <Feed />
                <SideBar />
            </div>
        </main>
    );
}