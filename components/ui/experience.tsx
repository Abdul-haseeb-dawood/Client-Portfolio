'use client'
import { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useMediaQuery } from '@react-hook/media-query';

interface Testimonial {
  text: string;
  name: string;
  date: string;
  jobtitle: string;
  skills: string;
}

interface ComponentProps {
  testimonials: Testimonial[];
}

export const Component = ({ testimonials }: ComponentProps) => {

  const book = useRef<typeof HTMLFlipBook>(null);

  const isSmallScreen = useMediaQuery('(min-width: 640px)');
  const smallerDevice = isSmallScreen ? false : true;

  return (
    <div className='pt-5'>
      <h1 className="text-3xl text-center md:text-4xl font-bold bg-linear-to-t to-[#B3E5F5] via-[#D4F1FC]/60 from-[#B3E5F5] bg-clip-text text-transparent ">
          🛠Experience
          <p className='text-lg my-1 text-white tracking-tight font-normal'>Professional Journey </p>
          <div className="w-20 h-1 rounded-2xl bg-linear-to-b to-white via-gray-950/90 from-white mx-auto"></div>
        </h1>
    <div className="w-full text-white h-500px flex items-center py-10">
       <HTMLFlipBook
      ref={book}
      width={350}
      height={450}
      showCover={true}
      usePortrait={smallerDevice}
      onFlip={(e) => console.log(e.data)}
      onChangeState={(e) => console.log(e.data)}
      className={''}
      style={{}}
      startPage={0}
      size={'fixed'}
      minWidth={0}
      maxWidth={0}
      minHeight={0}
      maxHeight={0}
      drawShadow={true}
      flippingTime={800}
      startZIndex={0}
      autoSize={false}
      maxShadowOpacity={0}
      mobileScrollSupport={true}
      clickEventForward={true}
      useMouseEvents={true}
      swipeDistance={0}
      showPageCorners={false}
      disableFlipByClick={false}>
 
      <div className="relative bg-black border rounded-lg p-8 py-20 text-white flex flex-col items-center justify-center shadow-lg shadow-gray-600 cursor-grab">
        
      <h1 className="text-3xl mb-16 text-center relative z-10">Experience & Expertise</h1>
      <div className="w-full h-1 bg-white mb-6 relative z-10"></div>
      <div className='text-center'>
        <span className="text-lg text-white text-center hover:text-gray-300 transition-colors duration-300 relative z-10">
          I continuously improve my skills by working on challenging projects and turning ideas into powerful digital solutions.
        </span>
      </div>
    </div>

        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full h-full flex justify-center items-center shadow-sm shadow-blue-300 cursor-grab bg-[url('/darkBack.png')] bg-cover bg-center">
            
            <div className="page-front flex text-end rounded-b-2xl text-black p-3 bg-linear-to-br to-blue-100/60">
                <span className='flex justify-start font-bold w-full'>{testimonial.jobtitle}</span>
                <span className='flex justify-end font-extrabold '>{index + 1}</span>
            </div>
           
            <div className=''>
            <div className='flex flex-col justify-center items-center mt-3'>
              <span className=' text-xl font-extrabold text-[#2ef5f5]'>{testimonial.name}</span>
              <span className='text-gray-500 text-sm'>{testimonial.date}</span>
            </div>
              <div className='p-5 font-serif mb-1 text-center text-[13px]'>{testimonial.text}</div>
              <div className='px-5 italic font-serif text-center text-[12px]'>{testimonial.skills}</div>
          </div>
          </div>
        ))}

        <div className="bg-black border p-8  text-white flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4 text-center font-serif">Thank You!</h1>
          <p className="text-lg text-center">We appreciate your feedback</p>
        </div>
        
      </HTMLFlipBook>
    </div>
    </div>
  );
}