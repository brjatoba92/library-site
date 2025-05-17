import React, {useState} from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Vector from "../../assets/website/blue-pattern.png";

const ImageList = [
    {
        id: 1,
        img: Book1,
        title: "Who's there? ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, rerum.",
    },
    {
        id: 2,
        img: Book2,
        title: "His Life will forever be Changed",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, rerum.",
    },
    {
        id: 3,
        img: Book3,
        title: "Lost Boy",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, rerum.",
    },
]

const Hero = () => {
    const [imageId, setImageId] = useState(Book2);
    const [title, setTitle] = useState("His Life will forever be Changed");
    const [description, setDescription] = useState(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, rerum."
    )
    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
    };
    return <>
    <div className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200" style={bgImage}>
        <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text-content-section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                        {title}
                        <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                            by Anoymunt
                        </p>
                    </h1>
                    <p className="text-sm">
                        {description}
                    </p>
                    <div>
                        <button
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
                        <img src={imageId} alt="" className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"/>
                    </div>
                    {/* outher image list*/}
                    <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 dark:bg-gray-900 rounded-xl p-2">
                        {
                            ImageList.map((image) => (
                                <div key={image.id} onClick={() => {
                                    setImageId(image.img);
                                    setTitle(image.title);
                                    setDescription(image.description);
                                }}>
                                    <img src={image.img} alt="" className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"/>
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