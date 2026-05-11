import Link from "next/link"

function page() {
  return (
    <>
      <div className={`w-full h-auto pb-16 flex flex-col justify-start items-center relative overflow-hidden`}>

        {/* navbar with logo */}
        <nav className={`w-full z-40 fixed h-auto flex justify-center items-center gap-2 py-5 backdrop-blur-2xl bg-white/15`}>
          <img src="/assets/logo.png" className={`h-7`} />
          <p className={`w-auto select-none text-lg`}>SS ELECTRICIAN</p>
        </nav>

        {/* about section */}
        <div className={`w-full flex flex-col justify-start items-center py-20 mt-10`}>
          <h2 className={`w-full tracking-tighter text-center font-bold text-4xl xl:text-5xl px-6 mb-5`}>ABOUT US</h2>
          <div className={`w-full lg:w-[80%] px-6 md:px-20 text-center text-[12px] md:text-sm xl:text-lg text-black`}>
            <p className={`mb-4 text-[12px] lg:text-sm`}>My name is Sanjib Das, and I have been a dedicated electrician serving families and businesses for over a decade. Based in the local area, I specialize in providing reliable, safe, and efficient electrical services.</p>
            <p className={`mb-4 text-[12px] lg:text-sm`}>From simple repairs to complex installations, I handle every job with the utmost care and professionalism. My goal is to ensure your electrical systems are safe, functional, and up to code.</p>
            <p className={`mb-4 text-[12px] lg:text-sm`}>I believe in building trust through honest work and clear communication. Whether it's fixing a faulty outlet or wiring a new home, I'm here to help with all your electrical needs.</p>
            <p>Contact me today for a free consultation and quote.</p>
          </div>
        </div>

        <Link href='/' className={`w-full text-center text-sm cursor-pointer select-none text-black opacity-60`}>Go back to homepage</Link>

      </div>
    </>
  )
}

export default page
