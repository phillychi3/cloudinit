import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
const Card = ({ element, color }) => {
  const [backgroundColor, setBackgroundColor] = useState('#ecf0f1')
  const [ishover, setIshover] = useState(false)

  useEffect(() => {
    if (color) {
      setBackgroundColor(color)
    }
  }, [color])

  return (
    <div
      className="card"
      style={{
        borderColor: backgroundColor,
        borderStyle: color ? 'solid' : 'none'
      }}
      onMouseEnter={() => setIshover(true)}
      onMouseLeave={() => setIshover(false)}
    >
      {ishover && (
        <div className="card-setting">
          <div className="setting-icon">
            <i className="fas fa-cog"></i>
          </div>
        </div>
      )}
      <div className="card-content">{element}</div>
    </div>
  )
}
Card.propTypes = {
  element: PropTypes.object.isRequired,
  color: PropTypes.string
}

export default Card
