import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { Home } from './pages/Home';
import { useState } from 'react';
import { Modal } from './components/Modal';
import { Footer } from './components/Footer';


export const App = () => {

  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [passwordVisible, setPasswordVisible] = useState(false)

  const [modalVisible, setModalVisible] = useState(false)
  const [messageModal, setMessageModal] = useState("")
  const [showLoginValues, setShowLoginValues] = useState(null)


  return (

    <BrowserRouter>

      <main className='flex flex-col justify-center items-center h-[100vh] w-[100vw]
      bg-gradient-to-r from-purple-500 via-orange-200 to-pink-600/60' >

        {/* principal container */}
        <div className='relative bg-neutral-800 text-white flex flex-col items-center justify-center rounded-xl gap-3 m-6 min-h-[80vh] w-[80vw] max-w-[300px] box-border'>

          {/* modal with messages */}
          <Modal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            text1={messageModal}
            text2={emailValue}
            text3={passwordValue}
            showLoginValues={showLoginValues}
            passwordVisible={passwordVisible}
            setPasswordVisible={setPasswordVisible}
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
                password={passwordValue}
                setPassword={setPasswordValue}
                setMessageModal={setMessageModal}
                setShowLoginValues={setShowLoginValues}
                creatingAccount={false}
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
                password={passwordValue}
                setPassword={setPasswordValue}
                setMessageModal={setMessageModal}
                setShowLoginValues={setShowLoginValues}
                creatingAccount={true}               
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