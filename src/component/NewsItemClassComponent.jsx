import { Component } from 'react'
import PropTypes from 'prop-types'
import Spinner from './Spinner.jsx'

export default class NewsItemClassComponent extends Component {
  render() {
    const { article } = this.props

    return (
      <>
        <div className="col-md-4">
          
          <div className="card h-100" style={{ width: '18rem' }}>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {article.author?.slice(0, 20) || 'Unknown Source'}...<span className="visually-hidden">unread messages</span>
            </span>
            <img src={article.image} className="card-img-top" alt={article.title} style={{ height: '180px', objectFit: 'cover' }} />
            <div className="card-body d-flex flex-column align-items-start">
              <h5 className="card-title">{article.title ? article.title.slice(0, 30) : 'No Title'}...</h5>
              <p className="card-text flex-grow-1">{article.body ? article.body.slice(0, 100) : 'No description available'}...</p>
              <p className="card-text"><small className="text-muted">Last updated {article.date ? new Date(article.date).toLocaleDateString() : 'Unknown'}</small></p>
              <a href={article.url} className="btn btn-primary mt-auto align-self-start" target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

NewsItemClassComponent.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
}
