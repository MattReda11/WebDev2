import Register from "../components/Register";
import Login from "../components/Login";
import DbData from "../components/DbData";
function Home() {
    return (
        <div>
            <p>
                <DbData />
            </p>
            <p>
                <Register />
            </p>
            <p>
                <Login />
            </p>
        </div>
    )

}
export default Home;