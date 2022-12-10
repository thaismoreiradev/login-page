import { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';




export const App = () => {


  const [passwordVisible, setPasswordVisible] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")








  return (
    <main className='flex flex-col justify-center items-center' >





      {/* principal container */}
      <div className='relative bg-neutral-800 text-white flex flex-col items-center justify-center rounded-xl gap-3 m-6 min-h-[80vh] min-w-[80vw] max-w-[500px]'>
        <h1 className='text-sm'>welcome back!</h1>

        <form className=' flex flex-col gap-2 w-10/12 text-sm  '>

          {/* div for input 1 */}
          <div className=''>

            <input type="email"
              placeholder='Email'
              className='
             bg-transparent text-white outline-none p-3 border-2 rounded-xl w-full h-9
                          border-purple-500
             hover:border-pink-500'
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              required
              
            />


          </div>

          {/* div for input 2 */}
          <div className='flex justify-between items-center p-3 bg-transparent text-white outline-none border-2 rounded-xl w-full h-9
             border-purple-500
             hover:border-pink-600'>



            <input
              type={passwordVisible === true ? "text" : "password"}
              placeholder='Password'
              className='
             bg-transparent text-white outline-none h-9 w-full'
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              required
            />

            <div className='text-lg' onClick={() => setPasswordVisible(!passwordVisible)}>
              {passwordVisible === true ? <AiFillEye /> : <AiFillEyeInvisible />}
            </div>


    





          </div>

          <button className='
          p-3 rounded-xl text-neutral-800 font-medium h-9 flex items-center justify-center
           bg-gradient-to-r from-purple-500 via-orange-200 to-pink-400 text-sm'

            onClick={(e) => {
              e.preventDefault()
              setModalVisible(true)
              
            }}

          type="submit"
          >login</button>




          


          


         



        </form>


        {/* modal with message */}

          <div className=
          {modalVisible === false ? "hidden" : "flex absolute w-4/5 h-2/3 p-3 bg-slate-400 flex-col items-center justify-center rounded-xl text-sm gap-3"}>
            <p>{`
            Hi, this is a simulation
          ${emailValue}
          ${passwordValue}`}
            </p>
            <button className='bg-neutral-800 rounded-xl w-2/4 h-7'
            onClick={() => setModalVisible(false)}>close</button>
          </div>
        






        {/* div for little texts */}
        <div className='items-center flex flex-col flex-center m-2 text-neutral-500'>
          <div className='text-xs flex gap-1'>
            <input type="checkbox" id='remember' />
            <label htmlFor='remember'>Remember me</label>
          </div>

          <p>
            <a href="#"
              className='text-xs '>
              New here? Create an account
            </a>
          </p>

          <p>
            <a href="#"
              className='text-xs '>
              Forgot password?
            </a>
          </p>

        </div>

      </div>


      <footer className="text-neutral-800 text-xs xs3:text-sm">
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


