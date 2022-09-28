import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import _Products from './_Products';

const ProductsByPage = ()=> {
  const { products } = useSelector(state => state);
  const { index } = useParams();
  const PAGE_SIZE = 3;
  const count = Math.ceil(products.length / PAGE_SIZE); 
  const pages = new Array(count)
    .fill('')
    .map((_, idx)=> {
      return {
        text: `Page ${ idx + 1}`,
        idx
      };
    });
  const start = PAGE_SIZE * index;
  const end = PAGE_SIZE * (index*1 + 1);
  const filtered = products.slice(start, end);
  return (
    <div>
      <_Products products={ filtered } />
      <nav>
        {
          pages.map( page => {
            return (
              <Link
                key={ page.idx }
                to={`/products/byPage/${page.idx}`}
                className= { index*1 === page.idx ? 'selected': ''}
              >
                { page.text }
              </Link>

            );
          })
        }
      </nav>
    </div>
  );
};

export default ProductsByPage;
