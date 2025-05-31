import React from "react";
import LibraryImg from "../../assets/website/library.jpg";
import { GrSecure } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayment, MdOutlineMessage } from "react-icons/md";

const Banner = () => {
    return <>
        <div className="py-10">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                    {/* image section */}
                    <div>
                        <img 
                            data-aos = "zoom-in"
                            src={LibraryImg} 
                            alt="" 
                            className="max-w-[400px] block mx-auto h-[350px] w-full drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"/>
                    </div>
                    {/* text content section */}
                    <div 
                        data-aos = "slide-up"
                        className="flex flex-col justify-center gap-6 sm:pt-0"
                    >
                        <h1 className="text-3xl sm:text-4xl font-bold">
                            Bem vindo à nossa Livraria
                        </h1>
                        <p className="text-sm text-gray-500 tracking-wide leading-5 mt-4">
                            Descubra um mundo de conhecimento e entretenimento com nossa vasta coleção de livros. Desde clássicos atemporais até os lançamentos mais recentes, temos algo para todos os amantes da leitura. Navegue por nossos gêneros variados e encontre seu próximo livro favorito!
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400 dark:text-black"/>
                                <p>Livros de Qualidade</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <TbTruckDelivery className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400 dark:text-black"/>
                                <p>Entrega Rápida</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <MdPayment className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-100 dark:bg-blue-400 dark:text-black"/>
                                <p>Método de Pagamento Fácil</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <MdOutlineMessage className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400 dark:text-black"/>
                                <p>Receba ofertas em livros</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Banner;