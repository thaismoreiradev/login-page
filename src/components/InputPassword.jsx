import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';






export const InputPassword = ({ passwordVisible, setPasswordVisible, password, setPassword, creatingAccount }) => {





    return (

        <div className='flex justify-between items-center p-3 bg-transparent text-white outline-none border-2 rounded-xl w-full h-9
             border-purple-500
             hover:border-pink-600'>



            <input
                type={passwordVisible === true ? "text" : "password"}
                
                minLength={creatingAccount === true ? 8 : 1}
                placeholder='Password'
                className='bg-transparent text-white outline-none h-9 w-full'
                value={password}
                onChange={(e) => setPassword(e.target.value)}



                required
            />

            <div className='text-lg' onClick={() => setPasswordVisible(!passwordVisible)}>
                {passwordVisible === true ? <AiFillEye /> : <AiFillEyeInvisible />}
            </div>
        </div>

    )

}