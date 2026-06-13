import { FaRegCircle } from 'react-icons/fa';
import { ImSpinner2 } from 'react-icons/im';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaApple, FaXTwitter, FaInstagram, FaAndroid } from 'react-icons/fa6';
import React from 'react'

const Buttons = () => {
    return (
        <div>
            <Button1/> <br />
            <Button2/> <br />
            <Button3/> <br />
            <Button4/> <br />
            <Button5/> <br />
            <Button6/> <br />
            <Button7/> <br />
            <Button8/> <br />
            <Button9/> <br />
            <GmailButton1/> <br />
            <GmailButton2/> <br />
            <GmailButton3/> <br />
            <GmailButton4/> <br />
            <FaceBookButton1/> <br />
            <FaceBookButton2/> <br />
            <FaceBookButton3/> <br />
            <FaceBookButton4/> <br />
            <AppleButton1/> <br />
            <AppleButton2/> <br />
            <AppleButton3/> <br />
            <AppleButton4/> <br />
            <XButton1/> <br />
            <XButton2/> <br />
            <XButton3/> <br />
            <XButton4/> <br />
            <InstagramButton1/> <br />
            <InstagramButton2/> <br />
            <InstagramButton3/> <br />
            <InstagramButton4/> <br />
            <AndroidButton1/> <br />
            <AndroidButton2/> <br />
            <AndroidButton3/> <br />
            <AndroidButton4/> <br />
            <AppStoreButton1/> <br />
            <AppStoreButton2/> <br />
        </div>
    )
}

export default Buttons


