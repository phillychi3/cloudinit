import Svg from './Loading'
import Card from '../Card'
import PropTypes from 'prop-types'
import useVtuber from '../../hooks/usevtuber'

const VtuberCard = (data) => {
  return (
    <div className="vtuber-card">
      {Object.entries(data.vtuberdata).map(([index, vtuber]) => (
        <div key={index} className="vtuber-item">
          <a
            href={vtuber.link}
            target="_blank"
            rel="noreferrer"
            className="thumbnail-link"
          >
            <img
              src={vtuber.picture}
              alt={vtuber.title}
              className="thumbnail"
            />
            <span
              className={`status-badge ${vtuber.islive ? 'live' : 'ready'}`}
            >
              {vtuber.islive ? 'LIVE' : 'Ready'}
            </span>
          </a>
          <div className="vtuber-info">
            <h3 className="stream-title">{vtuber.title}</h3>
            {vtuber.islive ? null : (
              <p className="stream-meta">
                {new Date(vtuber.timestamp * 1000).toLocaleDateString()}{' '}
                {new Date(vtuber.timestamp * 1000).toLocaleTimeString()}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

const Vtuber = ({ index }) => {
  const vtuber = useVtuber()
  return (
    <Card
      element={
        <div className="weather">
          {vtuber.loading ? (
            <Svg />
          ) : vtuber.error ? (
            vtuber.error
          ) : (
            <VtuberCard {...vtuber} />
          )}
        </div>
      }
      index={index}
    />
  )
}
Vtuber.propTypes = {
  index: PropTypes.number
}
export default Vtuber
