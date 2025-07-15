import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useTranslation } from "react-i18next";


export default function Carousel({ children, id }: any) {
    const { i18n } = useTranslation()
    return (
        <div>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                dir={"ltr"}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop
                id={id || "bannar-content"}
                className="rounded-lg z-[2]"
            >
                <div style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}>
                    {children}
                </div>
            </Swiper>
        </div>
    )
}
