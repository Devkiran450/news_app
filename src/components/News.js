import React from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState,useEffect } from 'react';
const News =(props)=> 
{
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews=async()=>
  {
    props.setProgress(0)
    const url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
    props.setProgress(20)
    let data=await fetch(url)
    props.setProgress(50)
    let parsedData=await data.json()
    props.setProgress(70)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
    document.title=`${cap(props.category)}-NewsGuru`
  }

  const cap=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1)
  }

  useEffect(() => {
    updateNews();
    //eslint-disable-next-line
  }, [])
  

  // async componentDidMount()
  // {
  //   this.updateNews();
  // }

  // prevClick=async()=>{    
  //   this.setState({page:this.state.page-1});
  //   this.updateNews();
  // }

  // nextClick=async()=>{
  //   this.setState({page:this.state.page+1});
  //   this.updateNews();
  // }

  const fetchMoreData = async() => {

    const url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`
    let data=await fetch(url)
    let parsedData=await data.json()

    setPage(page+1)
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };
    return (
      <>
        <h2 className='text-center' style={{marginTop:'77px',  marginBottom: '29px'}}>NewsGuru Top Headlines - {cap(props.category)}</h2>
        {loading && <Loading/>}
        <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults}
          loader={<Loading/>}>
          <div className="container">
              <div className="row">
              {articles.map((e)=>{
                  return <div className="col-md-4" key={e.url}>
                      <NewsItem title={e.title} description={e.description} height="180px" imageUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name}/>
                  </div>
              })}
              </div>
            </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between my-4">
        <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.prevClick} >&larr; Previous</button>
        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)} className="btn btn-success" onClick={this.nextClick} >Next &rarr;</button>
        </div> */}
      </>
    )
}

export default News
