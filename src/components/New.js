import React from 'react'

const New = props => {
  const { article } = props

  return (
    <div className="card">
      <figure className="card-img-top">
        <img src="https://ca-times.brightspotcdn.com/dims4/default/aadb800/2147483647/strip/true/crop/5472x2873+0+388/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F93%2F0d%2Fedf385d14e1e9ee2bafa3cb8b0da%2Fgettyimages-1209113434.jpg" alt="..." />
      </figure>
      <div className="card-body">
        <h5 className="card-title">First U.S. coronavirus death reported; officials expect virus to spread - Los Angeles Times</h5>
        <h6 class="card-subtitle mb-4 text-muted small">Alex Wigglesworth, Colleen Shalby, Anita Chabria from Latimes.com</h6>
        <p className="card-text">A person who was not among the previously reported coronavirus cases in the U.S. has died of COVID-19, Washington health officials say.</p>
        <a href="https://www.latimes.com/california/story/2020-02-29/coronavirus-california-spread-health-officials" className="btn btn-primary">Go to article</a>
      </div>
      <div class="card-footer text-muted">
        2020-03-01T00:12:00Z
      </div>
    </div>
  )
}

export default New