import React from 'react'

const Tooltips = () => {
    return (
        <div>
            <Tooltip1 /> <br />
            <Tooltip2 /> <br />
            <Tooltip3 /> <br />
            <Tooltip4 /> <br />
            <Tooltip5 /> <br />
        </div>
    )
}

export default Tooltips



// ── Tooltip1 — interactive hover tooltip with position control
//
// Positions:
//   bottom (default) — tooltip appears below, arrow points up from tooltip top
//   top              — tooltip appears above, arrow points down from tooltip bottom
//   left             — tooltip appears to the left, arrow points right
//   right            — tooltip appears to the right, arrow points left
// ─────────────────────────────────────────────

const TOOLTIP_POSITIONS = {
    bottom: {
        wrapper: 'absolute hidden top-full left-1/2 -translate-x-1/2 mt-2 group-hover:block',
        arrow:   'absolute left-1/2 -top-1.5 -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45',
    },
    top: {
        wrapper: 'absolute hidden bottom-full left-1/2 -translate-x-1/2 mb-2 group-hover:block',
        arrow:   'absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45',
    },
    left: {
        wrapper: 'absolute hidden right-full top-1/2 -translate-y-1/2 mr-2 group-hover:block',
        arrow:   'absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-gray-900 rotate-45',
    },
    right: {
        wrapper: 'absolute hidden left-full top-1/2 -translate-y-1/2 ml-2 group-hover:block',
        arrow:   'absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-gray-900 rotate-45',
    },
};

// ── Tooltip1 — interactive hover tooltip with position control ──
//
// texts.text1  — trigger button label
// texts.text2  — tooltip popup content
// position     — 'bottom' (default) | 'top' | 'left' | 'right'
// triggerProps — spreads onto the trigger <button>
// children     — replaces only the tooltip popup (trigger always renders)
export function Tooltip1({
    extra,
    divStyle,
    texts = {},
    styles = {},
    position = 'bottom',
    children,
    showDefault = true,
    triggerProps = {},
    ...rootProps
}) {
    const pos     = TOOLTIP_POSITIONS[position] ?? TOOLTIP_POSITIONS.bottom;
    const trigger = showDefault ? (texts.text1 ?? 'Hover me') : texts.text1;
    const content = showDefault ? (texts.text2 ?? 'Tooltip')  : texts.text2;

    return (
        <div
            className={`relative group w-max ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {/* Trigger always renders — it IS the component */}
            <button
                className={`px-4 py-2 bg-blue-600 text-white rounded ${styles.trigger ?? ''}`}
                {...triggerProps}
            >
                {trigger}
            </button>

            {children || (
                content && (
                    <div className={pos.wrapper}>
                        <div className="relative bg-gray-900 text-white px-3 py-2 rounded">
                            {content}
                            <div className={pos.arrow} />
                        </div>
                    </div>
                )
            )}
        </div>
    );
}


// ── Tooltip2 — bubble with arrow (title only) ─
//
// texts.text1  — tooltip title
// styles.span1 — className override for the arrow div
// showDefault  — also controls arrow visibility (peripheral decorator)
export function Tooltip2({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'This is a tooltip') : texts.text1;

    return (
        <div
            className={`bg-black rounded-lg relative text-white w-fit px-4 py-2 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {text1 && (
                        <p className={`font-semibold mb-1 ${styles.text1 ?? ''}`}>{text1}</p>
                    )}
                    {showDefault && (
                        <div className={`absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45 ${styles.span1 ?? ''}`} />
                    )}
                </>
            )}
        </div>
    );
}


// ── Tooltip3 — bubble with title + body text + arrow ──
//
// texts.text1  — tooltip title (independent slot)
// texts.text2  — tooltip body text (independent slot)
// styles.span1 — className override for the arrow div
// showDefault  — also controls arrow visibility (peripheral decorator)
export function Tooltip3({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'This is a tooltip') : texts.text1;
    const text2 = showDefault
        ? (texts.text2 ?? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facilis totam, deleniti ducimus quisquam voluptatibus, voluptatem cumque a aliquam quae sunt, corporis quibusdam obcaecati? Modi, explicabo ipsum? Maiores, totam doloremque.')
        : texts.text2;

    return (
        <div
            className={`bg-black rounded-lg relative text-white w-130 p-4 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <div>
                        {text1 && (
                            <p className={`font-semibold mb-1 ${styles.text1 ?? ''}`}>{text1}</p>
                        )}
                        {text2 && (
                            <span className={`text-white/70 ${styles.text2 ?? ''}`}>{text2}</span>
                        )}
                    </div>
                    {showDefault && (
                        <div className={`absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45 ${styles.span1 ?? ''}`} />
                    )}
                </>
            )}
        </div>
    );
}


// ── Tooltip4 — minimal floating label (no arrow) ──
//
// texts.text1 — label text (single slot, always shown when passed)
export function Tooltip4({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'This is a tooltip') : texts.text1;

    return (
        <div
            className={`bg-black rounded-lg absolute text-white flex justify-center-safe items-center-safe w-fit ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                text1 && (
                    <p className={`font-semibold p-2 ${styles.text1 ?? ''}`}>{text1}</p>
                )
            )}
        </div>
    );
}


// ── Tooltip5 — bubble with title + body text + arrow ──
//
// texts.text1  — tooltip title (independent slot)
// texts.text2  — tooltip body text (independent slot)
// styles.span1 — className override for the arrow div
// showDefault  — also controls arrow visibility (peripheral decorator)
export function Tooltip5({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'This is a tooltip') : texts.text1;
    const text2 = showDefault
        ? (texts.text2 ?? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facilis totam, deleniti ducimus quisquam voluptatibus, voluptatem cumque a aliquam quae sunt, corporis quibusdam obcaecati? Modi, explicabo ipsum? Maiores, totam doloremque.')
        : texts.text2;
    const text3 = showDefault
        ? (texts.text3 ?? '12:09pm')
        : texts.text3;

    return (
        <div
            className={`bg-black rounded-lg relative text-white w-130 p-4 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <div>
                        {text1 && (
                            <p className={`font-semibold mb-1 ${styles.text1 ?? ''}`}>{text1}</p>
                        )}
                        {text2 && (
                            <p className={`text-white/70 ${styles.text2 ?? ''}`}>{text2}</p>
                        )}
                        {text3 && (
                            <p className={`text-white/70 ${styles.text3 ?? ''}`}>{text3}</p>
                        )}
                    </div>
                    {showDefault && (
                        <div className={`absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45 ${styles.span1 ?? ''}`} />
                    )}
                </>
            )}
        </div>
    );
}




