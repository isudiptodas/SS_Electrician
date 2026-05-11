import Link from "next/link"

function page() {
    return (
        <>
            <div className={`w-full h-auto pb-16 flex flex-col justify-start items-center relative overflow-hidden`}>

                {/* navbar with logo */}
                <nav className={`w-full z-40 fixed h-auto flex justify-center items-center gap-2 py-5 backdrop-blur-2xl bg-white/20`}>
                    <img src="/assets/logo.png" className={`h-7`} />
                    <p className={`w-auto select-none text-lg font-Apple`}>SS ELECTRICIAN</p>
                </nav>

                {/* privacy section */}
                <div className={`w-full flex flex-col justify-start items-center py-20 mt-10`}>
                    <h2 className={`w-full tracking-tighter text-center font-bold text-4xl xl:text-5xl px-6 mb-5`}>PRIVACY POLICY</h2>
                    <div className={`w-full lg:w-[80%] px-6 md:px-20 text-start text-[12px] md:text-sm xl:text-lg text-black`}>
                        <p className={`mb-4`}>At SS Electrician, we respect your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and safeguard your data.</p>
                        <h3 className={`font-bold mb-2`}>Information We Collect</h3>
                        <p className={`mb-4`}>We may collect your name, contact information, and details about the services you request when you contact us or use our booking form.</p>
                        <h3 className={`font-bold mb-2`}>How We Use Your Information</h3>
                        <p className={`mb-4`}>Your information is used solely to provide electrical services, communicate with you, and improve our offerings. We do not share your data with third parties.</p>
                        <h3 className={`font-bold mb-2`}>Data Security</h3>
                        <p className={`mb-4`}>We take reasonable measures to protect your information from unauthorized access or disclosure.</p>
                        <h3 className={`font-bold mb-2`}>Contact Us</h3>
                        <p>If you have any questions about this policy, please contact us at +91 79805 33030.</p>
                    </div>
                </div>
                <Link href='/' className={`w-full text-center text-sm cursor-pointer select-none text-black opacity-60`}>Go back to homepage</Link>

            </div>
        </>
    )
}

export default page
