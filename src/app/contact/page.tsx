import Link from "next/link"

function page() {
    return (
        <>
            <div className={`w-full h-auto flex flex-col justify-start items-center relative overflow-hidden`}>

                {/* navbar with logo */}
                <nav className={`w-full z-40 fixed h-auto flex justify-center items-center gap-2 py-5 backdrop-blur-2xl bg-white/15`}>
                    <img src="/assets/logo.png" className={`h-7`} />
                    <p className={`w-auto select-none text-lg`}>SS ELECTRICIAN</p>
                </nav>

                {/* contact section */}
                <div className={`w-full flex flex-col justify-start items-center py-20 mt-10`}>
                    <h2 className={`w-full tracking-tighter text-center font-bold text-4xl xl:text-5xl px-6 mb-5`}>CONTACT US</h2>
                    <div className={`w-full lg:w-[80%] px-6 md:px-20 text-center text-[12px] md:text-sm xl:text-lg text-black`}>
                        <p className={`mb-4 text-[12px] lg:text-sm`}>Get in touch for all your electrical needs.</p>
                        <p className={`mb-2 text-[12px] lg:text-sm`}>Phone: <b>+91 79805 33030</b></p>
                        <p className={`mb-4 text-[12px] lg:text-sm`}>Email: <b>das.sanjib4294@gmail.com</b></p>
                        <p className={`mb-4 text-[12px] lg:text-sm`}>Feel free to call or email us for a free quote or consultation.</p>
                    </div>
                </div>

                <Link href='/' className={`w-full text-center text-sm cursor-pointer select-none text-black opacity-60`}>Go back to homepage</Link>

            </div>
        </>
    )
}

export default page
