import React from 'react'
import './CreateDetails.css'

const CreateDetails = () => {
  return (
    <div className='container'>
        <form>
            <div className='blogInput'>
                <div > 
                    <input
                    type = "text" 
                    placeholder='Title...'
                    >
                    </input>
                </div>
                <div> 
                    <input
                    type = "text" 
                    placeholder='Date...'
                    >
                    </input>
                </div>
                <div> 
                    <input
                    type = "text" 
                    placeholder='Author...'
                    >
                    </input>
                </div>
            </div>

            <div className='blogTextarea'> 
                <div>
                    <textarea
                    name="body" 
                    rows="4"
                    cols="50"  
                    placeholder='Description...'
                    >
                    </textarea>
                </div>
                <div> 
                    <textarea
                    name="body" 
                    rows="4"
                    cols="50" 
                    placeholder='Body...'
                    >
                    </textarea>
                </div>
            </div>
            <div className='blogSubmit'> 
                <button
                type = "submit" 
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
  )
}

export default CreateDetails