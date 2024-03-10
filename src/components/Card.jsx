import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react';

const Card = ({element}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (element) {
      setIsLoading(false);
    }
  }, [element]);
  return (
    <div className="card">
      <div className="card-content">
        {isLoading ? <div>Loading...</div> : element}
      </div>
    </div>
  )
}
Card.propTypes = {
  element: PropTypes.object.isRequired
}

export default Card
