import React from 'react'
const NewsItem =(props) => {
    let { title, description, imageUrl, newsUrl, author, date,source } = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{
            display: 'flex', justifyContent: 'flex-end',
            position: 'absolute', right: 0
          }}>
            <span className="badge rounded-pill bg-success">
              {source}
            </span>
          </div>
      
          <img src={!imageUrl ? "https://www.aljazeera.com/wp-content/uploads/2026/04/AP26093499359031-1775242604.jpg?resize=1920%2C1440" : imageUrl} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "cover" }} />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary"> By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
