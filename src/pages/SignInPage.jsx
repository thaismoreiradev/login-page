import { Button } from "../components/Button";
import { Texts } from "../components/Texts";
import { InputEmail } from '../components/InputEmail';
import { InputPassword } from '../components/InputPassword';


export const SignInPage = ({
    setModalVisible, emailValue, setEmailValue, passwordVisible, setPasswordVisible, passwordValue, setPasswordValue
}) => (

    <section>

        <h1 className='text-sm'>welcome back!</h1>

        {/* form with inputs and button */}
        <form className=' flex flex-col gap-2 w-10/12 text-sm'
            onSubmit={(e) => {
                e.preventDefault()
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

        </form>

        <Button title={"login"} />

        <div className='text-xs self-center flex gap-1 mt-2 text-neutral-500 outline-none'>
            <input type="checkbox" id='remember' className='outline-none' />
            <label htmlFor='remember'>Remember me</label>
        </div>

        {/* little texts below form*/}
        <Texts/>

    </section>
)