import React from 'react'
import Buttons from './Designs/base/Buttons'
import { FaRegCircle } from 'react-icons/fa6'
// import { ButtonGroupSidePlusArrow, ButtonGroupTextOnly, ButtonGroupTextWithIcon } from './Designs/base/ButtonGroup'
import Badges from './Designs/base/Badges'
import BadgeGroup from './Designs/base/BadgeGroup'
import Tags from './Designs/base/Tags'
import ButtonGroup from './Designs/base/ButtonGroup'
import Dropdown from './Designs/base/Dropdown'
import Inputs from './Designs/base/Inputs'
import Toggle from './Designs/base/Toggle'
import Checkbox from './Designs/base/Checkbox'
import Avatars from './Designs/base/Avatars'
import Tooltips, { Tooltip1 } from './Designs/base/Tooltips'
import ProgressIndicators from './Designs/base/ProgrssIndicators'
import Sliders from './Designs/base/Sliders'
import RadioGroup from './Designs/base/RadioGroup'


const Homepage = () => {
    return (
        <div className='m-5'>
            <div className=''>
                <h1 className='text-3xl font-bold'>Buttons</h1>
                <Buttons/>
            </div>

            <div className=''>
                <h1 className='text-3xl font-bold'>Button Groups</h1>
                <ButtonGroup/>
            </div>

            <div className=''>
                <h1 className='text-3xl font-bold'>Badges</h1>
              <Badges/>
            </div>

            <div className=''>
                <h1 className='text-3xl font-bold'>Badge Groups</h1>
                <BadgeGroup/>
            </div>


            <div className=''>
                <h1 className='text-3xl font-bold'>Tags</h1>
                <Tags/>
            </div>

            <div className=''>
                <h1 className='text-3xl font-bold'>Dropdowns</h1>
                <Dropdown/>
            </div>

            <div className=''>
                <h1 className='text-3xl font-bold'>Inputs</h1>
                <Inputs/>
            </div>

            <div className=''>
                <h1 className='text-3xl font-bold'>Toggle</h1>
                <Toggle/>
            </div>

            <div className=''>
                <h1 className='text-3xl font-bold'>Checkboxes</h1>
                <Checkbox/>
            </div>

            <div className=''>
                <h1 className='text-3xl font-bold'>Avatars</h1>
                <Avatars/>
            </div>

            <div className=''>
                <h1 className='text-3xl font-bold'>Tooltips</h1>
                <Tooltips/>
            </div>

            <div className=''>
                <h1 className='text-3xl font-bold'>Progesses</h1>
                <ProgressIndicators/>
            </div>

            <div className=''>
                <Sliders/>
            </div>

            <div className=''>
                <RadioGroup/>
            </div>
        </div>
    )
}





export default Homepage
