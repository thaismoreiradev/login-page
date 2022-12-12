import { Button } from "../components/Button"
import { Link } from "react-router-dom"
import logo from '../logo.png'



export const Home = () => (

    <main>

        <form className='flex flex-col gap-2 text-sm p-6 min-h-[80vh] min-w-[80vw] max-w-[500px] justify-center'>
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