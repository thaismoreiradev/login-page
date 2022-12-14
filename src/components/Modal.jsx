import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';


export const Modal = ({ modalVisible, setModalVisible, text1, text2, text3, showLoginValues, passwordVisible, setPasswordVisible }) => (

    <div className=
        {modalVisible === false ? "hidden" : "flex absolute w-5/6 h-4/5 p-3 bg-white flex-col items-center justify-center rounded-xl text-neutral-800 text-xs gap-4"}>
        <div className='flex flex-col gap-2 items-center text-center break-all '>
            <p className='break-normal'>{text1}</p>

            {showLoginValues === true &&
                <>
                    <p>{text2}</p>


                    <div className='flex gap-1 bg-red-200 break-all'
                        onClick={() => setPasswordVisible(!passwordVisible)}>


                        {passwordVisible === true ?

                            <>
                            <p className='w-full'>{text3}</p>
                                <AiFillEye className='text-base m-auto' />
                            </>

                            :

                            <>
                                <p className='w-full'>{text3.replaceAll(/./g, "*")}</p>
                                <AiFillEyeInvisible className='text-base m-auto' />
                            </>


                        }




                    </div>



                </>
            }

        </div>
        <button className='bg-neutral-800 rounded-xl w-2/4 h-7 text-white'
            onClick={() => setModalVisible(false)}>close</button>
    </div>

)