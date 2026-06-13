
import React from 'react'
import { CiCircleMore } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";


const ButtonGroup = () => {
    return (
        <div>
            <ButtonGroup1 /> <br /> <br />
            <ButtonGroup2 /> <br /> <br />
            <ButtonGroup3 /> <br /> <br />
            <ButtonGroup4 /> <br /> <br />
            <ButtonGroup5 /> <br /> <br />
            <ButtonGroup6 /> <br /> <br />
            <ButtonGroup7 /> <br /> <br />
            <ButtonGroup8 /> <br /> <br />
            <ButtonGroup9 /> <br /> <br />
            <ButtonGroup10 /> <br /> <br />
            <ButtonGroup11 /> <br /> <br />
            <ButtonGroup12 /> <br /> <br />
            <ButtonGroup13 /> <br /> <br />
        </div>
    )
}

export default ButtonGroup



// ── ButtonGroup1 ─────────────────────────────
export function ButtonGroup1({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Text') : texts.text1;

    return (
        <button
            className={`${extra ?? ''} shadow-sm/50 shadow-black px-5 py-3.5`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                text1 && <p className={`${styles.text1 ?? ''} text-center`}>{text1}</p>
            )}
        </button>
    );
}

// ── ButtonGroup2 ─────────────────────────────
export function ButtonGroup2({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Text') : texts.text1;

    return (
        <button
            className={`${extra ?? ''} shadow-sm/50 shadow-black px-5 py-3.5 outline-[#9E77ED] outline-offset-3 outline-2`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                text1 && <p className={`${styles.text1 ?? ''} text-center`}>{text1}</p>
            )}
        </button>
    );
}

// ── ButtonGroup3 ─────────────────────────────
export function ButtonGroup3({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Text') : texts.text1;

    return (
        <button
            className={`${extra ?? ''} shadow-sm/50 shadow-black px-5 py-3.5 bg-[#FAFAFA] text-[#717680]`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                text1 && <p className={`${styles.text1 ?? ''} text-center`}>{text1}</p>
            )}
        </button>
    );
}

// ── ButtonGroup4 ─────────────────────────────
export function ButtonGroup4({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Text') : texts.text1;
    const Icon1 = showDefault ? (icons.icon1 ?? CiCircleMore) : icons.icon1;

    return (
        <button
            className={`${extra ?? ''} shadow-sm/50 shadow-black px-4 py-3.5 flex gap-2 items-center-safe justify-center-safe`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {Icon1 && (
                        <div className={`${styles.icon1 ?? ''} w-7 h-7`}>
                            <Icon1 className="size-full" />
                        </div>
                    )}
                    {text1 && <p className={`${styles.text1 ?? ''} text-center text-xl`}>{text1}</p>}
                </>
            )}
        </button>
    );
}

// ── ButtonGroup5 ─────────────────────────────
export function ButtonGroup5({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Text') : texts.text1;
    const Icon1 = showDefault ? (icons.icon1 ?? FaCircle) : icons.icon1;

    return (
        <button
            className={`${extra ?? ''} shadow-sm/50 shadow-black px-6 py-3.5 flex gap-2 items-center-safe justify-center-safe`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {Icon1 && (
                        <div className={`${styles.icon1 ?? ''} w-3 h-3`}>
                            <Icon1 className="size-full fill-green-600" />
                        </div>
                    )}
                    {text1 && <p className={`${styles.text1 ?? ''} text-center text-xl font-bold`}>{text1}</p>}
                </>
            )}
        </button>
    );
}

// ── ButtonGroup6 ─────────────────────────────
export function ButtonGroup6({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Text') : texts.text1;
    const Icon1 = showDefault ? (icons.icon1 ?? FaCircle) : icons.icon1;

    return (
        <button
            className={`${extra ?? ''} shadow-sm/50 shadow-black px-6 py-3.5 flex gap-2 items-center-safe justify-center-safe outline-[#9E77ED] outline-offset-4 outline-3`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {Icon1 && (
                        <div className={`${styles.icon1 ?? ''} w-3 h-3`}>
                            <Icon1 className="size-full fill-green-600" />
                        </div>
                    )}
                    {text1 && <p className={`${styles.text1 ?? ''} text-center text-xl font-bold`}>{text1}</p>}
                </>
            )}
        </button>
    );
}

