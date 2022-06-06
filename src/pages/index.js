/** Frameworks */
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
/** Assets: Image */
import HomeBG from '@assets/images/illustration/bg-home.png';
import HomeDecor from '@assets/images/illustration/home-decor.png';
import DeskIllu from '@assets/images/illustration/illu.png';
import ExhaustIcon from '@assets/images/icons/exhaust.png';
import SpeedIcon from '@assets/images/icons/speed.png';
import AccesoriesIcon from '@assets/images/icons/accesories.png';
/** Icons */
import { BsChevronDoubleDown } from 'react-icons/bs';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
/** Libs */
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react';

/** VAR */
const sectionBItems = [
  {
    title: 'Who we are',
    subtitle: 'Technology Company',
    body: 'Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'What we do',
    subtitle: 'Professional Brand Management',
    body: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
  },
  {
    title: 'How we do',
    subtitle: 'Strategize, Design, Collaborate',
    body: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.'
  }
];
const sectionCItems = [
  {
    title: 'Dedication',
    body: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.'
  },
  {
    title: 'Intellectual Honesty',
    body: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.'
  },
  {
    title: 'Curiosity',
    body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.'
  }
];
const sectionDItems = [
  {
    icon: ExhaustIcon,
    title: 'Exhaust',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.'
  },
  {
    icon: SpeedIcon,
    title: 'Speed Improvement',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.'
  },
  {
    icon: AccesoriesIcon,
    title: 'Accesories',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.'
  },
]

