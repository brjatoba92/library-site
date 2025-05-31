import React from "react";
import Book1 from "../../assets/books/berkhof.jpg";
import Book2 from "../../assets/books/comentario_esdras.jpg";
import Book3 from "../../assets/books/espiritualidade_reformada.jpg";
import Book4 from "../../assets/books/dogmatica.jpg";
import Book5 from "../../assets/books/mais_vencedores.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
    {
        id: 1,
        img: Book1,
        title: "Teologia Sistematica",
        author: "Louis Berkhof",
        rating: 4.5,
    },
    {
        id: 2,
        img: Book2,
        title: "Estudos Biblicos Expositivos de Esdras e Neemias",
        author: "Derek Thomas",
        rating: 4.5,
    },
    {
        id: 3,
        img: Book3,
        title: "Espiritualidade Reformada",
        author: "Joel Beeke",
        rating: 5.0,
    },
    {
        id: 4,
        img: Book4,
        title: "Dogmática Reformada",
        author: "Herman Bavinck",
        rating: 4.7,
    },
    {
        id: 5,
        img: Book5,
        title: "Mais que Vencedores",
        author: "William Hendriksen",
        rating: 4.1,
    },
]
const AllBooks = () => {
    return <>
        <div className="py-10">
            <div className="container placeholder-gray-100">
                {/* all books section */}
                <div 
                    data-aos = "slide-up"
                    className="text-center mb-20 max-w-[400px] mx-auto"
                >
                    <p
                        className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                    >
                        Melhores Livros para Você Adquirir
                    </p>
                    <h1 className="text-3xl font-bold">Nosso acervo</h1>
                    <p className="text-xs text-gray-400">
                        Oferecimos uma seleção diversificada de livros que abrangem teologia, espiritualidade e estudos bíblicos. Cada obra é escolhida para enriquecer sua jornada de fé e conhecimento.
                    </p>
                </div>
                {/* card section */}
                <div data-aos = "slide-up" data-aos-delay = "500">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-5 place-items-center gap-5">
                        {
                            BooksData.map((book) => (
                                <div className="space-y-3">
                                    <img src={book.img} alt="" className="h-[200px] w-[150px] object-cover rounded-md"/>
                                    <div>
                                        <h2 className="font-semibold">{book.title}</h2>
                                        <p className="text-sm text-gray-700 dark:text-gray-400">{book.author}</p>
                                        <div className="flex items-center gap-1">
                                            <FaStar className="text-yellow-500"/>
                                            <span>{book.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex justify-center">
                        <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-5 rounded-full">Acesse o acervo completo</button>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default AllBooks;