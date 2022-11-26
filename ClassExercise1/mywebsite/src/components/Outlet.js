import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Credits from "../pages/Credits";
import Discography from "../pages/Discography";
import Contact from "../pages/Contact";
import { Navigate } from "react-router-dom";

function Outlet() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="credits" element={<Credits />} />
                    <Route path="discography" element={<Discography />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}
export default Outlet;