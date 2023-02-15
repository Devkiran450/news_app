import React from 'react'

const NewsItem=(props)=> {
    let {title,description,imageUrl,newsUrl,height,author,date,source}=props
    return (
        <div className="card my-2">
          <span className="position-absolute top-0translate-middle badge rounded-pill bg-danger" style={{left:"37%",zIndex:1}}>{source}</span>
              <img height={height} src={imageUrl?imageUrl:"https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"} className="card-img-top" alt="..."/>

              <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {author?author:"anonymous"} posted on {date?new Date(date).toGMTString():"UNKNOWN"} </small></p>
              <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
              </div>
            
        </div>
    )
}

export default NewsItem
