import React from 'react'
import { Avatar1 } from '../base/Avatars'
import { AppleButton1, AppleButton2, AppleButton3, AppStoreButton1, AppStoreButton2, Button1, FaceBookButton2, InstagramButton2, XButton2 } from '../base/Buttons'

const EmailTemplate = () => {
  return (
    <div className='bg-gray-400 h-300'>
        <EmailTemplateHeader1/> <br />
        <EmailTemplateHeader2/> <br />
        <EmailTemplateHeader3/> <br />
        <EmailTemplateFooter1/> <br />
        <EmailTemplateFooter2/> <br />
        <EmailTemplateFooter3/> <br />
        <EmailTemplateFooter4/> <br />
    </div>
  )
}

export default EmailTemplate


// THIS FILE IS IN-PORGRESS (completion awaited in aqoUI v1.0.1)


export function EmailTemplateHeader1(){
    return (
        <header className='flex gap-2 items-center-safe bg-white py-6 px-6'>
            <Avatar1 extra={'!w-10 !h-10'}/>
            <h1 className='font-bold text-2xl'>Untitled UI</h1>
        </header>
    )
}


export function EmailTemplateHeader2(){
    return (
        <header className='bg-white py-6 px-6 flex flex-col gap-6'>
           <div className='flex gap-2 items-center-safe'>
             <Avatar1 extra={'!w-10 !h-10'}/>
             <h1 className='font-bold text-2xl'>Untitled UI</h1>
           </div>

            <nav className='flex gap-4 font-semibold'>
                <p>Home</p>
                <p>Blog</p>
                <p>Tutorials</p>
                <p>Support</p>
            </nav>
        </header>
    )
}



export function EmailTemplateHeader3(){
    return (
        <header className='flex bg-white py-6 px-6'>
           <div className='flex gap-2 items-center-safe flex-1'>
             <Avatar1 extra={'!w-10 !h-10'}/>
             <h1 className='font-bold text-2xl'>Untitled UI</h1>
           </div>

            <nav className='flex gap-3 justify-center-safe items-center-safe'>
                <a href="" className='font-semibold text-lg'>Log in</a>
                <div className='flex  justify-center-safe items-center-safe gap-3'>
                    <XButton2 extra={'bg-transparent !ring-0 text-black !w-6 !h-6 !p-0'}/>
                    <FaceBookButton2 extra={'bg-transparent !ring-0 text-black !w-6 !h-6 !p-0'}/>
                    <InstagramButton2 extra={'bg-transparent !ring-0 text-black !w-6 !h-6 !p-0'}/>
                </div>
            </nav>
        </header>
    )
}



export function EmailTemplateFooter1(){
    return (
        <footer className='flex flex-col gap-15 bg-white py-6 px-6'>
            <div className='flex flex-col gap-5'>
                <p>This email was sent to <span className='underline text-purple-800'>Shola@unittile.com</span> if you'd rather not recieve this kind of email, you can <spa className='underline text-purple-800'n>unsubscribe</spa> or <span className='underline text-purple-800'>manag your email preferences.</span></p>
                <p> &copy; 2077 Untitled UI, 100 Smith Street, Melbourne VIC 3000</p>
            </div>

           <div className='flex'>
            <div className='flex gap-2 items-center-safe flex-1'>
              <Avatar1 extra={'!w-10 !h-10'}/>
              <h1 className='font-bold text-2xl'>Untitled UI</h1>
            </div>
            
             <nav className='flex gap-3 justify-center-safe items-center-safe'>
                 <a href="" className='font-semibold text-lg'>Log in</a>
                 <div className='flex  justify-center-safe items-center-safe gap-3'>
                     <XButton2 extra={'bg-transparent !ring-0 text-black !w-6 !h-6 !p-0'}/>
                     <FaceBookButton2 extra={'bg-transparent !ring-0 text-black !w-6 !h-6 !p-0'}/>
                     <InstagramButton2 extra={'bg-transparent !ring-0 text-black !w-6 !h-6 !p-0'}/>
                 </div>
             </nav>
           </div>
        </footer>
    )
}




