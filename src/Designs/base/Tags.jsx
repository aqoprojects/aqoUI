import React from 'react'
import { MdClose } from "react-icons/md";
import { IoIosCheckmark } from "react-icons/io";
import { IoClose } from 'react-icons/io5';
import { GoDotFill } from "react-icons/go";



const Tags = () => {
    return (
        <div>
            <TagClose1 /> <br />
            <TagClose2 /> <br />
            <TagClose3 /> <br />
            <TagCount1 /> <br />

            <TagCheckbox1 /> <br />
            <TagCheckbox2 /> <br />
            <TagCheckbox3 /> <br />
            <TagCheckbox4/> <br />
            <TagCheckbox5/> <br />
            <Tag1/> <br /> <br />
            <Tag2/> <br /> 
            <Tag3/> <br />
            <Tag4/> <br />
            <Tag5/> <br />
            <Tag6/> <br />
            <Tag7/> <br />
            <Tag8/> <br />
            <Tag9/> <br />
            <Tag10/> <br />
            <Tag11/> <br />
            <Tag12/> <br />
            <Tag13/> <br />
            <Tag14/> <br />
            <Tag15/> <br />
            <Tag16/> <br />
            <Tag17/> <br />
        </div>
    )
}

export default Tags



// ── Shared checkbox snippet ───────────────────
function Checkbox({ checkboxProps = {}, styles = {} }) {
    return (
        <label className={`flex items-center w-fit cursor-pointer ${styles.checkboxLabel ?? ''}`}>
            <div className="relative">
                <input type="checkbox" className="sr-only peer" {...checkboxProps} />
                <div className="w-5 h-5 bg-white border-2 border-gray-400 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors" />
                <svg
                    className="absolute inset-0 w-full h-full p-1 text-white hidden peer-checked:block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M5 13l4 4L19 7" />
                </svg>
            </div>
        </label>
    );
}

// ── Shared count pill ─────────────────────────
function CountPill({ value = 5, styles = {}, rounded = 'rounded-md' }) {
    return (
        <div className={`w-fit px-2 bg-gray-200 ${rounded}`}>
            <p className={`text-md font-semibold ${styles.count ?? ''}`}>{value}</p>
        </div>
    );
}

// ── Shared close icon ─────────────────────────
// Icon must be Capitalized here since it's a component
function CloseIcon({ icon: IconProp, styles = {} }) {
    const Icon = IconProp ?? MdClose;
    return (
        <div className="w-5 h-5">
            <Icon className={`size-full fill-gray-400 ${styles.icon2 ?? ''}`} />
        </div>
    );
}

// ── Shared avatar image ───────────────────────
function Avatar({ src = '/public/image.jpg', size = 'w-6 h-6', styles = {} }) {
    return (
        <div className={`${size} bg-red-500 rounded-full`}>
            <img src={src} className={`w-full object-cover h-full rounded-full ${styles.image1 ?? ''}`} alt="" />
        </div>
    );
}

// ── Shared dot ────────────────────────────────
// Icon must be Capitalized here since it's a component
function Dot({ icon: IconProp, styles = {} }) {
    const Icon = IconProp ?? GoDotFill;
    return (
        <div className="w-3 h-5 rounded-full">
            <Icon className={`size-5 fill-green-500 ${styles.dot ?? ''}`} />
        </div>
    );
}


// ─────────────────────────────────────────────
// TAG COMPONENTS
//
// showDefault=true  → all slots render with fallback defaults
// showDefault=false → only slots with explicitly passed values render
//
// Visibility rules per slot type:
//   text1/text2  → showDefault ? (value ?? default) : value
//   icon         → showDefault ? show with default : show only if icons.iconN passed
//   image        → showDefault ? show with default : show only if images.image1 passed
//   Checkbox     → showDefault ? show : show only if checkboxProps was passed with content
//   CountPill    → showDefault ? show : show only if texts.text2 passed
// ─────────────────────────────────────────────

