import { useState } from 'react'
import Modal from 'react-modal'
import Cards from '../util/cards.js'

const Setting = () => {
  const [opensetting, setopen] = useState(false)

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
    setopen(!opensetting)
  }

  function savesetting() {}

  function addCard(card) {
    let setting = JSON.parse(localStorage.getItem('setting'))
    setting.cards.push(Cards[card])
    console.log(setting)
    localStorage.setItem('setting', JSON.stringify(setting))
    window.dispatchEvent(
      new StorageEvent('storage', { key: 'card', ...setting.cards })
    )
  }

  function closeModal() {
    setopen(false)
  }
  return (
    <div>
      <div className="SettingButton" onClick={switchModal}>
        <i className="fa-solid fa-gear"></i>
      </div>
      <Modal
        isOpen={opensetting}
        onAfterClose={savesetting}
        onRequestClose={closeModal}
        style={Style}
      >
        <div className="setting">
          <div className="setting-buttons">
            {Object.keys(Cards).map((card) => (
              <div
                className="addbutton"
                key={card}
                onClick={() => addCard(card)}
              >
                <i className="fa-solid fa-plus"></i>
                {Cards[card].name}
              </div>
            ))}
          </div>
          <button onClick={closeModal}>close</button>
        </div>
      </Modal>
    </div>
  )
}

export default Setting
