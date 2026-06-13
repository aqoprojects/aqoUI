import React from 'react'
import { IoAddCircle, IoAlarm, IoSaveSharp } from 'react-icons/io5'
import { GoPlus } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";


const Avatars = () => {
  return (
    <div>
      <OnlineIndicator/> <br />
      <AvatarIcon/> <br />
      <AvatarAddButton/> <br />
      <Avatar1/> <br />
      <Avatar2/> <br />
      <Avatar3/> <br />
      <Avatar4/> <br />
      <Avatar5/> <br />
      <Avatar6/> <br />
      <AvatarProfilePicture1/> <br />
      <AvatarProfilePicture2/> <br />
      <AvatarProfilePicture3/> <br />
      <AvatarGroup/> <br />
      <AvatarLabelGroup1/> <br />
      <AvatarLabelGroup2/> <br />
    </div>
  )
}

export default Avatars



// ── OnlineIndicator ───────────────────────────
// Purely structural — no slots. showDefault added for consistency.
export function OnlineIndicator({
    extra,
    divStyle,
    showDefault = true,
    ...rootProps
}) {
    return (
        <div
            className={`w-5 h-5 bg-green-600 rounded-full ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        />
    );
}


// ── AvatarIcon ────────────────────────────────
export function AvatarIcon({
    extra,
    divStyle,
    icons = {},
    styles = {},
    showDefault = true,
    ...rootProps
}) {
    const Icon1 = showDefault ? (icons.icon1 ?? IoAddCircle) : icons.icon1;

    return (
        <div
            className={`w-5 h-5 rounded-full ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {Icon1 && <Icon1 className={`size-full ${styles.icon1 ?? ''}`} />}
        </div>
    );
}


// ── AvatarAddButton ───────────────────────────
export function AvatarAddButton({
    extra,
    divStyle,
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const Icon1 = showDefault ? (icons.icon1 ?? GoPlus) : icons.icon1;

    return (
        <button
            className={`w-12 h-12 rounded-full border-1 border-black border-dotted cursor-pointer ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (Icon1 && <Icon1 className={`size-full ${styles.icon1 ?? ''}`} />)}
        </button>
    );
}


// ── Avatar1 — image only ──────────────────────
export function Avatar1({
    extra,
    divStyle,
    images = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const image1 = showDefault ? (images.image1 ?? 'image.jpg') : images.image1;

    return (
        <div
            className={`w-12 h-12 rounded-full ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                image1 && (
                    <img
                        src={image1}
                        className={`size-full rounded-full ${styles.image1 ?? ''}`}
                        alt=""
                    />
                )
            )}
        </div>
    );
}


// ── Avatar2 — image + online indicator ────────
export function Avatar2({
    extra,
    divStyle,
    images = {},
    styles = {},
    children,
    showDefault = true,
    indicatorProps = {},
    ...rootProps
}) {
    const image1 = showDefault ? (images.image1 ?? 'image.jpg') : images.image1;

    return (
        <div
            className={`w-12 h-12 rounded-full relative ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {image1 && (
                        <img
                            src={image1}
                            className={`size-full rounded-full ${styles.image1 ?? ''}`}
                            alt=""
                        />
                    )}
                    {showDefault && (
                        <OnlineIndicator
                            extra={`!w-4 !h-4 absolute bottom-0 right-0 ring-2 ring-white ${styles.indicator ?? ''}`}
                            {...indicatorProps}
                        />
                    )}
                </>
            )}
        </div>
    );
}


// ── Avatar3 — icon only ───────────────────────
export function Avatar3({
    extra,
    divStyle,
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const Icon1 = showDefault ? (icons.icon1 ?? IoPersonOutline) : icons.icon1;

    return (
        <div
            className={`w-12 h-12 flex justify-center-safe items-center-safe rounded-full bg-black/10 p-2 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (Icon1 && <Icon1 className={`size-full ${styles.icon1 ?? ''}`} />)}
        </div>
    );
}


// ── Avatar4 — icon + online indicator ─────────
export function Avatar4({
    extra,
    divStyle,
    icons = {},
    styles = {},
    children,
    showDefault = true,
    indicatorProps = {},
    ...rootProps
}) {
    const Icon1 = showDefault ? (icons.icon1 ?? IoPersonOutline) : icons.icon1;

    return (
        <div
            className={`w-12 h-12 rounded-full bg-black/10 p-2 relative ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {Icon1 && <Icon1 className={`size-full ${styles.icon1 ?? ''}`} />}
                    {showDefault && (
                        <OnlineIndicator
                            extra={`!w-3 !h-3 absolute bottom-0 right-0 ring-2 ring-white ${styles.indicator ?? ''}`}
                            {...indicatorProps}
                        />
                    )}
                </>
            )}
        </div>
    );
}


// ── Avatar5 — initials only ───────────────────
export function Avatar5({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'OR') : texts.text1;

    return (
        <div
            className={`w-12 h-12 rounded-full bg-black/10 flex items-center-safe justify-center-safe p-1 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                text1 && <p className={`text-2xl font-semibold ${styles.text1 ?? ''}`}>{text1}</p>
            )}
        </div>
    );
}


