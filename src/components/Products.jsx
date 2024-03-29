import React, { useEffect, useState } from 'react';

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false)
  const handleChange = () => setChecked(prev => !prev)

  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then(data => {
        console.log('데이터를 네트워크에 받아옴.')
        setProducts(data);
      });
      return ()=>{
        console.log('깨끗하게 청소하는 일들을 합니다.')
      }
  }, [checked]);



  return (
    <>
      <input id='checkbox' type="checkbox" value={checked} onClick={handleChange} />
      <label htmlFor="checkbox">Show Olny hot Sale</label>
      <ul>
        {products.map((products) => (
          <li key={products.id}>
            <article>
              <h3>{products.name}</h3>
              <p>{products.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
