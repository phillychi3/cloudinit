import { useState } from 'react'
import Modal from 'react-modal'

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
    },
  }

  function switchModal() {
    setopen(!opensetting)
  }
  function afterOpenModal() {}

  function closeModal() {
    setopen(false)
  }
  return (
    <div>
      <div className="SettingButton" onClick={switchModal}><i className="fa-solid fa-gear"></i></div>
      <Modal
        isOpen={opensetting}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={Style}
      >
        <div className="setting">
          <p>test test</p>
          <button onClick={closeModal}>close</button>
        </div>
      </Modal>
    </div>
  )
}

export default Setting