export function Button1({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    disabled = false,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Button CTA') : texts.text1;
    const Icon1 = showDefault ? (icons.icon1 ?? FaRegCircle) : icons.icon1;
    const Icon2 = showDefault ? (icons.icon2 ?? FaRegCircle) : icons.icon2;

    return (
        <button
            className={`bg-[#7F56D9] flex items-center-safe justify-between gap-2 px-3.5 py-2 text-white font-boldy rounded-md w-fit ${extra ?? ''}`}
            style={divStyle}
            disabled={disabled}
            {...rootProps}
        >
            {children || (
                <>
                    {Icon1 && <Icon1 className={`${styles.icon1 ?? ''} size-5 fill-gray-100`} />}
                    {text1 && <span className={styles.text1 ?? ''}>{text1}</span>}
                    {Icon2 && <Icon2 className={`${styles.icon2 ?? ''} size-5 fill-gray-100`} />}
                </>
            )}
        </button>
    );
}

// ── Button2 ──────────────────────────────────
export function Button2({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Button CTA') : texts.text1;
    const Icon1 = showDefault ? (icons.icon1 ?? FaRegCircle) : icons.icon1;
    const Icon2 = showDefault ? (icons.icon2 ?? FaRegCircle) : icons.icon2;

    return (
        <button
            className={`${extra ?? ''} bg-[#7F56D9] flex items-center-safe justify-between gap-2 px-3.5 py-2 text-white font-boldy rounded-md w-fit outline-[#7F56D9] outline-2 outline-offset-3`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {Icon1 && <Icon1 className={`${styles.icon1 ?? ''} size-5 fill-gray-100`} />}
                    {text1 && <span className={styles.text1 ?? ''}>{text1}</span>}
                    {Icon2 && <Icon2 className={`${styles.icon2 ?? ''} size-5 fill-gray-100`} />}
                </>
            )}
        </button>
    );
}

// ── Button3 ──────────────────────────────────
export function Button3({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Button CTA') : texts.text1;
    const Icon1 = showDefault ? (icons.icon1 ?? FaRegCircle) : icons.icon1;
    const Icon2 = showDefault ? (icons.icon2 ?? FaRegCircle) : icons.icon2;

    return (
        <button
            className={`${extra ?? ''} bg-[#F5F5F5] flex items-center-safe justify-between gap-2 px-3.5 py-2 border-2 border-[#E9EAEB] text-black/20 font-boldy rounded-md w-fit`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {Icon1 && <Icon1 className={`${styles.icon1 ?? ''} size-5 fill-black/20`} />}
                    {text1 && <span className={styles.text1 ?? ''}>{text1}</span>}
                    {Icon2 && <Icon2 className={`${styles.icon2 ?? ''} size-5 fill-black/20`} />}
                </>
            )}
        </button>
    );
}

// ── Button4 ──────────────────────────────────
export function Button4({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Submitting...') : texts.text1;
    const Icon1 = showDefault ? (icons.icon1 ?? ImSpinner2) : icons.icon1;

    return (
        <button
            className={`${extra ?? ''} bg-[#7F56D9] flex items-center-safe justify-between gap-2 px-3.5 py-2 text-white font-boldy rounded-md w-fit`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {Icon1 && <Icon1 className={`${styles.icon1 ?? ''} size-5 fill-white`} />}
                    {text1 && <span className={`${styles.text1 ?? ''} text-xl`}>{text1}</span>}
                </>
            )}
        </button>
    );
}

// ── Button5 ──────────────────────────────────
export function Button5({
    extra,
    divStyle,
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const Icon1 = showDefault ? (icons.icon1 ?? ImSpinner2) : icons.icon1;

    return (
        <button
            className={`${extra ?? ''} bg-[#7F56D9] flex items-center-safe justify-between gap-2 px-2.5 py-2.5 text-white font-boldy rounded-md w-fit`}
            style={divStyle}
            {...rootProps}
        >
            {children || (Icon1 && <Icon1 className={`${styles.icon1 ?? ''} size-5 fill-white`} />)}
        </button>
    );
}

// ── Button6 ──────────────────────────────────
export function Button6({
    extra,
    divStyle,
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const Icon1 = showDefault ? (icons.icon1 ?? ImSpinner2) : icons.icon1;

    return (
        <button
            className={`${extra ?? ''} bg-[#7F56D9] flex items-center-safe justify-between gap-2 px-2.5 py-2.5 text-white font-boldy rounded-md w-fit outline-[#7F56D9] outline-2 outline-offset-3`}
            style={divStyle}
            {...rootProps}
        >
            {children || (Icon1 && <Icon1 className={`${styles.icon1 ?? ''} size-5 fill-white`} />)}
        </button>
    );
}

// ── Button7 ──────────────────────────────────
export function Button7({
    extra,
    divStyle,
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const Icon1 = showDefault ? (icons.icon1 ?? FaRegCircle) : icons.icon1;

    return (
        <button
            className={`${extra ?? ''} bg-[#F5F5F5] flex items-center-safe justify-between gap-2 px-2.5 py-2.5 text-white font-boldy rounded-md w-fit border-2 border-[#E9EAEB]`}
            style={divStyle}
            {...rootProps}
        >
            {children || (Icon1 && <Icon1 className={`${styles.icon1 ?? ''} size-5 fill-black/20`} />)}
        </button>
    );
}

// ── Button8 ──────────────────────────────────
export function Button8({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Button CTA') : texts.text1;
    const Icon1 = showDefault ? (icons.icon1 ?? FaRegCircle) : icons.icon1;
    const Icon2 = showDefault ? (icons.icon2 ?? FaRegCircle) : icons.icon2;

    return (
        <button
            className={`${extra ?? ''} flex items-center-safe justify-between gap-2 px-3.5 py-2 text-[#7F56D9] font-boldy rounded-md w-fit underline-[#7F56D9] underline-offset-4 underline`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {Icon1 && <Icon1 className={`${styles.icon1 ?? ''} size-5 fill-[#7F56D9]`} />}
                    {text1 && <span className={styles.text1 ?? ''}>{text1}</span>}
                    {Icon2 && <Icon2 className={`${styles.icon2 ?? ''} size-5 fill-[#7F56D9]`} />}
                </>
            )}
        </button>
    );
}

// ── Button9 ──────────────────────────────────
export function Button9({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Button CTA') : texts.text1;
    const Icon1 = showDefault ? (icons.icon1 ?? FaRegCircle) : icons.icon1;
    const Icon2 = showDefault ? (icons.icon2 ?? FaRegCircle) : icons.icon2;

    return (
        <button
            className={`${extra ?? ''} flex items-center-safe justify-between gap-2 px-1 py-0.5 text-[#7F56D9] font-boldy rounded-md w-fit ring-2 ring-[#7F56D9]`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {Icon1 && <Icon1 className={`${styles.icon1 ?? ''} size-5 fill-[#7F56D9]`} />}
                    {text1 && <span className={styles.text1 ?? ''}>{text1}</span>}
                    {Icon2 && <Icon2 className={`${styles.icon2 ?? ''} size-5 fill-[#7F56D9]`} />}
                </>
            )}
        </button>
    );
}

// ─────────────────────────────────────────────
// SOCIAL BUTTONS (all with children + showDefault applied)
// ─────────────────────────────────────────────

export function GmailButton1({ extra, divStyle, texts = {}, children, showDefault = true, ...rootProps }) {
    const text1 = showDefault ? (texts.text1 ?? 'Sign in with Google') : texts.text1;
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] bg-[#FFFFFF] px-3 py-1.5 rounded-md`} style={divStyle} {...rootProps}>
            {children || (<>{showDefault && <div className="w-7 h-7"><FcGoogle className="size-full" /></div>}{text1 && <p>{text1}</p>}</>)}
        </div>
    );
}

export function GmailButton2({ extra, divStyle, children, showDefault = true, ...rootProps }) {
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] bg-[#FFFFFF] px-1.5 py-1.5 rounded-md`} style={divStyle} {...rootProps}>
            {children || (showDefault && <div className="w-7 h-7"><FcGoogle className="size-full" /></div>)}
        </div>
    );
}

export function GmailButton3({ extra, divStyle, texts = {}, children, showDefault = true, ...rootProps }) {
    const text1 = showDefault ? (texts.text1 ?? 'Sign in with Google') : texts.text1;
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] bg-[#FFFFFF] px-3 py-1.5 rounded-md outline-[#7F56D9] outline-2 outline-offset-3`} style={divStyle} {...rootProps}>
            {children || (<>{showDefault && <div className="w-7 h-7"><FcGoogle className="size-full" /></div>}{text1 && <p>{text1}</p>}</>)}
        </div>
    );
}

export function GmailButton4({ extra, divStyle, children, showDefault = true, ...rootProps }) {
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] bg-[#FFFFFF] px-1.5 py-1.5 rounded-md outline-[#7F56D9] outline-2 outline-offset-3`} style={divStyle} {...rootProps}>
            {children || (showDefault && <div className="w-7 h-7"><FcGoogle className="size-full" /></div>)}
        </div>
    );
}

