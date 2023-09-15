import Button from "../button"
import PropTypes from 'prop-types'
import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from './Card.module.scss'

const Card = ({prod}) => {
  return (
    <div className={styles.category__wrapper_cards_card}>
    <LazyLoadImage src={prod.image} effect="blur" alt="" />
    <div className={styles.text}>
      <h3>{prod.name}</h3>
      <p>
        {prod.description}
      </p>
      <div>
        <Button padding={"13px 32px"} br={"6px"} fontSize={"16px"}>
          Выбрать
        </Button>
      </div>
    </div>
  </div>
  )
}

Card.propTypes = {
  prod: PropTypes.object
}

export default Card