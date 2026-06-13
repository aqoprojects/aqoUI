import React from 'react'
import { FaMinus } from 'react-icons/fa6'

const Checkbox = () => {
    return (
        <div>
            <CheckBox1 /> <br />
            <CheckBox2 /> <br />
            <CheckBox3 /> <br />
            <CheckBox4 /> <br />
            <CheckBox5 /> <br />
            <CheckBox6 /> <br />
            <CheckBox7 /> <br />
            <CheckBoxWithText1 /> <br />
        </div>
    )
}

export default Checkbox



// ── CheckBox1 — default checkbox (check icon) ─
export function CheckBox1({
    extra,
    divStyle,
    icons = {},
    styles = {},
    checkboxProps = {},
    labelProps = {},
    showDefault = true,
    ...rootProps
}) {
    // icons.icon1 is a pre-rendered JSX element, not a component class
    // showDefault=true → show default SVG if no icon1 passed
    // showDefault=false → show only if icons.icon1 explicitly passed
    const checkIcon = showDefault
        ? (icons.icon1 ?? (
            <svg
    className={`absolute inset-0 w-full h-full p-1 text-white hidden peer-checked:block ${styles.icon1 ?? ''}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
>
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M5 13l4 4L19 7"
    />
</svg>
        ))
        : icons.icon1;

    return (
        <div style={divStyle} {...rootProps}>
            <label className={`flex items-center w-fit space-x-2 cursor-pointer ${styles.label ?? ''}`} {...labelProps}>
                <div className="relative">
                    <input type="checkbox" className="sr-only peer" {...checkboxProps} />
                    <div className={`w-6 h-6 bg-white border-2 border-gray-400 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors ${styles.box ?? ''} ${extra ?? ''}`} />
                    {checkIcon}
                </div>
            </label>
        </div>
    );
}


// ── CheckBox2 — indeterminate / focused state ─
export function CheckBox2({
    extra,
    divStyle,
    icons = {},
    styles = {},
    checkboxProps = {},
    labelProps = {},
    showDefault = true,
    ...rootProps
}) {
    const checkIcon = showDefault
        ? (icons.icon1 ?? (
            <FaMinus className={`absolute inset-0 w-full h-full p-1 text-white hidden peer-checked:block ${styles.icon1 ?? ''}`} />
        ))
        : icons.icon1;

    return (
        <div style={divStyle} {...rootProps}>
            <label className={`flex items-center w-fit space-x-2 cursor-pointer ${styles.label ?? ''}`} {...labelProps}>
                <div className="relative">
                    <input type="checkbox" className="sr-only peer" {...checkboxProps} />
                    <div className={`w-6 h-6 bg-white border-2 border-gray-400 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors ring-2 ring-blue-600 ring-offset-2 ${styles.box ?? ''} ${extra ?? ''}`} />
                    {checkIcon}
                </div>
            </label>
        </div>
    );
}


// ── CheckBox3 — disabled unchecked ───────────
export function CheckBox3({
    extra,
    divStyle,
    icons = {},
    styles = {},
    checkboxProps = {},
    labelProps = {},
    showDefault = true,
    ...rootProps
}) {
    const checkIcon = showDefault
        ? (icons.icon1 ?? (
            <FaMinus className={`absolute inset-0 w-full h-full p-1 text-white hidden peer-checked:block ${styles.icon1 ?? ''}`} />
        ))
        : icons.icon1;

    return (
        <div style={divStyle} {...rootProps}>
            <label className={`flex items-center w-fit space-x-2 cursor-pointer ${styles.label ?? ''}`} {...labelProps}>
                <div className="relative">
                    <input type="checkbox" disabled className="sr-only peer" {...checkboxProps} />
                    <div className={`w-6 h-6 bg-black/7 border-2 border-gray-300 rounded-md ${styles.box ?? ''} ${extra ?? ''}`} />
                    {checkIcon}
                </div>
            </label>
        </div>
    );
}


// ── CheckBox4 — disabled checked (icon always visible) ──
export function CheckBox4({
    extra,
    divStyle,
    icons = {},
    styles = {},
    checkboxProps = {},
    labelProps = {},
    showDefault = true,
    ...rootProps
}) {
    // Note: no `hidden` class — icon is always visible (disabled checked state)
    const checkIcon = showDefault
        ? (icons.icon1 ?? (
            <FaMinus className={`absolute inset-0 w-full h-full p-1 text-white hidden peer-checked:block ${styles.icon1 ?? ''}`} />
        ))
        : icons.icon1;

    return (
        <div style={divStyle} {...rootProps}>
            <label className={`flex items-center w-fit space-x-2 cursor-pointer ${styles.label ?? ''}`} {...labelProps}>
                <div className="relative">
                    <input type="checkbox" disabled className="sr-only peer" {...checkboxProps} />
                    <div className={`w-6 h-6 bg-black/7 border-2 border-gray-300 rounded-md ${styles.box ?? ''} ${extra ?? ''}`} />
                    {checkIcon}
                </div>
            </label>
        </div>
    );
}


// ─────────────────────────────────────────────
// CheckBox5-7 — radio type
// Purely structural — no icon slots, no text slots.
// showDefault added for API consistency only.
// ─────────────────────────────────────────────

// ── CheckBox5 — radio, default ────────────────
export function CheckBox5({
    extra,
    divStyle,
    styles = {},
    checkboxProps = {},
    labelProps = {},
    showDefault = true,
    ...rootProps
}) {
    return (
        <div style={divStyle} {...rootProps}>
            <label className={`flex items-center w-fit space-x-2 cursor-pointer ${styles.label ?? ''}`} {...labelProps}>
                <div className="relative">
                    <input type="radio" className="sr-only peer" {...checkboxProps} />
                    <div className={`w-6 h-6 rounded-full border-1 border-gray-400 bg-white peer-checked:bg-blue-600 peer-checked:border-blue-600 ${styles.box ?? ''} ${extra ?? ''}`} />
                </div>
            </label>
        </div>
    );
}

// ── CheckBox6 — radio, focused/active ─────────
export function CheckBox6({
    extra,
    divStyle,
    styles = {},
    checkboxProps = {},
    labelProps = {},
    showDefault = true,
    ...rootProps
}) {
    return (
        <div style={divStyle} {...rootProps}>
            <label className={`flex items-center w-fit space-x-2 cursor-pointer ${styles.label ?? ''}`} {...labelProps}>
                <div className="relative">
                    <input type="radio" className="sr-only peer" {...checkboxProps} />
                    <div className={`w-6 h-6 rounded-full bg-white border-2 border-gray-400 peer-checked:bg-blue-600 peer-checked:border-blue-600 ring-2 ring-blue-500 ring-offset-2 ${styles.box ?? ''} ${extra ?? ''}`} />
                </div>
            </label>
        </div>
    );
}

// ── CheckBox7 — radio, disabled ───────────────
export function CheckBox7({
    extra,
    divStyle,
    styles = {},
    checkboxProps = {},
    labelProps = {},
    showDefault = true,
    ...rootProps
}) {
    return (
        <div style={divStyle} {...rootProps}>
            <label className={`flex items-center w-fit space-x-2 cursor-pointer ${styles.label ?? ''}`} {...labelProps}>
                <div className="relative">
                    <input type="radio" disabled className="sr-only peer" {...checkboxProps} />
                    <div className={`w-6 h-6 rounded-full bg-black/5 border-2 border-gray-400 peer-checked:bg-black ${styles.box ?? ''} ${extra ?? ''}`} />
                </div>
            </label>
        </div>
    );
}


// ── CheckBoxWithText1 ─────────────────────────
//
// checkbox — pre-rendered checkbox element (default: <CheckBox1 />)
// text1    — primary label
// text2    — hint text (independent slot)
//
// showDefault=true  → both texts show with fallbacks, CheckBox1 shown if no checkbox passed
// showDefault=false → only explicitly passed texts show; no checkbox if not passed
export function CheckBoxWithText1({
    extra,
    divStyle,
    texts = {},
    styles = {},
    checkbox,
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1      = showDefault ? (texts.text1 ?? 'Remember me')                          : texts.text1;
    const text2      = showDefault ? (texts.text2 ?? 'Save my login details for next time.') : texts.text2;
    const checkboxEl = checkbox ?? (showDefault ? <CheckBox1 /> : null);

    return (
        <div
            className={`flex gap-2 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {checkboxEl}
                    <div>
                        {text1 && <p className={styles.text1 ?? ''}>{text1}</p>}
                        {text2 && <span className={styles.text2 ?? ''}>{text2}</span>}
                    </div>
                </>
            )}
        </div>
    );
}