// ── Tag1 — text only ─────────────────────────
export function Tag1({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Label') : texts.text1;

    return (
        <label
            className={`${extra ?? ''} px-2 w-fit py-0.5 ring-2 ring-gray-200 rounded-md`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                text1 && <span className={`${styles.text1 ?? ''} font-semibold`}>{text1}</span>
            )}
        </label>
    );
}

// ── Tag2 — text · close icon ─────────────────
export function Tag2({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1      = showDefault ? (texts.text1 ?? 'Label') : texts.text1;
    const showClose  = showDefault || !!icons.icon1;

    return (
        <label
            className={`${extra ?? ''} w-fit flex gap-2 items-center-safe px-2 py-0.5 ring-2 ring-gray-200 rounded-md`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {text1 && <span className={`${styles.text1 ?? ''} font-semibold`}>{text1}</span>}
                    {showClose && <CloseIcon icon={icons.icon1} styles={styles} />}
                </>
            )}
        </label>
    );
}

// ── Tag3 — text · count pill ─────────────────
export function Tag3({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1      = showDefault ? (texts.text1 ?? 'Label') : texts.text1;
    const countValue = showDefault ? (texts.text2 ?? 5) : texts.text2;
    const showCount  = showDefault || texts.text2 !== undefined;

    return (
        <label
            className={`${extra ?? ''} w-fit flex gap-2 items-center-safe pl-2 pr-0.5 py-0.5 ring-2 ring-gray-200 rounded-md`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {text1 && <span className={`${styles.text1 ?? ''} font-semibold`}>{text1}</span>}
                    {showCount && <CountPill value={countValue} styles={styles} />}
                </>
            )}
        </label>
    );
}

// ── Tag4 — checkbox · text · count pill ──────
export function Tag4({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    checkboxProps = {},
    ...rootProps
}) {
    const text1        = showDefault ? (texts.text1 ?? 'Label') : texts.text1;
    const countValue   = showDefault ? (texts.text2 ?? 5) : texts.text2;
    const showCheckbox = showDefault || Object.keys(checkboxProps).length > 0;
    const showCount    = showDefault || texts.text2 !== undefined;

    return (
        <div
            className={`${extra ?? ''} w-fit flex gap-2 items-center-safe pl-2 pr-0.5 py-0.5 ring-2 ring-gray-200 rounded-md`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {showCheckbox && <Checkbox checkboxProps={checkboxProps} styles={styles} />}
                    {text1 && <span className={`${styles.text1 ?? ''} font-semibold`}>{text1}</span>}
                    {showCount && <CountPill value={countValue} styles={styles} />}
                </>
            )}
        </div>
    );
}

// ── Tag5 — checkbox · text · close icon ──────
export function Tag5({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    checkboxProps = {},
    ...rootProps
}) {
    const text1        = showDefault ? (texts.text1 ?? 'Label') : texts.text1;
    const showCheckbox = showDefault || Object.keys(checkboxProps).length > 0;
    const showClose    = showDefault || !!icons.icon2;

    return (
        <div
            className={`${extra ?? ''} w-fit flex gap-2 items-center-safe pl-2 pr-0.5 py-0.5 ring-2 ring-gray-200 rounded-md`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {showCheckbox && <Checkbox checkboxProps={checkboxProps} styles={styles} />}
                    {text1 && <span className={`${styles.text1 ?? ''} font-semibold`}>{text1}</span>}
                    {showClose && <CloseIcon icon={icons.icon2} styles={styles} />}
                </>
            )}
        </div>
    );
}

// ── Tag6 — avatar · text · close icon ────────
export function Tag6({
    extra,
    divStyle,
    texts = {},
    icons = {},
    images = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1       = showDefault ? (texts.text1 ?? 'Label') : texts.text1;
    const image1      = showDefault ? (images.image1 ?? '/public/image.jpg') : images.image1;
    const showAvatar  = showDefault || !!images.image1;
    const showClose   = showDefault || !!icons.icon2;

    return (
        <div
            className={`${extra ?? ''} w-fit flex gap-2 items-center-safe pl-2 pr-0.5 py-0.5 ring-2 ring-gray-200 rounded-md`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {showAvatar && <Avatar src={image1} size="w-7 h-7" styles={styles} />}
                    {text1 && <span className={`${styles.text1 ?? ''} font-semibold`}>{text1}</span>}
                    {showClose && <CloseIcon icon={icons.icon2} styles={styles} />}
                </>
            )}
        </div>
    );
}

