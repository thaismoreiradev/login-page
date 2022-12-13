
import { Link } from 'react-router-dom'


export const Texts = ({ setModalVisible, setMessageModal, setShowLoginValues }) => (
    <div className='items-center flex flex-col flex-center text-neutral-500 outline-none'>

        <p>
            <Link to={"/signup"}
                className='text-xs outline-none'>
                New here? Create an account
            </Link>
        </p>

        <p onClick={() => {
            setMessageModal("If this was a real login form we  will probably send a link to your e-mail for create a new password ;)")
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