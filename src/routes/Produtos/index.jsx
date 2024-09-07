// Produtos.jsx
import React from 'react';
import styled from 'styled-components';
import { MainProduto } from '../../styled'; 
import Search from '../../assets/search.png';
import Buy from '../../components/Buy.jsx';
import Carousel from '../../components/Carrosel'; 

import ArcoImage from '../../assets/arco.png';
import PranchaImage from '../../assets/prancha.png';
import VelaImage from '../../assets/vela.png';
import LuvaImage from '../../assets/luva.png';

export default function Produtos() {
  const buyData = [
    {
      imageSrc: ArcoImage,
      title: 'ARCO RECURVO',
    },
    {
      imageSrc: PranchaImage,
      title: 'PRANCHA DE SURFE',
    },
    {
      imageSrc: VelaImage,
      title: 'PARAPENTE',
    },
    {
      imageSrc: LuvaImage,
      title: 'LUVAS DE BOX',
    },
  ];

  return (
    <MainProduto>
      <div className="pesquisa">
        <input type="text" placeholder="Busque o que deseja" />
        <button>
          <img src={Search} alt="Search Icon" />
        </button>
      </div>

      <h1>MARCAS</h1>
      <Carousel />
      <h2>PRODUTOS</h2>
      <hr />
      <div className="container">
        {buyData.map((buy, index) => (
          <Buy key={index} imageSrc={buy.imageSrc} title={buy.title} />
        ))}
      </div>
    </MainProduto>
  );
}
