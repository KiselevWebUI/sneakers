function Drawer({onCloseDrawer, items = []}){
    return (
      <div className="overlay">

        <div className="drawer">
          
          <h2 className="d-flex justify-between mb-30">
            Корзина
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Close" onClick={onCloseDrawer}/>
          </h2>

          <div className="items flex">
            {
              items.map((obj) => (
                <div className="cartItem d-flex align-center" key={'drw_' + obj.key}>
                  <img className="mr-10" src={obj.pic} width={70} alt=""/>
                  <div className="mr-20">
                    <p className="mb-5">{obj.name}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img className="removeBtn" src="/img/btn-remove.svg" alt="Plus"/>
                </div>
              ))
            }
          </div>

          <div className="cartTotalBlock">
            <ul >
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 412 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1050 руб.</b>
              </li>
            </ul>
            <button className="greenButton">Оформить заказ</button>
          </div>
          
        </div>
      </div>
    )
}

export default Drawer;