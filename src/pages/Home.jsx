import { Button } from "../components/Button"
import { Link } from "react-router-dom"


export const Home = () => (

    <main>

        <Link to={"/signin"}>
            <Button title={"login"} />
        </Link>

        <Link to={"/signup"}>
            <Button title={"create"} />
        </Link>

    </main>
)