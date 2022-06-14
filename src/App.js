import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';

const arr = [
  {name: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999, pic: "/img/sneakers/1.jpg"},
  {name: "Мужские Кроссовки Nike Air Max 270", price: 15600 , pic: "/img/sneakers/2.jpg"},
  {name: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999, pic: "/img/sneakers/3.jpg"},
  {name: "Кроссовки Puma X Aka Boku Future Rider", price: 12999, pic: "/img/sneakers/4.jpg"},
  {name: "Кроссовки Future Rider", price: 12999, pic: "/img/sneakers/5.jpg"},
  {name: "Кроссовки Black Edition", price: 12999, pic: "/img/sneakers/6.jpg"},
  {name: "Кроссовки Orange Boomb Edition", price: 12999, pic: "/img/sneakers/7.jpg"}
];

function App() {
  return (
    <div className="wrapper clear">
      
      <Drawer/>

      <Header/>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search"/>
          <input placeholder="Поиск..."/>
          </div>
        </div>

        <div className="d-flex">

          {
            arr.map((obj) => (
              <Card title={obj.name} price={obj.price} imgUrl={obj.pic} click={() => console.log(obj)}/>
            ))
          }
        
        </div>

      </div>
    </div>
  );
}

export default App;