export function EmailTemplateFooter2(){
    return (
        <footer className='flex flex-col gap-9 bg-white py-6 px-6'>
            <div className='flex'>
            
             <div className='w-full'>
                 <div className='flex  justify-center-safe items-center-safe gap-3'>
                     <XButton2 extra={'bg-transparent !ring-0 text-black/50 !w-6 !h-6 !p-0'}/>
                     <FaceBookButton2 extra={'bg-transparent !ring-0 text-black/50 !w-6 !h-6 !p-0'}/>
                     <InstagramButton2 extra={'bg-transparent !ring-0 text-black/50 !w-6 !h-6 !p-0'}/>
                 </div>
             </div>
           </div>

            <div className='flex flex-col gap-5 text-black/70 text-center'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur accusantium esse quos dignissimos explicabo aliquam ipsum eveniet delectus atque tempora a quas molestias <span className='underline text-purple-800'>unsubscirbe.</span></p>
                <p> &copy; 2077 Untitled UI, <br />
                <span>100 Smith Street, Melbourne VIC 3000</span> </p>
            </div>


        </footer>
    )
}



export function EmailTemplateFooter3(){
    return (
        <footer className='flex flex-col  bg-white py-6 px-6'>

            <div className='flex flex-col gap-9 text-black/50 text-center'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur accusantium esse quos dignissimos explicabo aliquam ipsum eveniet delectus <span className='underline text-purple-800'>unsubscirbe.</span></p>

                <div className='flex'>
            
             <div className='w-full'>
                 <div className='flex justify-center-safe items-center-safe gap-3 underline text-black/50'>
                     <a href="">Terms</a>
                     <a href="">Privacy</a>
                     <a href="">Cookies</a>
                     <a href="">Contact us</a>
                 </div>
             </div>
           </div>

                <p> &copy; 2077 Untitled UI, <br />
                <span>100 Smith Street, Melbourne VIC 3000</span> </p>
            </div>


        </footer>
    )
}




export function EmailTemplateFooter4(){
    return (
        <footer className='flex flex-col gap-15 bg-white py-6 px-6'>
            <div className='text-black/60'>
                <h2 className='font-bold text-xl'>Download the app</h2>
                <p>Get the most of Untitled by installing our new mobile app</p>

                <div className='mt-6 flex gap-4'>
                    <AppStoreButton1 childrenStyle={{icon1: '!w-7 !h-7', text1: '!text-xs', text2: '!text-xl'}} />
                    <AppStoreButton1 childrenStyle={{icon1: '!w-7 !h-7', text1: '!text-xs', text2: '!text-xl'}} />
                </div>
            </div>
            
            
            <div className='flex flex-col gap-5'>
                <p>This email was sent to <span className='underline text-purple-800'>Shola@unittile.com</span> if you'd rather not recieve this kind of email, you can <spa className='underline text-purple-800'n>unsubscribe</spa> or <span className='underline text-purple-800'>manag your email preferences.</span></p>
                <p> &copy; 2077 Untitled UI, 100 Smith Street, Melbourne VIC 3000</p>
            </div>

           <div className='flex'>
            <div className='flex gap-2 items-center-safe flex-1'>
              <Avatar1 extra={'!w-10 !h-10'}/>
              <h1 className='font-bold text-2xl'>Untitled UI</h1>
            </div>
            
             <div className='flex gap-3 justify-center-safe items-center-safe'>
                 <div className='flex  justify-center-safe items-center-safe gap-3 text-black/50'>
                     <XButton2 extra={'bg-transparent !ring-0 !w-6 !h-6 !p-0'}/>
                     <FaceBookButton2 extra={'bg-transparent !ring-0 !w-6 !h-6 !p-0'}/>
                     <InstagramButton2 extra={'bg-transparent !ring-0 !w-6 !h-6 !p-0'}/>
                 </div>
             </div>
           </div>
        </footer>
    )
}
