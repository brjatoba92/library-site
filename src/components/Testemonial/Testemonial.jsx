import React from "react";
import Slider from "react-slick";

const TestimonialData = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "John Doe",
        text: "This bookstore is a hidden gem! Every time I walk in, I leave with a stack of treasures I can’t wait to read.",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1640043964265-c03b5ca0b715?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",
        name: "Martha Klein",
        text: "The selection is incredible—I've discovered so many new authors here that I now adore. It's my go-to place for book shopping.",
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1600176957290-e3c4077f4a47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29uJTIwc2VyYmlhbnxlbnwwfHwwfHx8MA%3D%3D",
        name: "Jovinko Flinck",
        text: "I love how every visit feels like an adventure. The staff always recommends something amazing that ends up being my new favorite book!",
    },
]

const Testemonial = () => {
    // slider config
    var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    return (
        <div className="pb-10">
            <div className="container">
                {/* Header section */}
                <div 
                    data-aos = "slide-up"
                    className="text-center mb-20 max-w-[400px] mx-auto"
                >
                    <p
                        className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                    >
                        What our customer says
                    </p>
                    <h1 className="text-3xl font-bold">Testimonials</h1>
                    <p className="text-xs text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, rerum.{" "}
                    </p>
                </div>
                {/* card section */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {TestimonialData.map((data) => (
                           <div className="my-6">
                            <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                                <div>
                                    <img src={data.img} alt="" className="rounded-full w-20 h-20 object-cover"/>
                                </div>
                                <div>
                                    <div>
                                        <p className="text-gray-500 text-sm">{data.text}</p>
                                        <h1 className="font-bold text-black/80 dark:text-white ">{data.name}</h1>
                                    </div>
                                </div>
                                <p className="absolute z-10 top-0 right-0 font-serif text-9xl text-black/20">,,</p>
                            </div>
                            
                           </div> 
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
};

export default Testemonial;