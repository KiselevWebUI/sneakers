import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [drawerOpened, setDrawerOpened] = useState(false);

  useEffect(() => {
    fetch('https://62c533e6134fa108c24ac769.mockapi.io/items')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json)
    })
  }, []);

  const onAddToCart = (obj) => {
    //let curr = cartItems.filter((i) => i.key !== obj.key);
    //console.log('curr', curr)
    console.log(cartItems.find((i) => i.key === obj.key))

    if(!cartItems.find((i) => i.key === obj.key)) setCartItems(prev => [...prev, obj]);
    else setCartItems(prev => prev.filter(i => i.key !== obj.key));
  }

  console.log(cartItems);

  return (
    <div className="wrapper clear">

      {drawerOpened && <Drawer items = {cartItems} onCloseDrawer = {() => setDrawerOpened(false)}/>}
      <Header onClickCart = {() => setDrawerOpened(true)}/>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search"/>
          <input placeholder="Поиск..."/>
          </div>
        </div>

        <div className="d-flex flex-wrap">

          {
            items.map((item) => (
              <Card 
              key={'key_' + item.key}
              title={item.name} 
              price={item.price} 
              imgUrl={item.pic} 
              onFavorite={() => console.log('Кликнули на фаворитов', item)}
              onPlus={() => onAddToCart(item)}
              />
            ))
          }
        
        </div>

      </div>
    </div>
  );
}

export default App;
