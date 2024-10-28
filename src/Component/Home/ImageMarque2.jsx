
// import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";

const ImageMarque2 = () => (
    <>
        <div className="bg-slate-300 mt-10 border-y-2 border-gray-950">
            <h1 className="text-center text-3xl font-bold py-10 md:text-5xl"> 
                Product Carousel
            </h1>
        </div>
        <Marquee play={true} direction={"rite"} pauseOnHover={true} speed={150} loop={100}>
        <div className="flex gap-5 py-10">
                <img className="w-[150px]" src="https://assets2.andaazfashion.com/media/images/home-page-creative/home-page-indo-western-lehenga-banner-25012024.jpg" alt="" />
                <img className="w-[150px]" src="https://assets2.andaazfashion.com/media/images/home-page-creative/home-page-chiffon-saree-banner-25012024.jpg" alt="" />
                <img className="w-[150px]" src="https://i.pinimg.com/236x/7c/0f/35/7c0f35b748a5708cfbfadabf7458dc29.jpg" alt="" />
                <img className="w-[150px]" src="https://i.pinimg.com/236x/8a/cd/f2/8acdf24c91fc23bec0cbd6e32f43c6d1.jpg" alt="" />
                <img className="w-[150px]" src="https://i.pinimg.com/236x/94/95/c8/9495c866a680aa1776ad3fafec8af3d2.jpg" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5KPFNf0dA3rOtVOnxPtpTWgItB9OJFhcceiqayAoJaEZzX4UZvTIZOYyjpjZoqtfIBY&usqp=CAU" alt="" />
                {/* <img className="w-[150px]" src="" alt="https://assets2.andaazfashion.com/media/images/home-page-creative/home-page-abaya-style-lehenga-banner-25012024.jpg" /> */}
                <img className="w-[150px]" src="https://assets2.andaazfashion.com/media/tagalys/product_images/d/a/dark-black-net-pakistani-anarkali-suit-lstv114013-1.jpg" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3oyA84dv_AsidqgBdPJBrr0lyF1IoGN7fOMqlZ4bu7mHwfNVFU1_TS-Br6ebkOqC2NI&usqp=CAU" alt="" />
                <img className="w-[150px]" src="https://images.cbazaar.com/images/Amyra-Dastur-Dark-Brown-Embroidered-Sharara-Suit-SLSCCH254009-pl.jpg" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtyi02MQf4cDrIZrw5QqzmZAHymMvwhm1YBUTMNNNVhJeBprG68ZPhplvTwEMq9qaGttE&usqp=CAU" alt="" />
                <img className="w-[150px]" src="https://i.pinimg.com/736x/1e/31/42/1e314229750ce742e9308ae3ba3f1f26.jpg" alt="" />
                <img className="w-[150px]" src="https://www.ethnicplus.in/media/wysiwyg/sharara-suit.jpg" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUlVxoUAF7OFWWoYbHPSu_umbZHtUQxMbd9c9uSyVE3vKARaCClmTssSRurnNy3LNPcs&usqp=CAU" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4OggQ3LLhamu3--cdPwcPB9E7Tf9DV42HwRpOnd0z4xwCYsXSnlE2J2z9pJ06APpnzbI&usqp=CAU" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMiFdHrtrYx65r0qfRHfE2YsCRZhTcamDXsRJ50CYbHftVJWV34oC0zzJpNJ08utkNfcY&usqp=CAU" alt="" />
                <img className="w-[150px]" src="https://img.freepik.com/premium-photo/bangladesh-wearing-traditional-dress-wide-angle_995162-1456.jpg" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmIRhWv0FMtJfhAvx6ky6RsWYO0MJuBaGPKw&s" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rhTemBwgnVY4jaBSRtMP5h2eYzSB3Uwg5A&s" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShK3-8o5zokQsuXKtBlkPUSPnlHVdWgVQP-A&s" alt="" />
                <img className="w-[150px]" src="https://img.freepik.com/premium-photo/independence-day-pakistan-dress_1097265-61076.jpg?semt=ais_hybrid" alt="" />
                <img className="w-[150px]" src="https://img.freepik.com/premium-photo/independence-day-pakistan-dress_1097265-61106.jpg?semt=ais_hybrid" alt="" />
                <img className="w-[150px]" src="https://img.freepik.com/premium-photo/bangladesh-wearing-traditional-dress-wide-angle_995162-1456.jpg" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtjCYn76sXZHdjukRJn0r2ZLt1PbMkzWPQF12bb6tNGqCIkJhn1b_GqhXRbDOVx2wDHj8&usqp=CAU" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_qIZo3FHYjINyrB10wEQ088xMP4hABcFgsdbTQSsjQ2618ZCcPj8tHmUAUj3BKVus8w&usqp=CAU" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg2V7xkNjTEuHMQK60ohkFztfTANQ7e0Y4SYgm3I0FaWxPWk9o7bg6Xdor0VAUtETqSL4&usqp=CAU" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnimzaWDFRskztIbjSkG9Se_taFLEAqgzLSg&s" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8IlOdoKdujYBQc0Us3Z4BMW1S50yfl4VFDkyiAs9_fPZbFgu66OTXHkU-MSU153tHHY&usqp=CAU" alt="" />
                <img className="w-[150px]" src="https://media.gettyimages.com/id/164119269/photo/afghan-burqa-clad-women-shop-as-they-prepare-to-celebrate-nowruz-the-persian-new-year-in.jpg?s=612x612&w=gi&k=20&c=PxcvCLXYKExBoQ1Z68wOJq5QUTF4-_KRcxM_HyfffRA=" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4bFLlHaFai8VFje6tlWr4IOvoomGCdLajZcClG_w-HTIAXmuyF6cNM5pTeXBEufgIvMw&usqp=CAU" alt="" />
                <img className="w-[150px]" src="https://media.istockphoto.com/id/1356985463/photo/confident-and-glamorous-young-woman-in-dark-blue-dress.jpg?s=612x612&w=0&k=20&c=xHlR8R5cNqplj5D9-s6LnCLAl2Qv9sUC63T_w_PIOAw=" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGC_N_l8heCEoNBouHhPykFf8wJpPt0PdcaF1_clabFfBYEcIAMRyKqkyFJQW5rlOILE&usqp=CAU" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1R1ZGUnavaMGys67appT9g-J2c3gn7Vg-9hsbB1qiOYzIw79uoRuNSTJAhh8GNdt2ko&usqp=CAU" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSBRr62Xr8RI_o2KRpNXcHab7FSAm7V7qkwthNEMj7skwdQnqj5ej1878GXIo3xw43QTQ&usqp=CAU" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKUeW14h_yW4pKHjhJ57AkMgH5NuuUIcLXzdDQZss8-9qJVfmmxYgUInQ_jk5A2E_t0eg&usqp=CAU" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDNHEuxY261zYVvtvu0qI2-9yuzk54vKfwSJ8lzxHaAI2gMxqtMwT0AwClQSFnA9AgB4&usqp=CAU" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcZbNu1_xeXFvN9y_0gSmXFvL6rvRQoR4DXA&s" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRoGDxIcdVcQvklQtMiKyjy8PYjJRlveugL_N6314eCqgRzgXiwF0YG9fCc3lWnYo7JCE&usqp=CAU" alt="" />
                <img className="w-[150px]" src="https://media.istockphoto.com/id/472080136/photo/women-collecting-water.jpg?s=612x612&w=0&k=20&c=iFLSSiJMtgOVmNEG7Ls3ZOutO4aUoIKilX9eNXEPULk=" alt="" />
                <img className="w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpDFrhAZwyNCmcaB5BmLWqX7ielFEjf-ajD5V3fdhcT_kVq1tOBIQgctsemQ8dVl1fntE&usqp=CAU" alt="" />
             
            </div>
        </Marquee></>
);

export default ImageMarque2;