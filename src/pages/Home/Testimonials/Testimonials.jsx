import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import Sectiontitle from "../../../components/SectionTitle/Sectiontitle";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviwes.json')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error)); // Add error handling
    }, []);

    return (
        <section className="my-20 w-3/4 mx-auto">
            <Sectiontitle
                subHeading="What Our Client Say"
                heading={'Testimonials'}
            />

            <Swiper
                navigation={true}

                className="mySwiper"
            >
                {
                    reviews.map(review => (
                        <SwiperSlide key={review._id}>
                            <div className="flex flex-col items-center mx-24 mt-5">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft className="text-7xl mt-8"></FaQuoteLeft>
                                <p className="pt-8 mb-3">{review.details}</p>
                                <h3 className="text-2xl text-orange-400">{review.name}</h3>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;
