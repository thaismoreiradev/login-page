import { Button } from "../components/Button";
import { InputEmail } from '../components/InputEmail';
import { InputPassword } from '../components/InputPassword';
import logo from '../logo.png';
import { useState } from "react";
import { Link } from 'react-router-dom'



export const SignUpPage = ({

    setModalVisible, setMessageModal, setShowLoginValues,
    emailValue, setEmailValue,
    passwordVisible, setPasswordVisible,
    password, setPassword,
    creatingAccount,

}) => {

    const [secondPasswordValue, setSecondPasswordValue] = useState("")
    const [messageErrorPassword, setMessageErrorPassword] = useState(null)


    const checkPassword = (msg) => {

        password !== secondPasswordValue ?
            setMessageErrorPassword(msg) &
            setModalVisible(false) :
            setMessageErrorPassword(null) &
            setModalVisible(true)

    }


    return (


        <section className="flex flex-col text-center">

            {/* form with inputs and button */}
            <form className=' flex flex-col gap-2 text-sm w-[210px] xs:w-[260px]'
                onSubmit={(e) => {
                    e.preventDefault()
                    setMessageModal("This is only a simulation. But here is your user informations:")
                    setShowLoginValues(true)
                    setModalVisible(true)
                    checkPassword("Password value doesn't match")
                }}>



                {/* logo for home */}
                <Link to={"/"}
                    onClick={() => {
                        setEmailValue("")
                        setPassword("")
                        setSecondPasswordValue("")
                        setPasswordVisible(false)
                    }}>
                    <img src={logo} alt="" className="w-8 flex ml-auto mr-auto mb-1 justify-self-center" />
                </Link>



                <p className="hidden extraheight:flex text-xs text-neutral-500 self-center">Your password must have at least 8 characters</p>




                {/* input for user email */}
                <InputEmail
                    emailValue={emailValue}
                    setEmailValue={setEmailValue}
                />


                {/* input for user password */}
                <InputPassword
                    passwordVisible={passwordVisible}
                    setPasswordVisible={setPasswordVisible}
                    password={password}
                    setPassword={setPassword}
                    creatingAccount={creatingAccount}
                />

                <InputPassword
                    passwordVisible={passwordVisible}
                    setPasswordVisible={setPasswordVisible}
                    password={secondPasswordValue}
                    setPassword={setSecondPasswordValue}
                    creatingAccount={creatingAccount}
                />



                <p className="text-xs text-red-600 self-center">{messageErrorPassword}</p>


                <Button title={"create"} />

            </form>



            <div className='text-xs self-center flex gap-1 mt-2 text-neutral-500 outline-none'>
                <input type="checkbox" id='remember' className='outline-none' />
                <label htmlFor='remember'>Remember me</label>
            </div>


            <p>
                <Link to={"/signin"}
                    className="text-xs text-neutral-500 self-center"

                    onClick={() => {
                        setEmailValue("")
                        setPassword("")
                        setSecondPasswordValue("")
                        setPasswordVisible(false)
                    }}

                >Already have an account
                </Link>
            </p>


        </section>
    )
}