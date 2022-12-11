import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignInPage } from './pages/SignInPage'
import { SignUpPage } from './pages/SignUpPage'
import { Home } from './pages/Home'

import { useState } from 'react';

import { Modal } from './components/Modal';
import { Footer } from './components/Footer';




export const App = () => {



  const [passwordVisible, setPasswordVisible] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")



  return (


    <BrowserRouter>
      <main className='flex flex-col justify-center items-center' >


        {/* principal container */}
        <div className='relative bg-neutral-800 text-white flex flex-col items-center justify-center rounded-xl gap-3 m-6 min-h-[80vh] min-w-[80vw] max-w-[500px]'>


          {/* modal with message */}
          <Modal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            emailValue={emailValue}
            passwordValue={passwordValue}
          />


          <Routes>
            <Route
              path='/signin'
              element={<SignInPage
                setModalVisible={setModalVisible}
                emailValue={emailValue}
                setEmailValue={setEmailValue}
                passwordVisible={passwordVisible}
                setPasswordVisible={setPasswordVisible}
                passwordValue={passwordValue}
                setPasswordValue={setPasswordValue}
              />}
            />

            <Route
              path='/signup'
              element={<SignUpPage
                setModalVisible={setModalVisible}
                emailValue={emailValue}
                setEmailValue={setEmailValue}
                passwordVisible={passwordVisible}
                setPasswordVisible={setPasswordVisible}
                passwordValue={passwordValue}
                setPasswordValue={setPasswordValue}
              />}
            />

            <Route path='/' element={<Home />} />

          </Routes>



        </div>
        <Footer />
      </main>
    </BrowserRouter>
  )
}


