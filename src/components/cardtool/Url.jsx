import Card from '../Card'
import PropTypes from 'prop-types'
import Svg from './Loading'
import { useState, useEffect } from 'react'

const Url = ({ index }) => {
  const [cardData, setCardData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        setIsLoading(true)
        const url = JSON.parse(localStorage.getItem('setting')).cards[index].url
        if (url === '') {
          setError("URL is empty")
        }

        const response = await fetch(
          `https://api.dub.co/metatags?url=${encodeURIComponent(url)}`
        )

        if (!response.ok) {
          throw new Error('Failed to fetch metadata')
        }

        const data = await response.json()
        setCardData({ url, ...data })
      } catch (err) {
        console.error('Error fetching card data:', err)
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCardData()
  }, [index])
  const { url, title, image } = cardData || {}
  return (
    <Card
      element={
        !isLoading ? (
          !error ? (
            <div className="bento-link-card">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="content"
              >
                <div className="icon">
                  <img src={image} alt={title} />
                </div>
                <div className="ctitle">
                  {title || 'Untitled'}
                </div>
              </a>
            </div>
          ) : (
            <div className="bento-link-card">
              <p>error</p>
            </div>
          )
        ) : (
          <Svg />
        )
      }
      index={index}
    />
  )
}
Url.propTypes = {
  index: PropTypes.number
}

export default Url