export function FaceBookButton1({ extra, divStyle, texts = {}, children, showDefault = true, ...rootProps }) {
    const text1 = showDefault ? (texts.text1 ?? 'Sign in with Facebook') : texts.text1;
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] text-white bg-[#1877F2] px-3 py-1.5 rounded-md`} style={divStyle} {...rootProps}>
            {children || (<>{showDefault && <div className="w-7 h-7"><FaFacebook className="size-full fill-white" /></div>}{text1 && <p>{text1}</p>}</>)}
        </div>
    );
}

export function FaceBookButton2({ extra, divStyle, children, showDefault = true, ...rootProps }) {
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] bg-[#1877F2] px-1.5 py-1.5 rounded-md`} style={divStyle} {...rootProps}>
            {children || (showDefault && <div className="w-7 h-7"><FaFacebook className="size-full fill-white" /></div>)}
        </div>
    );
}

export function FaceBookButton3({ extra, divStyle, texts = {}, children, showDefault = true, ...rootProps }) {
    const text1 = showDefault ? (texts.text1 ?? 'Sign in with Facebook') : texts.text1;
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] text-white bg-[#1877F2] px-3 py-1.5 rounded-md outline-[#7F56D9] outline-2 outline-offset-3`} style={divStyle} {...rootProps}>
            {children || (<>{showDefault && <div className="w-7 h-7"><FaFacebook className="size-full fill-white" /></div>}{text1 && <p>{text1}</p>}</>)}
        </div>
    );
}

export function FaceBookButton4({ extra, divStyle, children, showDefault = true, ...rootProps }) {
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] bg-[#1877F2] px-1.5 py-1.5 rounded-md outline-[#7F56D9] outline-2 outline-offset-3`} style={divStyle} {...rootProps}>
            {children || (showDefault && <div className="w-7 h-7"><FaFacebook className="size-full fill-white" /></div>)}
        </div>
    );
}

export function AppleButton1({ extra, divStyle, texts = {}, children, showDefault = true, ...rootProps }) {
    const text1 = showDefault ? (texts.text1 ?? 'Sign in with Apple') : texts.text1;
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] text-white bg-black px-3 py-1.5 rounded-md`} style={divStyle} {...rootProps}>
            {children || (<>{showDefault && <div className="w-7 h-7"><FaApple className="size-full fill-white" /></div>}{text1 && <p>{text1}</p>}</>)}
        </div>
    );
}

export function AppleButton2({ extra, divStyle, children, showDefault = true, ...rootProps }) {
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] bg-black px-1.5 py-1.5 rounded-md`} style={divStyle} {...rootProps}>
            {children || (showDefault && <div className="w-7 h-7"><FaApple className="size-full fill-white" /></div>)}
        </div>
    );
}

