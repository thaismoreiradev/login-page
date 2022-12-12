
export const Modal = ({ modalVisible, setModalVisible, text1, text2, text3, showLoginValues }) => (

    <div className=
        {modalVisible === false ? "hidden" : "flex absolute w-5/6 h-4/5 p-3 bg-white flex-col items-center justify-center rounded-xl text-neutral-800 text-sm gap-4"}>
        <div className='flex flex-col gap-2 items-center text-center'>
            <p>{text1}</p>
            
            {showLoginValues === true &&
                <>
                    <p>{text2}</p>
                    <p>{text3}</p>
                </>
            }

        </div>
        <button className='bg-neutral-800 rounded-xl w-2/4 h-7 text-white'
            onClick={() => setModalVisible(false)}>close</button>
    </div>

)