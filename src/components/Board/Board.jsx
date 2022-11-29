import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useGetImages from '../../hooks/useGetImages'
import Loader from './../Loader'
import styles from './Board.module.css'
import Card from '../Card'
import Result from '../Result'
import useGameLogic from '../../hooks/useGameLogic'

const Board = ({ gameOptions, restartGame }) => {
  const [isLoading, setIsLoading] = useState(true)
  const images = useGetImages(gameOptions)
  const { cards, onCardClick, isWin } = useGameLogic(images, gameOptions.pace)

  useEffect(() => {
    if (images.length > 0) setIsLoading(false)
  }, [images])
  return (
    <div>
      {isWin && <Result restartGame={restartGame} />}
      {isLoading ? (
        <Loader />
      ) : (
        <div className={`${styles.board}`}>
          {cards.map((card) => (
            <Card key={card.uniqueId} card={card} onCardClick={onCardClick} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Board
Board.propTypes = {
  gameOptions: PropTypes.shape({
    pace: PropTypes.string.isRequired,
    cardsCount: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
  restartGame: PropTypes.func.isRequired,
}
