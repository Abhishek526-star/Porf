import React from 'react'
import Navbar from './Navbar'
import avatar from "../assets/avatar.webp"
import { service } from './data'

const About = () => {
    return (
        <div className='md:rounded-xl bg-gray-600 md:m-7 flex-1 p-7'>
            <Navbar />
            <div className='mt-7'>
                <h1 className='text-white font-bold text-3xl mb-2'>About Me</h1>
                <hr className='border-3 text-yellow-500 w-12 rounded-4xl' />
                <div className='mt-5 md:hidden'>
                    <img src={avatar} alt="Abhishek Kumar" className='bg-gray-700 rounded-2xl' />
                </div>
                <p className='mt-4 text-gray-300 text-xl font-semibold'>
                    Hi! I'm Abhishek Kumar, a B.Tech Computer Science and Engineering student at MMMUT, Gorakhpur (Batch 2023–2027) with a CGPA of 8.48. I'm a full-stack web developer with hands-on experience in the MERN stack, along with strong problem-solving skills in Data Structures and Algorithms.
                </p>
                <p className='mt-2 text-gray-300 text-xl font-semibold'>
                    I've built and contributed to several projects including a <strong>Quiz App</strong> (React.js, Tailwind),  I actively solve problems on Leetcode (120+), Codeforces, and CodeChef (500+ total problems).
                </p>
                <p className='mt-2 text-gray-300 text-xl font-semibold'>
                    I'm also a certified Postman API Fundamentals Student Expert and participated in the Vultr Cloud Innovate Hackathon 2024. I’m passionate about continuous learning and actively participate in the NSS. Let’s connect and innovate together!
                </p>

                {/* service section */}
                <h1 className='text-2xl text-white font-bold mt-7'>What I'm Doing</h1>
                <div className='grid md:grid-cols-2 gap-6 mt-7'>
                    {
                        service.map((item, index) => {
                            return <div className='bg-gray-700 border shadow p-5 text-white flex gap-5 items-start rounded-xl' key={index}>
                                <div className='text-6xl text-yellow-500'>
                                    {item.logo}
                                </div>
                                <div>
                                    <h1 className='font-bold text-2xl'>{item.title}</h1>
                                    <p className='text-xl text-gray-300'>{item.desc}</p>
                                </div>
                            </div>
                        })
                    }
                </div>

                
            </div>
        </div>
    )
}

export default About
