import AI from './../assets/skills/artificial-intelligence.png';
import Programming from './../assets/skills/programming.png';
import UXUI from './../assets/skills/design.png';
import ThreeD from './../assets/skills/3d-modeling.png';
import GameDev from './../assets/skills/games.png';
import Data from './../assets/skills/data.png';
import Web from './../assets/skills/web.png';

import Blender from './../assets/skills/blender.png';
import Pytorch from './../assets/skills/pytorch.png';
import Tensorflow from './../assets/skills/tensorflow.png';
import Python from './../assets/skills/python.png';
import JavaScript from './../assets/skills/javascript.png';
import Unity from './../assets/skills/unity.png';
import Cplus from './../assets/skills/cplus.png';
import Matlab from './../assets/skills/matlab.png';
import Figma from './../assets/skills/figma.png';
import PLC from './../assets/skills/plc.png';
import SQL from './../assets/skills/sql.png';
import Fusion from './../assets/skills/fusion.png';
import XD from './../assets/skills/xd.png';
import Arduino from './../assets/skills/arduino.png';
import Sketchup from './../assets/skills/sketchup.png';
import Raspberry from './../assets/skills/raspberry_pi.png';
import Mongo from './../assets/skills/mongodb.png';
import Tableau from './../assets/skills/tableau.png';
// import Unreal from './../assets/skills/unreal.png';

import Thinking from './../assets/skills/thinking.png';
import Creative from './../assets/skills/creative.png';
import Adapt from './../assets/skills/adapt.png';
import Project from './../assets/skills/project.png';
import Problem from './../assets/skills/problem-solving.png';
import Team from './../assets/skills/team.png';

