'use client'

import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { MdOutlineTv } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";
import { IoIosSwitch } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa";
import { FaFan } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { MdElectricalServices } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa6";
import { testimonials } from "@/data/testimonials";
import { useState } from "react"
import { motion } from "framer-motion"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { services as serviceNames } from "@/data/services";
import Link from "next/link";
import axios from "axios";
import { toast } from "sonner";
import { GiThunderball } from "react-icons/gi";

function page() {

  const [active, setActive] = useState(0)
  const [selectedService, setSelectedService] = useState("")
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const len = testimonials.length
  const prev = () => setActive((p) => p === 0 ? len - 1 : p - 1)
  const next = () => setActive((p) => p === len - 1 ? 0 : p + 1)
  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -80) next()
    if (info.offset.x > 80) prev()
  }
  const visible = [(active - 1 + len) % len, active, (active + 1) % len]

  const call = () => {
    window.location.href = "tel:+917980533030"
  }

  const mail = () => {
    window.open(`mailto:das.sanjib4294@gmail.com`, "_blank")
  }

  const services = [
    {
      name: "Power fault solution",
      subtext: "Quick diagnosis and repair for short circuits, power trips, voltage issues, and electrical breakdowns.",
      icon: <GiThunderball />
    },
    {
      name: "TV Wall Installation",
      subtext: "Safe wall mounting with proper alignment and clean wire setup.",
      icon: <MdOutlineTv />
    },
    {
      name: "House Wiring",
      subtext: "Complete wiring work for new homes and renovation projects.",
      icon: <FaNetworkWired />
    },
    {
      name: "Switchboard Installation",
      subtext: "Professional switchboard fitting with safe and secure connections.",
      icon: <IoIosSwitch />
    },
    {
      name: "Light Installation",
      subtext: "Tube lights, ceiling lights, and decorative lighting installation.",
      icon: <FaRegLightbulb />
    },
    {
      name: "Fan Installation",
      subtext: "Ceiling fan fitting, replacement, and electrical connection work.",
      icon: <FaFan />
    },
    {
      name: "Electrical Repairs",
      subtext: "Quick repair for wiring faults, loose connections, and trips.",
      icon: <FaScrewdriverWrench />
    },
    {
      name: "Socket & Switch Repair",
      subtext: "Repair damaged switches, sockets, and faulty power points.",
      icon: <MdElectricalServices />
    },
    {
      name: "Power Fault Checking",
      subtext: "Find and fix short circuits and voltage issues safely.",
      icon: <FaPowerOff />
    }
  ];

  const submitForm = async () => {

    if (submitting) return;

    if (!name || !selectedService || !contact || !message) {
      toast.error("All fields required");
      return;
    }

    if (contact.length < 10) {
      toast.error("Contact number should not be less than 10 digits");
      return;
    }

    let id = toast.loading(`Submitting form ...`);

    try {
      const res = await axios.post(`/api/book-service`, {
        name: name.trim(),
        service: selectedService.trim(),
        contact: contact.trim(),
        message: message.trim(),
      });

      if (res.status === 200) {
        toast.dismiss(id);
        toast.success("Form submitted");
      }
    } catch (err: any) {
      toast.error("Problem sending email. Please try again later")
    }
    finally {
      toast.dismiss(id);
      setName("");
      setSelectedService("");
      setContact("");
      setMessage("");
    }
  }

  return (
    <>
      <div className={`w-full h-auto flex flex-col justify-start items-center relative overflow-hidden`}>

        {/* navbar with logo */}
        <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, ease: "easeInOut" }} className={`w-full z-40 fixed h-auto flex justify-center items-center gap-2 py-5 backdrop-blur-2xl bg-white/20`}>
          <img src="/assets/logo.png" className={`h-7`} />
          <p className={`w-auto select-none text-lg`}>SS ELECTRICIAN</p>
        </motion.nav>

        {/* hero section */}
        <div className={`w-[95%] relative mt-20 h-auto rounded-2xl lg:rounded-3xl overflow-hidden`}>
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: "easeInOut" }} src="/assets/hero-portrait.jpg" className={`z-10 md:hidden h-[70vh] object-cover w-full`} />
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: "easeInOut" }} src="/assets/hero-landscape.jpg" className={`z-10 hidden md:block h-[70vh] object-cover w-full`} />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: "easeInOut" }} className={`w-full z-20 flex flex-col justify-end items-center xl:items-start gap-2 px-3 pb-10 absolute bottom-0 h-[80%] md:h-full bg-linear-to-t from-black via-[#000000a2] to-transparent`}>
            <motion.h1 initial={{ filter: "blur(20px)" }} animate={{ filter: "blur(0px)" }} transition={{ duration: 1.3, ease: "easeInOut" }} className={`w-full select-none text-center xl:text-start text-3xl md:text-6xl xl:pl-5 tracking-tighter font-sans font-semibold text-white`}>Quality Electrical Work</motion.h1>
            <motion.h1 initial={{ filter: "blur(20px)" }} animate={{ filter: "blur(0px)" }} transition={{ duration: 1.3, ease: "easeInOut" }} className={`w-full select-none text-center xl:text-start text-3xl md:text-6xl xl:pl-5 tracking-tighter font-sans font-semibold text-white`}>At Your Doorsteps</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} className={`w-full px-3 md:px-6 mt-5 text-center text-white text-[12px] md:text-lg xl:text-start select-none`}>From TV repairs and LED light installation to complete house wiring, I help homes & businesses with electrical work that lasts.</motion.p>

            {/* call button */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.7, ease: "easeInOut" }} onClick={call} className={`w-auto mt-3 md:hidden flex justify-center items-center h-auto rounded-full p-0.5 bg-[#2f66ff]`}>
              <p className={`w-auto text-black bg-white px-3 py-2 text-sm select-none rounded-full`}>Book a call</p>
              <span className={`px-2 text-white`}><IoMdCall /></span>
            </motion.div>

            {/* mail button */}
            <div onClick={mail} className={`w-auto xl:ml-5 mt-3 hidden md:flex justify-center items-center h-auto rounded-full p-0.5 bg-[#ff2f2f]`}>
              <p className={`w-auto text-black bg-white px-3 py-2 text-sm select-none rounded-full`}>Mail now</p>
              <span className={`px-3 text-white`}><IoMail /></span>
            </div>
          </motion.div>
        </div>

        {/* google rating */}
        <motion.div initial={{ opacity: 0, filter: "blur(20px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 1.9, ease: "easeInOut" }} className={`w-full flex justify-center items-center gap-2 py-10`}>
          <span className={`text-5xl`}><FcGoogle /></span>
          <div className={`w-auto flex flex-col justify-center items-start`}>
            <p className={`text-black text-sm font-semibold`}>4.8 stars on Google</p>
            <span className={`flex text-sm text-yellow-400`}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
          </div>
        </motion.div>

        {/* inro */}
        <div className={`w-full flex flex-col justify-start items-center py-6`}>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }} className={`w-full tracking-tighter text-center font-bold text-4xl xl:text-5xl px-6 mb-5`}>ABOUT</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeInOut" }} className={`w-full lg:w-[80%] px-6 md:px-20 text-center text-[12px] md:text-sm xl:text-lg text-black`}>My name is Sanjib Das, and I have been helping families and businesses with electrical repairs and installations
            for many years. Every job, big or small, is done with full attention, safety, and honesty. I believe good service brings
            customers back and that is how this work has grown.</motion.p>
        </div>

        {/* services provided */}
        <div className={`w-full flex flex-col justify-start items-center py-6`}>
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeInOut" }} className={`w-full tracking-tighter text-center font-bold text-4xl xl:text-5xl px-6 mb-5`}>SERVICES</motion.h2>
          <div className={`w-full mt-4 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5`}>
            {services.map((item, index) => {
              return <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeInOut" }} key={index} className={`w-full hover:shadow-2xl duration-300 ease-in-out cursor-pointer rounded-2xl flex flex-col justify-start items-start px-3 pt-3 pb-5 border border-[#a6a6a6]`}>
                <span className={`p-3 select-none rounded-xl border-2 bg-[#ecf2ff] border-[#4a89ff]`}>{item.icon}</span>
                <p className={`w-full select-none text-start mt-3 text-black font-bold text-xl`}>{item.name}</p>
                <p className={`w-full select-none text-start mt-1 text-black text-sm`}>{item.subtext}</p>
              </motion.div>
            })}
          </div>
        </div>

        {/* testimonials */}
        <div className={`w-full flex flex-col justify-start items-center py-6`}>
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeInOut" }} className={`w-full tracking-tighter text-center font-bold text-4xl xl:text-5xl px-6 mb-2`}>CLIENT REVIEWS</motion.h2>
          <div className={`w-full max-w-275 relative flex flex-col justify-center items-center`}>
            <div className={`relative h-72 md:h-60 flex justify-center items-center w-full`} style={{ perspective: 1400 }}>
              <motion.div drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.18} dragMomentum={false} onDragEnd={handleDragEnd} className={`absolute inset-0 flex justify-center items-center`}>
                {visible.map((itemIndex, pos) => {
                  const item = testimonials[itemIndex]
                  const isCenter = pos === 1
                  const x = pos === 0 ? -260 : pos === 2 ? 260 : 0
                  const rotateY = pos === 0 ? 14 : pos === 2 ? -14 : 0
                  return (
                    <motion.div key={item.name}
                      initial={false}
                      animate={{ x, scale: isCenter ? 1 : 0.82, opacity: isCenter ? 1 : 0.48, rotateY }}
                      transition={{ duration: 0.38, ease: "easeOut" }}
                      style={{ zIndex: isCenter ? 20 : 10 }}
                      className={`absolute cursor-pointer left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-62.5 md:w-75 rounded-3xl border border-[#d1d5db] bg-white p-6 shadow-2xl`}
                    >
                      <div className={`flex justify-between items-center`}>
                        <p className={`text-base font-semibold text-black`}>{item.name}</p>
                        <span className={`flex text-yellow-400`}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                      </div>
                      <p className={`mt-4 text-sm leading-6 text-[#333]`}>{item.message}</p>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
            <div className={`flex justify-center items-center gap-4 mt-2`}>
              <button onClick={prev} className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-xl`}><FaChevronLeft /></button>
              <button onClick={next} className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-xl`}><FaChevronRight /></button>
            </div>
          </div>
        </div>

        {/* form */}
        <div className={`w-full flex flex-col justify-start items-center pt-6 pb-10`}>
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeInOut" }} className={`w-full tracking-tighter text-center font-bold text-4xl xl:text-5xl px-6`}>BOOK A SERVICE</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeInOut" }} className={`w-full text-sm text-center px-6 mb-2 mt-1`}>Usually responds within few hours.</motion.p>
          <div className={`w-[95%] md:w-[60%] lg:w-[50%] xl:w-[40%] h-auto flex flex-col justify-start items-center gap-4 px-3 py-4`}>
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" className={`w-full rounded-full bg-gray-200 px-4 py-3 outline-none text-sm`} placeholder="Enter your name*" />
            <input onChange={(e) => setContact(e.target.value)} value={contact} type="number" className={`w-full rounded-full bg-gray-200 px-4 py-3 outline-none text-sm`} placeholder="Enter your contact*" />

            {/* dropdown */}
            <div className={`w-full relative`}>
              <motion.button onClick={() => setDropdownOpen(!dropdownOpen)} className={`w-full rounded-full bg-gray-200 px-4 py-3 outline-none text-sm text-start flex justify-between items-center`}>
                <span className={`${selectedService ? "text-black" : "text-gray-500"}`}>{selectedService || "Select a service*"}</span>
                <motion.span animate={{ rotate: dropdownOpen ? -90 : 90 }} transition={{ duration: 0.3 }}><FaChevronRight /></motion.span>
              </motion.button>
              <motion.div initial={false} animate={{ opacity: dropdownOpen ? 1 : 0, y: dropdownOpen ? 10 : -10, pointerEvents: dropdownOpen ? "auto" : "none" }} transition={{ duration: 0.25, ease: "easeOut" }} className={`absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-[#d1d5db] shadow-xl z-50 max-h-60 overflow-y-auto`}>
                {serviceNames.map((service, idx) => (
                  <motion.button key={idx} onClick={() => { setSelectedService(service); setDropdownOpen(false); }} whileHover={{ backgroundColor: "#f3f4f6" }} className={`w-full cursor-pointer px-4 py-3 text-start text-sm ${selectedService === service ? "bg-blue-100 text-black font-semibold" : "text-gray-700"}`}>
                    {service}
                  </motion.button>
                ))}
              </motion.div>
            </div>

            <textarea onChange={(e) => setMessage(e.target.value)} value={message} className={`w-full h-56 rounded-2xl bg-gray-200 px-4 py-3 outline-none text-sm`} placeholder="Explain more about your problem*" />
            <p onClick={submitForm} className={`w-full active:opacity-80 duration-200 ease-in-out rounded-full bg-linear-to-r from-[#1158ff] to-[#002c93] text-center py-3 text-white cursor-pointer select-none`}>Submit</p>
          </div>
        </div>

        {/* footer */}
        <div className={`w-full md:w-[60%] xl:w-[40%] h-auto bg-white pt-5 pb-10 grid grid-cols-2 md:grid-cols-4 justify-items-center gap-3`}>
          <Link href='/about' className={`w-auto active:opacity-60 duration-200 ease-in-out text-xm text-black cursor-pointer font-semibold select-none`}>ABOUT</Link>
          <Link href='/privacy' className={`w-auto active:opacity-60 duration-200 ease-in-out text-xm text-black cursor-pointer font-semibold select-none`}>PRIVACY</Link>
          <Link href='/data-usage' className={`w-auto active:opacity-60 duration-200 ease-in-out text-xm text-black cursor-pointer font-semibold select-none`}>DATA USAGE</Link>
          <Link href='/contact' className={`w-auto active:opacity-60 duration-200 ease-in-out text-xm text-black cursor-pointer font-semibold select-none`}>CONTACT</Link>
        </div>
        <div className={`w-full py-6 flex justify-center items-center`}>
          <p className={`select-none w-full text-center text-black opacity-75 text-sm`}>&copy; 2026 SS ELECTRICIAN. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default page