// ── Avatar6 — initials + online indicator ─────
export function Avatar6({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    indicatorProps = {},
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'OR') : texts.text1;

    return (
        <div
            className={`w-12 h-12 rounded-full bg-black/10 flex items-center-safe justify-center-safe p-1 relative ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {text1 && (
                        <p className={`text-2xl font-semibold ${styles.text1 ?? ''}`}>{text1}</p>
                    )}
                    {showDefault && (
                        <OnlineIndicator
                            extra={`!w-3 !h-3 absolute bottom-0 right-0 ring-2 ring-white ${styles.indicator ?? ''}`}
                            {...indicatorProps}
                        />
                    )}
                </>
            )}
        </div>
    );
}


// ─────────────────────────────────────────────
// AVATAR PROFILE PICTURES
// ─────────────────────────────────────────────

// ── AvatarProfilePicture1 — image + ring + indicator ──
export function AvatarProfilePicture1({
    extra,
    divStyle,
    images = {},
    styles = {},
    children,
    showDefault = true,
    indicatorProps = {},
    ...rootProps
}) {
    const image1 = showDefault ? (images.image1 ?? 'image.jpg') : images.image1;

    return (
        <div
            className={`w-12 h-12 rounded-full relative ring-1 ring-black/20 ring-offset-4 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {image1 && (
                        <img
                            src={image1}
                            className={`size-full rounded-full ${styles.image1 ?? ''}`}
                            alt=""
                        />
                    )}
                    {showDefault && (
                        <OnlineIndicator
                            extra={`!w-4 !h-4 absolute bottom-0 right-0 ring-2 ring-white ${styles.indicator ?? ''}`}
                            {...indicatorProps}
                        />
                    )}
                </>
            )}
        </div>
    );
}


// ── AvatarProfilePicture2 — icon + ring + indicator ──
export function AvatarProfilePicture2({
    extra,
    divStyle,
    icons = {},
    styles = {},
    children,
    showDefault = true,
    indicatorProps = {},
    ...rootProps
}) {
    const Icon1 = showDefault ? (icons.icon1 ?? IoPersonOutline) : icons.icon1;

    return (
        <div
            className={`w-12 h-12 rounded-full bg-black/10 p-2 relative ring-1 ring-black/20 ring-offset-4 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {Icon1 && <Icon1 className={`size-full ${styles.icon1 ?? ''}`} />}
                    {showDefault && (
                        <OnlineIndicator
                            extra={`!w-3 !h-3 absolute bottom-0 right-0 ring-2 ring-white ${styles.indicator ?? ''}`}
                            {...indicatorProps}
                        />
                    )}
                </>
            )}
        </div>
    );
}


// ── AvatarProfilePicture3 — initials + ring + indicator ──
export function AvatarProfilePicture3({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    indicatorProps = {},
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'OR') : texts.text1;

    return (
        <div
            className={`w-12 h-12 rounded-full bg-black/10 flex items-center-safe justify-center-safe p-1 relative ring-1 ring-black/20 ring-offset-4 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {text1 && (
                        <p className={`text-2xl font-semibold ${styles.text1 ?? ''}`}>{text1}</p>
                    )}
                    {showDefault && (
                        <OnlineIndicator
                            extra={`!w-3 !h-3 absolute bottom-0 right-0 ring-2 ring-white ${styles.indicator ?? ''}`}
                            {...indicatorProps}
                        />
                    )}
                </>
            )}
        </div>
    );
}


// ─────────────────────────────────────────────
// AVATAR GROUP — wrapper component
// Uses corrected Avatar1/Avatar5; passes showDefault down.
// showAddButton controls AvatarAddButton independently of showDefault.
// ─────────────────────────────────────────────

const DEFAULT_AVATARS = [
    { type: 'image',    images: { image1: 'image.jpg' } },
    { type: 'image',    images: { image1: 'image.jpg' } },
    { type: 'image',    images: { image1: 'image.jpg' } },
    { type: 'image',    images: { image1: 'image.jpg' } },
    { type: 'initials', texts: { text1: '+5' }, extra: '!bg-gray-200' },
];

