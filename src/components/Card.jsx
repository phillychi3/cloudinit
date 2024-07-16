import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const Card = ({ element, color,index }) => {
  const [backgroundColor, setBackgroundColor] = useState('#ecf0f1')
  const [ishover, setIshover] = useState(false)
  const [opencardsetting, setcardopen] = useState(false)
  const Cardsetting = index ? JSON.parse(localStorage.getItem('setting')).cards[index] : null
  const Style = {
    content: {
      inset: '50% auto auto 50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50%',
      height: '50%',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
    }
  }

  function switchModal() {
    setIshover(false)
    setcardopen(!opencardsetting)
  }

  function closeModal() {
    setcardopen(false)
  }

  useEffect(() => {
    if (color) {
      setBackgroundColor(color)
    }
  }, [color])

  return (
    <>
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
          <div className="card-setting" onClick={switchModal}>
            <i className="fas fa-cog"></i>
          </div>
        )}
        <div className="card-content">{element}</div>
      </div>
      <Modal
        isOpen={opencardsetting}
        onRequestClose={closeModal}
        style={Style}
      >
        <div className="setting">
          {
            Cardsetting ? (
              <div>
                {Object.entries(Cardsetting).map(([key, value]) => (
                  key != 'name' ?
                  <div key={key}>
                    <p>{key}</p>
                    <input
                      type="text"
                      value={value}
                      onChange={
                        (e) => {
                          const newsetting = JSON.parse(localStorage.getItem('setting'))
                          newsetting.cards[index][key] = e.target.value
                          localStorage.setItem('setting', JSON.stringify(newsetting))
                          window.dispatchEvent(
                            new StorageEvent('storage', { key: 'card', ...newsetting.cards })
                          )
                      }
                    }
                    />
                  </div>
                  : null
                ))}
              </div>
            ) : null
          }
          <button onClick={closeModal}>close</button>
        </div>
      </Modal>
    </>
  )
}
Card.propTypes = {
  element: PropTypes.object.isRequired,
  color: PropTypes.string,
  index: PropTypes.number
}

export default Card