// ── ButtonGroup7 ─────────────────────────────
export function ButtonGroup7({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Text') : texts.text1;
    const Icon1 = showDefault ? (icons.icon1 ?? FaCircle) : icons.icon1;

    return (
        <button
            className={`${extra ?? ''} shadow-sm/50 shadow-black px-6 py-3.5 flex gap-2 items-center-safe justify-center-safe bg-[#FAFAFA] text-[#D5D7DA]`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {Icon1 && (
                        <div className={`${styles.icon1 ?? ''} w-3 h-3`}>
                            <Icon1 className="size-full" />
                        </div>
                    )}
                    {text1 && <p className={`${styles.text1 ?? ''} text-center text-xl font-bold`}>{text1}</p>}
                </>
            )}
        </button>
    );
}

// ── ButtonGroup8 ─────────────────────────────
export function ButtonGroup8({
    extra,
    divStyle,
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const Icon1 = showDefault ? (icons.icon1 ?? CiCircleMore) : icons.icon1;

    return (
        <button
            className={`${extra ?? ''} shadow-sm/50 shadow-black px-3 py-2.5 flex gap-2 items-center-safe justify-center-safe`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                Icon1 && (
                    <div className={`${styles.icon1 ?? ''} w-9 h-9`}>
                        <Icon1 className="size-full fill-green-600" />
                    </div>
                )
            )}
        </button>
    );
}

// ── ButtonGroup9 ─────────────────────────────
export function ButtonGroup9({
    extra,
    divStyle,
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const Icon1 = showDefault ? (icons.icon1 ?? CiCircleMore) : icons.icon1;

    return (
        <button
            className={`${extra ?? ''} shadow-sm/50 shadow-black px-3 py-2.5 flex gap-2 items-center-safe justify-center-safe outline-[#9E77ED] outline-offset-4 outline-3`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                Icon1 && (
                    <div className={`${styles.icon1 ?? ''} w-9 h-9`}>
                        <Icon1 className="size-full fill-green-600" />
                    </div>
                )
            )}
        </button>
    );
}

// ── ButtonGroup10 ────────────────────────────
export function ButtonGroup10({
    extra,
    divStyle,
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const Icon1 = showDefault ? (icons.icon1 ?? CiCircleMore) : icons.icon1;

    return (
        <button
            className={`${extra ?? ''} shadow-sm/50 shadow-black px-3 py-2.5 flex gap-2 items-center-safe justify-center-safe bg-[#FAFAFA]`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                Icon1 && (
                    <div className={`${styles.icon1 ?? ''} w-9 h-9`}>
                        <Icon1 className="size-full fill-[#D5D7DA]" />
                    </div>
                )
            )}
        </button>
    );
}

// ─────────────────────────────────────────────
// WRAPPER COMPONENTS — ButtonGroup11 & ButtonGroup12
//
// buttons     — array of objects to override default button content
//               ButtonGroup11: [{ text }, ...]
//               ButtonGroup12: [{ text, icon: IconComponent }, ...]
// buttonProps — array of prop objects spread onto each <button> by index
//               e.g. buttonProps={[{ onClick: handleFirst }, {}, { onClick: handleThird }]}
// styles      — { text, icon1 } applied uniformly to all default buttons
// extra / divStyle / ...rootProps → spread onto the outer <div>
// ─────────────────────────────────────────────

const DEFAULT_BUTTONS_11 = [
    { text: 'Text' },
    { text: 'Text' },
    { text: 'Text' },
];

// ── ButtonGroup11 ────────────────────────────
export function ButtonGroup11({
    extra,
    divStyle,
    styles = {},
    children,
    buttons = DEFAULT_BUTTONS_11,
    buttonProps = [],
    ...rootProps
}) {
    const borderClass = (i, total) => {
        if (i === 0) return 'border-y-2 border-l-2';
        if (i === total - 1) return 'border-y-2 border-r-2';
        return 'border-2';
    };

    return (
        <div
            className={`${extra ?? ''} flex`}
            style={divStyle}
            {...rootProps}
        >
            {children || buttons.map((btn, i) => (
                <button
                    key={i}
                    className={`${borderClass(i, buttons.length)} border-black/20 px-5 py-3.5 first:rounded-l-xl last:rounded-r-xl`}
                    {...(buttonProps[i] ?? {})}
                >
                    {btn.text && <p className={`${styles.text ?? ''} text-center`}>{btn.text}</p>}
                </button>
            ))}
        </div>
    );
}

const DEFAULT_BUTTONS_12 = [
    { text: 'Text' },
    { text: 'Text' },
    { text: 'Text' },
];