export function AppleButton3({ extra, divStyle, texts = {}, children, showDefault = true, ...rootProps }) {
    const text1 = showDefault ? (texts.text1 ?? 'Sign in with Apple') : texts.text1;
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] text-white bg-black px-3 py-1.5 rounded-md outline-[#7F56D9] outline-2 outline-offset-3`} style={divStyle} {...rootProps}>
            {children || (<>{showDefault && <div className="w-7 h-7"><FaApple className="size-full fill-white" /></div>}{text1 && <p>{text1}</p>}</>)}
        </div>
    );
}

export function AppleButton4({ extra, divStyle, children, showDefault = true, ...rootProps }) {
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] bg-black px-1.5 py-1.5 rounded-md outline-[#7F56D9] outline-2 outline-offset-3`} style={divStyle} {...rootProps}>
            {children || (showDefault && <div className="w-7 h-7"><FaApple className="size-full fill-white" /></div>)}
        </div>
    );
}

export function XButton1({ extra, divStyle, texts = {}, children, showDefault = true, ...rootProps }) {
    const text1 = showDefault ? (texts.text1 ?? 'Sign in with X') : texts.text1;
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] text-white bg-black px-3 py-1.5 rounded-md`} style={divStyle} {...rootProps}>
            {children || (<>{showDefault && <div className="w-7 h-7"><FaXTwitter className="size-full fill-white" /></div>}{text1 && <p>{text1}</p>}</>)}
        </div>
    );
}

export function XButton2({ extra, divStyle, children, showDefault = true, ...rootProps }) {
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] bg-black px-1.5 py-1.5 rounded-md`} style={divStyle} {...rootProps}>
            {children || (showDefault && <div className="w-7 h-7"><FaXTwitter className="size-full fill-white" /></div>)}
        </div>
    );
}

export function XButton3({ extra, divStyle, texts = {}, children, showDefault = true, ...rootProps }) {
    const text1 = showDefault ? (texts.text1 ?? 'Sign in with X') : texts.text1;
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] text-white bg-black px-3 py-1.5 rounded-md outline-[#7F56D9] outline-2 outline-offset-3`} style={divStyle} {...rootProps}>
            {children || (<>{showDefault && <div className="w-7 h-7"><FaXTwitter className="size-full fill-white" /></div>}{text1 && <p>{text1}</p>}</>)}
        </div>
    );
}

export function XButton4({ extra, divStyle, children, showDefault = true, ...rootProps }) {
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] bg-black px-1.5 py-1.5 rounded-md outline-[#7F56D9] outline-2 outline-offset-3`} style={divStyle} {...rootProps}>
            {children || (showDefault && <div className="w-7 h-7"><FaXTwitter className="size-full fill-white" /></div>)}
        </div>
    );
}

export function InstagramButton1({ extra, divStyle, texts = {}, children, showDefault = true, ...rootProps }) {
    const text1 = showDefault ? (texts.text1 ?? 'Sign in with Instagram') : texts.text1;
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] text-white bg-black px-3 py-1.5 rounded-md`} style={divStyle} {...rootProps}>
            {children || (<>{showDefault && <div className="w-7 h-7"><FaInstagram className="size-full fill-white" /></div>}{text1 && <p>{text1}</p>}</>)}
        </div>
    );
}

export function InstagramButton2({ extra, divStyle, children, showDefault = true, ...rootProps }) {
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] bg-black px-1.5 py-1.5 rounded-md`} style={divStyle} {...rootProps}>
            {children || (showDefault && <div className="w-7 h-7"><FaInstagram className="size-full fill-white" /></div>)}
        </div>
    );
}

export function InstagramButton3({ extra, divStyle, texts = {}, children, showDefault = true, ...rootProps }) {
    const text1 = showDefault ? (texts.text1 ?? 'Sign in with Instagram') : texts.text1;
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] text-white bg-black px-3 py-1.5 rounded-md outline-[#7F56D9] outline-2 outline-offset-3`} style={divStyle} {...rootProps}>
            {children || (<>{showDefault && <div className="w-7 h-7"><FaInstagram className="size-full fill-white" /></div>}{text1 && <p>{text1}</p>}</>)}
        </div>
    );
}

