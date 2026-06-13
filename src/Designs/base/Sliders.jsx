import React, { useRef, useState } from 'react'
import { Tooltip1, Tooltip2, Tooltip3, Tooltip4 } from './Tooltips'

const Sliders = () => {
    return (
        <div>
            <ControlHandle1 /> <br />
            <ControlHandle2 /> <br /><br /><br />
            <ControlHandle3 /> <br /><br /><br />
            <ControlHandle4 /> <br /><br /><br />
            <ControlHandle5 /> <br /><br /><br />
            <ControlHandle6 /> <br /><br /><br />
            <DualThumbSlider/> <br />
        </div>
    )
}

export default Sliders


// ── ControlHandle1 — plain handle ────────────
export function ControlHandle1({
    extra,
    divStyle,
    styles = {},
    handleProps = {},
    showDefault = true,
    ...rootProps
}) {
    return (
        <div style={divStyle} {...rootProps}>
            <div
                className={`w-5 h-5 bg-white border-2 border-purple-600 rounded-full ${styles.handle ?? ''} ${extra ?? ''}`}
                {...handleProps}
            />
        </div>
    );
}


// ── ControlHandle2 — handle + focus ring ─────
export function ControlHandle2({
    extra,
    divStyle,
    styles = {},
    handleProps = {},
    showDefault = true,
    ...rootProps
}) {
    return (
        <div style={divStyle} {...rootProps}>
            <div
                className={`w-5 h-5 bg-white border-2 border-purple-600 rounded-full ring-1 ring-offset-2 ring-purple-600 ${styles.handle ?? ''} ${extra ?? ''}`}
                {...handleProps}
            />
        </div>
    );
}


// ── ControlHandle3 — tooltip above · handle ──
export function ControlHandle3({
    extra,
    divStyle,
    styles = {},
    texts = {},
    children,
    showDefault = true,
    tooltipProps = {},
    handleProps = {},
    ...rootProps
}) {
    // Tooltip shows when showDefault=true (with fallback)
    // OR when texts.text1 is explicitly passed (even if showDefault=false)
    const tooltipText   = showDefault ? (texts.text1 ?? '0%') : texts.text1;
    const showTooltip   = showDefault || !!texts.text1;

    return (
        <div
            className={`relative w-fit h-7 flex items-end-safe justify-center-safe ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {showTooltip && (
                        <Tooltip4
                            texts={{ text1: tooltipText, ...tooltipProps.texts }}
                            extra={`!bg-white !text-black shadow-md/30 shadow-black/80 !text-md !w-10 !h-9 bottom-7 ${tooltipProps.extra ?? ''}`}
                            {...tooltipProps}
                        />
                    )}
                    <div
                        className={`w-5 h-5 bg-white border-2 border-purple-600 rounded-full ${styles.handle ?? ''}`}
                        {...handleProps}
                    />
                </>
            )}
        </div>
    );
}


// ── ControlHandle4 — tooltip above · handle + ring ──
export function ControlHandle4({
    extra,
    divStyle,
    styles = {},
    texts = {},
    children,
    showDefault = true,
    tooltipProps = {},
    handleProps = {},
    ...rootProps
}) {
    const tooltipText = showDefault ? (texts.text1 ?? '0%') : texts.text1;
    const showTooltip = showDefault || !!texts.text1;

    return (
        <div
            className={`relative w-fit h-7 flex items-end-safe justify-center-safe ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {showTooltip && (
                        <Tooltip4
                            texts={{ text1: tooltipText, ...tooltipProps.texts }}
                            extra={`!bg-white !text-black shadow-md/30 shadow-black/80 !text-md !w-10 !h-9 bottom-7 ${tooltipProps.extra ?? ''}`}
                            {...tooltipProps}
                        />
                    )}
                    <div
                        className={`w-5 h-5 bg-white border-2 border-purple-600 rounded-full ring-1 ring-offset-2 ring-purple-600 ${styles.handle ?? ''}`}
                        {...handleProps}
                    />
                </>
            )}
        </div>
    );
}