// ── Tag7 — avatar · text · count pill ────────
export function Tag7({
    extra,
    divStyle,
    texts = {},
    images = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1      = showDefault ? (texts.text1 ?? 'Label') : texts.text1;
    const image1     = showDefault ? (images.image1 ?? '/public/image.jpg') : images.image1;
    const countValue = showDefault ? (texts.text2 ?? 5) : texts.text2;
    const showAvatar = showDefault || !!images.image1;
    const showCount  = showDefault || texts.text2 !== undefined;

    return (
        <div
            className={`${extra ?? ''} w-fit flex gap-2 items-center-safe pl-2 pr-0.5 py-0.5 ring-2 ring-gray-200 rounded-md`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {showAvatar && <Avatar src={image1} styles={styles} />}
                    {text1 && <span className={`${styles.text1 ?? ''} font-semibold`}>{text1}</span>}
                    {showCount && <CountPill value={countValue} styles={styles} rounded="rounded-sm" />}
                </>
            )}
        </div>
    );
}

// ── Tag8 — avatar · text ─────────────────────
export function Tag8({
    extra,
    divStyle,
    texts = {},
    images = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1      = showDefault ? (texts.text1 ?? 'Label') : texts.text1;
    const image1     = showDefault ? (images.image1 ?? '/public/image.jpg') : images.image1;
    const showAvatar = showDefault || !!images.image1;

    return (
        <div
            className={`${extra ?? ''} w-fit flex gap-2 items-center-safe pl-2 pr-0.5 py-0.5 ring-2 ring-gray-200 rounded-md`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {showAvatar && <Avatar src={image1} styles={styles} />}
                    {text1 && <span className={`${styles.text1 ?? ''} font-semibold`}>{text1}</span>}
                </>
            )}
        </div>
    );
}

// ── Tag9 — checkbox · avatar · text ──────────
export function Tag9({
    extra,
    divStyle,
    texts = {},
    images = {},
    styles = {},
    children,
    showDefault = true,
    checkboxProps = {},
    ...rootProps
}) {
    const text1        = showDefault ? (texts.text1 ?? 'Label') : texts.text1;
    const image1       = showDefault ? (images.image1 ?? '/public/image.jpg') : images.image1;
    const showCheckbox = showDefault || Object.keys(checkboxProps).length > 0;
    const showAvatar   = showDefault || !!images.image1;

    return (
        <div
            className={`${extra ?? ''} w-fit flex gap-2 items-center-safe pl-2 pr-0.5 py-0.5 ring-2 ring-gray-200 rounded-md`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {showCheckbox && <Checkbox checkboxProps={checkboxProps} styles={styles} />}
                    {showAvatar && <Avatar src={image1} styles={styles} />}
                    {text1 && <span className={`${styles.text1 ?? ''} font-semibold`}>{text1}</span>}
                </>
            )}
        </div>
    );
}

// ── Tag10 — checkbox · avatar · text · close ─
export function Tag10({
    extra,
    divStyle,
    texts = {},
    icons = {},
    images = {},
    styles = {},
    children,
    showDefault = true,
    checkboxProps = {},
    ...rootProps
}) {
    const text1        = showDefault ? (texts.text1 ?? 'Label') : texts.text1;
    const image1       = showDefault ? (images.image1 ?? '/public/image.jpg') : images.image1;
    const showCheckbox = showDefault || Object.keys(checkboxProps).length > 0;
    const showAvatar   = showDefault || !!images.image1;
    const showClose    = showDefault || !!icons.icon2;

    return (
        <div
            className={`${extra ?? ''} w-fit flex gap-2 items-center-safe pl-2 pr-0.5 py-0.5 ring-2 ring-gray-200 rounded-md`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {showCheckbox && <Checkbox checkboxProps={checkboxProps} styles={styles} />}
                    {showAvatar && <Avatar src={image1} styles={styles} />}
                    {text1 && <span className={`${styles.text1 ?? ''} font-semibold`}>{text1}</span>}
                    {showClose && <CloseIcon icon={icons.icon2} styles={styles} />}
                </>
            )}
        </div>
    );
}

