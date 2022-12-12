import { Button } from "../components/Button";
import { Texts } from "../components/Texts";
import { InputEmail } from '../components/InputEmail';
import { InputPassword } from '../components/InputPassword';


export const SignInPage = ({
    setModalVisible, emailValue, setEmailValue, passwordVisible, setPasswordVisible, passwordValue, setPasswordValue, setMessageModal, setShowLoginValues
}) => (

    <section className="flex flex-col items-center">

        <h1 className='text-sm mb-2'>welcome back!</h1>

        {/* form with inputs and button */}
        <form className=' flex flex-col gap-2 w-full text-sm m-0'
            onSubmit={(e) => {
                e.preventDefault()
                setMessageModal("Hi, this is only a simulation. But here is your sign in infos:")
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
                passwordValue={passwordValue}
                setPasswordValue={setPasswordValue}
            />


            <Button title={"login"} />            
            <div className='text-xs self-center flex gap-1 mt-2 mb-0 text-neutral-500 outline-none'>
                <input type="checkbox" id='remember' className='outline-none' />
                <label htmlFor='remember'>Remember me</label>
            </div>

        </form>





        {/* little texts below form*/}
        <Texts
            setMessageModal={setMessageModal}
            setShowLoginValues={setShowLoginValues}
            setModalVisible={setModalVisible}
        />

    </section>
)