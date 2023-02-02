import React, {useState} from 'react'
import './HomeDetails.css'

const HomeDetails = () => {
    const [blog, useBlog] = useState([
        {   id: 0, 
            title:"The Impact of Artificial Intelligence on Business and Industry", 
            description:" The Impact of Artificial Intelligence on Business and Industry explores how AI is being used in various industries to improve efficiency, decision-making, and cost savings",
            date: "12th July 2022"
        },
        {   id: 1, 
            title:"The Impact of Artificial Intelligence on Business and Industry", 
            description:" The Impact of Artificial Intelligence on Business and Industry explores how AI is being used in various industries to improve efficiency, decision-making, and cost savings",
            date: "12th July 2022"
        },
        {   id: 2, 
            title:"The Impact of Artificial Intelligence on Business and Industry", 
            description:" The Impact of Artificial Intelligence on Business and Industry explores how AI is being used in various industries to improve efficiency, decision-making, and cost savings",
            date: "12th July 2022"
        }
    ])
  return (
    <div className='container'>
        {blog && blog.map ((items) => (

       
            <div className='blogBox' key = {items.id}>
                <h2>{items.title}</h2>
                <p>{items.description}</p>
                <div className='views'>
                    <div>
                        <img src="/AIpic1.jpeg" alt='AI' />
                    </div>

                    <div>
                        <p>{items.date}</p>
                    </div>
                </div>
            </div>
         ) )}
        

    </div>
  )
}

export default HomeDetails