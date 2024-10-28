
import { Helmet } from "react-helmet-async"
import Fefute from "./Fefute"
import ImageMarque from "./ImageMarque"
import ImageMarque2 from "./ImageMarque2"
import Prograssber from "./Prograssber"
import Slider from "./Slider"



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || home</title>
            </Helmet>
            <Slider></Slider>
            <ImageMarque2></ImageMarque2>
            <ImageMarque></ImageMarque>
            <Prograssber />
            <Fefute></Fefute>
        </div>
    )
}

export default Home
