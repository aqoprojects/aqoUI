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