// ── ButtonGroup12 ────────────────────────────
export function ButtonGroup12({
    extra,
    divStyle,
    styles = {},
    children,
    buttons = DEFAULT_BUTTONS_12,
    buttonProps = [],
    ...rootProps
}) {
    const borderClass = (i, total) => {
        if (i === 0) return 'border-y-2 border-l-2';
        if (i === total - 1) return 'border-y-2 border-r-2';
        return 'border-2';
    };

    return (
        <div
            className={`${extra ?? ''} flex`}
            style={divStyle}
            {...rootProps}
        >
            {children || buttons.map((btn, i) => {
                const Icon = btn.icon;  // Capitalized: Icon (component variable)
                return (
                    <button
                        key={i}
                        className={`${borderClass(i, buttons.length)} border-black/20 px-4 py-3.5 flex gap-2 items-center-safe justify-center-safe first:rounded-l-xl last:rounded-r-xl`}
                        {...(buttonProps[i] ?? {})}
                    >
                        {Icon && (
                            <div className={`${styles.icon1 ?? ''} w-7 h-7`}>
                                <Icon className="size-full" />
                            </div>
                        )}
                        {btn.text && <p className={`${styles.text ?? ''} text-center text-xl`}>{btn.text}</p>}
                    </button>
                );
            })}
        </div>
    );
}

// ── ButtonGroup13 ────────────────────────────
// Note: text appears BEFORE icon (reversed order vs ButtonGroup4)
export function ButtonGroup13({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Text') : texts.text1;
    const Icon1 = showDefault ? (icons.icon1 ?? CiCircleMore) : icons.icon1;

    return (
        <button
            className={`${extra ?? ''} shadow-sm/50 shadow-black px-4 py-3.5 flex gap-2 items-center-safe justify-center-safe outline-[#9E77ED] outline-offset-3 outline-2`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {text1 && <p className={`${styles.text1 ?? ''} text-center text-xl`}>{text1}</p>}
                    {Icon1 && (
                        <div className={`${styles.icon1 ?? ''} w-7 h-7`}>
                            <Icon1 className="size-full" />
                        </div>
                    )}
                </>
            )}
        </button>
    );
}



// export function ButtonGroup1({extra, textValue, childrenStyle = {}, children}) {
//     return (
//         <button className={`${extra} shadow-sm/50 shadow-black px-5 py-3.5`}>
//             {children || <p className={`${childrenStyle.text} text-center`}>{textValue || 'Text'}</p>}
//         </button>
//     )
// }

// export function ButtonGroup2({extra, textValue, childrenStyle = {}, children}) {
//     return (
//         <button className={`${extra} shadow-sm/50 shadow-black px-5 py-3.5 outline-[#9E77ED] outline-offset-3 outline-2`}>
//             {children || <p className={`${childrenStyle.text} text-center`}>{textValue || 'Text'}</p>}

//         </button>
//     )
// }


// export function ButtonGroup3({extra, textValue, childrenStyle = {}, children}) {
//     return (
//         <button className={`${extra} shadow-sm/50 shadow-black px-5 py-3.5 bg-[#FAFAFA] text-[#717680]`}>
//             {children || <p className={`${childrenStyle.text} text-center`}>{textValue || 'Text'}</p>}
//         </button>
//     )
// }



// export function ButtonGroup4({extra, textValue, childrenStyle = {}, children, icon: Icon1 = CiCircleMore}) {
//     return (
//         <button className={`${extra} shadow-sm/50 shadow-black px-4 py-3.5 flex gap-2 items-center-safe justify-center-safe`}>
//             {children ||
//                 <>
//                     <div className={`${childrenStyle.icon1} w-7 h-7`}>
//                         <Icon1 className='size-full' />
//                     </div>
//                     <p className={`${childrenStyle.text} text-center text-xl`}>{ textValue || 'Text'}</p>
//                 </>}

//         </button>


//     )
// }


// export function ButtonGroup5({extra, textValue, childrenStyle = {}, children, icon: Icon1 = FaCircle}) {
//     return (
//         <button className={`${extra} shadow-sm/50 shadow-black px-6 py-3.5 flex gap-2 items-center-safe justify-center-safe`}>
//             {children ||
//                 <>
//                     <div className={`${childrenStyle.icon1} w-3 h-3`}>
//                         <Icon1 className='size-full fill-green-600' />
//                     </div>
//                     <p className={`${childrenStyle.text} text-center text-xl font-bold`}>{textValue || 'Text'}</p>
//                 </>}

