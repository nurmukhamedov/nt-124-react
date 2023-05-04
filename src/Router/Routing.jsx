import { Routes, Route, Navigate } from "react-router-dom";
import About from "../components/About";
import Blog from "../components/Blog";
import Error404 from "../components/Error404";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Single from "../components/Single";

const Routing = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/error404" element={<Error404 />} />
                <Route path="/home/news/:id" element={<Single />} />
                <Route path="*" element={<Navigate to="/error404" />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Routing