import React from 'react'
import PropTypes from 'prop-types'

import styles from './RadioBox.module.css'

const RadioBox = ({ name, selectItem, onChange }) => {
  const isChecked = name === selectItem
  return (
    <div className={`${styles.radioBox}`}>
      <input
        type="radio"
        name={name}
        id={name}
        value={name}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  )
}

export default RadioBox

RadioBox.propTypes = {
  name: PropTypes.string.isRequired,
  selectItem: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