export function AvatarGroup({
    extra,
    divStyle,
    avatars,
    showAddButton = true,
    addButtonProps = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    // Wrapper rule: guard child rendering with (showDefault || !!explicitValue)
    const avatarList = showDefault ? (avatars ?? DEFAULT_AVATARS) : (avatars ?? []);

    return (
        <div
            className={`flex items-center-safe gap-3 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <div className="flex -space-x-5">
                        {avatarList.map((av, i) =>
                            av.type === 'initials'
                                ? <Avatar5
                                    key={i}
                                    extra={`ring-2 ring-white ${av.extra ?? ''}`}
                                    texts={av.texts}
                                    styles={av.styles}
                                    showDefault={showDefault}
                                  />
                                : <Avatar1
                                    key={i}
                                    extra={`ring-2 ring-white ${av.extra ?? ''}`}
                                    images={av.images}
                                    styles={av.styles}
                                    showDefault={showDefault}
                                  />
                        )}
                    </div>
                    {showAddButton && <AvatarAddButton showDefault={showDefault} {...addButtonProps} />}
                </>
            )}
        </div>
    );
}


// ─────────────────────────────────────────────
// AVATAR LABEL GROUPS — wrapper components
// Pass showDefault down to inner Avatar; resolve own text slots.
// ─────────────────────────────────────────────

// ── AvatarLabelGroup1 — Avatar1 + name/email ─
export function AvatarLabelGroup1({
    extra,
    divStyle,
    texts = {},
    styles = {},
    avatarProps = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Shola Adele')         : texts.text1;
    const text2 = showDefault ? (texts.text2 ?? 'Shola@untitled.com') : texts.text2;

    return (
        <div
            className={`flex items-center-safe gap-2 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <Avatar1 showDefault={showDefault} {...avatarProps} />
                    <div>
                        {text1 && <p className={styles.text1 ?? ''}>{text1}</p>}
                        {text2 && <p className={styles.text2 ?? ''}>{text2}</p>}
                    </div>
                </>
            )}
        </div>
    );
}


