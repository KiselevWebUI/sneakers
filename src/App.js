import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';
import { useEffect, useState } from 'react';

function App() {
  const [items, seItems] = useState([]);
  const [drawerOpened, setDrawerOpened] = useState(false);

  useEffect(() => {
    fetch('https://62c533e6134fa108c24ac769.mockapi.io/items')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      seItems(json)
    })
  }, [])

  return (
    <div className="wrapper clear">

      {drawerOpened && <Drawer onCloseDrawer = {() => setDrawerOpened(false)}/>}
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
            items.map((obj) => (
              <Card 
              key={'key_' + obj.key}
              title={obj.name} 
              price={obj.price} 
              imgUrl={obj.pic} 
              onClickFavorite={() => console.log('Кликнули на фаворитов', obj)}
              onClickPlus={() => console.log('Кликнули на добавление', obj)}
              />
            ))
          }
        
        </div>

      </div>
    </div>
  );
}

export default App;
