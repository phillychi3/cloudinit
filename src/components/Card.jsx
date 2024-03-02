import PropTypes from 'prop-types'

const Card = ({element}) => {

  return (
    <div className="card">
      <div className="card-content">
        {element}
      </div>
    </div>
  )
}
Card.propTypes = {
  element: PropTypes.object.isRequired
}

export default Card
