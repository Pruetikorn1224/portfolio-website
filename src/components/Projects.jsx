import { useEffect, useState } from "react"

import AI from './../assets/skills/artificial-intelligence.png';
import Programming from './../assets/skills/programming.png';
import UXUI from './../assets/skills/design.png';
import ThreeD from './../assets/skills/3d-modeling.png';
import GameDev from './../assets/skills/games.png';
import Data from './../assets/skills/data.png';
import Web from './../assets/skills/web.png';

import FaceRec from './../assets/face_recognition.png';
import Anime from './../assets/anime.png';
import GamePosePy from './../assets/pose_estimation_game_python.png';
import Cashier from './../assets/automatic_cashier.jpg';
import LineFollow from './../assets/line_follower.jpg';
import AREconomy from './../assets/ar_economy.png';
import Rexchange from './../assets/rexchange.png';
import PABall from './../assets/PA-BALL-PAI.png';
import Wannago from './../assets/wannago.png'
import Cup from './../assets/cup_water.png';
import SkyIsland from './../assets/sky_island.png';
import Donuts from './../assets/donuts.png';
import Museum from './../assets/hololive_museum.png';
import GamePoseUnity from './../assets/pose_estimation_game_unity.png';
import Runner from './../assets/endless_runner.png';
import Passport from './../assets/passport_control.png';


