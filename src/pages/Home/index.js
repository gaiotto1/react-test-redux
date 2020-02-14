import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg" alt="tenis" />
        <strong>Tênis bacana</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart siae={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg" alt="tenis" />
        <strong>Tênis bacana</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart siae={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg" alt="tenis" />
        <strong>Tênis bacana</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart siae={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg" alt="tenis" />
        <strong>Tênis bacana</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart siae={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg" alt="tenis" />
        <strong>Tênis bacana</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart siae={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg" alt="tenis" />
        <strong>Tênis bacana</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart siae={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
