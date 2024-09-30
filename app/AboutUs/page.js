import React from 'react';
import Adnan from '../Image/adnan.png'; 
import Image from 'next/image';
import Piyush from '../Image/piyush.jpg'; 
import Tiru from '../Image/tiru.jpg'; 
import Kunal from '../Image/kunal.jpg'; 
import Navbar from '../navbar';

export default function AboutUs() {
  return (
    <div className="relative min-h-screen bg-black flex flex-col justify-between">
      <Navbar />

      
      <div className="flex flex-col items-center justify-center w-full p-0"> 
        
        
        <header className="mb-8 flex justify-center items-center mt-0"> 
          <h1 className="text-xl font-bold uppercase tracking-widest" style={{ color: '#b388ff' }}>About Us</h1>
        </header>

        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8 w-full p-4">
          
          <a href="#" className="group relative block bg-black">
            <Image
              alt="Card image"
              src={Adnan}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest" style={{ color: '#b388ff' }}>Front End Developer</p>
              <p className="text-xl font-bold text-white sm:text-2xl">Adnan Dalal</p>
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm" style={{ color: '#b388ff' }}>
                    Do not search up for Obama's full name! Happy Quizzing
                  </p>
                </div>
              </div>
            </div>
          </a>


          <a href="#" className="group relative block bg-black">
            <Image
              alt="Card image"
              src={Piyush}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest" style={{ color: '#b388ff' }}>Blockchain Developer</p>
              <p className="text-xl font-bold text-white sm:text-2xl">Piyush Sharma</p>
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm" style={{ color: '#b388ff' }}>
                    SOMEONE FROM NAGPUR
                  </p>
                </div>
              </div>
            </div>
          </a>


          <a href="#" className="group relative block bg-black">
            <Image
              alt="Card image"
              src={Kunal}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest" style={{ color: '#b388ff' }}>Backend Developer</p>
              <p className="text-xl font-bold text-white sm:text-2xl">Kunal Pusdekar</p>
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm" style={{ color: '#b388ff' }}>
                    Born Developer
                  </p>
                </div>
              </div>
            </div>
          </a>


          <a href="#" className="group relative block bg-black">
            <Image
              alt="Card image"
              src={Tiru}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest" style={{ color: '#b388ff' }}>Full Stack Developer</p>
              <p className="text-xl font-bold text-white sm:text-2xl">Aayush Tirmanwar</p>
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm" style={{ color: '#b388ff' }}>
                    Likes to have poha for breakfast!
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>


      <footer className="flex justify-center items-center p-4">
        <p className="text-sm" style={{ color: '#b388ff' }}>
          © 2024 TechNomads. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
