import React, {useEffect,useRef} from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from 'aos';
import 'aos/dist/aos.css';

gsap.registerPlugin(ScrollTrigger)

const about = () => {
  
  // animasi nama dan jabatan
  const textRef = useRef(null);
  useEffect(() => {
    const el = textRef.current;
    gsap.fromTo(el,{scale:1.2},{ scale:1,duration:1 , scrollTrigger:{
      trigger: el,
      start: 'center bottom',
      end: 'bottom bottom',
      toggleActions: 'play none none reverse',
    }})
  }, []);



  // animasi foto-diri-gerak
  const imgRef = useRef(null);
  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(el,{rotate:5},{ rotate:0,duration:0.8 , scrollTrigger:{
      trigger: el,
      start: 'center bottom',
      end: 'bottom bottom',
      toggleActions: 'play none none reverse',
    }})
  }, []);



  // animasi gsap brandlink
  const elementRefs = useRef([]);

  useEffect(() => {
    const elements = elementRefs.current;

    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          
          x:'40%',
          y:'100%'
        },
        {
          opacity: 1,
         x:0,
         y:0,
          scrollTrigger: {
            trigger: element,
            start: 'center bottom',
            end: 'bottom bottom',
            toggleActions: 'play none none reverse',
          },
        }
        );
      });
    }, []);
  


  // animasi pengenalan diri
  const paragraphRef = useRef(null);
  useEffect(() => {
    const el2 = paragraphRef.current;
    gsap.fromTo(el2,{opacity:0,y:'10%' },{ opacity:1,y:0, duration: 1, scrollTrigger:{
      trigger: el2,
      start: 'center bottom',
      end: 'bottom bottom',
      toggleActions: 'play none none reverse',
    
    }})
  }, []);



  // animasi brandlink
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-scaleupright');
    elements.forEach((element) => {
      const delay = parseInt(element.getAttribute('data-delay'), 10);
      element.style.animationDelay = `${delay}ms`;
    });
  }, []);

  // AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Durasi animasi dalam milidetik
      easing: 'ease-in-out', // Efek animasi
    });
  }, []);
  
  // onscroll ke kiri
  useEffect(() => {
    const animateElements = document.querySelectorAll('.Kekiri');
    const startOffset = 100; // Jarak dari atas layar saat animasi dimulai
    const shiftAmount = 200; // Jarak pergeseran objek

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= startOffset) {
        const shift = Math.min((scrollPosition - startOffset) / shiftAmount, 1);

        animateElements.forEach((element, index) => {
          const delay = index * 100; // Delay untuk setiap elemen (misalnya 100ms per elemen)
          element.style.transition = `transform 0.5s ${delay}ms`;
          element.style.transform = `translateX(-${shift * 50}px)`;
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // onscroll ke kanan
  useEffect(() => {
    const animateElements = document.querySelectorAll('.Kekanan');
    const startOffset = 100; // Jarak dari atas layar saat animasi dimulai
    const shiftAmount = 200; // Jarak pergeseran objek

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= startOffset) {
        const shift = Math.min((scrollPosition - startOffset) / shiftAmount, 1);

        animateElements.forEach((element, index) => {
          const delay = index * 100; // Delay untuk setiap elemen (misalnya 100ms per elemen)
          element.style.transition = `transform 0.2s ${delay}ms`;
          element.style.transform = `translateX(${shift * 50}px)`;
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  
  return (
    <>
    <div className=' container mx-20'>
     <div className='flex justify-center text-center pt-10 relative '>
       <div className=''>
       <h1 className='text-3xl font-bold animate-scalecenter'>Meet Our Team Leads</h1>
       <p className='pt-10 animate-scalecenter '>Starting small, we are striving to create a big global impact</p>
       <div className='geserdikit'>
        <img className='absolute right-[20%] w-20 -bottom-10 Kekanan' src="/kubus1.png" alt="" />
        <img className='absolute left-48 w-40 -bottom-36 Kekiri' src="/piala.png" alt="" />
        <img className='absolute left-10 w-20 -bottom-40 Kekiri' src="/basket.png" alt="" />
        <img className='absolute right-[10%] w-40 -bottom-60 Kekanan' src="/target.png" alt="" />
       </div>
       </div>
     </div>

<div className='w-full flex justify-center pt-20 relative'>
      <div className=''>
        <img className='absolute w-32 left-[15%] bottom-0 Kekiri' src="/kubus1.png" alt="" />
        <img className='absolute w-32 right-[15%] -bottom-10 Kekanan' src="/kubus3.png" alt="" />
      </div>
     <div className=' bg-blue-300 p-10 w-[45%] flex gap-20 justify-center rounded-xl animate-fadeintop'>
       <div className='w-56 animate-moveleft'>
       <img src="/riko.png" alt="" />
       </div>
       <div className='p-6 bg-white w-96 rounded-xl relative'>
       
         <h1 className='text-2xl font-bold animate-scalecenter'>Riko Sapto Dimo </h1>
         <p className='pt-2 animate-scalecenter'>Founder & CEO</p>
         <p className='pt-5 text-xs animate-fadeintop'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni maiores necessitatibus et cum quam consectetur, in rerum repudiandae qui, voluptatum est quas facere ex quaerat soluta fugiat aspernatur quo iste explicabo officiis vero maxime debitis eius doloribus? Dolor, voluptatem aperiam.</p>

         <div className='flex gap-5 bottom-5 left-5 pt-10 '>
        <div className='p-2 rounded-full bg-pink-500 duration-300 w-10 cursor-pointer  animate-scaleupright' data-delay="100" >
        <img src="/dribble.png" alt="" />
        </div>
        <div className='p-2 rounded-full hover:bg-pink-500 duration-500 w-10 cursor-pointer  animate-scaleupright' data-delay="200">
        <img src="/behance.png" alt="" />
        </div>
        <div className='p-2 rounded-full hover:bg-pink-500 duration-500 w-10 cursor-pointer  animate-scaleupright' data-delay="400">
        <img src="/instagram.png" alt="" />
        </div>
        <div className='p-2 rounded-full hover:bg-pink-500 duration-500 w-10 cursor-pointer  animate-scaleupright' data-delay="600">
        <img src="/linkedin.png" alt="" />
        </div>
         </div>
       </div>
      
     </div>
</div>
<div className='w-full flex justify-center mt-40 pb-80 relative'>
     <div className=' bg-blue-300 p-10 w-[45%] flex gap-20 justify-center rounded-xl' data-aos-duration='1000' >
      
       
       <div className='p-6 bg-white w-96 rounded-xl relative nama'>
       <div className='opacity-100 ' ref={textRef}>
         <h1 className='text-2xl font-bold'>Riko Sapto Dimo </h1>
         <p className='pt-2 '  >Founder & CEO</p>
       </div>
         <p className='pt-5 text-xs ' ref={paragraphRef}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni maiores necessitatibus et cum quam consectetur, in rerum repudiandae qui, voluptatum est quas facere ex quaerat soluta fugiat aspernatur quo iste explicabo officiis vero maxime debitis eius doloribus? Dolor, voluptatem aperiam.</p>

         <div className='flex gap-5 bottom-5 left-5 pt-10 opacity-100' >
        <div  ref={(el) => (elementRefs.current[0] = el)} className='p-2 rounded-full bg-pink-500 duration-300 w-10 cursor-pointer  animate-scaleupright' data-delay="100" >
        <img src="/dribble.png" alt="" />
        </div>
        <div  ref={(el) => (elementRefs.current[1] = el)} className='p-2 rounded-full hover:bg-pink-500 duration-500 w-10 cursor-pointer  animate-scaleupright' data-delay="200">
        <img src="/behance.png" alt="" />
        </div>
        <div  ref={(el) => (elementRefs.current[2] = el)} className='p-2 rounded-full hover:bg-pink-500 duration-500 w-10 cursor-pointer  animate-scaleupright' data-delay="400">
        <img src="/instagram.png" alt="" />
        </div>
        <div  ref={(el) => (elementRefs.current[3] = el)} className='p-2 rounded-full hover:bg-pink-500 duration-500 w-10 cursor-pointer  animate-scaleupright' data-delay="600">
        <img src="/linkedin.png" alt="" />
        </div>
         </div>
       </div>
       <div className='w-56' ref={imgRef}>
       <img src="/riko.png" alt="" />
       </div>
      
      
     </div>
</div>
      <div className='flex justify-around w-full'>
        <div className='w-2/5'>
          <h1 className='text-3xl'>Orely's Core</h1>
          <p className='mt-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ducimus enim necessitatibus id nisi sit nihil odit veniam error incidunt quidem veritatis corrupti, voluptatum reprehenderit, eius, maiores officiis debitis dolore.</p>
          <p className='mt-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia veritatis minus neque dolore suscipit vitae beatae veniam, voluptatem doloribus, iste error quibusdam iusto sit, porro provident. Ab ratione rem id!</p>
        </div>
        <div className='w-2/5'>
          <img src="/party.jpg" alt="" />
        </div>
        <div>

        </div>
      </div>

    </div>
   </>
  )
}

export default about