const Skills = () => {

  const skill_set = {
    "AI": ["Tensorflow", "Pytorch", "MATLAB", "Python"],
    "Programming": ["Python", "JavaScript", "MATLAB", "C", "SQL", "Unity", "Arduino", "Raspberry", "PLC"],
    "Design": ["Figma", "AdobeXD"],
    "3DModelling": ["Sketchup", "Autodesk", "Blender"],
    // "GameDev": ["Unity", "Unreal"],
    "GameDev": ["Unity"],
    "DataVis": ["SQL", "MongoDB", "Tableau"],
    // "DataVis": ["SQL", "MongoDB"],
    "Frontend": ["JavaScript", "AdobeXD", "Figma"],
    "Python": ["Programming", "AI"],
    "JavaScript": ["Programming", "Frontend"],
    "C": ["Programming"],
    "MATLAB": ["Programming", "AI"],
    "SQL": ["Programming", "DataVis"],
    "MongoDB": ["DataVis"],
    "Tableau": ["DataVis"],
    "Pytorch": ["AI"],
    "Tensorflow": ["AI"],
    "AdobeXD": ["Design", "Frontend"],
    "Figma": ["Design", "Frontend"],
    "Unity": ["GameDev", "Programming"],
    // "Unreal": ["GameDev", "Programming"],
    "Blender": ["3DModelling"],
    "Autodesk": ["3DModelling"],
    "Sketchup": ["3DModelling"],
    "Arduino": ["Programming"],
    "Raspberry": ["Programming"],
    "PLC": ["Programming"]
  };

  const handleMouseEnter = (e) => {
    e.target.classList.remove('bg-white');
    e.target.classList.add('bg-blue-900');
    e.target.classList.add('text-white');

    const id = e.target.id;
    const childrenId = skill_set[id];
    childrenId.map((child) => {
      document.getElementById(child).classList.remove('bg-white');
      document.getElementById(child).classList.add('bg-blue-900');
      document.getElementById(child).classList.add('text-white');
    });
  };

  const handleMouseLeave = (e) => {
    e.target.classList.add('bg-white');
    e.target.classList.remove('bg-blue-900');
    e.target.classList.remove('text-white');

    const id = e.target.id;
    const childrenId = skill_set[id];
    childrenId.map((child) => {
      document.getElementById(child).classList.add('bg-white');
      document.getElementById(child).classList.remove('bg-blue-900');
      document.getElementById(child).classList.remove('text-white');
    });
  }

  return (
    <section id='skills' className='w-full h-fit font-sans px-32 pb-6 animate-start max-md:px-16 max-sm:px-8'>
        <div className='w-full h-full items-center justify-center flex flex-col'>
          <div className='w-full bg-slate-700 h-px mb-16 max-sm:w-5/6'></div>
          <p className='text-4xl font-bold mb-20'>Skills</p>
          <div className='items-center justify-center flex flex-col space-y-16 text-lg max-sm:text-sm'>
            <div className='flex flex-wrap items-center justify-center'>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='AI' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={AI} className='size-6 object-cover'/>
                AI
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='Programming' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={Programming} className='size-6 object-cover'/>
                Programming
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='Design' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={UXUI} className='size-6 object-cover'/>
                UX/UI Design
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='3DModelling' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={ThreeD} className='size-6 object-cover'/>
                3D Modelling
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='GameDev' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={GameDev} className='size-6 object-cover'/>
                Game Development
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='DataVis' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={Data} className='size-6 object-cover'/>
                Data Visualization
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='Frontend' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={Web} className='size-6 object-cover'/>
                Frontend Development
              </div>
            </div>
            <div className='flex flex-wrap items-center justify-center max-sm:hidden'>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='Python' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={Python} className='size-6 object-cover'/>
                Python
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='JavaScript' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={JavaScript} className='size-6 object-cover'/>
                JavaScript
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='C' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={Cplus} className='size-6 object-cover'/>
                C/C++
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='MATLAB' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={Matlab} className='size-6 object-cover'/>
                MATLAB
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='SQL' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={SQL} className='size-6 object-cover'/>
                SQL
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='MongoDB' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={Mongo} className='size-6 object-cover'/>
                MongoDB
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='Tableau' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={Tableau} className='size-6 object-cover'/>
                Tableau
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='Pytorch' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={Pytorch} className='size-6 object-cover'/>
                Pytorch
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='Tensorflow' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={Tensorflow} className='size-6 object-cover'/>
                Tensorflow
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='AdobeXD' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={XD} className='size-6 object-cover'/>
                Adobe XD
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='Figma' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={Figma} className='size-6 object-cover'/>
                Figma
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='Unity' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={Unity} className='size-6 object-cover'/>
                Unity
              </div>
              {/* <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='Unreal' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>Unreal</div> */}
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='Blender' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={Blender} className='size-6 object-cover'/>
                Blender
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='Arduino' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={Arduino} className='size-6 object-cover'/>
                Arduino
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='Raspberry' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={Raspberry} className='size-6 object-cover'/>
                Raspberry Pi
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='PLC' className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium duration-300 select-none'>
                <img src={PLC} className='size-6 object-cover'/>
                Programmable Logic Controller
              </div>
            </div>
            <div className='flex flex-wrap items-center justify-center'>
              <div className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium hover:bg-blue-900 hover:text-white duration-300 select-none'>
                <img src={Project} className='size-6 object-cover'/>
                Project Management
              </div>
              <div className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium hover:bg-blue-900 hover:text-white duration-300 select-none'>
                <img src={Creative} className='size-6 object-cover'/>
                Creativity
              </div>
              <div className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium hover:bg-blue-900 hover:text-white duration-300 select-none'>
                <img src={Team} className='size-6 object-cover'/>
                Teamwork
              </div>
              <div className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium hover:bg-blue-900 hover:text-white duration-300 select-none'>
                <img src={Adapt} className='size-6 object-cover'/>
                Adaptability
              </div>
              <div className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium hover:bg-blue-900 hover:text-white duration-300 select-none'>
                <img src={Problem} className='size-6 object-cover'/>
                Problem-Solving
              </div>
              <div className='bg-white flex gap-x-2 items-center pt-2 pb-2 pl-4 pr-4 m-2 border-2 border-blue-900 font-medium hover:bg-blue-900 hover:text-white duration-300 select-none'>
                <img src={Thinking} className='size-6 object-cover'/>
                Critical Thinking
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills