import React, { Component } from 'react';
import { Link } from "react-scroll";
import { Tab } from '@headlessui/react';
import { Transition } from '@headlessui/react';
import CarouselModal from './components/modals/Carousel';

function classNames(...classes) {

  return classes.filter(Boolean).join(' ');

}

const portfolio_screenshots = [
  require('./assets/img/portfolio/1.png').default,
  require('./assets/img/portfolio/2.png').default,
  require('./assets/img/portfolio/3.png').default,
  require('./assets/img/portfolio/4.png').default
];

class App extends Component {

  constructor(props) {

    super(props)
  
    this.state = {

      showCarousel: false
       
    }

  }

  componentDidMount = () => {

    const navbar = document.getElementById('navbar');

    const header = document.getElementById('header');

    const sectionOneObserver = new IntersectionObserver((entries, sectionOneObserver) => {

      entries.forEach(entry => {

          if(!entry.isIntersecting) {

            navbar.classList.add("bg-gray-900");

            navbar.classList.remove("bg-transparent");

          } else {

            navbar.classList.remove("bg-gray-900");

            navbar.classList.add("bg-transparent");

          }

      });

    }, {

        rootMargin: "-200px 0px 0px 0px"

    });

    sectionOneObserver.observe(header);

  }

  toggleCarouselModal = () => {

    this.setState({ showCarousel: !this.state.showCarousel })

  }
  
  render() {

    const { showCarousel } = this.state;

    return (

      <div className="bg-gray-100 min-h-screen flex flex-col relative">

        <div id="navbar" className="w-full bg-transparent py-4 z-20 fixed font-century">

          <div className="max-w-5xl mx-auto px-4 md:px-0 w-full flex justify-between items-center flex-row">

            <Link to="header" spy={true} smooth={true} offset={-10} duration={500}><h1 className="text-white font-bold text-2xl cursor-pointer">Kevin</h1></Link>

            <div className="flex flex-row gap-x-8">

              <Link to="about" spy={true} smooth={true} offset={-10} duration={500}><button className="text-white font-bold">About</button></Link>

              <Link to="skills" spy={true} smooth={true} offset={-10} duration={500}><button className="text-white font-bold" >Skills</button></Link>

              <Link to="portfolio" spy={true} smooth={true} offset={-10} duration={500}><button className="text-white font-bold" onClick={this.smoothScroll}>Portfolio</button></Link>

            </div>

          </div>

        </div>

        <section id="header" className="bg-gray-700 relative h-screen w-full flex flex-col justify-center items-center">

          <img className="w-full h-full object-cover" src={require('./assets/img/background.jpg').default} alt="Kevin Moturi" />

          <div className="absolute z-10 w-full h-screen bg-black bg-opacity-75 flex flex-col justify-center items-center gap-y-8">

            <h1 className="text-white capitalize text-6xl font-bold font-brush text-7xl">Kevin Moturi</h1>

            <p className="text-white capitalize text-3xl font-light font-century">Full Stack Software Developer</p>

            <Link to="about" spy={true} smooth={true} offset={-10} duration={500}><button className="bg-gray-900 py-3 px-12 text-md uppercase text-white rounded-full font-bold shadow-2xl font-century">See More</button></Link>

          </div>

        </section>

        <section id="about" className="bg-gray-200 relative min-h-screen w-full flex flex-col py-36 font-century">

          <div className="max-w-5xl mx-auto px-4 md:px-0 w-full">

            <div className="grid grid-cols-3 gap-x-10">

              <div>

                <img src={require('./assets/img/2.png').default} alt="Kevin Moturi" />

              </div>

              <div className="flex flex-col col-span-2 gap-y-8">

                <h1 className="text-gray-900 text-3xl font-bold uppercase">About Me</h1>

                <p className="text-gray-800 text-lg capitalize">I'm Kevin Moturi. I Am A Passionate, Scalable And Flexible Full Stack Software Developer With Key Interest In Javascript. I Am Able To Make Wide Range Of Applications For Web, Mobile And Desktop.</p>

                <p className="text-gray-800 text-lg capitalize">I Have A Strong Work Ethic And Go Beyond Expectations To Achieve Project Targets. I Am Also Continually Learning New Languages And Development Techniques For Career Advancement.</p>

                <div className="flex flex-row items-center justify-end py-5 gap-x-8">

                  <a href="mailto:moturikev@gmail.com" target="_blank" rel="noreferrer">

                    <img className="h-8" src={require('./assets/img/envelope.png').default} alt="envelope" />

                  </a>

                  <a href="https://www.linkedin.com/in/kevinmoturi/" target="_blank" rel="noreferrer">

                    <img className="h-8" src={require('./assets/img/linkedin.png').default} alt="linkedin" />

                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>

        <section id="skills" className="bg-gray-700 relative min-h-screen w-full flex flex-col py-36 font-century">

          <div className="max-w-5xl mx-auto px-4 md:px-0 w-full flex flex-col gap-y-14">

            <div className="flex flex-row items-center gap-x-10">

              <img className="h-14" src={require('./assets/img/xd.png').default} alt="Adobe XD" />

              <div className="flex-1 flex flex-col">

                <h1 className="text-xl font-bold text-white uppercase">UI/UX Design</h1>

                <p className="text-gray-300 text-lg capitalize">I Am A Highly Skilled In UI Prototyping To Enhance User Experience. I Use Adobe XD To Design Ui. An Example Of Website Is My Current Portfolio Website.</p>

              </div>

            </div>

            <div className="flex flex-row items-center gap-x-10">

              <img className="h-14" src={require('./assets/img/react.png').default} alt="React JS" />

              <div className="flex-1 flex flex-col">

                <h1 className="text-xl font-bold text-white uppercase">Frontend - React Js</h1>

                <p className="text-gray-300 text-lg capitalize">I Use React Because Its Fast, Simple And Scalable And Allows Me To Create Reusable UI Components And Its Easy To Integrate Other External Javascript Libraries</p>

              </div>

            </div>

            <div className="flex flex-row items-center gap-x-10">

              <img className="h-14" src={require('./assets/img/javascript.png').default} alt="JavaScript" />

              <div className="flex-1 flex flex-col">

                <h1 className="text-xl font-bold text-white uppercase">Backend Development - Node Js</h1>

                <p className="text-gray-300 text-lg capitalize">Node JS Has Enabled Me To Build Reat-Time Applications That Are Light Weight And Efficient.</p>

              </div>

            </div>

            <div className="flex flex-row items-center gap-x-10">

              <img className="h-14" src={require('./assets/img/react.png').default} alt="React JS" />

              <div className="flex-1 flex flex-col">

                <h1 className="text-xl font-bold text-white uppercase">Mobile Development - React Native</h1>

                <p className="text-gray-300 text-lg capitalize">I Use React Because Its Fast, Simple And Scalable And Allows Me To Create Reusable UI Components And Its Easy To Integrate Other External Javascript Libraries</p>

              </div>

            </div>

          </div>

        </section>

        <section id="portfolio" className="bg-gray-200 relative min-h-screen w-full flex flex-col py-36 font-century">

          <div className="max-w-5xl mx-auto px-4 md:px-0 w-full flex flex-col gap-y-14">

            <Tab.Group >

              <Tab.List className="flex flex-row justify-center items-center gap-x-5">

                <Tab key="UI" className={({ selected }) => classNames('text-lg font-extrabold uppercase', selected ? 'text-gray-500' : 'text-gray-900')}>UI/UX</Tab>

                <Tab key="Projects" className={({ selected }) => classNames('text-lg font-extrabold uppercase', selected ? 'text-gray-500' : 'text-gray-900')}>Projects</Tab>

                <Tab key="Web" className={({ selected }) => classNames('text-lg font-extrabold uppercase', selected ? 'text-gray-500' : 'text-gray-900')}>Web</Tab>

                <Tab key="Mobile" className={({ selected }) => classNames('text-lg font-extrabold uppercase', selected ? 'text-gray-500' : 'text-gray-900')}>Mobile</Tab>

                <Tab key="Desktop" className={({ selected }) => classNames('text-lg font-extrabold uppercase', selected ? 'text-gray-500' : 'text-gray-900')}>Desktop</Tab>

              </Tab.List>

              <Tab.Panels className="mt-2">

                <Tab.Panel key="UI" className={classNames('bg-transparent p-3 grid grid-cols-4 gap-5','focus:outline-none')}>

                  <div className="flex flex-col bg-white shadow-md cursor-pointer rounded-sm" onClick={() => this.toggleCarouselModal()}>

                    <img className="h-36 w-full object-cover" src={portfolio_screenshots[0]} alt="portfolio website" />

                    <div className="py-5 flex flex-col items-center justify-center">

                      <span className="text-xl uppercase text-center">My Portfolio</span>

                    </div>

                  </div>

                </Tab.Panel>

                <Tab.Panel key="Projects" className={classNames('bg-transparent p-3','focus:outline-none')}></Tab.Panel>

                <Tab.Panel key="Web" className={classNames('bg-transparent p-3','focus:outline-none')}></Tab.Panel>

                <Tab.Panel key="Mobile" className={classNames('bg-transparent p-3','focus:outline-none')}></Tab.Panel>

                <Tab.Panel key="Desktop" className={classNames('bg-transparent p-3','focus:outline-none')}></Tab.Panel>

              </Tab.Panels>

            </Tab.Group>

          </div>

          <div className="bg-gray-700 absolute bottom-0 py-3 w-full">

            <div className="max-w-5xl mx-auto px-4 md:px-0 w-full flex justify-between items-center flex-row">

              <a className="text-white capitalize text-lg font-bold" href="https://www.linkedin.com/in/kevinmoturi/">linkedin</a>

              <span className="text-white capitalize text-lg font-bold">Kevin Moturi &copy; {new Date().getFullYear()}</span>

            </div>

          </div>

        </section>

        <Transition 
                
          show={showCarousel}

          enter="ease-out duration-300"

          enterFrom="opacity-0"

          enterTo="opacity-100"

          leave="ease-in duration-200"

          leaveFrom="opacity-100"

          leaveTo="opacity-0"
                    
        >

          <CarouselModal toggle={this.toggleCarouselModal} sliders={portfolio_screenshots} />
        
        </Transition>
        
      </div>

    )

  }

};

export default App;