export default function Home() {
  //local state
  const [sliderIndexB, sliderIndexBSet] = useState(0);
  const [sliderIndexC, sliderIndexCSet] = useState(0);

  // Keen slider section B
  const [refCallback, slider] = useKeenSlider(
    {
      slideChanged() {
        sliderIndexBSet(slider.current.track.details.rel);
      },
      loop: false,
      initial: 0,
      drag: false
    },
    []
  );

  // Keen slider section C
  const [refCallbackC, sliderC] = useKeenSlider(
    {
      slideChanged() {
        sliderIndexCSet(sliderC.current.track.details.rel);
      },
      loop: false,
      initial: 1,
      drag: false
    },
    []
  );

  return (
    <div>
      <Head>
        <title>Test | SEASALT</title>
        <meta name="description" content="Seasalt Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* SECTION A */}
        <section className='bg-white'>
          <div className='relative w-full h-[250px]'>
            <Image src={HomeBG} layout='fill' alt='bg' />
          </div>
          <div className='relative w-full h-[420px] -translate-y-16 flex items-center'>
            <Image src={HomeDecor} layout='fill' alt='bg' />
            {/* HEADING */}
            <div className='absolute px-7 flex flex-col gap-6'>
              <h1 className='text-4xl text-white font-semibold'>Discover <br />Your Wonder</h1>
              <p className='text-white max-w-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className='absolute w-full h-10 -bottom-[20px] flex justify-center'>
              <div className='rounded-full bg-white border-white text-black p-0 w-10 h-10 flex items-center justify-center shadow-lg cursor-pointer'>
                <BsChevronDoubleDown size={20} />
              </div>
            </div>
          </div>
        </section>
        {/* ========= END: SECTION A */}
        <div className='flex lg:flex-row flex-col gap-4 justify-between'>
          {/* SECTION B */}
          <section className='w-full lg:max-w-lg flex-auto px-7 pb-14'>
            {/* CONTENT */}
            <div ref={refCallback} className="keen-slider">
              {sectionBItems.map((item, i) => (
                <div key={i} className="keen-slider__slide flex flex-col gap-6">
                  <h3 className='text-[#029FE4] text-4xl font-semibold'>{item.title}</h3>
                  <div className='flex flex-col gap-2'>
                    <p className='text-lg'>{item.subtitle}</p>
                    <p className='text-sm text-[#777] leading-6'>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* INDICATOR */}
            <div className='flex justify-between items-center mt-14'>
              <p className='text-gray-400 font-semibold w-[66px] items-center flex justify-between'>
                <span className='text-black text-2xl'>{sliderIndexB + 1 > 9 ? sliderIndexB + 1 : `0${sliderIndexB + 1}`} </span>
                / {sectionBItems.length > 9 ? sectionBItems.length : `0${sectionBItems.length}`}
              </p>
              <div>
                <button onClick={() => slider.current.prev()} className={`btn rounded-none ${sliderIndexB === 0 ? 'bg-[#F1F1F1] hover:bg-[#F1F1F1] focus:bg-[#F1F1F1] text-[#B6B6B6]' : 'bg-[#1BA0E1] hover:bg-[#1BA0E1] focus:bg-[#1BA0E1]'} border-none`}>
                  <AiOutlineArrowLeft size={25} />
                </button>
                <button onClick={() => slider.current.next()} className={`btn rounded-none ${(sliderIndexB + 1) === sectionBItems.length ? 'bg-[#F1F1F1] hover:bg-[#F1F1F1] focus:bg-[#F1F1F1] text-[#B6B6B6]' : 'bg-[#1BA0E1] hover:bg-[#1BA0E1] focus:bg-[#1BA0E1]'} text-white border-none`}>
                  <AiOutlineArrowRight size={25} />
                </button>
              </div>
            </div>
          </section>
          {/* ========= END: SECTION B */}
          {/* SECTION C */}
          <section className='lg:max-w-2xl px-7 flex flex-auto flex-col gap-8 overflow-hidden'>
            <h3 className='text-4xl text-[#029FE4] font-semibold text-center'>Our Core Values</h3>
            <p className='text-[#777] text-justify'>
              Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.
              <br /><br />
              In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.
            </p>
            <ul className='flex flex-col gap-6'>
              {sectionCItems.map((item, i) => (
                <div key={i} className='flex gap-4'>
                  <div className='h-8 w-6 flex items-center'>
                    <div className='w-6 h-[2px] bg-[#747474]' />
                  </div>
                  <li key={i} className='flex flex-col gap-3'>
                    <p className='text-2xl'>{item.title}</p>
                    <p className='text-[#777]'>{item.body}</p>
                  </li>
                </div>
              ))}
            </ul>
            <div className='h-[238px] w-full max-w-xs relative flex items-end justify-end translate-x-24'>
              <Image src={DeskIllu} alt='core-values' />
            </div>
          </section>
          {/* ========= END: SECTION C */}
        </div>
        {/* SECTION D */}
        <section className='bg-[#509FDD] px-7 py-9'>
          <div className='bg-white px-6 py-8 max-w-md mx-auto'>
            <div className='flex flex-col gap-4 text-sm'>
              <p className='text-[#029FE4] text-2xl font-semibold'>OUR SPECIALITY</p>
              <p className='text-[#303030] leading-6 font-light'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
              </p>
            </div>
            <div ref={refCallbackC} className="keen-slider mt-10">
              {sectionDItems.map((item, i) => (
                <div key={i} className='keen-slider__slide flex flex-col items-center gap-6'>
                  <Image src={item.icon} alt={item.title} width={120} height={120} />
                  <p className='text-sm text-[#303030]'>{item.title}</p>
                  <p className='text-center text-sm text-[#A7A7A7]'>{item.body}</p>
                </div>
              ))}
            </div>
            {/* INDICATOR */}
            <div className='flex justify-between items-center mt-10'>
              <button onClick={() => sliderC.current.prev()} className={`btn btn-link ${sliderIndexC === 0 ? 'text-gray-400' : 'text-[#3D46A2]'}`}>
                <AiOutlineArrowLeft size={25} />
              </button>
              <div className='flex gap-2'>
                {sectionDItems.map((_, ii) => <div key={ii} className={`w-2 h-2 ${sliderIndexC === ii ? 'border-2 border-[#3D46A2]' : 'bg-[#DAF3FC]'} rounded-full`} />)}
              </div>
              <button onClick={() => sliderC.current.next()} className={`btn btn-link ${sliderIndexC + 1 === sectionDItems.length ? 'text-gray-400' : 'text-[#3D46A2]'}`}>
                <AiOutlineArrowRight size={25} />
              </button>
            </div>
          </div>
        </section>
        {/* ========= END: SECTION D */}
      </main>
    </div>
  )
}