//         </button>


//     )
// }


// export function ButtonGroup6({extra, textValue, childrenStyle = {}, children, icon: Icon1 = FaCircle}) {
//     return (
//         <button className={`${extra} shadow-sm/50 shadow-black px-6 py-3.5 flex gap-2 items-center-safe justify-center-safe outline-[#9E77ED] outline-offset-4 outline-3`}>
//             {children ||
//                 <>
//                     <div className={`${childrenStyle.icon1} w-3 h-3`}>
//                         <Icon1 className='size-full fill-green-600' />
//                     </div>
//                     <p className={`${childrenStyle.text} text-center text-xl font-bold`}>{textValue || 'Text'}</p>
//                 </>}

//         </button>


//     )
// }



// export function ButtonGroup7({extra, textValue, childrenStyle = {}, children, icon: Icon1 = FaCircle}) {
//     return (
//         <button className={`${extra} shadow-sm/50 shadow-black px-6 py-3.5 flex gap-2 items-center-safe justify-center-safe bg-[#FAFAFA] text-[#D5D7DA]`}>
//             {children ||
//                 <>
//                     <div className={`${childrenStyle.icon1} w-3 h-3`}>
//                         <Icon1 className='size-full fill-[]' />
//                     </div>
//                     <p className={`${childrenStyle.text} text-center text-xl font-bold`}>{textValue || 'Text'}</p>
//                 </>}

//         </button>


//     )
// }



// export function ButtonGroup8({extra, childrenStyle = {}, children, icon: Icon1 = CiCircleMore}) {
//     return (
//         <button className={`${extra} shadow-sm/50 shadow-black px-3 py-2.5 flex gap-2 items-center-safe justify-center-safe`}>
//             {children ||
//                 <>
//                     <div className={`${childrenStyle.icon1} w-9 h-9`}>
//                         <Icon1 className='size-full fill-green-600' />
//                     </div>
//                 </>}

//         </button>


//     )
// }



// export function ButtonGroup9({extra, childrenStyle = {}, children, icon: Icon1 = CiCircleMore}) {
//     return (
//         <button className={`${extra} shadow-sm/50 shadow-black px-3 py-2.5 flex gap-2 items-center-safe justify-center-safe outline-[#9E77ED] outline-offset-4 outline-3`}>
//             {children ||
//                 <>
//                     <div className={`${childrenStyle.icon1} w-9 h-9`}>
//                         <Icon1 className='size-full fill-green-600' />
//                     </div>
//                 </>}

//         </button>


//     )
// }


// export function ButtonGroup10({extra, childrenStyle = {}, children, icon: Icon1 = CiCircleMore}) {
//     return (
//         <button className={`${extra} shadow-sm/50 shadow-black px-3 py-2.5 flex gap-2 items-center-safe justify-center-safe bg-[#FAFAFA]`}>
//             {children ||
//                 <>
//                     <div className={`${childrenStyle.icon1} w-9 h-9`}>
//                         <Icon1 className='size-full fill-[#D5D7DA]' />
//                     </div>
//                 </>}

//         </button>


//     )
// }



// export function ButtonGroup11(extra, children) {
//     return (
//         <div className={`${extra} flex `}>   {children || 
//         <>
//         <button className='border-y-2 border-l-2  border-black/20 px-5 py-3.5 first:rounded-l-xl last:rounded-r-xl'>
//          <p className='text-center'>Text</p>

//         </button>
//          <button className='border-2  border-black/20 px-5 py-3.5 first:rounded-l-xl last:rounded-r-xl'>
//          <p className='text-center'>Text</p>

//         </button>
//          <button className='border-y-2 border-r-2  border-black/20 px-5 py-3.5 first:rounded-l-xl last:rounded-r-xl'>
//          <p className='text-center'>Text</p>

//         </button>
//         </>
// }
//         </div >
//     )
// }


// export function ButtonGroup12(extra, children) {
//     return (
//        <div className={`${extra} flex `}>   {children || 
//         <>
//         <button className='px-4 py-3.5 flex gap-2 items-center-safe justify-center-safe first:rounded-l-xl last:rounded-r-xl border-y-2 border-l-2  border-black/20  '>
//           <div className='w-7 h-7'>
//                         <CiCircleMore className='size-full' />
//                     </div>
//                     <p className='text-center text-xl'>Text</p>

