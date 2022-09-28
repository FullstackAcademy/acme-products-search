import React, { useEffect } from 'react';
import { Link, Routes, Route, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './store';
import Products from './Products';
import ProductUpdate from './ProductUpdate';
import Search from './Search';
import ProductsByPage from './ProductsByPage';

const Foo = ()=> {
  const params = useParams();
  console.log(params);
  return (
    <Link to='/foo/1/2/3/4'>Click Me</Link>
  );
};

const App = ()=> {
  const { orders, products } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products ({ products.length })</Link>
        <Link to='/products/search'>Search</Link>
        <Link to='/products/byPage/0'>Products By Page</Link>
        <Link to='/orders'>Orders ({ orders.length })</Link>
        <Link to='/foo/bar/bazz/quq/fizz'>Foo</Link>
      </nav>
      <Routes>
        <Route path='/' element={ <div>Home</div> } />
        <Route path='/foo/:x/:y/:z/:p' element={ <Foo />} />
        <Route path='/products' element={ <Products /> } />
        <Route path='/products/:id' element={ <ProductUpdate /> } />
        <Route path='/products/search' element={ <Search /> } />
        <Route path='/products/search/:filter' element={ <Search /> } />
        <Route path='/products/byPage/:index' element={ <ProductsByPage /> } />
      </Routes>
    </div>
  );
};

export default App;