// ── AvatarLabelGroup2 — Avatar2 (with indicator) + name/email ──
export function AvatarLabelGroup2({
    extra,
    divStyle,
    texts = {},
    styles = {},
    avatarProps = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Shola Adele')         : texts.text1;
    const text2 = showDefault ? (texts.text2 ?? 'Shola@untitled.com') : texts.text2;

    return (
        <div
            className={`flex items-center-safe gap-2 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <Avatar2 showDefault={showDefault} {...avatarProps} />
                    <div>
                        {text1 && <p className={styles.text1 ?? ''}>{text1}</p>}
                        {text2 && <p className={styles.text2 ?? ''}>{text2}</p>}
                    </div>
                </>
            )}
        </div>
    );
}





// export function OnlineIndicator({extra}){
//     return (
//         <div className={`w-5 h-5 bg-green-600 rounded-full ${extra}`}>

//         </div>
//     )
// }

// export function AvatarIcon({extra, icon: Icon = IoAddCircle }){
//     return (
//         <div className={`w-5 h-5 rounded-full ${extra}`}>
//             <Icon className={`size-full`} />
//         </div>
//     )
// }

// export function AvatarAddButton({extra, icon: Icon = GoPlus  }){
//     return (
//         <button className={`w-12 h-12 rounded-full border-1 border-black border-dotted cursor-pointer ${extra}`}>
//             <Icon className={`size-full`} />
//         </button>
//     )
// }

// export function Avatar1({extra, image1 = 'image.jpg', childrenStyle = {}}){
//     return (
//         <div className={`w-12 h-12 rounded-full ${extra}`}>
//             <img src={image1} className={`size-full rounded-full ${childrenStyle.image1}`} />
//         </div>
//     )
// }

// export function Avatar2({extra, image1 = 'image.jpg', childrenStyle = {}}){
//     return (
//         <div className={`w-12 h-12 rounded-full relative ${extra}`}>
//             <img src={image1} className={`size-full rounded-full ${childrenStyle.image1}`} />
//             <OnlineIndicator extra={`!w-4 !h-4 absolute bottom-0 right-0 ring-2 ring-white`}/>
//         </div>
//     )
// }


// export function Avatar3({extra, icon: Icon1 = IoPersonOutline, childrenStyle = {}}){
//     return (
//         <div className={`w-12 h-12 flex justify-center-safe items-center-safe rounded-full bg-black/10 p-2 ${extra}`}>
//             <Icon1 className={`size-full ${childrenStyle.icon1}`}/>
//         </div>
//     )
// }

// export function Avatar4({extra, icon: Icon1 = IoPersonOutline, childrenStyle = {}}){
//     return (
//         <div className={`w-12 h-12 rounded-full bg-black/10 p-2 relative ${extra}`}>
//             <Icon1 className={`size-full ${childrenStyle.icon1}`}/>
//              <OnlineIndicator extra={`!w-3 !h-3 absolute bottom-0 right-0 ring-2 ring-white`}/>
//         </div>
//     )
// }


// export function Avatar5({extra, textValue, childrenStyle = {}}){
//     return (
//         <div className={`w-12 h-12 rounded-full bg-black/10 flex items-center-safe justify-center-safe p-1 ${extra}`}>
//             <p className={`text-2xl font-semibold ${childrenStyle.text1}`}>{textValue || 'OR'}</p>
//         </div>
//     )
// }

// export function Avatar6({extra, textValue, childrenStyle = {}}){
//     return (
//         <div className={`w-12 h-12 rounded-full bg-black/10 flex items-center-safe justify-center-safe p-1 relative ${extra}`}>
//             <p className={`text-2xl font-semibold ${childrenStyle.text1}`}>{textValue || 'OR'}</p>
            
//              <OnlineIndicator extra={`!w-3 !h-3 absolute bottom-0 right-0 ring-2 ring-white`}/>
//         </div>
//     )
// }


// export function AvatarProfilePicture1({extra, image1 = 'image.jpg', childrenStyle = {}}){
//     return (
//         <div className={`w-12 h-12 rounded-full relative ring-1 ring-black/20 ring-offset-4 ${extra}`}>
//             <img src={image1} className={`size-full  rounded-full ${childrenStyle.image1}`} />
//             <OnlineIndicator extra={`!w-4 !h-4 absolute bottom-0 right-0 ring-2 ring-white`}/>
//         </div>
//     )
// }


// export function AvatarProfilePicture2({extra, icon: Icon1 = IoPersonOutline, childrenStyle = {}}){
//     return (
//         <div className={`w-12 h-12 rounded-full bg-black/10 p-2 relative ring-1 ring-black/20 ring-offset-4 ${extra}`}>
//             <Icon1 className={`size-full  ${childrenStyle.icon1}`}/>
//              <OnlineIndicator extra={`!w-3 !h-3 absolute bottom-0 right-0 ring-2 ring-white`}/>
//         </div>
//     )
// }

// export function AvatarProfilePicture3({extra, textValue, childrenStyle = {}}){
//     return (
//         <div className={`w-12 h-12 rounded-full bg-black/10 flex items-center-safe justify-center-safe p-1 relative ring-1 ring-black/20 ring-offset-4  ${extra}`}>
//             <p className={`text-2xl font-semibold ${childrenStyle.text1}`}>{textValue || 'OR'}</p>
            
//              <OnlineIndicator extra={`!w-3 !h-3 absolute bottom-0 right-0 ring-2 ring-white`}/>
//         </div>
//     )
// }


// export function AvatarGroup({extra, image ,icon: Icon = '' }){
//     return (
//         <div className='flex  items-center-safe gap-3'>
//    <div className='flex -space-x-5'>
//     <Avatar1 image={'image.jpg'} extra={'ring-2 ring-white'}/>
//     <Avatar1 image={'image.jpg'} extra={'ring-2 ring-white'}/>
//     <Avatar1 icon={IoAlarm} extra={'ring-2 ring-white'}/>
//     <Avatar1 extra={'ring-2 ring-white'}/>
//     <Avatar1 extra={'ring-2 ring-white'}/>
//     <Avatar5 extra={'ring-2 ring-white !bg-gray-200'} textValue={'+5'}/>
//    </div>
//    <div>
//     <AvatarAddButton/>
//    </div>
//    </div>
//     )
// }


// export function AvatarLabelGroup1({extra, textValue1, textValur2, childrenStyle={}}){
//     return (
//         <div className={`flex items-center-safe gap-2 ${extra}`}>
//             <Avatar1/>

//             <div>
//                 <p className={`${childrenStyle.text1}`}>{textValue1 || 'Shola Adele'}</p>
//                 <p className={`${childrenStyle.text2}`}>{textValur2 || 'Shola@untitled.com'}</p>
//             </div>
//         </div>
//     )
// }



// export function AvatarLabelGroup2({extra, textValue1, textValur2, childrenStyle={}}){
//     return (
//         <div className={`flex items-center-safe gap-2 ${extra}`}>
//             <Avatar2/>

//             <div>
//                 <p className={`${childrenStyle.text1}`}>{textValue1 || 'Shola Adele'}</p>
//                 <p className={`${childrenStyle.text2}`}>{textValur2 || 'Shola@untitled.com'}</p>
//             </div>
//         </div>
//     )
// }


















// export function Avatar2({extra, image ,icon: Icon = '', textValue }){
//     return (
//     <div className={`w-15 h-15 rounded-full bg-black/10 flex justify-center-safe items-center-safe relative ring-1 ring-black/25 ${extra}`}>
//             {
//                image ? <img src={image} className={`size-full rounded-full `} /> : Icon ?  <Icon className={`size-full p-2`} /> : <p className='text-2xl font-bold'>{textValue || 'OR'}</p>
//             }
            
//             <OnlineIndicator extra={'!absolute bottom-0 right-0 !w-4 !h-4 ring-3 ring-white'} />
//         </div>
//     )
// }