//         </button>
//          <button className='px-4 py-3.5 flex gap-2 items-center-safe justify-center-safe first:rounded-l-xl last:rounded-r-xl  border-2  border-black/20'>
//           <div className='w-7 h-7'>
//                         <CiCircleMore className='size-full' />
//                     </div>
//                     <p className='text-center text-xl'>Text</p>


//         </button>
//          <button className='px-4 py-3.5 flex gap-2 items-center-safe justify-center-safe first:rounded-l-xl last:rounded-r-xl border-y-2 border-r-2  border-black/20'>
//          <div className='w-7 h-7'>
//                         <CiCircleMore className='size-full' />
//                     </div>
//                     <p className='text-center text-xl'>Text</p>


//         </button>
//         </>
// }
//         </div >


//     )
// }




// export function ButtonGroup13({extra, textValue, childrenStyle = {}, children, icon: Icon1 = CiCircleMore}) {
//     return (
//         <button className={`${extra} shadow-sm/50 shadow-black px-4 py-3.5 flex gap-2 items-center-safe justify-center-safe outline-[#9E77ED] outline-offset-3 outline-2`}>
//             {children ||
//                 <>
//                     <p className={`${childrenStyle.text} text-center text-xl`}>{ textValue || 'Text'}</p>
//                     <div className={`${childrenStyle.icon1} w-7 h-7`}>
//                         <Icon1 className='size-full' />
//                     </div>
//                 </>}

//         </button>


//     )
// }


















// import { FaRegCircle } from 'react-icons/fa6';
// import { CustomBgBtnWithTextIcons, CustomBtnIconOnly } from './Buttons';
// import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi';
// import { BsPlus } from 'react-icons/bs';



// export function ButtonGroupTextOnly() {
//     return (
//         <div className='flex '>
//             <CustomBgBtnWithTextIcons extra={'bg-white rounded-none ring-1 ring-black/40 px-4 font-semibold text-black/70 rounded-l-md '}>
//                 <span>Text</span>
//             </CustomBgBtnWithTextIcons>
//             <CustomBgBtnWithTextIcons extra={'bg-white rounded-none ring-1 ring-black/40 px-4 font-semibold text-black/70 '}>
//                 <span>Text</span>
//             </CustomBgBtnWithTextIcons>
//             <CustomBgBtnWithTextIcons extra={'bg-white rounded-none ring-1 ring-black/40 px-4 font-semibold text-black/70  rounded-r-md'}>
//                 <span>Text</span>
//             </CustomBgBtnWithTextIcons>
//         </div>
//     )
// }


// export function ButtonGroupTextWithIcon() {
//     return (
//         <div className='flex '>
//             <CustomBgBtnWithTextIcons extra={'bg-white rounded-none ring-1 ring-black/40 px-4 font-semibold text-black/70 rounded-l-md '}>
//                 <FaRegCircle className="fill-black/70 n" />
//                 <span>Text</span>
//             </CustomBgBtnWithTextIcons>
//             <CustomBgBtnWithTextIcons extra={'bg-white rounded-none ring-1 ring-black/40 px-4 font-semibold text-black/70 '}>
//                 <FaRegCircle className="fill-black/70 n" />
//                 <span>Text</span>
//             </CustomBgBtnWithTextIcons>
//             <CustomBgBtnWithTextIcons extra={'bg-white rounded-none ring-1 ring-black/40 px-4 font-semibold text-black/70  rounded-r-md'}>
//                 <FaRegCircle className="fill-black/70 n" />
//                 <span>Text</span>
//             </CustomBgBtnWithTextIcons>
//         </div>
//     )
// }


// export function ButtonGroupSidePlusArrow() {
//     return (
//         <div className='flex '>
//             <CustomBtnIconOnly extra={'bg-white rounded-none ring-1 ring-black/40 px-4 font-semibold text-black/70 rounded-l-md '}>
//                 <BiArrowFromRight className="fill-black/70 size-5" />
//             </CustomBtnIconOnly>
//             <CustomBtnIconOnly extra={'bg-white rounded-none ring-1 ring-black/40 px-4 font-semibold text-black/70 '}>
//                 <BsPlus className="fill-black/70 size-5" />
//             </CustomBtnIconOnly>
//             <CustomBtnIconOnly extra={'bg-white rounded-none ring-1 ring-black/40 px-4 font-semibold text-black/70  rounded-r-md'}>
//                 <BiArrowFromLeft className="fill-black/70 size-5" />
//             </CustomBtnIconOnly>
//         </div>
//     )
// }

