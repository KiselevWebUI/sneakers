import {useState, useEffect} from 'react';
import styles from './Card.module.scss';

function Card({imgUrl, title, price, onFavorite, onPlus}){
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickPlus = () => {
    onPlus();
    setIsAdded(!isAdded);
  }

  const onClickFavorite = () => {
    onFavorite();
    setIsFavorite(!isFavorite);
  }

  //useEffect(() => {
    //console.log('isAdded', isAdded);
  //}, [])

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src={isFavorite?'/img/liked.svg':'/img/unliked.svg'} alt="Unliked" onClick={onClickFavorite}/>
      </div>
      <img src={imgUrl} width={133} height={112} alt=""/>
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб</b>
        </div>
        <img className={styles.plus} src={isAdded?'/img/btn-checked.svg':'/img/btn-plus.svg'} onClick={onClickPlus} alt="{isAdded?'Plus':'Minus'}"/>
      </div>
    </div>
  )
}

export default Card;