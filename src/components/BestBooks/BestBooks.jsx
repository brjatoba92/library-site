import React from "react";
import Img1 from "../../assets/books/berkhof.jpg";
import Img2 from "../../assets/books/comentario_esdras.jpg";
import Img3 from "../../assets/books/espiritualidade_reformada.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
    {
        id: 1,
        img: Img1,
        title: "Teologia Sistematica",
        author: "Anoymunt",
        description: "Em classico da teologia sistemática, Berkhof apresenta uma visão abrangente e acessível dos principais temas teológicos.",
    },
    {
        id: 2,
        img: Img2,
        title: "Estudos Biblicos Expositivos de Esdras e Neemias",
        author: "Anoymunt",
        description: "Uma análise detalhada dos livros de Esdras e Neemias, explorando temas de restauração e liderança espiritual.",
    },
    {
        id: 3,
        img: Img3,
        title: "Espiritualidade Reformada",
        author: "Anoymunt",
        description: "Uma exploração profunda da espiritualidade reformada, abordando suas raízes bíblicas e teológicas.",
    },
]

const BestBooks = ({ handleOrderPopup }) => {
    return <>
        <div className="py-10">
            <div className="container">
                {/* Header section */}
                <div className="text-center mb-20 max-w-[400px] mx-auto">
                    <p
                        className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                    >
                        Livros em alta
                    </p>
                    <h1 className="text-3xl font-bold">Melhores Livros</h1>
                    <p className="text-xs text-gray-400">
                        Descubra os livros mais recomendados e populares entre nossos leitores. Cada obra é uma janela para novas ideias e perspectivas.
                    </p>
                </div>
                {/* card section */}
                <div 
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center"
                >
                    {BooksData.map((book) => (
                        <div 
                            data-aos = "zoom-in"
                            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px">
                            <div className="h-[100px]">
                                <img 

                                    src={book.img} 
                                    alt="" 
                                    className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <div className="w-full flex items-center justify-center">
                                    <FaStar className="text-yellow-500"/>
                                    <FaStar className="text-yellow-500"/>
                                    <FaStar className="text-yellow-500"/>
                                    <FaStar className="text-yellow-500"/>
                                    <FaStar className="text-yellow-500"/>
                                </div>
                                <h1 className="text-xl font-bold">
                                    {book.title}
                                </h1>
                                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                                    {book.description}
                                </p>
                                <button 
                                    onClick={handleOrderPopup}
                                    className=" bg-primary to-secondary text-white py-2 px-4 rounded-full mt-4 hover:scale-105 duration-200 group-hover:bg-white group-hover:text-primary"
                                >
                                        Compre Já
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>;
};

export default BestBooks;