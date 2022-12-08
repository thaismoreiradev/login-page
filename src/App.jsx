import { useState } from 'react'




export const App = () => {

  return (
    <main className='flex flex-col justify-center items-center' >

      {/* principal container */}
      <div className='bg-neutral-900 flex flex-col items-center justify-center rounded-xl gap-3 m-6 min-h-[80vh] min-w-[80vw] max-w-[500px]'>
        <h3>welcome!</h3>

        <form className='bg-violet-800 flex flex-col gap-2 w-10/12  '>

          {/* div for input 1 */}
          <div className=''>

            <input type="email"
            placeholder='email'
            className='
             bg-transparent text-white outline-none p-3 border-2 rounded-xl w-full h-9
                          border-white
             hover:border-pink-600'
            />
            

          </div>

          {/* div for input 2 */}
          <div>

            <input type="password"
              placeholder='password'
              className='
             bg-transparent text-white outline-none p-3 border-2 rounded-xl w-full h-9
             border-white
             hover:border-pink-600'
             />
            

          </div>


          <button className='
          p-3 rounded-xl text-white h-9 flex items-center justify-center
           bg-white
             hover:bg-pink-600
          '>login</button>



        </form>

        <p>
          <a href="#"
          className='text-xs'>
            Click here to create your account
          </a>
        </p>

      </div>


      <footer className="text-white text-xs xs3:text-sm">
        <p>Developed by
          <a
            href="https://github.com/thaismoreiradev"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-none"
          > Thais Moreira
          </a>
        </p>
      </footer>

    </main>
  )
}