export function InstagramButton4({ extra, divStyle, children, showDefault = true, ...rootProps }) {
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] bg-black px-1.5 py-1.5 rounded-md outline-[#7F56D9] outline-2 outline-offset-3`} style={divStyle} {...rootProps}>
            {children || (showDefault && <div className="w-7 h-7"><FaInstagram className="size-full fill-white" /></div>)}
        </div>
    );
}

export function AndroidButton1({ extra, divStyle, texts = {}, children, showDefault = true, ...rootProps }) {
    const text1 = showDefault ? (texts.text1 ?? 'Sign in with Android') : texts.text1;
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] text-white bg-black px-3 py-1.5 rounded-md`} style={divStyle} {...rootProps}>
            {children || (<>{showDefault && <div className="w-7 h-7"><FaAndroid className="size-full fill-white" /></div>}{text1 && <p>{text1}</p>}</>)}
        </div>
    );
}

export function AndroidButton2({ extra, divStyle, children, showDefault = true, ...rootProps }) {
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] bg-black px-1.5 py-1.5 rounded-md`} style={divStyle} {...rootProps}>
            {children || (showDefault && <div className="w-7 h-7"><FaAndroid className="size-full fill-white" /></div>)}
        </div>
    );
}

export function AndroidButton3({ extra, divStyle, texts = {}, children, showDefault = true, ...rootProps }) {
    const text1 = showDefault ? (texts.text1 ?? 'Sign in with Android') : texts.text1;
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] text-white bg-black px-3 py-1.5 rounded-md outline-[#7F56D9] outline-2 outline-offset-3`} style={divStyle} {...rootProps}>
            {children || (<>{showDefault && <div className="w-7 h-7"><FaAndroid className="size-full fill-white" /></div>}{text1 && <p>{text1}</p>}</>)}
        </div>
    );
}

export function AndroidButton4({ extra, divStyle, children, showDefault = true, ...rootProps }) {
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] bg-black px-1.5 py-1.5 rounded-md outline-[#7F56D9] outline-2 outline-offset-3`} style={divStyle} {...rootProps}>
            {children || (showDefault && <div className="w-7 h-7"><FaAndroid className="size-full fill-white" /></div>)}
        </div>
    );
}

export function AppStoreButton1({ extra, divStyle, texts = {}, styles = {}, children, showDefault = true, iconProps = {}, textWrapProps = {}, text1Props = {}, text2Props = {}, ...rootProps }) {
    const text1 = showDefault ? (texts.text1 ?? 'Download on the') : texts.text1;
    const text2 = showDefault ? (texts.text2 ?? 'App Store') : texts.text2;
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-[#D5D7DA] text-white bg-black px-3 py-2.5 rounded-lg`} style={divStyle} {...rootProps}>
            {children || (<>{showDefault && <div className={`w-10 h-10 ${styles.icon1 ?? ''}`} {...iconProps}><FaApple className="size-full fill-white" /></div>}<div {...textWrapProps}>{text1 && <p className={`text-sm ${styles.text1 ?? ''}`} {...text1Props}>{text1}</p>}{text2 && <p className={`text-2xl font-medium leading-5 ${styles.text2 ?? ''}`} {...text2Props}>{text2}</p>}</div></>)}
        </div>
    );
}

export function AppStoreButton2({ extra, divStyle, texts = {}, styles = {}, children, showDefault = true, iconProps = {}, textWrapProps = {}, text1Props = {}, text2Props = {}, ...rootProps }) {
    const text1 = showDefault ? (texts.text1 ?? 'Download on the') : texts.text1;
    const text2 = showDefault ? (texts.text2 ?? 'Mac App Store') : texts.text2;
    return (
        <div className={`${extra ?? ''} flex justify-between items-center-safe gap-2 w-fit ring-1 ring-black text-white bg-white px-3 py-2.5 rounded-lg`} style={divStyle} {...rootProps}>
            {children || (<>{showDefault && <div className={`w-10 h-10 ${styles.icon1 ?? ''}`} {...iconProps}><FaApple className="size-full fill-black" /></div>}<div className="text-black" {...textWrapProps}>{text1 && <p className={`text-sm ${styles.text1 ?? ''}`} {...text1Props}>{text1}</p>}{text2 && <p className={`text-2xl font-medium leading-5 ${styles.text2 ?? ''}`} {...text2Props}>{text2}</p>}</div></>)}
        </div>
    );
}
