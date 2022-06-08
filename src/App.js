

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="/img/logo.png" width={40} height={40}/>
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="/img/cart.svg" height={18} width={18}/>
            <span>
              <b>1205 руб</b>
            </span>
          </li>
          <li>
            <img src="/img/user.svg" width={20} height={20}/>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="d-flex">

        <div className="card">
          <img src="/img/sneakers/1.jpg" width={133} height={112} alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб</b>
            </div>
            <button className="button">
              <img src="/img/plus.svg" width={11} height={11} alt="Plus"/>
            </button>
          </div>
        </div>

        <div className="card">
          <img src="/img/sneakers/2.jpg" width={133} height={112} alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб</b>
            </div>
            <button className="button">
              <img src="/img/plus.svg" width={11} height={11} alt="Plus"/>
            </button>
          </div>
        </div>

        <div className="card">
          <img src="/img/sneakers/3.jpg" width={133} height={112} alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб</b>
            </div>
            <button className="button">
              <img src="/img/plus.svg" width={11} height={11} alt="Plus"/>
            </button>
          </div>
        </div>

        <div className="card">
          <img src="/img/sneakers/4.jpg" width={133} height={112} alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб</b>
            </div>
            <button className="button">
              <img src="/img/plus.svg" width={11} height={11} alt="Plus"/>
            </button>
          </div>
        </div>

        <div className="card">
          <img src="/img/sneakers/5.jpg" width={133} height={112} alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб</b>
            </div>
            <button className="button">
              <img src="/img/plus.svg" width={11} height={11} alt="Plus"/>
            </button>
          </div>
        </div>

        <div className="card">
          <img src="/img/sneakers/6.jpg" width={133} height={112} alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб</b>
            </div>
            <button className="button">
              <img src="/img/plus.svg" width={11} height={11} alt="Plus"/>
            </button>
          </div>
        </div>

        <div className="card">
          <img src="/img/sneakers/7.jpg" width={133} height={112} alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб</b>
            </div>
            <button className="button">
              <img src="/img/plus.svg" width={11} height={11} alt="Plus"/>
            </button>
          </div>
        </div>

        </div>

      </div>
    </div>
  );
}

export default App;
