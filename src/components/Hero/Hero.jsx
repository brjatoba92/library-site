import React, {useState} from "react";
import Book1 from "../../assets/books/berkhof.jpg";
import Book2 from "../../assets/books/comentario_esdras.jpg";
import Book3 from "../../assets/books/espiritualidade_reformada.jpg";
import Vector from "../../assets/website/blue-pattern.png";

const ImageList = [
    {
        id: 1,
        img: Book1,
        title: "Teologia Sistematica",
        description: "Em classico da teologia sistemática, Berkhof apresenta uma visão abrangente e acessível dos principais temas teológicos.",
    },
    {
        id: 2,
        img: Book2,
        title: "Estudos Biblicos Expositivos de Esdras e Neemias",
        description: "Uma análise detalhada dos livros de Esdras e Neemias, explorando temas de restauração e liderança espiritual.",
    },
    {
        id: 3,
        img: Book3,
        title: "Espiritualidade Reformada",
        description: "Uma exploração profunda da espiritualidade reformada, abordando suas raízes bíblicas e teológicas.",
    },
]

const Hero = ({ handleOrderPopup }) => {
    const [imageId, setImageId] = useState(Book2);
    const [title, setTitle] = useState("Estudos Biblicos Expositivos de Esdras e Neemias");
    const [description, setDescription] = useState(
        "Uma análise detalhada dos livros de Esdras e Neemias, explorando temas de restauração e liderança espiritual."
    )
    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
    };
    return <>
    <div 
        className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200" 
        style={bgImage}>
        <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* text-content-section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                    <h1 
                        data-aos = "zoom-out"
                        data-aos-duration = "500"
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                        {title}
                        <p
                            data-aos = "slide-up"
                            data-aos-duration = "500"
                            data-aos-delay = "100" 
                            className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary"
                        >
                            by Anoymunt
                        </p>
                    </h1>
                    <p 
                        data-aos = "slide-up"
                        data-aos-duration = "500"
                        data-aos-delay = "100"
                        className="text-sm"
                    >
                        {description}
                    </p>
                    <div>
                        <button
                            onClick={handleOrderPopup}
                            data-aos = "zoom-in"
                            className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full hover:scale-105 duration-200"
                        >
                            Order Now
                        </button>
                    </div>
                </div>
                {/* image-section */}
                <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm-order-2 ">
                    {/* main image */}
                    <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                        <img 
                            data-aos = "zoom-in"
                            data-aos-once= "true"
                            src={imageId} 
                            alt="" 
                            className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"/>
                    </div>
                    {/* outher image list*/}
                    <div 
                        className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg:white rounded-full"
                    >
                        {
                            ImageList.map((image) => (
                                <div key={image.id} onClick={() => {
                                    setImageId(image.img);
                                    setTitle(image.title);
                                    setDescription(image.description);
                                }}>
                                    <img 
                                        data-aos = "zoom-in"
                                        data-aos-once= "true"
                                        src={image.img} 
                                        alt="" 
                                        className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"/>
                                </div>
                            ))
                        }
                    </div>                      
                </div>
            </div>
        </div>
    </div>
    </>;
};  

export default Hero;