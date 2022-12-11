
export const Modal = ({ modalVisible, setModalVisible, emailValue, passwordValue }) => (

    <div className=
        {modalVisible === false ? "hidden" : "flex absolute w-5/6 h-4/5 p-3 bg-white flex-col items-center justify-center rounded-xl text-neutral-800 text-sm gap-4"}>
        <div className='flex flex-col gap-2 items-center text-center'>
            <p>Hi, this is only a simulation. But here is your sign in infos:</p>
            <p>{emailValue}</p>
            <p>{passwordValue}`</p>
        </div>
        <button className='bg-neutral-800 rounded-xl w-2/4 h-7 text-white'
            onClick={() => setModalVisible(false)}>close</button>
    </div>

)