// ── Tag11 — checkbox · avatar · text · count ─
export function Tag11({
    extra,
    divStyle,
    texts = {},
    images = {},
    styles = {},
    children,
    showDefault = true,
    checkboxProps = {},
    ...rootProps
}) {
    const text1        = showDefault ? (texts.text1 ?? 'Label') : texts.text1;
    const image1       = showDefault ? (images.image1 ?? '/public/image.jpg') : images.image1;
    const countValue   = showDefault ? (texts.text2 ?? 5) : texts.text2;
    const showCheckbox = showDefault || Object.keys(checkboxProps).length > 0;
    const showAvatar   = showDefault || !!images.image1;
    const showCount    = showDefault || texts.text2 !== undefined;

    return (
        <div
            className={`${extra ?? ''} w-fit flex gap-2 items-center-safe pl-2 pr-0.5 py-0.5 ring-2 ring-gray-200 rounded-md`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {showCheckbox && <Checkbox checkboxProps={checkboxProps} styles={styles} />}
                    {showAvatar && <Avatar src={image1} styles={styles} />}
                    {text1 && <span className={`${styles.text1 ?? ''} font-semibold`}>{text1}</span>}
                    {showCount && <CountPill value={countValue} styles={styles} />}
                </>
            )}
        </div>
    );
}

// ── Tag12 — dot · text ───────────────────────
export function Tag12({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1   = showDefault ? (texts.text1 ?? 'Label') : texts.text1;
    const showDot = showDefault || !!icons.icon1;

    return (
        <div
            className={`${extra ?? ''} w-fit flex gap-2 items-center-safe pl-2 pr-0.5 py-0.5 ring-2 ring-gray-200 rounded-md`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {showDot && <Dot icon={icons.icon1} styles={styles} />}
                    {text1 && <span className={`${styles.text1 ?? ''} font-semibold`}>{text1}</span>}
                </>
            )}
        </div>
    );
}

// ── Tag13 — dot · text · close ───────────────
export function Tag13({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1   = showDefault ? (texts.text1 ?? 'Label') : texts.text1;
    const showDot = showDefault || !!icons.icon1;
    const showClose = showDefault || !!icons.icon2;

    return (
        <div
            className={`${extra ?? ''} w-fit flex gap-2 items-center-safe pl-2 pr-0.5 py-0.5 ring-2 ring-gray-200 rounded-md`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {showDot && <Dot icon={icons.icon1} styles={styles} />}
                    {text1 && <span className={`${styles.text1 ?? ''} font-semibold`}>{text1}</span>}
                    {showClose && <CloseIcon icon={icons.icon2} styles={styles} />}
                </>
            )}
        </div>
    );
}

// ── Tag14 — dot · text · count ───────────────
export function Tag14({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1      = showDefault ? (texts.text1 ?? 'Label') : texts.text1;
    const countValue = showDefault ? (texts.text2 ?? 5) : texts.text2;
    const showDot    = showDefault || !!icons.icon1;
    const showCount  = showDefault || texts.text2 !== undefined;

    return (
        <div
            className={`${extra ?? ''} w-fit flex gap-2 items-center-safe pl-2 pr-0.5 py-0.5 ring-2 ring-gray-200 rounded-md`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {showDot && <Dot icon={icons.icon1} styles={styles} />}
                    {text1 && <span className={`${styles.text1 ?? ''} font-semibold`}>{text1}</span>}
                    {showCount && <CountPill value={countValue} styles={styles} rounded="rounded-sm" />}
                </>
            )}
        </div>
    );
}

