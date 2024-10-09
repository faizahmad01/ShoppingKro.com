import React from 'react'
import my from "../assets/mine.jpg"
import Shopping from './Shopping';
import Banner from './Banner';

function Home() {
  async function HandleOnSubmit(events){
    events.preventDefault();
    
    await alert("Subscribed");
   
   const email = events.target.elements.email.value;
   console.log(email);
  } 
  return (
    <>
    

    <div className="max-w-screen-2xl container mx-auto md:px-28 px-4 flex flex-col md:flex-row my-5">
    <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
    <div className='space-y-6'>
      
    <h1 className="text-4xl font-bold">Hello! Welcome to your new favorite shopping destination : <span className="text-amber-300"> ShoppingKro.com!</span></h1>
    <p className='text-xl mt-1'>Your ultimate destination for all things shopping! Discover an extensive range of products, unbeatable deals, and a seamless shopping experience right at your fingertips.

At ShoppingKro.com, we believe that shopping should be fun and convenient. Whether you’re searching for the latest trends, essential everyday items, or unique gifts, we’ve got you covered.
</p>
    <h1 className="text-blue-950">Join our community of savvy shoppers and start exploring today—</h1>
    <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  
  <input type="email" className="grow" placeholder="Email" />
  
</label>

    </div>
    <button onClick={HandleOnSubmit} className="btn btn-secondary mt-6 bg-gray-800 hover:bg-amber-300">Subscribe</button>
    
    </div>
    <div className="order-1 w-full md:w-1/2">
    <img src={my} className='w-92 h-92' alt="" />
    </div>
    </div>
    <Banner />
    <Shopping />
    </>
  )
}

export default Home