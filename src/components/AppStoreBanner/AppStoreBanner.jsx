import React from "react";
import BoardImg from "../../assets/website/board.png"; 
import PlayStoreImg from "../../assets/website/play_store.png";
import AppStoreImg from "../../assets/website/app_store.png";

const bannerImg = {
    backgroundImage: `url(${BoardImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
}
const AppStoreBanner = () => {
    return <div 
        className="bg-gray-100 dark:bg-gray-800 text-white py-10" style={bannerImg}
    >
        <div className="container">
            <div className="space-y-6 max-w-xl mx-auto">
                <h1 
                    className="text-2xl text-clip text-center sm:text-4xl font-semibold"
                >
                    Read Books at your fingertips
                </h1>
                <div className="flex flex-wrap justify-center items-center gap-4">
                    <a href="#">
                        <img 
                            src={PlayStoreImg} 
                            alt="" 
                            className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" 
                        />
                    </a>
                    <a href="#">
                        <img 
                            src={AppStoreImg} 
                            alt="" 
                            className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
};

export default AppStoreBanner;