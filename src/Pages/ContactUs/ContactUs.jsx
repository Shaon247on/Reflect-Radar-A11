
import back from '../../assets/Stacked_Wave.jpg';
const ContactUs = () => {
    return (
        <section className="relative flex flex-col items-center w-full h-[1100px] md:h-[900px]">
            <img src={back} alt="" className='absolute h-[1100px] md:h-[900px] w-full  object-cover object-center' />
            <div className='absolute text-center top-[150px]'>
                <h1 className='text-2xl md:text-4xl text-white font-playfair font-bold mb-5'>Contact</h1>
                <p className='text-white w-[300px] md:w-[500px]'>Contact us to learn more about new releases, contact-free virtual events and grab and go checkout services available now.</p>
            </div>
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x absolute top-[350px]">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold font-playfair text-white">Get in touch</h1>
                    <p className="pt-2 pb-4 text-white">Fill in the form to start a conversation</p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-[#431A20]">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span className='text-white'>karamtola, Pubail, Gazipur.</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-[#431A20]">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span className='text-white'>01400-608970</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-[#431A20]">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span className='text-white'>contact@business.com</span>
                        </p>
                    </div>
                </div>
                <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                    <label className="block">
                        <span className="mb-1 text-white">Full name</span>
                        <input type="text" placeholder="your name" className="block w-full px-3 py-2 border-b-[#431A20] border-b placeholder-[#431A20] focus:placeholder-transparent focus:border-b-[#431A20] duration-150 focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                    </label>
                    <label className="block">
                        <span className="mb-1 text-white">Email address</span>
                        <input type="email" placeholder="your email" className="block w-full px-3 py-2 border-b-[#431A20] border-b placeholder-[#431A20] focus:placeholder-transparent focus:border-b-[#431A20] duration-150 focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                    </label>
                    <label className="block">
                        <span className="mb-1 text-white">Message</span>
                        <textarea rows="3" placeholder='your message' className="block w-full px-3 py-2 border-b-[#431A20] border-b placeholder-[#431A20] focus:placeholder-transparent focus:border-b-[#431A20] duration-150 focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent"></textarea>
                    </label>
                    <button className="w-full px-8 py-3 font-semibold rounded-md bg-[#CB2903] text-white hover:bg-[#431A20] duration-500">Send</button>
                    </form>
            </div>
        </section>
    );
};

export default ContactUs;