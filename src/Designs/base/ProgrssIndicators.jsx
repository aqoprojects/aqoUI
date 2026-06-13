import React from 'react'
import { Tooltip4 } from './Tooltips'

const ProgressIndicators = () => {
    return (
        <div>
            <ProgressBar1 /> <br />
            <ProgressBar2 /> <br />
            <ProgressBar3 /> <br />
            <ProgressCircle1 /> <br />
            <ProgressCircle2 /> <br />
            <ProgressHalfCircle /> <br />
        </div>
    )
}

export default ProgressIndicators



// ── ProgressBar1 — simple bar ────────────────
// No text slots — showDefault added for API consistency only.
export function ProgressBar1({
    extra,
    divStyle,
    styles = {},
    progress = 40,
    children,
    showDefault = true,
    ...rootProps
}) {
    return (
        <div
            className={`bg-black/20 w-100 h-2.5 rounded-xl ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <div
                    className={`bg-purple-600 h-full rounded-xl transition-all duration-500 ${styles.fill ?? ''}`}
                    style={{ width: `${progress}%` }}
                />
            )}
        </div>
    );
}


// ── ProgressBar2 — bar + percentage label ────
export function ProgressBar2({
    extra,
    divStyle,
    styles = {},
    progress = 40,
    texts = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    // text1 is an independent slot — shows if passed or if showDefault=true
    const text1 = showDefault ? (texts.text1 ?? `${progress}%`) : texts.text1;

    return (
        <div
            className={`flex items-center-safe gap-3 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <div className={`bg-black/20 w-100 h-2.5 rounded-xl ${styles.track ?? ''}`}>
                        <div
                            className={`bg-purple-600 h-full rounded-xl transition-all duration-500 ${styles.fill ?? ''}`}
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    {text1 && (
                        <div>
                            <p className={`font-medium ${styles.text1 ?? ''}`}>{text1}</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}


// ── ProgressBar3 — bar + floating tooltip ────
// Tooltip4 is a peripheral decorator (binary on/off) — gated on showDefault.
// Customise its content and position via tooltipProps.
export function ProgressBar3({
    extra,
    divStyle,
    styles = {},
    progress = 40,
    texts = {},
    children,
    showDefault = true,
    tooltipProps = {},
    ...rootProps
}) {
    return (
        <div
            className={`flex items-center-safe gap-3 relative w-fit h-10 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {showDefault && (
                        <Tooltip4
                            texts={{ text1: texts.text1 ?? `${progress}%`, ...tooltipProps.texts }}
                            extra={`bg-white !text-black shadow-black shadow-sm/30 !px-3 !py-1 right-50 -top-7 ${tooltipProps.extra ?? ''}`}
                            {...tooltipProps}
                        />
                    )}
                    <div className={`bg-black/20 w-100 h-2.5 rounded-xl ${styles.track ?? ''}`}>
                        <div
                            className={`bg-purple-600 h-full rounded-xl transition-all duration-500 ${styles.fill ?? ''}`}
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </>
            )}
        </div>
    );
}


// ─────────────────────────────────────────────
// PROGRESS CIRCLES
// ─────────────────────────────────────────────

// ── ProgressCircle1 — full circle, rotated -90deg ──
export function ProgressCircle1({
    extra,
    divStyle,
    styles = {},
    progress = 70,
    texts = {},
    children,
    showDefault = true,
    svgProps = {},
    circleProps = {},
    ...rootProps
}) {
    const dashArray  = 283;
    const dashOffset = dashArray * (1 - progress / 100);
    // center text is an independent slot
    const text1 = showDefault ? (texts.text1 ?? `${progress}%`) : texts.text1;

    return (
        <div
            className={`relative w-32 h-32 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <svg
                        className={`w-full h-full rotate-[-90deg] ${styles.svg ?? ''}`}
                        {...svgProps}
                    >
                        {/* Track */}
                        <circle
                            cx="50%"
                            cy="50%"
                            r="45%"
                            stroke="currentColor"
                            strokeWidth="10"
                            className={`text-gray-300 fill-none ${styles.track ?? ''}`}
                        />
                        {/* Fill */}
                        <circle
                            cx="50%"
                            cy="50%"
                            r="45%"
                            stroke="currentColor"
                            strokeWidth="10"
                            strokeLinecap="round"
                            className={`text-blue-600 fill-none transition-all duration-500 ${styles.fill ?? ''}`}
                            strokeDasharray={dashArray}
                            strokeDashoffset={dashOffset}
                            {...circleProps}
                        />
                    </svg>
                    {text1 && (
                        <div className={`absolute inset-0 flex items-center justify-center text-xl font-semibold ${styles.centerText ?? ''}`}>
                            {text1}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}


// ── ProgressCircle2 — full circle, rotated -30deg ──
export function ProgressCircle2({
    extra,
    divStyle,
    styles = {},
    progress = 70,
    texts = {},
    children,
    showDefault = true,
    svgProps = {},
    circleProps = {},
    ...rootProps
}) {
    const dashArray  = 283;
    const dashOffset = dashArray * (1 - progress / 100);
    const text1 = showDefault ? (texts.text1 ?? `${progress}%`) : texts.text1;

    return (
        <div
            className={`relative w-32 h-32 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <svg
                        className={`w-full h-full rotate-[-30deg] ${styles.svg ?? ''}`}
                        {...svgProps}
                    >
                        {/* Track */}
                        <circle
                            cx="50%"
                            cy="50%"
                            r="45%"
                            stroke="currentColor"
                            strokeWidth="10"
                            className={`text-gray-300 fill-none ${styles.track ?? ''}`}
                        />
                        {/* Fill */}
                        <circle
                            cx="50%"
                            cy="50%"
                            r="45%"
                            stroke="currentColor"
                            strokeWidth="10"
                            strokeLinecap="round"
                            className={`text-blue-600 fill-none transition-all duration-500 ${styles.fill ?? ''}`}
                            strokeDasharray={dashArray}
                            strokeDashoffset={dashOffset}
                            {...circleProps}
                        />
                    </svg>
                    {text1 && (
                        <div className={`absolute inset-0 flex items-center justify-center text-xl font-semibold ${styles.centerText ?? ''}`}>
                            {text1}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}


// ── ProgressHalfCircle ────────────────────────
export function ProgressHalfCircle({
    extra,
    divStyle,
    styles = {},
    progress = 50,
    texts = {},
    children,
    showDefault = true,
    svgProps = {},
    ...rootProps
}) {
    const radius          = 45;
    const circumference   = 2 * Math.PI * radius;
    const halfCircumference = circumference / 2;
    const offset          = halfCircumference * (1 - progress / 100);

    // Both text slots are independent
    const text1 = showDefault ? (texts.text1 ?? 'Active users') : texts.text1;
    const text2 = showDefault ? (texts.text2 ?? `${progress}%`) : texts.text2;

    return (
        <div
            className={`relative w-52 h-36 overflow-hidden ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <svg
                        className={`w-full h-full ${styles.svg ?? ''}`}
                        viewBox="0 0 100 50"
                        {...svgProps}
                    >
                        {/* Track */}
                        <path
                            d="M5,50 A45,45 0 0,1 95,50"
                            stroke="currentColor"
                            strokeWidth="10"
                            className={`text-gray-300 fill-none ${styles.track ?? ''}`}
                            strokeLinecap="round"
                        />
                        {/* Fill */}
                        <path
                            d="M5,50 A45,45 0 0,1 95,50"
                            stroke="currentColor"
                            strokeWidth="10"
                            className={`text-blue-600 fill-none transition-all duration-500 ${styles.fill ?? ''}`}
                            strokeDasharray={halfCircumference}
                            strokeDashoffset={offset}
                            strokeLinecap="round"
                        />
                    </svg>

                    {(text1 || text2) && (
                        <div
                            className={`absolute inset-0 flex flex-col items-center text-xl font-semibold ${styles.centerText ?? ''}`}
                            style={{ top: '0', transform: 'translateY(50%)' }}
                        >
                            {text1 && (
                                <p className={`text-sm text-black/50 ${styles.text1 ?? ''}`}>{text1}</p>
                            )}
                            {text2 && (
                                <p className={`text-3xl ${styles.text2 ?? ''}`}>{text2}</p>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}





