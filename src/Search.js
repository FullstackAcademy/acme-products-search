import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const Search = ()=> {
  const { products } = useSelector(state => state);
  const navigate = useNavigate();
  const { filter } = useParams();
  const filtered = products.filter(product => !filter || product.name.includes(filter));
  return (
    <div>
      <input value={ filter || '' } placeholder='filter' onChange={ev => navigate(`/products/search/${ev.target.value}`)} />
      <ul>
        {
          filtered.map( product => {
            return (
              <li key={ product.id}>
                { product.name }
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Search;