const Projects = () => {

  const [tab, setTab] = useState('ai-projects');
  const [prevTab, setPreviousTab] = useState('ai-projects');

  useEffect(() => {
    if (tab !== prevTab) {

      document.getElementById(prevTab).classList.add('hidden');
      document.getElementById(tab).classList.remove('hidden');

      const tab_f = tab.split('-')[0];
      const prevtab_f = prevTab.split('-')[0];

      document.getElementById(prevtab_f).classList.remove('bg-blue-900');
      document.getElementById(prevtab_f).classList.remove('text-white');
      document.getElementById(tab_f).classList.add('bg-blue-900');
      document.getElementById(tab_f).classList.add('text-white');

      setPreviousTab(tab);
    }
  });


  return (
    <section id='projects' className='w-full h-fit font-sans px-32 pb-6 animate-start max-xl:h-fit max-md:px-16 max-sm:px-8'>
        <div className='w-full h-full items-center justify-center flex flex-col'>
          <div className='w-full bg-slate-700 h-px mb-16 max-sm:w-5/6'></div>
          <p className='text-4xl font-bold mb-20'>Projects</p>
          <div className='justify-center w-full h-auto flex flex-col'>
            {/* Tab List */}
            <ul className='flex list-none flex-row flex-wrap bg-white border-b-0 font-medium justify-center items-center text-lg max-xl:text-base'>
              <li 
                id="ai"
                className='flex cursor-pointer h-full py-2 flex-1 border-t border-blue-900 items-center justify-center duration-300 bg-blue-900 text-white hover:bg-blue-700 hover:text-white max-lg:border max-lg:rounded-t-lg'
                onClick={() => setTab('ai-projects')}
              >
                <img src={AI} alt="AI" className="lg:hidden size-8"/>
                <span className="max-lg:hidden">AI</span>
              </li>
              <li 
                id="programming"
                className='flex cursor-pointer h-full py-2 flex-1 border-t border-blue-900 items-center justify-center duration-300 hover:bg-blue-700 hover:text-white max-lg:border max-lg:rounded-t-lg'
                onClick={() => setTab('programming-projects')}
              >
                <img src={Programming} alt="Programming" className="lg:hidden size-8"/>
                <span className="max-lg:hidden">Programming</span>
              </li>
              <li 
                id="uxui"
                className='flex cursor-pointer h-full py-2 flex-1 border-t border-blue-900 items-center justify-center duration-300 hover:bg-blue-700 hover:text-white max-lg:border max-lg:rounded-t-lg'
                onClick={() => setTab('uxui-projects')}
              >
                <img src={UXUI} alt="UX/UI" className="lg:hidden size-8"/>
                <span className="max-lg:hidden">UX / UI</span>
              </li>
              <li 
                id="gamedev"
                className='flex cursor-pointer h-full py-2 flex-1 border-t border-blue-900 items-center justify-center duration-300 hover:bg-blue-700 hover:text-white max-lg:border max-lg:rounded-t-lg'
                onClick={() => setTab('gamedev-projects')}
              >
                <img src={GameDev} alt="Game Development" className="lg:hidden size-8"/>
                <span className="max-lg:hidden">Game Development</span>
              </li>
              <li 
                id="threeD"
                className='flex cursor-pointer h-full py-2 flex-1 border-t border-blue-900 items-center justify-center duration-300 hover:bg-blue-700 hover:text-white max-lg:border max-lg:rounded-t-lg'
                onClick={() => setTab('threeD-projects')}
              >
                <img src={ThreeD} alt="3D Modelling" className="lg:hidden size-8"/>
                <span className="max-lg:hidden">3D Modelling</span>
              </li>
            </ul>
            {/* Project List */}
            <div className='w-full h-[28rem] bg-white border border-blue-900 rounded-b-xl flex relative max-lg:h-56 max-md:h-screen'>
              {/* Artificial Intelligence */}
              <div id='ai-projects' className='gap-8 w-full h-full flex absolute p-4 items-center justify-center animate-fade max-md:flex-col'>
                <a className="w-full h-full border border-blue-900 rounded-xl flex-1 shadow-lg hover:shadow-blue-500 max-md:h-1/4" href="https://www.youtube.com/watch?v=R2DSdgRHJR8">
                  <img src={FaceRec} alt="3D Face Recognition" className="w-full h-2/3 object-cover rounded-xl max-xl:h-2/3"/>
                  <div className="p-4 max-sm:px-2 max-sm:py-4">
                    <span className="font-bold mb-4 max-lg:text-sm">3D Face Recognition</span>
                    <p className="text-blue-500 max-lg:hidden">Using depth camera to detect face with classification between real and photo</p>
                  </div>
                </a>
                <a className="w-full h-full border border-blue-900 rounded-xl flex-1 shadow-lg hover:shadow-blue-500 max-md:h-1/4" href="https://www.kaggle.com/code/pchirattitikarn/anime-exchange">
                  <img src={Anime} alt="Anime Recommendation" className="w-full h-2/3 object-cover rounded-xl max-xl:h-2/3"/>
                  <div className="p-4 max-sm:px-2 max-sm:py-4">
                    <span className="font-bold mb-4 max-lg:text-sm">Anime Recommendation</span>
                    <p className="text-blue-500 max-lg:hidden">A Recommendation model training with AI to cluster Anime</p>
                  </div>
                </a>
                <a className="w-full h-full border border-blue-900 rounded-xl flex-1 shadow-lg hover:shadow-blue-500 max-md:h-1/4" href="https://github.com/Pruetikorn1224/python-game-with-pose-estimation">
                  <img src={GamePosePy} alt="Pose Estimation Game (Python)" className="w-full h-2/3 object-cover rounded-xl max-xl:h-2/3"/>
                  <div className="p-4 max-sm:px-2 max-sm:py-4">
                    <span className="font-bold mb-4 max-lg:text-sm">Pose Estimation App (Python)</span>
                    <p className="text-blue-500 max-lg:hidden">A game that can control playable character by body movement</p>
                  </div>
                </a>
              </div>
              {/* Programming */}
              <div id='programming-projects' className='hidden gap-8 w-full h-full flex absolute p-4 items-center justify-center animate-fade  max-md:flex-col'>
                <a className="w-full h-full border border-blue-900 rounded-xl flex-1 shadow-lg hover:shadow-blue-500 max-md:h-1/4" href="https://www.linkedin.com/posts/ch-pruetikorn_project-activity-7019221156725411840-fYtP?utm_source=share&utm_medium=member_desktop">
                  <img src={LineFollow} alt="Line Following Arduino Car" className="w-full h-2/3 object-cover rounded-xl max-xl:h-2/3"/>
                  <div className="p-4 max-sm:px-2 max-sm:py-4">
                    <span className="font-bold mb-4 max-lg:text-sm">Line Following Arduino Car</span>
                    <p className="text-blue-500 max-lg:hidden">An Arduino car that receives virtual package through bluetooth and runs according to the line</p>
                  </div>
                </a>
                <a className="w-full h-full border border-blue-900 rounded-xl flex-1 shadow-lg hover:shadow-blue-500 max-md:h-1/4" href="https://drive.google.com/drive/folders/1kRkvsEQ1O3OI2lPIagGR8GDyEY5okxEA?usp=sharing">
                  <img src={AREconomy} alt="AR Economy" className="w-full h-2/3 object-cover rounded-xl max-xl:h-2/3"/>
                  <div className="p-4 max-sm:px-2 max-sm:py-4">
                    <span className="font-bold mb-4 max-lg:text-sm">AR Economy Presentation</span>
                    <p className="text-blue-500 max-lg:hidden">An AR application presenting economy theory for sufficiency</p>
                  </div>
                </a>
                <a className="w-full h-full border border-blue-900 rounded-xl flex-1 shadow-lg hover:shadow-blue-500 max-md:h-1/4" href="https://drive.google.com/file/d/1m8yoHlEwHwO8JXqMBn-01JKNILCMq6oK/view?usp=sharing">
                  <img src={Cashier} alt="Automatic Cashier" className="w-full h-2/3 object-cover rounded-xl max-xl:h-2/3"/>
                  <div className="p-4 max-sm:px-2 max-sm:py-4">
                    <span className="font-bold mb-4 max-lg:text-sm">Automatic Cashier</span>
                    <p className="text-blue-500 max-lg:hidden">A cashier that scans and sums up price automatically with object detection and PLC</p>
                  </div>
                </a>
              </div>
              {/* UX/UI Design */}
              <div id='uxui-projects' className='hidden gap-8 w-full h-full flex absolute p-4 items-center justify-center animate-fade  max-md:flex-col'>
              <a className="w-full h-full border border-blue-900 rounded-xl flex-1 shadow-lg hover:shadow-blue-500 max-md:h-1/4" href="https://www.figma.com/proto/Kb1P0CtEqEyA3M84iCr96y/Rexchange?page-id=0%3A1&type=design&node-id=38-1344&viewport=1009%2C190%2C0.14&t=TdHlK0jlq50OOA3g-1&scaling=scale-down&starting-point-node-id=38%3A1344&mode=design">
                  <img src={Rexchange} alt="Rexchange Mobile Application" className="w-full h-2/3 object-cover rounded-xl max-xl:h-2/3"/>
                  <div className="p-4 max-sm:px-2 max-sm:py-4">
                    <span className="font-bold mb-4 max-lg:text-sm">Rexchange App Design</span>
                    <p className="text-blue-500 max-lg:hidden">A streaming app combined with movie database, like IMDb + Netflix</p>
                  </div>
                </a>
                <a className="w-full h-full border border-blue-900 rounded-xl flex-1 shadow-lg hover:shadow-blue-500 max-md:h-1/4" href="https://www.canva.com/design/DAF82_LO7b4/NjxeP-wUQPQdK7oa1kJJOw/edit?utm_content=DAF82_LO7b4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                  <img src={PABall} alt="Pa-Ball-Pai Game" className="w-full h-2/3 object-cover rounded-xl max-xl:h-2/3"/>
                  <div className="p-4 max-sm:px-2 max-sm:py-4">
                    <span className="font-bold mb-4 max-lg:text-sm">Pa-Ball-Pai Game Design</span>
                    <p className="text-blue-500 max-lg:hidden">A game design with genres of action and puzzle</p>
                  </div>
                </a>
                <a className="w-full h-full border border-blue-900 rounded-xl flex-1 shadow-lg hover:shadow-blue-500 max-md:h-1/4" href="https://drive.google.com/file/d/1mi15Pir4dRzs831dV6_S-eiiwZR_Iyvb/view?usp=sharing">
                  <img src={Wannago} alt="Wannago Mobile Application" className="w-full h-2/3 object-cover rounded-xl max-xl:h-2/3"/>
                  <div className="p-4 max-sm:px-2 max-sm:py-4">
                    <span className="font-bold mb-4 max-lg:text-sm">Wannago App Design</span>
                    <p className="text-blue-500 max-lg:hidden">An application that record data of all shopping malls, including parking lots and restaurants</p>
                  </div>
                </a>
              </div>
              {/* Game Development */}
              <div id='gamedev-projects' className='hidden gap-8 w-full h-full flex absolute p-4 items-center justify-center animate-fade  max-md:flex-col'>
                <a className="w-full h-full border border-blue-900 rounded-xl flex-1 shadow-lg hover:shadow-blue-500 max-md:h-1/4" href="https://www.youtube.com/watch?v=6RZ9H4zcHLc">
                  <img src={Museum} alt="Hololive Museum" className="w-full h-2/3 object-cover rounded-xl max-xl:h-2/3"/>
                  <div className="p-4 max-sm:px-2 max-sm:py-4">
                    <span className="font-bold mb-4 max-lg:text-sm">Hololive Museum</span>
                    <p className="text-blue-500 max-lg:hidden">A virtual museum presenting information of Hololive's talents</p>
                  </div>
                </a>
                <a className="w-full h-full border border-blue-900 rounded-xl flex-1 shadow-lg hover:shadow-blue-500 max-md:h-1/4" href="https://play.unity.com/mg/other/city-run-v2">
                  <img src={Runner} alt="City Run: Endless Runner" className="w-full h-2/3 object-cover rounded-xl max-xl:h-2/3"/>
                  <div className="p-4 max-sm:px-2 max-sm:py-4">
                    <span className="font-bold mb-4 max-lg:text-sm">City Run: Endless Runner</span>
                    <p className="text-blue-500 max-lg:hidden">A demo game of endless runner type</p>
                  </div>
                </a>
                <a className="w-full h-full border border-blue-900 rounded-xl flex-1 shadow-lg hover:shadow-blue-500 max-md:h-1/4" href="https://github.com/jiwonhaha/VECW1.git">
                  <img src={Passport} alt="Ubiq Passport Control" className="w-full h-2/3 object-cover rounded-xl max-xl:h-2/3"/>
                  <div className="p-4 max-sm:px-2 max-sm:py-4">
                    <span className="font-bold mb-4 max-lg:text-sm">Ubiq Passport Control</span>
                    <p className="text-blue-500 max-lg:hidden">A VR simulation game for training passport inspector</p>
                  </div>
                </a>
                {/* <a className="w-full h-full border border-blue-900 rounded-xl flex-1 shadow-lg hover:shadow-blue-500 max-md:h-1/4" href="https://github.com/Pruetikorn1224/exercise_game_pose_estimation">
                  <img src={GamePoseUnity} alt="Pose Estimation Game (Unity)" className="w-full h-2/3 object-cover rounded-xl max-xl:h-2/3"/>
                  <div className="p-4 max-sm:px-2 max-sm:py-4">
                    <span className="font-bold mb-4 max-lg:text-sm">Exercise Game (Unity)</span>
                    <p className="text-blue-500 max-lg:hidden">A game that can control playable character by body movement</p>
                  </div>
                </a> */}
              </div>
              {/* 3D Modelling */}
              <div id='threeD-projects' className='hidden gap-8 w-full h-full flex absolute p-4 items-center justify-center animate-fade  max-md:flex-col'>
                <div className="w-full h-full border border-blue-900 rounded-xl flex-1 shadow-lg max-md:h-1/4">
                  <img src={Donuts} alt="Donuts" className="w-full h-full object-cover rounded-xl"/>
                </div>
                <div className="w-full h-full border border-blue-900 rounded-xl flex-1 shadow-lg max-md:h-1/4">
                  <img src={SkyIsland} alt="Sky Island" className="w-full h-full object-cover rounded-xl"/>
                </div>
                <div className="w-full h-full border border-blue-900 rounded-xl flex-1 shadow-lg max-md:h-1/4">
                  <img src={Cup} alt="Cup of Water" className="w-full h-full object-cover rounded-xl"/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Projects