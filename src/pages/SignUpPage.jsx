import { Button } from "../components/Button";
import { InputEmail } from '../components/InputEmail';
import { InputPassword } from '../components/InputPassword';

export const SignUpPage = ({
    setModalVisible, emailValue, setEmailValue, passwordVisible, setPasswordVisible, passwordValue, setPasswordValue 
}) => (

    <section>

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

            <InputPassword
                passwordVisible={passwordVisible}
                setPasswordVisible={setPasswordVisible}
                passwordValue={passwordValue}
                setPasswordValue={setPasswordValue}
            />

        </form>

        <Button title={"create"} />

        <div className='text-xs self-center flex gap-1 mt-2 text-neutral-500 outline-none'>
            <input type="checkbox" id='remember' className='outline-none' />
            <label htmlFor='remember'>Remember me</label>
        </div>

    </section>
)