// ── Tag15 — checkbox · dot · text ────────────
export function Tag15({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    checkboxProps = {},
    ...rootProps
}) {
    const text1        = showDefault ? (texts.text1 ?? 'Label') : texts.text1;
    const showCheckbox = showDefault || Object.keys(checkboxProps).length > 0;
    const showDot      = showDefault || !!icons.icon1;

    return (
        <div
            className={`${extra ?? ''} w-fit flex gap-2 items-center-safe pl-2 pr-0.5 py-0.5 ring-2 ring-gray-200 rounded-md`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {showCheckbox && <Checkbox checkboxProps={checkboxProps} styles={styles} />}
                    {showDot && <Dot icon={icons.icon1} styles={styles} />}
                    {text1 && <span className={`${styles.text1 ?? ''} font-semibold`}>{text1}</span>}
                </>
            )}
        </div>
    );
}

// ── Tag16 — checkbox · dot · text · close ────
export function Tag16({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    checkboxProps = {},
    ...rootProps
}) {
    const text1        = showDefault ? (texts.text1 ?? 'Label') : texts.text1;
    const showCheckbox = showDefault || Object.keys(checkboxProps).length > 0;
    const showDot      = showDefault || !!icons.icon1;
    const showClose    = showDefault || !!icons.icon2;

    return (
        <div
            className={`${extra ?? ''} w-fit flex gap-2 items-center-safe pl-2 pr-0.5 py-0.5 ring-2 ring-gray-200 rounded-md`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {showCheckbox && <Checkbox checkboxProps={checkboxProps} styles={styles} />}
                    {showDot && <Dot icon={icons.icon1} styles={styles} />}
                    {text1 && <span className={`${styles.text1 ?? ''} font-semibold`}>{text1}</span>}
                    {showClose && <CloseIcon icon={icons.icon2} styles={styles} />}
                </>
            )}
        </div>
    );
}

// ── Tag17 — checkbox · dot · text · count ────
export function Tag17({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    checkboxProps = {},
    ...rootProps
}) {
    const text1        = showDefault ? (texts.text1 ?? 'Label') : texts.text1;
    const countValue   = showDefault ? (texts.text2 ?? 5) : texts.text2;
    const showCheckbox = showDefault || Object.keys(checkboxProps).length > 0;
    const showDot      = showDefault || !!icons.icon1;
    const showCount    = showDefault || texts.text2 !== undefined;

    return (
        <div
            className={`${extra ?? ''} w-fit flex gap-2 items-center-safe pl-2 pr-0.5 py-0.5 ring-2 ring-gray-200 rounded-md`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {showCheckbox && <Checkbox checkboxProps={checkboxProps} styles={styles} />}
                    {showDot && <Dot icon={icons.icon1} styles={styles} />}
                    {text1 && <span className={`${styles.text1 ?? ''} font-semibold`}>{text1}</span>}
                    {showCount && <CountPill value={countValue} styles={styles} rounded="rounded-sm" />}
                </>
            )}
        </div>
    );
}


// ─────────────────────────────────────────────
// TAG CLOSE BUTTONS
// Icon-only leaf components — showDefault added for consistency
// ─────────────────────────────────────────────

export function TagClose1({
    extra,
    divStyle,
    icons = {},
    styles = {},
    showDefault = true,
    ...rootProps
}) {
    const Icon = showDefault ? (icons.icon1 ?? MdClose) : icons.icon1;

    return (
        <div className={`${extra ?? ''} w-10 h-10`} style={divStyle} {...rootProps}>
            {Icon && <Icon className={`size-full fill-gray-300 ${styles.icon1 ?? ''}`} />}
        </div>
    );
}

export function TagClose2({
    extra,
    divStyle,
    icons = {},
    styles = {},
    showDefault = true,
    ...rootProps
}) {
    const Icon = showDefault ? (icons.icon1 ?? MdClose) : icons.icon1;

    return (
        <div className={`${extra ?? ''} w-10 h-10 p-1 bg-black/4 rounded-lg`} style={divStyle} {...rootProps}>
            {Icon && <Icon className={`size-full fill-gray-300 ${styles.icon1 ?? ''}`} />}
        </div>
    );
}

