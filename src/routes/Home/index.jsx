import { MainGeral } from "../../styled";
import Banner from '../../assets/banner.png';
import Card from '../../components/Card.jsx';

// Importando as imagens corretamente
import ArqueriaImage from '../../assets/arqueria.jpg';
import EsgrimaImage from '../../assets/esgrima.jpg';
import CanoagemImage from '../../assets/kayak.jpg';
import ParaquedaImage from '../../assets/paraquedas.jpg';

export default function Home() {
    const cardData = [
        {
            imageSrc: ArqueriaImage,
            title: 'TERRESTRE',
            description: 'Desafie os limites da sua força e velocidade com nosso equipamento de esportes terrestres.',
        },
        {
            imageSrc: CanoagemImage,
            title: 'MARINHO',
            description: 'Conquiste o oceano com nosso material de alta performance para esportes aquáticos.',
        },
        {
            imageSrc: ParaquedaImage,
            title: 'AÉREO',
            description: 'Sinta a liberdade nas alturas com nosso equipamento de esportes aéreos.',
        },
        {
            imageSrc: EsgrimaImage,
            title: 'COMBATE',
            description: 'Prepare-se para o combate com nossa seleção de equipamentos.',
        },
    ];
    return (
        <MainGeral>
            <img src={Banner} alt="" />
            <h1>ALCANCE O TOPO E SUPERE SEUS LIMITES</h1>
            <p>MODALIDADE</p>
            <hr/>
            <div className="container">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        imageSrc={card.imageSrc}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </MainGeral>
    );
}
