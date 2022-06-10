function Header(){
    return (
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
    )
}
export default Header;