export function TagClose3({
    extra,
    divStyle,
    icons = {},
    styles = {},
    showDefault = true,
    ...rootProps
}) {
    const Icon = showDefault ? (icons.icon1 ?? MdClose) : icons.icon1;

    return (
        <div className={`${extra ?? ''} w-10 h-10 p-1 bg-red-300 rounded-full`} style={divStyle} {...rootProps}>
            {Icon && <Icon className={`size-full fill-gray-300 ${styles.icon1 ?? ''}`} />}
        </div>
    );
}


// ─────────────────────────────────────────────
// TAG COUNT
// ─────────────────────────────────────────────

export function TagCount1({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 5) : texts.text1;

    return (
        <div
            className={`${extra ?? ''} w-fit px-3 py-0.5 bg-gray-200 rounded-md`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                text1 !== undefined && (
                    <p className={`text-3xl font-semibold ${styles.text1 ?? ''}`}>{text1}</p>
                )
            )}
        </div>
    );
}


// ─────────────────────────────────────────────
// TAG CHECKBOXES
// These are pure structural components — no showDefault needed
// (their entire purpose IS the checkbox itself)
// ─────────────────────────────────────────────

export function TagCheckbox1({ extra, divStyle, checkboxProps = {}, ...rootProps }) {
    return (
        <input
            type="checkbox"
            className={`${extra ?? ''} rounded-3xl size-7 accent-purple-800 outline-none`}
            style={divStyle}
            {...checkboxProps}
            {...rootProps}
        />
    );
}

export function TagCheckbox2({ extra, divStyle, checkboxProps = {}, ...rootProps }) {
    return (
        <input
            type="checkbox"
            className={`${extra ?? ''} rounded-3xl size-7 accent-purple-800 outline-2 outline-offset-2 outline-purple-600`}
            style={divStyle}
            {...checkboxProps}
            {...rootProps}
        />
    );
}

export function TagCheckbox3({ extra, divStyle, styles = {}, checkboxProps = {}, ...rootProps }) {
    return (
        <label
            className={`${extra ?? ''} flex items-center w-fit space-x-2 cursor-pointer`}
            style={divStyle}
            {...rootProps}
        >
            <div className="relative">
                <input type="checkbox" className="sr-only peer" {...checkboxProps} />
                <div className={`w-6 h-6 bg-white border-2 border-gray-400 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors ${styles.box ?? ''}`} />
                <svg
                    className={`absolute w-4 h-4 text-white top-1 left-1 hidden peer-checked:block ${styles.check ?? ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M5 13l4 4L19 7" />
                </svg>
            </div>
        </label>
    );
}

export function TagCheckbox4({ extra, divStyle, styles = {}, checkboxProps = {}, ...rootProps }) {
    return (
        <label
            className={`${extra ?? ''} flex items-center w-fit space-x-2 cursor-pointer`}
            style={divStyle}
            {...rootProps}
        >
            <div className="relative">
                <input type="checkbox" className="sr-only peer" {...checkboxProps} />
                <div className={`w-6 h-6 bg-white border-2 border-gray-400 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors outline-2 outline-blue-700 outline-offset-2 ${styles.box ?? ''}`} />
                <svg
                    className={`absolute w-4 h-4 text-white top-1 left-1 hidden peer-checked:block ${styles.check ?? ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M5 13l4 4L19 7" />
                </svg>
            </div>
        </label>
    );
}

export function TagCheckbox5({ extra, divStyle, styles = {}, checkboxProps = {}, ...rootProps }) {
    return (
        <label
            className={`${extra ?? ''} flex items-center w-fit space-x-2 cursor-pointer`}
            style={divStyle}
            {...rootProps}
        >
            <div className="relative">
                <input type="checkbox" className="sr-only peer" {...checkboxProps} />
                <div className={`w-6 h-6 bg-gray-100 border-2 border-gray-400 rounded-md peer-checked:bg-gray-100 peer-checked:border-gray-400 transition-colors ${styles.box ?? ''}`} />
                <svg
                    className={`absolute w-4 h-4 text-gray-400 top-1 left-1 hidden peer-checked:block ${styles.check ?? ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M5 13l4 4L19 7" />
                </svg>
            </div>
        </label>
    );
}

