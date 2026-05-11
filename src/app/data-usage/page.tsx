import Link from "next/link"

function page() {
    return (
        <>
            <div className={`w-full h-auto pb-16 flex flex-col justify-start items-center relative overflow-hidden`}>

                {/* navbar with logo */}
                <nav className={`w-full z-40 fixed h-auto flex justify-center items-center gap-2 py-5 backdrop-blur-2xl bg-white/15`}>
                    <img src="/assets/logo.png" className={`h-7`} />
                    <p className={`w-auto select-none text-lg font-Apple`}>SS ELECTRICIAN</p>
                </nav>

                {/* data usage section */}
                <div className={`w-full flex flex-col justify-start items-center py-20 mt-10`}>
                    <h2 className={`w-full tracking-tighter text-center font-bold text-4xl xl:text-5xl px-6 mb-5`}>DATA USAGE POLICY</h2>
                    <div className={`w-full lg:w-[80%] px-6 md:px-20 text-start text-[12px] md:text-sm xl:text-lg text-black`}>
                        <p className={`mb-4 text-[12px] lg:text-sm`}>This policy outlines how we handle data collected through our website and services.</p>
                        <h3 className={`font-bold mb-2 text-lg`}>Data Collection</h3>
                        <p className={`mb-4 text-[12px] lg:text-sm`}>We collect minimal data necessary for providing services, such as contact details for bookings.</p>
                        <h3 className={`font-bold mb-2 text-lg`}>Data Retention</h3>
                        <p className={`mb-4 text-[12px] lg:text-sm`}>Data is retained only as long as needed for service provision and legal requirements.</p>
                        <h3 className={`font-bold mb-2 text-lg`}>Your Rights</h3>
                        <p className={`mb-4 text-[12px] lg:text-sm`}>You have the right to request access, correction, or deletion of your data.</p>
                        <p className={`mb-4 text-[12px] lg:text-sm`}>For more details, contact us.</p>
                    </div>
                </div>

                <Link href='/' className={`w-full text-center text-sm cursor-pointer select-none text-black opacity-60`}>Go back to homepage</Link>


            </div>
        </>
    )
}

export default page
