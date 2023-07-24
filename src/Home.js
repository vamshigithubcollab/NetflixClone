import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
import Faq from "./faq"
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div>
        <div className='login'>
            <div className="center mb-4">
                <h1>
                Unlimited movies, TV shows and more
                </h1>
                <h3>
                Watch anywhere. Cancel anytime.
                </h3>
            </div>
            <Link className="linkStyle container mt-4" to="/main">See all shows</Link>
            
        </div>
        <div className='faqs'>
            <Faq /> 
            </div>
    </div>
  )
}

export default Home