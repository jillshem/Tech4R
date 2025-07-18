import { Hero } from '@/components/Hero'
import { Button } from '@/components/Button'
import Title from '@/components/Title'
import Image from "next/image";
import styles from "@/app/volunteers/volunteer.module.css"
import debugimg from "@/app/volunteers/debugimg.png"
import {Carousel, CI} from "@/app/volunteers/Carousel"
import { FaLinkedin, FaScrewdriverWrench, FaListOl, FaQuoteLeft } from "react-icons/fa6";

//filling arrays with dummy data to test appearance
//todo: pull from actual database.
const volunteers = Array(10).fill({name:"Name",loc:"Location",src:debugimg,link:"?"});
const skills = Array(6).fill({name:"Skill Name",desc:"Lorem Ipsum etc. 2 lines each",ico:FaScrewdriverWrench});
const steps = Array(3).fill({name:"Step X",desc:"Lorem Ipsum etc. 2 lines each",ico:FaListOl});
const testimony = Array(8).fill({title:"Testimony",test:"Lorem Ipsum etc etc etc.",vname:"Person Person",vtitle:"Title",vsrc:debugimg});
const assignments = Array(8).fill({title:"Assignment",desc:"Lorem Ipsum etc etc etc.",meta:"METADATA",href:""});

export default function VolunteersPage() {
  return (
    <>
      <Hero title={<span className="block max-w-xl">Get Involved As A Volunteer</span>} subtitle="Join a global network supporting communities in crisis."/>
      <section className="flex-1">

        <div className="container mx-auto p-4 m-6">
          <Carousel pages={1+Math.floor(0.125 * (volunteers.length-1))} size={8} className="grid gap-4 grid-cols-2 md:grid-cols-4 place-items-center place-content-center">
            {volunteers.map((e,i) => (
              <CI key={e.name} className="group rounded-lg w-full contain-content z-1 m-3" index={i}>
                <Image alt={e.name} src={e.src} className='object-cover w-full z-2'/>
                <div className={`${styles.overlay} fixed bottom-0 w-full h-6/12 z-3 opacity-0 group-hover:opacity-100 text-white duration-200 bg-gradient-to-t from-black bg-opacity-75`}>
                  <div className='fixed bottom-0 w-full p-4 z-4'>
                    <h5 className='text-2xl font-bold'>{e.name}{i}</h5><p className='text-neutral-01 font-light text-xs leading-relaxed'>{e.loc}</p>
                    {(e.link == "")?(<></>):(<a href={e.link}><FaLinkedin className="fixed bottom-3 right-3 text-4xl"/></a>)}
                  </div>
                </div>
              </CI>
            ))}
          </Carousel>
        </div>

        <div className="container mx-auto p-4 m-6 bg-neutral-01 rounded-3xl">
          <Title>Required Skills</Title>
          <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 place-items-center place-content-center">
            {skills.map(e => (
              <li key={e.name} className="rounded-lg p-4 w-full m-3 contain-content bg-background">
                {(typeof e.ico == 'string')?(<></>):(<e.ico className = "text-4xl text-color-01"/>)}
                <h5 className='text-2xl font-bold'>{e.name}</h5>
                <p className='text-neutral-02 font-light leading-relaxed'>{e.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="container mx-auto p-4 m-6">
          <Title>How to Get Involved as a Volunteer</Title>
          <ul className={`grid gap-4 grid-cols-2 md:grid-cols-${steps.length} place-items-center place-content-center`}>
            {steps.map((e,i) => (
              <li key={`step${i}`} className="rounded-lg p-4 w-full m-3 contain-content text-center bg-background border-1 border-neutral-500 border-opacity-20">
                {(typeof e.ico == 'string')?(<></>):(<e.ico className = "text-4xl m-auto text-color-01"/>)}
                <h5 className='text-2xl font-bold'>{e.name}</h5>
                <p className='text-neutral-03'>{e.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="container mx-auto p-4 m-6">
          <Title>Volunteer Testimonials</Title>
          <Carousel pages={1+Math.floor((testimony.length-1)/6)} size={6} className="grid gap-4 grid-cols-2 md:grid-cols-3 place-items-center place-content-center">
            {testimony.map((e,i) => (
              <CI key={e.title} className="rounded-lg w-full p-4 m-3 contain-content bg-neutral-01" index={i}>
                <FaQuoteLeft className="text-color-01 text-5xl"/>
                <h5 className='text-2xl font-bold'>{e.title}{i}</h5>
                <p className='text-neutral-03'>{e.test}</p>
                <div className="flex mt-4">
                  <Image alt={e.vname} src={e.vsrc} className='mr-4 h-12 w-12 rounded-full'/>
                  <div>
                    <h6 className='text-lg font-semibold leading-relaxed text-neutral-04'>{e.vname}</h6>
                    <p className='text-neutral-02 text-xs'>{e.vtitle}</p>
                  </div>
                </div>
              </CI>
            ))}
          </Carousel>
        </div>

        <div className="container grid items-center mx-auto p-4 m-6">
          <Title>Browse Volunteer Assignments in Ongoing Projects</Title>
          <Button className="m-auto flex-none" href=""><span className="hidden md:inline">Become a&nbsp;</span>Volunteer</Button>
          <Carousel pages={1+Math.floor((assignments.length-1)/6)} size={6} className="grid gap-4 grid-cols-2 md:grid-cols-3 place-items-center place-content-center">
            {assignments.map((e,i) => (
              <CI key={e.title} className="rounded-lg bg-color-02 text-neutral-02 w-full p-4 m-3 contain-content" index={i}>
                <h5 className='text-white text-2xl font-bold'>{e.title}{i}</h5>
                <p>{e.desc}</p>
                <p>{e.meta}</p>
                <Button className="mt-4 flex-none" variant='white' href={e.href}>Apply<span className="hidden md:inline">&nbsp;Now</span></Button>
              </CI>
            ))}
          </Carousel>
        </div>
        
      </section>
      <div className="container mx-auto p-4 m-6">[[Link to Contact section]]</div>
    </>
  );
}
