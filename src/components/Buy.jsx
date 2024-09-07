import styled from 'styled-components';
import Carrinho from '../assets/carrinho.png';

const Buys = styled.article`
  display: grid;
  place-items: center;
  width: 15rem; 
  height: 18rem; 
  overflow: hidden;
  border-radius: 0.625rem;
  background-color: #586875;
  transition: transform 500ms ease;
  color: #ffffff;
  position: relative; 

  .buy__content {
    display: flex;
    align-items: center;
    color: #ffffff;
    padding: 1rem;
    position: relative;
  }

  .imagem {
    display: flex;
    justify-content: center;
    width: 80%;
    margin: 15px;
  }

  .buy__image {
    width: 70%;
    height: 80%; 
    border-radius: 0.625rem;
  }

  .titulo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 10px;
  }

  .btn {
    background-color: #345a78;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: none;
    cursor: pointer;
    transition: background-color 300ms ease;
    position: absolute; 
    bottom: 10px; 
    right: 10px; 

    img {
      width: 18px; 
      height: 18px;
    }
  }


  hr {
    width: 90%; 
    border: 1.5px solid #ffffff; 
    margin: 0; 
    align-self: center; 
    margin: 10px 0; 
  }

  .buy__title {
    margin: 0;
    flex: 1; 
    text-align: left; 
  }
`;

export default function Buy({ imageSrc, title }) {
  return (
    <Buys>
      <div className='imagem'>
        <img className="buy__image" src={imageSrc} alt={title} />
      </div>
      <hr />
      <div className='titulo'>
        <h3 className="buy__title">{title}</h3>
        <button className='btn'><img src={Carrinho} alt="" /></button>
      </div>
    </Buys>
  );
}
