import { Button } from "../components/Button";
import { InputEmail } from '../components/InputEmail';
import { InputPassword } from '../components/InputPassword';
import { useState } from "react";

export const SignUpPage = ({
    setModalVisible, setMessageModal, setShowLoginValues,
    emailValue, setEmailValue,
    passwordVisible, setPasswordVisible,
    password, setPassword   
    
}) => {

    const [secondPasswordValue, setSecondPasswordValue] = useState("")



    return (


        <section className="flex flex-col items-center">

            {/* form with inputs and button */}
            <form className=' flex flex-col gap-2 text-sm w-full'
                onSubmit={(e) => {
                    e.preventDefault()
                    setMessageModal("This is only a simulation. But here is your user informations:")
                    setShowLoginValues(true)
                    setModalVisible(true)
                }}>


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
                />

                <InputPassword
                    passwordVisible={passwordVisible}
                    setPasswordVisible={setPasswordVisible}
                    password={secondPasswordValue}
                    setPassword={setSecondPasswordValue}
                />


                <Button title={"create"} />

            </form>



            <div className='text-xs self-center flex gap-1 mt-2 text-neutral-500 outline-none'>
                <input type="checkbox" id='remember' className='outline-none' />
                <label htmlFor='remember'>Remember me</label>
            </div>

        </section>
    )

}