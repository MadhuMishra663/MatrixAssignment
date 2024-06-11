import React from 'react'
import Navbar1 from './Navbar1'
import './Third.css'
import MovingNav from './MovingNav'

const Third = () => {
  return (
    <>
    <Navbar1 />
    <div className='ThirdDiv'>
        <div className='Images3'>
            <img src="https://s3-alpha-sig.figma.com/img/e16c/a06f/9164d79c6c5519475e7b5e0a4762ea0d?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=glwTJ41eJaB0UTBmwepzBx4L99Ly1wtCHTccHNkJgCOtoMHb0krAK~xtCe-ZowHhQj3ouem5ScCfTcooPi80S~t6rS7at-ZXGI2~Q5FdqC8mPFHQxI5GSr6d6aFwx2PqEJawPr8KoUzewAUt8xbZPhjZEOjwwB87wmpCd1bFupEMJqOHhvL435x2xP7afuddKW9tvbY9uLh41OS8YLnmIwWc4FEdbKC7LWD8HzrKaD2dPQ6f6kIPBsZyVhH0V9SUmfQjKjf3AWVgn7GJTl1vCepw5FXpdzo98rnBKMPbUKa4-9gZwM60HuH1UyRYmB~OcxhjFy2cNlRmBvAGbc7K-A__" alt="" style={{width:"600px", marginBlock:"70px", borderRadius:"10px"}} />
        </div>
        <div className='Text3'>
           <h1>How it works</h1>
            <h2>Select an Avatar</h2>
            <h2>Create or Generate Script</h2>
            <h2>Select AI Voices</h2>
            <h2>Publish</h2>
        </div>
    </div>
   
      
    </>
  )
}

export default Third
