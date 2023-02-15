import './App.css';

import React, { useState } from 'react'
import {HashRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

const App =()=> 
{
  const [progress, setProgress] = useState(0)
  const apikey=process.env.REACT_APP_API

  const setProg=(progress)=>{
    setProgress(progress)
  }
    return (
      <div>
      <Router>
        <Navbar/>
        <LoadingBar color='#f11946' progress={progress}/>
        <Routes>
          <Route exact path="/" element={<News apikey={apikey} setProgress={setProg} key="general" pageSize={6} category="general"/>}></Route>
          <Route exact path="/general" element={<News apikey={apikey} setProgress={setProg} key="general" pageSize={6} category="general"/>}></Route>
          <Route exact path="/entertainment" element={<News apikey={apikey} setProgress={setProg} key="entertainment" pageSize={6} category="entertainment"/>}></Route>
          <Route exact path="/business" element={<News apikey={apikey} setProgress={setProg} key="business" pageSize={6} category="business"/>}></Route>
          <Route exact path="/health" element={<News apikey={apikey} setProgress={setProg} key="health" pageSize={6} category="health"/>}></Route>
          <Route exact path="/sports" element={<News apikey={apikey} setProgress={setProg} key="sports" pageSize={6} category="sports"/>}></Route>
          <Route exact path="/science" element={<News apikey={apikey} setProgress={setProg} key="science" pageSize={6} category="science"/>}></Route>
          <Route exact path="/technology" element={<News apikey={apikey} setProgress={setProg} key="technology" pageSize={6} category="technology"/>}></Route>
        </Routes>
      </Router>
      </div>
    )
}

export default App;
