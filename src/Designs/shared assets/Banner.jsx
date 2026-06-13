import React from 'react';
import { Badge3 } from '../base/Badges';
import { CiMail } from "react-icons/ci";
import { InputField1 } from '../base/Inputs';
import { Button1, Button5 } from '../base/Buttons';
import { RxCross2 } from "react-icons/rx";
import { MdOutlineVerified } from "react-icons/md";
import { Tag3, Tag4, Tag5, TagCount1 } from '../base/Tags';
import { DropdownLine2 } from '../base/Dropdown';


const Banner = () => {
  return (
    <div className='p-4 md:p-2'>
        <Banner1/> <br />
        <Banner2/> <br />
        <Banner3/> <br />
        <Banner4/> <br />
        <Banner5/> <br />
        
    </div>
  )
}

export default Banner


// THIS FILE IS IN-PORGRESS (completion awaited in aqoUI v1.0.1)



export function Banner1(){
    return (
        <div className='w-100 md:w-full bg-[#ecebeb] flex md:px-1.5 md:py-0.5 items-center-safe gap-4 flex-wrap md:flex-none p-3 rounded-xl'>
            
            <Badge3 icon={CiMail} extra={'hidden bg-white ring-1 ring-black/10 shadow-md/90 shadow-black/10 !w-10 h-9 flex justify-center-safe items-center-safe md:flex'} childrenStyle={{icon1: '!w-6 !h-6'}} />

            <div className='flex flex-1 items-baseline'>
            <div className='flex-1'>
                
                <p className='text-sm md:text-base font-bold'>Stay up to date with the latest news and update</p>
                <p className='text-sm md:text-base font-light text-black/70'>Be the first to hear about new components, updates, and design resources.</p>
            </div>

            <div className='block md:hidden '>
                <Button5 icon={RxCross2} extra={'bg-transparent !p-0'} childrenStyle={{icon1: 'text-black/50'}}/>
            </div>

            </div>


            <div className='flex md:justify-center-safe md:items-center-safe gap-1 md:gap-4 w-full md:w-auto flex-col md:flex-row'>
                <InputField1 default={false} extra={'bg-white !ring-2 w-full !ring-black/10  focus-within:!ring-black/10'} childrenStyle={{input1: 'pl-2 !w-full md:!w-60 '}} placeholder1={'Enter your email'} />
                <Button1 default={false} extra={'bg-white !text-black ring-2 ring-black/10 w-full items-center-safe justify-center-safe'} textValue={'Subscribe'}  />
            </div>

            <div className='hidden md:block'>
                <Button5 icon={RxCross2} extra={'bg-transparent'} childrenStyle={{icon1: 'text-black/50'}}/>
            </div>
    
        </div>
    )
}



export function Banner2(){
    return (
        <div className='w-100 md:w-full bg-[#ecebeb] flex md:p-1.5 items-center-safe gap-4 flex-wrap md:flex-none p-3 rounded-xl'>
            
            <div className='flex w-full md:w-fit items-center-safe justify-between'>
            <Badge3 icon={CiMail} extra={' bg-white ring-1 ring-black/10 shadow-md/90 shadow-black/10 !w-10 h-9 flex justify-center-safe items-center-safe '} childrenStyle={{icon1: '!w-6 !h-6'}} />

            <div className='block md:hidden '>
                <Button5 icon={RxCross2} extra={'bg-transparent !p-0'} childrenStyle={{icon1: 'text-black/50'}}/>
            </div>

            </div>
            <div className='md:flex md:gap-1 md:flex-1'>
                
                <p className='text-sm md:text-base font-bold'>Stay up to date with the latest news and update</p>
                <span className='text-sm md:text-base font-light text-black/70'>Be the first to hear about new components, updates, and design resources.</span>
            </div>




            <div className='flex md:justify-center-safe md:items-center-safe gap-1 md:gap-4 w-full md:w-auto flex-col md:flex-row'>
                <Button1 default={false} extra={'bg-white !text-black ring-2 ring-black/10 w-full items-center-safe justify-center-safe'} textValue={'Read Update'}  />
            </div>

            <div className='hidden md:block'>
                <Button5 icon={RxCross2} extra={'bg-transparent'} childrenStyle={{icon1: 'text-black/50'}}/>
            </div>
    
        </div>
    )
}



