import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './component/Header'
import PodcastRow from './component/PodcastRow'
import Episode from './component/Episode'
import  axios from 'axios'
//import { application } from 'express'

const App = () =>{
    const [searchTerm, setSearchTerm] = useState('')

    const podcast =[
        {id:0, name : 'podcast 1', image: '/images/person_1.jpg', categories: ['Sound Engineering, Motion graphics']},
        {id:1, name : 'podcast 2', image: '/images/person_2.jpg', categories: ['Graphics design, Motion graphics']},
        {id:2, name : 'podcast 3', image: '/images/person_3.jpg', categories: ['Science, Motion graphics']}
    ]
    const episodes =[
        {id : 0, title: 'track 1', images : '/images/person_1.jpg', trackUrl: 'https://cf-media.sndcdn.com'},
        {id : 1, title: 'track 2', images : '/images/person_2.jpg', trackUrl: 'http://hwcdn.libsyn.com/p/e/2/d/e2d49676d65218ec/p1541a.mp3?c_id=84308228&cs_id=84308228&expiration=1601254668&hwt=ccab3206052417d0e901722ab00c9c88'},
        {id : 2, title: 'track 3', images : '/images/person_3.jpg', trackUrl: 'http://hwcdn.libsyn.com/p/e/2/d/e2d49676d65218ec/p1541a.mp3?c_id=84308228&cs_id=84308228&expiration=1601254668&hwt=ccab3206052417d0e901722ab00c9c88'},
        {id : 3, title: 'track 4', images : '/images/person_4.jpg', trackUrl: 'http://hwcdn.libsyn.com/p/e/2/d/e2d49676d65218ec/p1541a.mp3?c_id=84308228&cs_id=84308228&expiration=1601254668&hwt=ccab3206052417d0e901722ab00c9c88'},
        {id : 4, title: 'track 5', images : '/images/person_5.jpg', trackUrl: 'http://hwcdn.libsyn.com/p/e/2/d/e2d49676d65218ec/p1541a.mp3?c_id=84308228&cs_id=84308228&expiration=1601254668&hwt=ccab3206052417d0e901722ab00c9c88'}

    ]
    const onInputTyped = (event) => {
        //console.log('onInputTyped:' + event.target.value)
        setSearchTerm(event.target.value)
    }
    const onSearchBtnClicked = async (event) =>{
        console.log('onSearchBtnClicked: '+ searchTerm)

        const response = await axios({
            url: '/search',
            method :'post',
            body:{
                term: 'searchTerm'
            },
            options : {
                headers : {Accept : 'application/json'}
            }
        })
    }

// const App = () =>{
    return(
        <div className ="site-wrap">
            <Header/>
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="featured-user  mb-5 mb-lg-0">

                            <h3 className="mb-2">Search Podcasts</h3>
                            <div style={{display: "flex"}}>
                                <input type="text" style={{height: "32px"}} className="form-control mb-4" onChange={onInputTyped} />
                                <button  onClick = {onSearchBtnClicked} className="btn btn-info p-1 ml-2" style={{height: "32px"}} >GO!</button>
                            </div>
                                <ul className="list-unstyled">
                                    {podcast.map(podcast => <PodcastRow key ={podcast.id} {...podcast}/>)}
                                    
                                </ul> 
                            </div>                           
                        </div>

                        <div className="col-lg-9">
                            {episodes.map(episode=> <Episode key = {episode.id} {...episode}/>)}
                    

                        </div>

                    </div>
                </div>
            </div>
        </div>
     )}
 
ReactDOM.render(<App/>, document.getElementById('root')) 