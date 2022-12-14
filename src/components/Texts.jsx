
import { Link } from 'react-router-dom'


export const Texts = ({ setModalVisible, setMessageModal, setShowLoginValues, setEmailValue, setPassword }) => (
    <div className='items-center flex flex-col flex-center text-neutral-500 outline-none'>

        <p>
            <Link to={"/signup"}
                className='text-xs outline-none'

                onClick={() => {
                    setEmailValue("")
                    setPassword("")
                }}

            >
                New here? Create an account
            </Link>
        </p>

        <p onClick={() => {
            setMessageModal("If this was a real login form we would probably send a link to your e-mail to help you :)")
            setShowLoginValues(false)
            setModalVisible(true)
        }} >
            <a href="#"
                className='text-xs outline-none '>
                Forgot password?
            </a>
        </p>



    </div >
)