export function Banner3(){
    return (
        <div className='w-100 md:w-full bg-[#ecebeb] flex md:p-1.5 items-center-safe gap-4 flex-wrap md:flex-none p-3 rounded-xl'>
            
            <div className='flex w-full md:w-fit items-center-safe justify-between'>
            <Badge3 icon={MdOutlineVerified} extra={' bg-transparent flex justify-center-safe items-center-safe '} childrenStyle={{icon1: '!w-6 !h-6'}} />

            <div className='block md:hidden '>
                <Button5 icon={RxCross2} extra={'bg-transparent !p-0'} childrenStyle={{icon1: 'text-black/50'}}/>
            </div>

            </div>
            <div className='md:flex md:gap-1 md:flex-1'>
                
                <p className='text-sm md:text-base font-bold'>Stay up to date with the latest news and update</p>
                <span className='text-sm md:text-base font-light text-black/70'>Be the first to hear about new components, updates, and design resources.</span>
            </div>




            <div className='flex md:justify-center-safe md:items-center-safe gap-1 md:gap-4 w-full md:w-auto  md:flex-row flex-col-reverse'>
                <Button1 default={false} extra={'bg-white !text-black ring-2 ring-black/10 w-full items-center-safe justify-center-safe !py-1 !px-6'} textValue={'Decline'}  />
                <Button1 default={false} extra={'bg-purple-800 !text-white ring-2 ring-black/10 w-full items-center-safe justify-center-safe !py-1 !px-6'} textValue={'Allow'}  />
            </div>

            <div className='hidden md:block'>
                <Button5 icon={RxCross2} extra={'bg-transparent'} childrenStyle={{icon1: 'text-black/50'}}/>
            </div>
    
        </div>
    )
}




export function Banner4(){
    return (
        <div className='w-100 md:w-full bg-[#ecebeb] flex md:py-3 md:px-3 md:items-center-safe gap-2 p-3 rounded-xl'>
            <div className='md:flex md:gap-1 md:flex-1 justify-center-safe'>
                <p className='text-sm md:text-base font-bold'>Stay up to date with the latest news and update</p>
                <span className='text-sm md:text-base font-light text-black/70'>Be the first to hear about new components, updates, and design resources.</span>
            </div>
    
            <div className='block'>
                <Button5 icon={RxCross2} extra={'bg-transparent !p-0'} childrenStyle={{icon1: 'text-black/50'}}/>
            </div>
        </div>
    )
}




export function Banner5(){
    return (
        <div className='w-80 md:w-full bg-[#6941C6] flex md:py-3 md:px-3 md:items-center-safe gap-2 p-3 rounded-xl text-white justify-between'>
            <div className='md:flex md:gap-3 md:flex-1 justify-center-safe'>
                <p className='text-sm md:text-base font-bold'>30% off PRO ends soon</p>
                <DropdownLine2 extra={'bg-white/20 !h-auto '}/>
                <span className='text-sm md:text-base font-light text-white/70 '>Lock in your annual plan today.</span>

                <div className='flex gap-2 justify-center-safe items-center-safe mt-3 md:mt-0'>
                <TagCount1 textValue={8} extra={'bg-transparent ring-1 ring-white !px-1.5 py-0.5 flex item-center justify-center-safe'} childrenStyle={{text1: 'text-sm'}} /> 
                <span className='font-light text-white/70'>hrs</span>
                <TagCount1 textValue={16} extra={'bg-transparent ring-1 ring-white !px-1.5 py-0.5 flex item-center justify-center-safe'} childrenStyle={{text1: 'text-sm'}} /> 
                <span className='font-light text-white/70'>mins</span>
                <TagCount1 textValue={24} extra={'bg-transparent ring-1 ring-white !px-1.5 py-0.5 flex item-center justify-center-safe text-center'} childrenStyle={{text1: 'text-sm'}} />
                <span className='font-light text-white/70'>secs</span>
                </div>

            </div>
    
            <div className='block'>
                <Button5 icon={RxCross2} extra={'bg-transparent !p-0'} childrenStyle={{icon1: 'text-white/50'}}/>
            </div>
        </div>
    )
}




