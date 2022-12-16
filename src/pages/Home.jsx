import { Button } from "../components/Button"
import { Link } from "react-router-dom"
import logo from '../logo.png'



export const Home = () => (

    <main className="flex flex-col items-center">

        <form className='flex flex-col gap-2 text-sm w-[210px] xs:w-[260px] justify-center'>

            <img src={logo} alt="" className="w-10 flex ml-auto mr-auto mb-2 justify-self-center" />

            <Link to={"/signin"}>
                <Button title={"login"} />
            </Link>

            <Link to={"/signup"}>
                <Button title={"create"} />
            </Link>

        </form>
    </main>
)