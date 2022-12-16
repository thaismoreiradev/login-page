import { Button } from "../components/Button";
import { Texts } from "../components/Texts";
import { InputEmail } from '../components/InputEmail';
import { InputPassword } from '../components/InputPassword';
import { Link } from 'react-router-dom'
import logo from '../logo.png'



export const SignInPage = ({
    setModalVisible, setMessageModal, setShowLoginValues,
    emailValue, setEmailValue,
    passwordVisible, setPasswordVisible,
    password, setPassword,
    creatingAccount
}) => (

    <section className="flex flex-col items-center">


        {/* logo for home */}
        <Link to={"/"}
            onClick={() => {
                setEmailValue("")
                setPassword("")
                setPasswordVisible(false)
            }}>
            <img src={logo} alt="" className="w-8 flex ml-auto mr-auto mb-1 justify-self-center" />
        </Link>

        <p className='text-sm mb-2'>Welcome back!</p>

        {/* form with inputs and button */}
        <form className=' flex flex-col gap-2 w-[210px] xs:w-[260px] text-sm m-0'
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
                creatingAccount={creatingAccount}
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
            setEmailValue={setEmailValue}
            setPassword={setPassword}
            setPasswordVisible={setPasswordVisible}
        />

    </section>
)