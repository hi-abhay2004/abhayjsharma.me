// import React from 'react'
// import {BsFillMoonFill} from 'react-icons/bs'

// function Home() {
//   return (
//    <main className='bg-blue-950  text-white'  >
//     <section  className='min=h-screen '>
//       <nav className='p-10 flex justify-between ' >
//           <h1 className='text-xl'>Developed By Abhay</h1>
//         <ul className='flex space-x-5'>
//           <li><BsFillMoonFill className='cursor-pointer text-2xl'/></li>
//           <li><a href='#' className='text-md border-2 bg-emerald-400 border-emerald-400 p-2 text-black rounded-md '>Resume</a></li>
//         </ul>

//       </nav>
//     </section>
//    </main>
//   )
// }

// export default Home
import React from 'react'
import HelloAnimation from './components/startLoader/page'
function Home() {
  return (

    <div>
      <HelloAnimation />
      Home</div>
  )
}

export default Home