import imgq from '../../../assets/home/chef-service.jpg';

const About = () => {
    return (
        <div 
            className="relative w-full flex items-center justify-center bg-cover bg-center mb-16"
            style={{ backgroundImage: `url(${imgq})` }}
        >
            <div className="bg-white bg-opacity-95 p-8 md:p-16  my-20 text-center max-w-3xl mx-4 md:mx-auto">
                <h1 className="text-3xl md:text-5xl font-serif mb-4">Rustica House</h1>
                <p className="text-gray-700 text-sm md:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum
                    deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto
                    ducimus incidunt quibusdam nemo.
                </p>
            </div>
        </div>
    )
}

export default About;