// ── ControlHandle5 — handle · tooltip below ──
export function ControlHandle5({
    extra,
    divStyle,
    styles = {},
    texts = {},
    children,
    showDefault = true,
    tooltipProps = {},
    handleProps = {},
    ...rootProps
}) {
    const tooltipText = showDefault ? (texts.text1 ?? '0%') : texts.text1;
    const showTooltip = showDefault || !!texts.text1;

    return (
        <div
            className={`relative w-fit h-7 flex items-start-safe justify-center-safe ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <div
                        className={`w-5 h-5 bg-white border-2 border-purple-600 rounded-full ${styles.handle ?? ''}`}
                        {...handleProps}
                    />
                    {showTooltip && (
                        <Tooltip4
                            texts={{ text1: tooltipText, ...tooltipProps.texts }}
                            extra={`!bg-white !text-black !text-md !w-10 !h-9 top-7 ${tooltipProps.extra ?? ''}`}
                            {...tooltipProps}
                        />
                    )}
                </>
            )}
        </div>
    );
}


function ControlHandle6({ 
    extra,
    divStyle,
    styles = {},
    texts = {},
    children,
    showDefault = true,
    tooltipProps = {},
    handleProps = {},
    ...rootProps
 }) {
    const tooltipText = showDefault ? (texts.text1 ?? '0%') : texts.text1;
    const showTooltip = showDefault || !!texts.text1;
  return (
    <div className={`relative w-fit h-7 flex items-start justify-center${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
    >
     {children || (<>
     <div className={`w-5 h-5 bg-white border-2 border-purple-600 rounded-full ring-1 ring-offset-2 ring-purple-600 shadow-md ${styles.handle ?? ''}`} {...handleProps}
         />

      {showTooltip && (
                        <Tooltip4
                            texts={{ text1: tooltipText, ...tooltipProps.texts }}
                            extra={`!bg-white !text-black !text-md !w-10 !h-9 top-7 ${tooltipProps.extra ?? ''}`}
                            {...tooltipProps}
                        />
                    )}
    </>)}
    </div>
  );
}

export function DualThumbSlider({
    extra,
    divStyle,
    styles = {},
    texts = {},
    min = 0,
    max = 100,
    defaultMin = 20,
    defaultMax = 80,
    onMinChange,
    onMaxChange,
    onChange,
    thumbProps = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const [minValue, setMinValue] = useState(defaultMin);
    const [maxValue, setMaxValue] = useState(defaultMax);
    const trackRef = useRef(null);

    // unit is always structural (affects display of values, not a decorator)
    const unit = texts.unit ?? '';

    const getPercent = (value) => ((value - min) / (max - min)) * 100;

    const getValueFromPosition = (clientX) => {
        const rect = trackRef.current.getBoundingClientRect();
        const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        return Math.round(percent * (max - min) + min);
    };

    const startDrag = (type) => (e) => {
        e.preventDefault();

        const move = (event) => {
            const value = getValueFromPosition(event.clientX);
            if (type === 'min') {
                const next = Math.min(value, maxValue - 1);
                setMinValue(next);
                onMinChange?.(next);
                onChange?.({ min: next, max: maxValue });
            } else {
                const next = Math.max(value, minValue + 1);
                setMaxValue(next);
                onMaxChange?.(next);
                onChange?.({ min: minValue, max: next });
            }
        };

        const stop = () => {
            window.removeEventListener('pointermove', move);
            window.removeEventListener('pointerup', stop);
        };

        window.addEventListener('pointermove', move);
        window.addEventListener('pointerup', stop);
    };

    const minPercent = getPercent(minValue);
    const maxPercent = getPercent(maxValue);

    return (
        <div
            className={`w-full max-w-xl mx-auto mt-24 px-4 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <div
                    ref={trackRef}
                    className={`relative h-2 w-full rounded-full bg-gray-300 ${styles.track ?? ''}`}
                >
                    {/* Active range */}
                    <div
                        className={`absolute h-2 rounded-full bg-purple-500 ${styles.activeRange ?? ''}`}
                        style={{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }}
                    />

                    {/* Left (min) thumb */}
                    <div
                        style={{ left: `${minPercent}%` }}
                        className="absolute z-20 -top-1"
                        {...(thumbProps.left ?? {})}
                    >
                          <ControlHandle6 
                                texts={{text1: `${minValue}  ${unit}`}}  
                                handleProps={{
                                    onPointerDown:  startDrag('min')
                                }}   
                            />
                    </div>

                    {/* Right (max) thumb */}
                    <div
                        style={{ left: `${maxPercent}%` }}
                        // onPointerDown={}
                        className="absolute z-30 -top-1"
                        {...(thumbProps.right ?? {})}
                    >
                        <ControlHandle6 
                            texts={{text1: `${maxValue}  ${unit}`}} 
                            handleProps={{
                                onPointerDown:  startDrag('max')
                            }}  
                        />
                    </div>
                </div>
            )}
        </div>
    );
}












// ─────────────────────────────────────────────
// DUAL THUMB SLIDER
// ─────────────────────────────────────────────

// // Private Thumb — internal only, not exported
// function Thumb({ value, unit = '', styles = {}, ...rootProps }) {
//     return (
//         <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2" {...rootProps}>
//             <div
//                 className={`absolute left-1/2 top-7 -translate-x-1/2 w-11 h-8 rounded-md bg-white shadow flex items-center justify-center text-sm font-medium ${styles.tooltip ?? ''}`}
//             >
//                 {value}{unit}
//             </div>
//             <div
//                 className={`w-5 h-5 rounded-full bg-white border-2 border-purple-600 shadow-lg cursor-grab active:cursor-grabbing ${styles.thumb ?? ''}`}
//             />
//         </div>
//     );
// }





// export function ControlHandle1({extra}) {
//     return (
//         <div>
//             <div className='w-5 h-5 bg-white border-2 border-purple-600 rounded-full'></div>
//         </div>
        
//     )
// }


// export function ControlHandle2({extra}) {
//     return (
//         <div>
//             <div className='w-5 h-5 bg-white border-2 border-purple-600 rounded-full ring-1 ring-offset-2 ring-purple-600'></div>
//         </div>
        
//     )
// }


// export function ControlHandle3({extra}) {
//     return (
//         <div className='relative w-fit h-7 flex items-end-safe justify-center-safe'>
//             <Tooltip4 extra={'!bg-white !text-black shadow-md/30 shadow-black/80 !text-md !w-10 !h-9 bottom-7 '} textValue1={'0%'}/>
//             <div className='w-5 h-5 bg-white border-2 border-purple-600 rounded-full '></div>
//         </div>
        
//     )
// }


// export function ControlHandle4({extra}) {
//     return (
//         <div className='relative w-fit h-7 flex items-end-safe justify-center-safe'>
//             <Tooltip4 extra={'!bg-white !text-black shadow-md/30 shadow-black/80 !text-md !w-10 !h-9 bottom-7 '} textValue1={'0%'}/>
//             <div className='w-5 h-5 bg-white border-2 border-purple-600 rounded-full ring-1 ring-offset-2 ring-purple-600'></div>
//         </div>
        
//     )
// }


// export function ControlHandle5({extra}) {
//     return (
//         <div className='relative w-fit h-7 flex items-start-safe justify-center-safe'>
//             <div className='w-5 h-5 bg-white border-2 border-purple-600 rounded-full '></div>
//             <Tooltip4 extra={'!bg-white !text-black !text-md !w-10 !h-9 top-7 '} textValue1={'0%'}/>
//         </div>
        
//     )
// }


// // function ControlHandle6({ value }) {
// //   return (
// //     <div className="relative w-fit h-7 flex items-start justify-center">
// //       <div className="w-5 h-5 bg-white border-2 border-purple-600 rounded-full ring-1 ring-offset-2 ring-purple-600 shadow-md" />

// //       {/* Tooltip */}
// //       <div className="absolute top-7 w-10 h-9 bg-white text-black text-md rounded-md flex items-center justify-center shadow">
// //         {value}%
// //       </div>
// //     </div>
// //   );
// // }

// function Thumb({ value }) {
//   return (
//     <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2">
//       {/* Tooltip */}
//       <div className="absolute left-1/2 top-7 -translate-x-1/2 w-11 h-8 rounded-md bg-white shadow flex items-center justify-center text-sm font-medium">
//         {value}
//       </div>

//       {/* Handle */}
//       <div className="w-5 h-5 rounded-full bg-white border-2 border-purple-600 shadow-lg cursor-grab active:cursor-grabbing" />
//     </div>
//   );
// }

// export  function DualThumbSlider() {
//   const MIN = 0;
//   const MAX = 100;

//   const [minValue, setMinValue] = useState(20);
//   const [maxValue, setMaxValue] = useState(80);

//   const trackRef = useRef(null);

//   // Convert value -> %
//   const getPercent = (value) => {
//     return ((value - MIN) / (MAX - MIN)) * 100;
//   };

//   // Convert mouse position -> value
//   const getValueFromPosition = (clientX) => {
//     const rect = trackRef.current.getBoundingClientRect();

//     let percent = (clientX - rect.left) / rect.width;

//     percent = Math.max(0, Math.min(1, percent));

//     return Math.round(percent * (MAX - MIN) + MIN);
//   };

//   const startDrag = (type) => (e) => {
//     e.preventDefault();

//     const move = (event) => {
//       const value = getValueFromPosition(event.clientX);

//       if (type === "min") {
//         setMinValue(Math.min(value, maxValue - 1));
//       } else {
//         setMaxValue(Math.max(value, minValue + 1));
//       }
//     };

//     const stop = () => {
//       window.removeEventListener("pointermove", move);
//       window.removeEventListener("pointerup", stop);
//     };

//     window.addEventListener("pointermove", move);
//     window.addEventListener("pointerup", stop);
//   };

//   const minPercent = getPercent(minValue);
//   const maxPercent = getPercent(maxValue);

//   return (
//     <div className="w-full max-w-xl mx-auto mt-24 px-4">
//       <div
//         ref={trackRef}
//         className="relative h-2 w-full rounded-full bg-gray-300"
//       >
//         {/* Active range */}
//         <div
//           className="absolute h-2 rounded-full bg-purple-500"
//           style={{
//             left: `${minPercent}%`,
//             width: `${maxPercent - minPercent}%`,
//           }}
//         />

//         {/* Left thumb */}
//         <div
//           style={{ left: `${minPercent}%` }}
//           onPointerDown={startDrag("min")}
//           className="absolute z-20 top-1"
//         >
//           <Thumb value={minValue} />
//         </div>

//         {/* Right thumb */}
//         <div
//           style={{ left: `${maxPercent}%` }}
//           onPointerDown={startDrag("max")}
//           className="absolute z-30 top-1"
//         >
//           <Thumb value={maxValue} />
//         </div>
//       </div>
//     </div>
//   );
// }