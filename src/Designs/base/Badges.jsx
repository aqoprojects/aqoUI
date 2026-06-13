import { BsDot } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { FaCircle, FaCross } from "react-icons/fa6";


import React from 'react'

const Badges = () => {
  return (
    <div>
        <Badge1 /> <br />
        <Badge2 /> <br />
        <Badge3 /> <br />
        <LabelBadge1 /> <br />
        <LabelBadge2 /> <br />
        <LabelBadge3 /> <br />
        <LabelBadge4 /> <br />
        <LabelBadge5 /> <br />
        <LabelBadge6 /> <br />
    </div>
  )
}

export default Badges


// ── Badge1 ───────────────────────────────────
export function Badge1({
    extra,
    divStyle,
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const Icon1 = showDefault ? (icons.icon1 ?? MdCancel) : icons.icon1;

    return (
        <div
            className={`${extra ?? ''} w-10`}
            style={divStyle}
            {...rootProps}
        >
            {children || (Icon1 && <Icon1 className={`${styles.icon1 ?? ''} size-full`} />)}
        </div>
    );
}

// ── Badge2 ───────────────────────────────────
export function Badge2({
    extra,
    divStyle,
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const Icon1 = showDefault ? (icons.icon1 ?? MdCancel) : icons.icon1;

    return (
        <div
            className={`${extra ?? ''} w-fit bg-gray-400 p-1 rounded-full`}
            style={divStyle}
            {...rootProps}
        >
            {children || (Icon1 && <Icon1 className={`${styles.icon1 ?? ''} w-10 h-10`} />)}
        </div>
    );
}

// ── Badge3 ───────────────────────────────────
export function Badge3({
    extra,
    divStyle,
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const Icon1 = showDefault ? (icons.icon1 ?? MdCancel) : icons.icon1;

    return (
        <div
            className={`${extra ?? ''} w-fit bg-gray-400 p-1 rounded-lg`}
            style={divStyle}
            {...rootProps}
        >
            {children || (Icon1 && <Icon1 className={`${styles.icon1 ?? ''} w-10 h-10`} />)}
        </div>
    );
}

// ── LabelBadge1 ──────────────────────────────
// text-only badge — no showDefault needed (single slot)
export function LabelBadge1({
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
        <div
            className={`${extra ?? ''} text-black/50 bg-gray-200 ring-1 ring-gray-500 rounded-full w-fit px-2`}
            style={divStyle}
            {...rootProps}
        >
            {children || (text1 && <span className={styles.text1 ?? ''}>{text1}</span>)}
        </div>
    );
}

// ── LabelBadge2 ──────────────────────────────
// icon1 left · text right
export function LabelBadge2({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Label') : texts.text1;
    const Icon1 = showDefault ? (icons.icon1 ?? FaCircle) : icons.icon1;

    return (
        <div
            className={`${extra ?? ''} text-red-800 bg-red-100 ring-1 ring-red-400 rounded-full w-fit px-2 font-semibold flex items-center-safe gap-2`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {Icon1 && <Icon1 className={`${styles.icon1 ?? ''} fill-red-400 w-2 h-2`} />}
                    {text1 && <span className={styles.text1 ?? ''}>{text1}</span>}
                </>
            )}
        </div>
    );
}

// ── LabelBadge3 ──────────────────────────────
// image left · text right
export function LabelBadge3({
    extra,
    divStyle,
    texts = {},
    images = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1  = showDefault ? (texts.text1   ?? 'Label')      : texts.text1;
    const image1 = showDefault ? (images.image1 ?? '/image.jpg') : images.image1;

    return (
        <div
            className={`${extra ?? ''} text-red-800 bg-red-100 ring-1 ring-red-400 rounded-full w-fit px-2 font-semibold flex items-center-safe gap-2`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {image1 && (
                        <div className={`${styles.image1 ?? ''} w-5 h-5`}>
                            <img
                                src={image1}
                                className="size-full rounded-full object-cover"
                                alt=""
                            />
                        </div>
                    )}
                    {text1 && <span className={styles.text1 ?? ''}>{text1}</span>}
                </>
            )}
        </div>
    );
}

// ── LabelBadge4 ──────────────────────────────
// text left · icon right
export function LabelBadge4({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Label') : texts.text1;
    const Icon1 = showDefault ? (icons.icon1 ?? FaCircle) : icons.icon1;

    return (
        <div
            className={`${extra ?? ''} text-red-800 bg-red-100 ring-1 ring-red-400 rounded-full w-fit px-2 font-semibold flex items-center-safe gap-2`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {text1 && <span className={styles.text1 ?? ''}>{text1}</span>}
                    {Icon1 && <Icon1 className={`${styles.icon1 ?? ''} w-3 h-3 fill-red-400`} />}
                </>
            )}
        </div>
    );
}

// ── LabelBadge5 ──────────────────────────────
// icon left · text right  (uses FaCross default)
export function LabelBadge5({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Label') : texts.text1;
    const Icon1 = showDefault ? (icons.icon1 ?? FaCross) : icons.icon1;

    return (
        <div
            className={`${extra ?? ''} text-red-800 bg-red-100 ring-1 ring-red-400 rounded-full w-fit px-2 font-semibold flex items-center-safe gap-2`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {Icon1 && <Icon1 className={`${styles.icon1 ?? ''} fill-red-400 w-3 h-3`} />}
                    {text1 && <span className={styles.text1 ?? ''}>{text1}</span>}
                </>
            )}
        </div>
    );
}

// ── LabelBadge6 ──────────────────────────────
// icon-only badge
export function LabelBadge6({
    extra,
    divStyle,
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const Icon1 = showDefault ? (icons.icon1 ?? FaCross) : icons.icon1;

    return (
        <div
            className={`${extra ?? ''} text-red-800 bg-red-100 ring-1 ring-red-400 rounded-full w-fit px-2 py-2 font-semibold flex items-center-safe gap-2`}
            style={divStyle}
            {...rootProps}
        >
            {children || (Icon1 && <Icon1 className={`${styles.icon1 ?? ''} fill-red-400 w-3 h-3`} />)}
        </div>
    );
}


