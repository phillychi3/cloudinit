import PropTypes from 'prop-types'
import  { useEffect, useState } from 'react'
const Card = ({ element,color }) => {
  const [backgroundColor, setBackgroundColor] = useState('#ecf0f1');

  useEffect(() => {
    if (color) {
      setBackgroundColor(color);
    }
  }, [color]);

  return (
    <div className="card" style={{borderColor:backgroundColor,borderStyle:color?"solid":"none"}}>
      <div className="card-content">{element}</div>
    </div>
  )
}
Card.propTypes = {
  element: PropTypes.object.isRequired,
  color: PropTypes.string
}

export default Card
