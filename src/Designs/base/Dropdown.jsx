import React, { Children } from 'react'
import { LuScanText } from "react-icons/lu";
import { IoLogoGoogle, IoMdCheckmark } from "react-icons/io";
import { GoPerson } from 'react-icons/go';
import { FiSettings } from 'react-icons/fi';
import { BsThunderbolt } from 'react-icons/bs';
import { GiThunderBlade } from 'react-icons/gi';
import { ImExit, ImProfile } from 'react-icons/im';

import { ButtonGroup13 } from './ButtonGroup';
import { IoIosArrowDown } from "react-icons/io";
import { LabelBadge3, LabelBadge4, LabelBadge5, LabelBadge6 } from './Badges';
import { BiArrowToBottom, BiBell, BiBellMinus, BiInfoCircle } from 'react-icons/bi';
import { RxQuestionMarkCircled } from "react-icons/rx";
import { FaTooth } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { Button2, Button3, Button4, Button5 } from './Buttons';
import { Tag1, Tag4, Tag5, Tag6 } from './Tags';
// import { ChevronDownIcon } from "@heroicons/react/24/solid";
// import { UserIcon, Cog6ToothIcon, BellIcon } from "@heroicons/react/24/outline";



const LIGHT_GRAY = '#FAFAFA'
const FADE_GRAY = '#717680'


const Dropdown = () => {
    return (
        <div>
            <DropdownListItem1 /> <br />
            <DropdownListItem2 /> <br />
            <DropdownListItem3 /> <br />
            <DropdownListItem4 /> <br />
            <DropdownListItem5 /> <br />
            <DropdownLine1 /> <br />
            <DropdownListHeader1 /> <br />
            <DropdownListHeader2 /> <br />
            <SelectMenuItem1 /> <br />
            <SelectMenuItem2 /> <br />
            <SelectMenuItem3 /> <br />
            <SelectMenuItem4 /> <br />
            <SelectMenuItem5 /> <br />
            <SelectMenuItem6 /> <br />
            <SelectMenuItem7 /> <br />
            <SelectMenuItem8 /> <br />
            <Dropdown1 /> <br />
            <Select1 /> <br />
            <Select2 /> <br />
            <Select3 /> <br />
            <Select4 /> <br />
            <Select5 /> <br />
            <Select6 /> <br />
            <Select7 /> <br />
            <Select8 /> <br />
            <Select9 /> <br />
            <Select10 /> <br />
            {/* <SimpleSelect /> */}

        </div>
    )
}

export default Dropdown



