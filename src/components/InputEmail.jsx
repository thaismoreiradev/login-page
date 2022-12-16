
export const InputEmail = ({ emailValue, setEmailValue }) => (

    <input type="email"
        placeholder='Email'
        className='bg-transparent text-white outline-none p-3 border-2 rounded-xl w-full h-9 
             border-purple-500 hover:border-pink-500'
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        required
    />
)