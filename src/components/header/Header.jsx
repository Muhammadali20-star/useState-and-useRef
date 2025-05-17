import React, {useRef, useState, useEffect} from 'react'
import { FaTrash } from "react-icons/fa";

const Header = () => {
  const fullNameRef = useRef(null) 
  const idRef = useRef(null)
  const emailRef = useRef(null)
  const phoneNumberRef = useRef(null)
  const passwordRef = useRef(null)
  const passwordComfirRef = useRef(null)
  const [text, SetText] = useState(JSON.parse(localStorage.getItem("text")) || [])
  
  useEffect(() => {
    localStorage.setItem("text", JSON.stringify(text))
  })

  const handlOnSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      FullName: fullNameRef.current.value,
      id: new Date().getTime(),
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      password: passwordRef.current.value,
      passwordComfir: passwordComfirRef.current.value
    }
    SetText([...text, newPerson])
    
  }

  const handleDelete = (id) => {
    SetText(text.filter((person) => person.id !== id))
  }
  return (
    <div className="w-full container max-w-[1550px] mx-auto bg-gradient-to-r from-[#38bdf8] via-[#2563eb] to-[#d946ef] pt-20">
       <div className='w-[600px] h-[600px] bg-white rounded-[15px]  mx-auto p-6 flex flex-col gap-4 mb-10'>
         <h1 className='text-black-600 font-bold'><span className='relative  font-bold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:rounded-[8px] after:bg-gradient-to-br after:from-blue-300 after:to-purple-500'>Re</span>gistration</h1>
        <form onSubmit={handlOnSubmit} className='grid grid-cols-2 gap-4 bg-black-200' action="">
          <div className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Full Name</h1>
          <input required ref={fullNameRef} className='border border-gray-300 p-2 rounded-[8px] ' type="text" placeholder='Enter your name' />
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Registered Id</h1>
          <input required ref={idRef} className='border border-gray-300 p-2 rounded-[8px] ' type="text" placeholder='Enter your id' />
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Email</h1>
          <input required ref={emailRef} className='border border-gray-300 p-2 rounded-[8px] ' type="email" placeholder='Enter your email' />
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Phone Number</h1>
          <input required ref={phoneNumberRef} className='border border-gray-300 p-2 rounded-[8px] ' type="number" placeholder='Enter your number' />
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Password</h1>
          <input required ref={passwordRef} className='border border-gray-300 p-2 rounded-[8px] ' type="password" placeholder='Enter your password' />
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Comfirm Password</h1>
          <input required ref={passwordComfirRef} className='border border-gray-300 p-2 rounded-[8px] ' type="password" placeholder='confirm your password' />
          </div>
        </form>
        <div className='flex flex-col gap-4 mb-6'>
          <h1 className='font-bold'>Gender</h1>
          <form className='flex gap-4' action="">
            <input type="radio" /> Male
            <input type="radio" /> Female
            <input type="radio" /> Prefer not to say
          </form>
        </div>
          <button onClick={handlOnSubmit} className='w-[90px] h-[30px] border px-4 rounded-[8px] bg-gradient-to-br from-blue-300 to-purple-500 text-white'>Register</button>
       </div>

       <div className='container mx-auto grid grid-cols-3 gap-4'>
             {
              text?.map((person) => (
                    <div key={person.id} className='h-[300px] w-[350px] bg-white p-4  rounded-[10px] flex flex-col gap-4 mb-10' style={{boxShadow: '0 4px 10px rgba(10, 1, 1, 0.5)'}}>
                      <img className='w-[100px] h-[100px] mx-auto' src="https://avatars.mds.yandex.net/i?id=b1a9186b677389bc008decb6ff94310c5f4cc60a-8482868-images-thumbs&n=13" alt="" />
                      <div className='flex flex-col'>
                      <p><span className='font-bold'>ID:</span> {person.id}</p>
                      <h3><span className='font-bold'>Full Name:</span> {person.FullName}</h3>
                      <p className='flex no-wrap gap-[2px]'><span className='font-bold'>Email:</span> {person.email}</p>
                      <p><span className='font-bold'>PhoneNumber:</span> {person.phoneNumber}</p>
                      <h6><span className='font-bold'>Password:</span> {person.password}</h6>
                      <h5> <span className='font-bold'>Comfirm Password:</span> {person.passwordComfir}</h5>
                      <button onClick={() => handleDelete(person.id)}><FaTrash /></button>
                      </div>
                    </div>
              ))
             }
        </div>
    </div>
  )
}

export default React.memo(Header)