// ── DropdownListItem1 ────────────────────────
// text · icon
export function DropdownListItem1({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Placeholder') : texts.text1;
    const Icon1 = showDefault ? (icons.icon1 ?? LuScanText) : icons.icon1;

    return (
        <div
            className={`${extra ?? ''} flex justify-between items-center-safe w-65 text-lg font-semibold py-3 px-3`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {text1 && (
                        <div className={styles.text1 ?? ''}>
                            <p>{text1}</p>
                        </div>
                    )}
                    {Icon1 && (
                        <div className={`${styles.icon1 ?? ''} shadow-sm/30 shadow-black w-7 h-7 p-1 rounded-md`}>
                            <Icon1 className="size-full" />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

// ── DropdownListItem2 ────────────────────────
// text · icon (highlighted bg)
export function DropdownListItem2({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Placeholder') : texts.text1;
    const Icon1 = showDefault ? (icons.icon1 ?? LuScanText) : icons.icon1;

    return (
        <div
            className={`${extra ?? ''} flex justify-between items-center-safe w-65 text-lg font-semibold bg-[#FAFAFA] py-3 px-3`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {text1 && (
                        <div className={styles.text1 ?? ''}>
                            <p>{text1}</p>
                        </div>
                    )}
                    {Icon1 && (
                        <div className={`${styles.icon1 ?? ''} shadow-sm/30 shadow-black w-7 h-7 p-1 rounded-md`}>
                            <Icon1 className="size-full" />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

// ── DropdownListItem3 ────────────────────────
// text · icon (faded/disabled style)
export function DropdownListItem3({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Placeholder') : texts.text1;
    const Icon1 = showDefault ? (icons.icon1 ?? LuScanText) : icons.icon1;

    return (
        <div
            className={`${extra ?? ''} flex justify-between items-center-safe w-65 text-lg font-semibold bg-[#FAFAFA] py-3 px-3 text-[#717680]`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {text1 && (
                        <div className={styles.text1 ?? ''}>
                            <p>{text1}</p>
                        </div>
                    )}
                    {Icon1 && (
                        <div className={`${styles.icon1 ?? ''} shadow-sm/30 shadow-black w-7 h-7 p-1 rounded-md`}>
                            <Icon1 className="size-full" />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

// ── DropdownListItem4 ────────────────────────
// checkbox (radio-style) · text · icon
export function DropdownListItem4({
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
    const text1        = showDefault ? (texts.text1 ?? 'Placeholder') : texts.text1;
    const Icon1        = showDefault ? (icons.icon1 ?? LuScanText) : icons.icon1;
    const showCheckbox = showDefault || Object.keys(checkboxProps).length > 0;

    return (
        <div
            className={`${extra ?? ''} flex justify-between items-center-safe w-65 text-lg font-semibold py-3 px-3`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <div className="flex gap-2">
                        {showCheckbox && (
                            <label className="flex items-center w-fit space-x-2 cursor-pointer">
                                <div className="relative">
                                    <input type="checkbox" className="sr-only peer" {...checkboxProps} />
                                    <div className="w-5 h-5 bg-white border-2 border-gray-400 rounded-full peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors" />
                                    <svg className="absolute w-3 h-3 text-white top-1 left-1 hidden peer-checked:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </label>
                        )}
                        {text1 && <p className={styles.text1 ?? ''}>{text1}</p>}
                    </div>
                    {Icon1 && (
                        <div className={`${styles.icon1 ?? ''} shadow-sm/30 shadow-black w-7 h-7 p-1 rounded-md`}>
                            <Icon1 className="size-full" />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

// ── DropdownListItem5 ────────────────────────
// checkbox (square) · text · icon
export function DropdownListItem5({
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
    const text1        = showDefault ? (texts.text1 ?? 'Placeholder') : texts.text1;
    const Icon1        = showDefault ? (icons.icon1 ?? LuScanText) : icons.icon1;
    const showCheckbox = showDefault || Object.keys(checkboxProps).length > 0;

    return (
        <div
            className={`${extra ?? ''} flex justify-between items-center-safe w-65 text-lg font-semibold py-3 px-3`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <div className="flex gap-2">
                        {showCheckbox && (
                            <label className="flex items-center w-fit space-x-2 cursor-pointer">
                                <div className="relative">
                                    <input type="checkbox" className="sr-only peer" {...checkboxProps} />
                                    <div className="w-5 h-5 bg-white border-2 border-gray-400 rounded-sm peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors" />
                                    <svg className="absolute w-3 h-3 text-white top-1 left-1 hidden peer-checked:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </label>
                        )}
                        {text1 && <p className={styles.text1 ?? ''}>{text1}</p>}
                    </div>
                    {Icon1 && (
                        <div className={`${styles.icon1 ?? ''} shadow-sm/30 shadow-black w-7 h-7 p-1 rounded-md`}>
                            <Icon1 className="size-full" />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}


// ── DropdownLine1 ────────────────────────────
// horizontal divider
export function DropdownLine1({ extra, divStyle, children, ...rootProps }) {
    return (
        <div className={`${extra ?? ''} w-100 h-px`} style={divStyle} {...rootProps}>
            {children || <div className="w-full h-full" />}
        </div>
    );
}

// ── DropdownLine2 ────────────────────────────
// vertical divider
export function DropdownLine2({ extra, divStyle, children, ...rootProps }) {
    return (
        <div className={`${extra ?? ''} w-px h-100`} style={divStyle} {...rootProps}>
            {children || <div className="w-full h-full" />}
        </div>
    );
}


// ── DropdownListHeader1 ──────────────────────
// avatar (with online dot) · name · email
export function DropdownListHeader1({
    extra,
    divStyle,
    texts = {},
    images = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1  = showDefault ? (texts.text1  ?? 'Shola Adele') : texts.text1;
    const text2  = showDefault ? (texts.text2  ?? 'Shola@projectuicomponent.com') : texts.text2;
    const image1 = showDefault ? (images.image1 ?? '/image.jpg') : images.image1;
    const showImage = showDefault || !!images.image1;

    return (
        <div
            className={`${extra ?? ''} flex gap-3 shadow-sm/20 shadow-black/50 w-100 px-3 py-6`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {showImage && (
                        <figure className={`${styles.image1 ?? ''} relative min-w-13 w-13 h-13 rounded-full`}>
                            <img src={image1} className="size-full object-cover rounded-full" alt="" />
                            <span className="w-4 h-4 bg-green-600 outline-3 outline-white rounded-full absolute bottom-0 -right-1" />
                        </figure>
                    )}
                    <figcaption className="min-w-0">
                        {text1 && <p className={`${styles.text1 ?? ''} font-boldy text-xl`}>{text1}</p>}
                        {text2 && <p className={`${styles.text2 ?? ''} text-[#717680] text-lg truncate`}>{text2}</p>}
                    </figcaption>
                </>
            )}
        </div>
    );
}

// ── DropdownListHeader2 ──────────────────────
// label only
export function DropdownListHeader2({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Account menu') : texts.text1;

    return (
        <div
            className={`${extra ?? ''} flex gap-3 shadow-sm/20 shadow-black/50 w-100 px-4 py-4`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                text1 && <p className={`${styles.text1 ?? ''} font-boldy text-xl`}>{text1}</p>
            )}
        </div>
    );
}


// ─────────────────────────────────────────────
// SELECT MENU ITEMS
// ─────────────────────────────────────────────

// ── SelectMenuItem1 ──────────────────────────
// name · handle
export function SelectMenuItem1({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Shola Adele') : texts.text1;
    const text2 = showDefault ? (texts.text2 ?? '@Shola') : texts.text2;

    return (
        <div
            className={`${extra ?? ''} flex gap-3 bg-black/5 w-100 py-3 rounded-lg px-3`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {text1 && <p className={`${styles.text1 ?? ''} font-boldy text-xl`}>{text1}</p>}
                    {text2 && <span className={`${styles.text2 ?? ''} text-lg text-[#717680]`}>{text2}</span>}
                </>
            )}
        </div>
    );
}

// ── SelectMenuItem2 ──────────────────────────
// name · handle · checkmark icon (right)
export function SelectMenuItem2({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Shola Adele') : texts.text1;
    const text2 = showDefault ? (texts.text2 ?? '@Shola') : texts.text2;
    const Icon1 = showDefault ? (icons.icon1 ?? IoMdCheckmark) : icons.icon1;

    return (
        <div
            className={`${extra ?? ''} flex gap-3 bg-black/5 w-100 py-3 rounded-lg px-3 justify-between items-center-safe`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <div className="flex gap-3 items-center-safe">
                        {text1 && <p className={`${styles.text1 ?? ''} font-boldy text-xl`}>{text1}</p>}
                        {text2 && <span className={`${styles.text2 ?? ''} text-lg text-[#717680]`}>{text2}</span>}
                    </div>
                    {Icon1 && (
                        <div className={`${styles.icon1 ?? ''} w-5 h-5`}>
                            <Icon1 className="size-full fill-current" />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

// ── SelectMenuItem3 ──────────────────────────
// icon (left) · name · handle
export function SelectMenuItem3({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Shola Adele') : texts.text1;
    const text2 = showDefault ? (texts.text2 ?? '@Shola') : texts.text2;
    const Icon1 = showDefault ? (icons.icon1 ?? GoPerson) : icons.icon1;

    return (
        <div
            className={`${extra ?? ''} flex gap-3 bg-black/5 w-100 py-3 rounded-lg px-3 justify-between items-center-safe`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <div className="flex gap-2 items-center-safe">
                    {Icon1 && (
                        <div className={`${styles.icon1 ?? ''} w-6 h-6`}>
                            <Icon1 className="size-full" />
                        </div>
                    )}
                    <div className="flex gap-3 items-center-safe">
                        {text1 && <p className={`${styles.text1 ?? ''} font-boldy text-xl`}>{text1}</p>}
                        {text2 && <span className={`${styles.text2 ?? ''} text-lg text-[#717680]`}>{text2}</span>}
                    </div>
                </div>
            )}
        </div>
    );
}

// ── SelectMenuItem4 ──────────────────────────
// avatar (left) · name · handle
export function SelectMenuItem4({
    extra,
    divStyle,
    texts = {},
    images = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1     = showDefault ? (texts.text1   ?? 'Shola Adele') : texts.text1;
    const text2     = showDefault ? (texts.text2   ?? '@Shola') : texts.text2;
    const image1    = showDefault ? (images.image1 ?? '/image.jpg') : images.image1;
    const showImage = showDefault || !!images.image1;

    return (
        <div
            className={`${extra ?? ''} flex gap-3 bg-black/5 w-100 py-3 rounded-lg px-3 justify-between items-center-safe`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <div className="flex gap-2 items-center-safe">
                    {showImage && (
                        <div className={`${styles.image1 ?? ''} w-7 h-7 rounded-full`}>
                            <img src={image1} className="size-full object-cover rounded-full" alt="" />
                        </div>
                    )}
                    <div className="flex gap-3 items-center-safe">
                        {text1 && <p className={`${styles.text1 ?? ''} font-boldy text-xl`}>{text1}</p>}
                        {text2 && <span className={`${styles.text2 ?? ''} text-lg text-[#717680]`}>{text2}</span>}
                    </div>
                </div>
            )}
        </div>
    );
}

// ── SelectMenuItem5 ──────────────────────────
// icon1 (left) · name · handle · icon2 (right)
export function SelectMenuItem5({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Shola Adele') : texts.text1;
    const text2 = showDefault ? (texts.text2 ?? '@Shola') : texts.text2;
    const Icon1 = showDefault ? (icons.icon1 ?? GoPerson) : icons.icon1;
    const Icon2 = showDefault ? (icons.icon2 ?? IoMdCheckmark) : icons.icon2;

    return (
        <div
            className={`${extra ?? ''} flex gap-3 bg-black/5 w-100 py-3 rounded-lg px-3 justify-between items-center-safe`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <div className="flex gap-2 items-center-safe">
                        {Icon1 && (
                            <div className={`${styles.icon1 ?? ''} w-6 h-6`}>
                                <Icon1 className="size-full" />
                            </div>
                        )}
                        <div className="flex gap-3 items-center-safe">
                            {text1 && <p className={`${styles.text1 ?? ''} font-boldy text-xl`}>{text1}</p>}
                            {text2 && <span className={`${styles.text2 ?? ''} text-lg text-[#717680]`}>{text2}</span>}
                        </div>
                    </div>
                    {Icon2 && (
                        <div className={`${styles.icon2 ?? ''} w-5 h-5`}>
                            <Icon2 className="size-full" />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

// ── SelectMenuItem6 ──────────────────────────
// avatar (left) · name · handle · icon (right)
export function SelectMenuItem6({
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
    const text1     = showDefault ? (texts.text1   ?? 'Shola Adele') : texts.text1;
    const text2     = showDefault ? (texts.text2   ?? '@Shola') : texts.text2;
    const image1    = showDefault ? (images.image1 ?? '/image.jpg') : images.image1;
    const Icon1     = showDefault ? (icons.icon1   ?? IoMdCheckmark) : icons.icon1;
    const showImage = showDefault || !!images.image1;

    return (
        <div
            className={`${extra ?? ''} flex gap-3 bg-black/5 w-100 py-3 rounded-lg px-3 justify-between items-center-safe`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <div className="flex gap-2 items-center-safe">
                        {showImage && (
                            <div className={`${styles.image1 ?? ''} w-7 h-7 rounded-full`}>
                                <img src={image1} className="size-full object-cover rounded-full" alt="" />
                            </div>
                        )}
                        <div className="flex gap-3 items-center-safe">
                            {text1 && <p className={`${styles.text1 ?? ''} font-boldy text-xl`}>{text1}</p>}
                            {text2 && <span className={`${styles.text2 ?? ''} text-lg text-[#717680]`}>{text2}</span>}
                        </div>
                    </div>
                    {Icon1 && (
                        <div className={`${styles.icon1 ?? ''} w-5 h-5`}>
                            <Icon1 className="size-full" />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

// ── SelectMenuItem7 ──────────────────────────
// status dot (left) · name · handle
export function SelectMenuItem7({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1   = showDefault ? (texts.text1 ?? 'Shola Adele') : texts.text1;
    const text2   = showDefault ? (texts.text2 ?? '@Shola') : texts.text2;
    const showDot = showDefault;

    return (
        <div
            className={`${extra ?? ''} flex gap-3 bg-black/5 w-100 py-3 rounded-lg px-3 justify-between items-center-safe`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <div className="flex gap-2 items-center-safe">
                    {showDot && (
                        <div className={`${styles.span1 ?? ''} w-3 h-3 rounded-full bg-green-500`} />
                    )}
                    <div className="flex gap-3 items-center-safe">
                        {text1 && <p className={`${styles.text1 ?? ''} font-boldy text-xl`}>{text1}</p>}
                        {text2 && <span className={`${styles.text2 ?? ''} text-lg text-[#717680]`}>{text2}</span>}
                    </div>
                </div>
            )}
        </div>
    );
}

// ── SelectMenuItem8 ──────────────────────────
// status dot (left) · name · handle · icon (right)
export function SelectMenuItem8({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1   = showDefault ? (texts.text1 ?? 'Shola Adele') : texts.text1;
    const text2   = showDefault ? (texts.text2 ?? '@Shola') : texts.text2;
    const Icon1   = showDefault ? (icons.icon1 ?? IoMdCheckmark) : icons.icon1;
    const showDot = showDefault;

    return (
        <div
            className={`${extra ?? ''} flex gap-3 bg-black/5 w-100 py-3 rounded-lg px-3 justify-between items-center-safe`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <div className="flex gap-2 items-center-safe">
                        {showDot && (
                            <div className={`${styles.span1 ?? ''} w-3 h-3 rounded-full bg-green-500`} />
                        )}
                        <div className="flex gap-3 items-center-safe">
                            {text1 && <p className={`${styles.text1 ?? ''} font-boldy text-xl`}>{text1}</p>}
                            {text2 && <span className={`${styles.text2 ?? ''} text-lg text-[#717680]`}>{text2}</span>}
                        </div>
                    </div>
                    {Icon1 && (
                        <div className={`${styles.icon1 ?? ''} w-5 h-5`}>
                            <Icon1 className="size-full" />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}


// ─────────────────────────────────────────────
// DROPDOWN1 — full dropdown panel (wrapper)
// Uses corrected child components; passes showDefault down
// ─────────────────────────────────────────────
export function Dropdown1({ extra, divStyle, children, showDefault = true, ...rootProps }) {
    return (
        <div
            className={`w-85 shadow-sm/30 p-1 shadow-black rounded-xl ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <DropdownListHeader1
                        extra="!w-full !py-3 shadow-none"
                        texts={{ text2: 'Shola@aqoUI.com' }}
                        showDefault={showDefault}
                    />
                    <DropdownLine1 extra="bg-black/5 !w-85 !h-[2px] mb-0.5" />
                    <SelectMenuItem5 extra="w-full bg-white" texts={{ text1: 'View profile', text2: ' ' }} styles={{ text1: '!text-lg text-black/70 !font-bold' }} icons={{ icon2: LuScanText }} showDefault={showDefault} />
                    <SelectMenuItem5 extra="w-full bg-white" icons={{ icon1: FiSettings, icon2: undefined }} texts={{ text1: 'Settings', text2: ' ' }} styles={{ text1: '!text-lg text-black/70 !font-bold' }} showDefault={showDefault} />
                    <DropdownLine1 extra="bg-black/5 w-full !h-[2px] mb-0.5" />
                    <SelectMenuItem5 extra="w-full bg-white" texts={{ text1: 'View profile', text2: ' ' }} styles={{ text1: '!text-lg text-black/70 !font-bold' }} icons={{ icon2: LuScanText }} showDefault={showDefault} />
                    <SelectMenuItem5 extra="w-full bg-white" icons={{ icon1: FiSettings }} texts={{ text1: 'Settings', text2: ' ' }} styles={{ text1: '!text-lg text-black/70 !font-bold' }} showDefault={showDefault} />
                    <DropdownLine1 extra="bg-black/5 w-full !h-[2px] mb-0.5" />
                    <SelectMenuItem5 extra="w-full bg-white" texts={{ text1: 'Sign out', text2: ' ' }} styles={{ text1: '!text-lg text-black/70 !font-bold' }} icons={{ icon1: ImExit, icon2: LuScanText }} showDefault={showDefault} />
                </>
            )}
        </div>
    );
}


// ─────────────────────────────────────────────
// SELECT COMPONENTS (Select1-10)
// Wrapper templates — internal calls use new API
// Add texts/icons/styles params for overriding the label/hint
// ─────────────────────────────────────────────

export function Select1({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    inputProps = {},
    ...rootProps
}) {
    const label = showDefault ? (texts.label ?? 'Team member *') : texts.label;
    const hint  = showDefault ? (texts.hint  ?? 'This is a hint text to help user.') : texts.hint;

    return (
        <div style={divStyle} className={extra ?? ''} {...rootProps}>
            {children || (
                <>
                    {label && (
                        <LabelBadge4
                            extra="bg-white !ring-0 mb-1 !px-0 pr-1 !gap-1"
                            texts={{ text1: label }}
                            icons={{ icon1: icons.labelIcon }}
                            styles={{ icon1: '!text-black/40 w-5 h-5', text1: 'text-black/50 font-bold text-md' }}
                            showDefault={showDefault}
                        />
                    )}
                    <div className="w-90">
                        <SelectMenuItem2
                            extra="w-full !py-2.5 bg-white ring-1 ring-black/20"
                            icons={{ icon1: IoIosArrowDown }}
                            styles={{ text1: '!text-base', icon1: 'text-black/50 !w-4 !h-4' }}
                            showDefault={showDefault}
                        />
                        <div className="w-full h-60 overflow-auto shadow-sm/40 shadow-black/40 mt-2 p-1 rounded-2xl">
                            <SelectMenuItem1 extra="w-full !py-2.5 bg-white ring-0" texts={{ text1: 'James Williams', text2: '@James' }} styles={{ text1: '!text-base' }} showDefault={showDefault} />
                            <SelectMenuItem2 extra="w-full !py-2.5 !bg-black/3 ring-0" styles={{ text1: '!text-base', icon1: '!w-4 !h-4' }} showDefault={showDefault} />
                            <SelectMenuItem1 extra="w-full !py-2.5 bg-white ring-0" texts={{ text1: 'Aliyah Jackson', text2: '@Aliyah' }} styles={{ text1: '!text-base' }} showDefault={showDefault} />
                            <SelectMenuItem1 extra="w-full !py-2.5 bg-white ring-0" texts={{ text1: 'Bumi Saraya', text2: '@Bumi' }} styles={{ text1: '!text-base' }} showDefault={showDefault} />
                        </div>
                    </div>
                    {hint && <p className={`text-black/50 ${styles.hint ?? ''}`}>{hint}</p>}
                </>
            )}
        </div>
    );
}

export function Select2({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const label = showDefault ? (texts.label ?? 'Team member *') : texts.label;
    const hint  = showDefault ? (texts.hint  ?? 'This is a hint text to help user.') : texts.hint;

    return (
        <div style={divStyle} className={extra ?? ''} {...rootProps}>
            {children || (
                <>
                    {label && (
                        <LabelBadge4
                            extra="bg-white !ring-0 mb-1 !px-0 pr-1 !gap-1"
                            texts={{ text1: label }}
                            icons={{ icon1: icons.labelIcon }}
                            styles={{ icon1: '!text-black/40 w-5 h-5', text1: 'text-black/50 font-bold text-md' }}
                            showDefault={showDefault}
                        />
                    )}
                    <div className="w-90">
                        <SelectMenuItem2
                            extra="w-full !py-2.5 bg-white ring-1 ring-black/20 !bg-[#FAFAFA]"
                            texts={{ text1: 'Select team member', text2: ' ' }}
                            icons={{ icon1: IoIosArrowDown }}
                            styles={{ text1: '!text-lg font-medium text-black/40', icon1: '!text-black/50 !w-4 !h-4' }}
                            showDefault={showDefault}
                        />
                    </div>
                    {hint && <p className={`text-black/50 ${styles.hint ?? ''}`}>{hint}</p>}
                </>
            )}
        </div>
    );
}

export function Select3({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const label = showDefault ? (texts.label ?? 'Team member *') : texts.label;
    const hint  = showDefault ? (texts.hint  ?? 'This is a hint text to help user.') : texts.hint;

    return (
        <div style={divStyle} className={extra ?? ''} {...rootProps}>
            {children || (
                <>
                    {label && (
                        <LabelBadge4
                            extra="bg-white !ring-0 mb-1 !px-0 pr-1 !gap-1"
                            texts={{ text1: label }}
                            icons={{ icon1: icons.labelIcon }}
                            styles={{ icon1: '!text-black/40 w-5 h-5', text1: 'text-black/50 font-bold text-md' }}
                            showDefault={showDefault}
                        />
                    )}
                    <div className="w-90">
                        <SelectMenuItem5
                            extra="w-full !py-2.5 bg-white ring-1 ring-black/20"
                            icons={{ icon2: IoIosArrowDown }}
                            styles={{ text1: '!text-base', icon2: '!text-black/40' }}
                            showDefault={showDefault}
                        />
                        <div className="w-full h-60 overflow-auto shadow-sm/40 shadow-black/40 mt-2 p-1 rounded-2xl">
                            <SelectMenuItem3 extra="w-full !py-2.5 bg-white ring-0" texts={{ text1: 'James Williams', text2: '@James' }} styles={{ text1: '!text-base' }} showDefault={showDefault} />
                            <SelectMenuItem5 extra="w-full !py-2.5 !bg-black/3 ring-0" styles={{ text1: '!text-base' }} showDefault={showDefault} />
                            <SelectMenuItem3 extra="w-full !py-2.5 bg-white ring-0" texts={{ text1: 'Aliyah Jackson', text2: '@Aliyah' }} styles={{ text1: '!text-base' }} showDefault={showDefault} />
                            <SelectMenuItem3 extra="w-full !py-2.5 bg-white ring-0" texts={{ text1: 'Bumi Saraya', text2: '@Bumi' }} styles={{ text1: '!text-base' }} showDefault={showDefault} />
                        </div>
                    </div>
                    {hint && <p className={`text-black/50 ${styles.hint ?? ''}`}>{hint}</p>}
                </>
            )}
        </div>
    );
}

export function Select4({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const label = showDefault ? (texts.label ?? 'Team member *') : texts.label;
    const hint  = showDefault ? (texts.hint  ?? 'This is a hint text to help user.') : texts.hint;

    return (
        <div style={divStyle} className={extra ?? ''} {...rootProps}>
            {children || (
                <>
                    {label && (
                        <LabelBadge4
                            extra="bg-white !ring-0 mb-1 !px-0 pr-1 !gap-1"
                            texts={{ text1: label }}
                            icons={{ icon1: icons.labelIcon }}
                            styles={{ icon1: '!text-black/40 w-5 h-5', text1: 'text-black/50 font-bold text-md' }}
                            showDefault={showDefault}
                        />
                    )}
                    <div className="w-90">
                        <SelectMenuItem5
                            extra="w-full !py-2.5 bg-white ring-1 ring-black/20 !bg-[#FAFAFA]"
                            texts={{ text1: 'Select team member', text2: ' ' }}
                            icons={{ icon2: IoIosArrowDown }}
                            styles={{ text1: '!text-lg font-medium text-black/40', icon1: '!text-black/50', icon2: '!text-black/50' }}
                            showDefault={showDefault}
                        />
                    </div>
                    {hint && <p className={`text-black/50 ${styles.hint ?? ''}`}>{hint}</p>}
                </>
            )}
        </div>
    );
}

export function Select5({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const label = showDefault ? (texts.label ?? 'Team member *') : texts.label;
    const hint  = showDefault ? (texts.hint  ?? 'This is a hint text to help user.') : texts.hint;

    return (
        <div style={divStyle} className={extra ?? ''} {...rootProps}>
            {children || (
                <>
                    {label && (
                        <LabelBadge4
                            extra="bg-white !ring-0 mb-1 !px-0 pr-1 !gap-1"
                            texts={{ text1: label }}
                            icons={{ icon1: icons.labelIcon }}
                            styles={{ icon1: '!text-black/40 w-5 h-5', text1: 'text-black/50 font-bold text-md' }}
                            showDefault={showDefault}
                        />
                    )}
                    <div className="w-90">
                        <SelectMenuItem6
                            extra="w-full !py-2.5 bg-white ring-1 ring-black/20"
                            icons={{ icon1: IoIosArrowDown }}
                            styles={{ text1: '!text-base', icon1: '!text-black/40' }}
                            showDefault={showDefault}
                        />
                        <div className="w-full h-60 overflow-auto shadow-sm/40 shadow-black/40 mt-2 p-1 rounded-2xl">
                            <SelectMenuItem4 extra="w-full !py-2.5 bg-white ring-0" texts={{ text1: 'James Williams', text2: '@James' }} styles={{ text1: '!text-base' }} showDefault={showDefault} />
                            <SelectMenuItem6 extra="w-full !py-2.5 !bg-black/3 ring-0" styles={{ text1: '!text-base', icon1: 'text-purple-500' }} showDefault={showDefault} />
                            <SelectMenuItem4 extra="w-full !py-2.5 bg-white ring-0" texts={{ text1: 'Aliyah Jackson', text2: '@Aliyah' }} styles={{ text1: '!text-base' }} showDefault={showDefault} />
                            <SelectMenuItem4 extra="w-full !py-2.5 bg-white ring-0" texts={{ text1: 'Bumi Saraya', text2: '@Bumi' }} styles={{ text1: '!text-base' }} showDefault={showDefault} />
                        </div>
                    </div>
                    {hint && <p className={`text-black/50 ${styles.hint ?? ''}`}>{hint}</p>}
                </>
            )}
        </div>
    );
}

export function Select6({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const label = showDefault ? (texts.label ?? 'Team member *') : texts.label;
    const hint  = showDefault ? (texts.hint  ?? 'This is a hint text to help user.') : texts.hint;

    return (
        <div style={divStyle} className={extra ?? ''} {...rootProps}>
            {children || (
                <>
                    {label && (
                        <LabelBadge4
                            extra="bg-white !ring-0 mb-1 !px-0 pr-1 !gap-1"
                            texts={{ text1: label }}
                            icons={{ icon1: icons.labelIcon }}
                            styles={{ icon1: '!text-black/40 w-5 h-5', text1: 'text-black/50 font-bold text-md' }}
                            showDefault={showDefault}
                        />
                    )}
                    <div className="w-90">
                        <SelectMenuItem8
                            extra="w-full !py-2.5 bg-white ring-1 ring-black/20"
                            icons={{ icon1: IoIosArrowDown }}
                            styles={{ text1: '!text-base', icon1: '!text-black/40' }}
                            showDefault={showDefault}
                        />
                        <div className="w-full h-60 overflow-auto shadow-sm/40 shadow-black/40 mt-2 p-1 rounded-2xl">
                            <SelectMenuItem7 extra="w-full !py-2.5 bg-white ring-0" texts={{ text1: 'James Williams', text2: '@James' }} styles={{ text1: '!text-base' }} showDefault={showDefault} />
                            <SelectMenuItem8 extra="w-full !py-2.5 !bg-black/3 ring-0" styles={{ text1: '!text-base', icon1: 'text-purple-500' }} showDefault={showDefault} />
                            <SelectMenuItem7 extra="w-full !py-2.5 bg-white ring-0" texts={{ text1: 'Aliyah Jackson', text2: '@Aliyah' }} styles={{ text1: '!text-base' }} showDefault={showDefault} />
                            <SelectMenuItem7 extra="w-full !py-2.5 bg-white ring-0" texts={{ text1: 'Bumi Saraya', text2: '@Bumi' }} styles={{ text1: '!text-base' }} showDefault={showDefault} />
                        </div>
                    </div>
                    {hint && <p className={`text-black/50 ${styles.hint ?? ''}`}>{hint}</p>}
                </>
            )}
        </div>
    );
}

export function Select7({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const label = showDefault ? (texts.label ?? 'Team member *') : texts.label;
    const hint  = showDefault ? (texts.hint  ?? 'This is a hint text to help user.') : texts.hint;

    return (
        <div style={divStyle} className={extra ?? ''} {...rootProps}>
            {children || (
                <>
                    {label && (
                        <LabelBadge4
                            extra="bg-white !ring-0 mb-1 !px-0 pr-1 !gap-1"
                            texts={{ text1: label }}
                            icons={{ icon1: icons.labelIcon }}
                            styles={{ icon1: '!text-black/40 w-5 h-5', text1: 'text-black/50 font-bold text-md' }}
                            showDefault={showDefault}
                        />
                    )}
                    <div className="w-90">
                        <SelectMenuItem8
                            extra="w-full !py-2.5 bg-white ring-1 ring-black/20 !bg-[#FAFAFA]"
                            texts={{ text1: 'Select team member', text2: ' ' }}
                            icons={{ icon1: IoIosArrowDown }}
                            styles={{ text1: '!text-lg font-medium text-black/40', span1: '!bg-black/20', icon1: '!text-black/50' }}
                            showDefault={showDefault}
                        />
                    </div>
                    {hint && <p className={`text-black/50 ${styles.hint ?? ''}`}>{hint}</p>}
                </>
            )}
        </div>
    );
}

export function Select8({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const label = showDefault ? (texts.label ?? 'Search *') : texts.label;
    const hint  = showDefault ? (texts.hint  ?? 'This is a hint text to help user.') : texts.hint;

    return (
        <div style={divStyle} className={extra ?? ''} {...rootProps}>
            {children || (
                <>
                    {label && (
                        <LabelBadge4
                            extra="bg-white !ring-0 mb-1 !px-0 pr-1 !gap-1"
                            texts={{ text1: label }}
                            icons={{ icon1: icons.labelIcon }}
                            styles={{ icon1: '!text-black/40 w-5 h-5', text1: 'text-black/50 font-bold text-md' }}
                            showDefault={showDefault}
                        />
                    )}
                    <div className="w-90">
                        <SelectMenuItem5
                            extra="w-full !py-2.5 bg-white ring-1 ring-black/20"
                            icons={{ icon1: IoSearch }}
                            styles={{ text1: '!text-base', icon1: 'text-black/50 !w-6 !h-6' }}
                            showDefault={showDefault}
                        />
                        <div className="w-full h-60 overflow-auto shadow-sm/40 shadow-black/40 mt-2 p-1 rounded-2xl">
                            <SelectMenuItem1 extra="w-full !py-2.5 bg-white ring-0" texts={{ text1: 'James Williams', text2: '@James' }} styles={{ text1: '!text-base' }} showDefault={showDefault} />
                            <SelectMenuItem2 extra="w-full !py-2.5 !bg-black/3 ring-0" styles={{ text1: '!text-base', icon1: '!w-4 !h-4' }} showDefault={showDefault} />
                            <SelectMenuItem1 extra="w-full !py-2.5 bg-white ring-0" texts={{ text1: 'Aliyah Jackson', text2: '@Aliyah' }} styles={{ text1: '!text-base' }} showDefault={showDefault} />
                        </div>
                    </div>
                    {hint && <p className={`text-black/50 ${styles.hint ?? ''}`}>{hint}</p>}
                </>
            )}
        </div>
    );
}

export function Select9({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const label = showDefault ? (texts.label ?? 'Search *') : texts.label;
    const hint  = showDefault ? (texts.hint  ?? 'This is a hint text to help user.') : texts.hint;

    return (
        <div style={divStyle} className={extra ?? ''} {...rootProps}>
            {children || (
                <>
                    {label && (
                        <LabelBadge4
                            extra="bg-white !ring-0 mb-1 !px-0 pr-1 !gap-1"
                            texts={{ text1: label }}
                            icons={{ icon1: icons.labelIcon }}
                            styles={{ icon1: '!text-black/40 w-5 h-5', text1: 'text-black/50 font-bold text-md' }}
                            showDefault={showDefault}
                        />
                    )}
                    <div className="w-90">
                        <SelectMenuItem5
                            extra="w-full !py-2.5 bg-white ring-1 ring-black/20 !bg-[#FAFAFA]"
                            texts={{ text1: 'Search', text2: ' ' }}
                            icons={{ icon1: IoSearch }}
                            styles={{ text1: '!text-lg font-medium text-black/40', icon1: '!text-black/50 !w-6 !h-6' }}
                            showDefault={showDefault}
                        />
                    </div>
                    {hint && <p className={`text-black/50 ${styles.hint ?? ''}`}>{hint}</p>}
                </>
            )}
        </div>
    );
}

export function Select10({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    tags = [],
    children,
    showDefault = true,
    inputProps = {},
    ...rootProps
}) {
    const label = showDefault ? (texts.label ?? 'Search *') : texts.label;
    const hint  = showDefault ? (texts.hint  ?? 'This is a hint text to help user.') : texts.hint;
    // tags: array of Tag6 prop objects e.g. [{ texts: { text1: 'Alice' }, images: { image1: '...' } }]
    const tagList = showDefault ? (tags.length ? tags : [{}, {}, {}]) : tags;

    return (
        <div style={divStyle} className={extra ?? ''} {...rootProps}>
            {children || (
                <>
                    {label && (
                        <LabelBadge4
                            extra="bg-white !ring-0 mb-1 !px-0 pr-1 !gap-1"
                            texts={{ text1: label }}
                            icons={{ icon1: icons.labelIcon }}
                            styles={{ icon1: '!text-black/40 w-5 h-5', text1: 'text-black/50 font-bold text-md' }}
                            showDefault={showDefault}
                        />
                    )}
                    <div className="min-w-90 max-w-130">
                        <div className="ring-2 ring-purple-500 rounded-lg flex place-items-center px-1 py-1.5">
                            <Button5
                                icons={{ icon1: IoSearch }}
                                extra="!bg-white"
                                styles={{ icon1: '!fill-black/49 size-7' }}
                                showDefault={showDefault}
                            />
                            <div className="flex space-x-3 space-y-2 flex-wrap">
                                {tagList.map((tagProps, i) => (
                                    <Tag6 key={i} showDefault={showDefault} {...tagProps} />
                                ))}
                                <input type="text" className="min-w-20 w-fit flex-1" {...inputProps} />
                            </div>
                        </div>
                        <div className="w-full h-60 overflow-auto shadow-sm/40 shadow-black/40 mt-2 p-1 rounded-2xl">
                            <SelectMenuItem4 extra="w-full !py-2.5 bg-white ring-0" texts={{ text1: 'James Williams', text2: '@James' }} styles={{ text1: '!text-base' }} showDefault={showDefault} />
                            <SelectMenuItem6 extra="w-full !py-2.5 !bg-black/3 ring-0" styles={{ text1: '!text-base', icon1: '!w-4 !h-4' }} showDefault={showDefault} />
                            <SelectMenuItem4 extra="w-full !py-2.5 bg-white ring-0" texts={{ text1: 'Aliyah Jackson', text2: '@Aliyah' }} styles={{ text1: '!text-base' }} showDefault={showDefault} />
                            <SelectMenuItem4 extra="w-full !py-2.5 bg-white ring-0" texts={{ text1: 'Bumi Saraya', text2: '@Bumi' }} styles={{ text1: '!text-base' }} showDefault={showDefault} />
                        </div>
                    </div>
                    {hint && <p className={`text-black/50 ${styles.hint ?? ''}`}>{hint}</p>}
                </>
            )}
        </div>
    );
}


