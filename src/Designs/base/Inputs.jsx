import React, { useState } from 'react';
import { Badge1 } from './Badges';
import { Tag6 } from './Tags';
import { IoMail } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io'; 
import { GoQuestion } from "react-icons/go";
import { MdInfo } from 'react-icons/md';
import { CiBadgeDollar } from 'react-icons/ci';
import { IoCard } from 'react-icons/io5';
import { RxCopy } from 'react-icons/rx';

import { Button1 } from './Buttons';
import { SelectMenuItem2 } from './Dropdown';
import { LabelBadge1, LabelBadge2 } from './Badges';

// ====================== INPUT COMPONENTS ======================

const Inputs = () => {
  return (
    <div>
      <IFB1 /><br />
      <IFB2 /><br />
      <IFB3 /><br />
      <InputField1 /><br />
      <InputField2 /><br />
      <InputField3 /><br />
      <InputField4 /><br />
      <InputField5 /><br />
      <InputField6 /><br />
      <InputField7 /><br />
      <InputField8 /><br />
      <InputField9 /><br />
      <InputField10 /><br />
      <TextareaField1 /><br />
      <TextareaField2 /><br />
    </div>
  );
};

export default Inputs;



// ── IFB1 — default ring, focus purple ────────
export function IFB1({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    inputProps = {},
    ...rootProps
}) {
    return (
        <div
            className={`w-15 h-15 ring-2 ring-black/20 flex items-center justify-center rounded-lg focus-within:ring-purple-500 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={texts.text1}
                    placeholder="0"
                    className={`w-full h-full text-5xl font-bold text-center outline-none bg-transparent caret-transparent ${styles.input1 ?? ''}`}
                    {...inputProps}
                />
            )}
        </div>
    );
}

// ── IFB2 — purple ring, outline, focus red ───
export function IFB2({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    inputProps = {},
    ...rootProps
}) {
    return (
        <div
            className={`w-15 h-15 ring-2 ring-purple-500 flex items-center justify-center rounded-lg focus-within:ring-red-500 outline-2 outline-purple-500 outline-offset-4 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={texts.text1}
                    pattern="[0-9]"
                    placeholder="0"
                    className={`w-full h-full text-5xl font-bold text-center outline-none bg-transparent caret-transparent ${styles.input1 ?? ''}`}
                    {...inputProps}
                />
            )}
        </div>
    );
}

// ── IFB3 — disabled, faded ───────────────────
export function IFB3({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    inputProps = {},
    ...rootProps
}) {
    return (
        <div
            className={`w-15 h-15 ring-2 ring-black/20 flex items-center justify-center rounded-lg bg-black/5 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    disabled
                    value={texts.text1}
                    placeholder="0"
                    className={`w-full h-full text-5xl font-bold text-center outline-none bg-transparent caret-transparent text-black/40 ${styles.input1 ?? ''}`}
                    {...inputProps}
                />
            )}
        </div>
    );
}


// ─────────────────────────────────────────────
// INPUT FIELDS
//
// icons.icon1 / icons.icon2 accept an object:
//   { icon: IconComponent, extra: 'tailwind classes', iconStyle: 'icon className' }
//
// showDefault logic for each slot:
//   label      → showDefault ? (texts.text1 ?? 'Default') : texts.text1
//   Icon1/2    → showDefault ? (icons.iconN?.icon ?? DefaultIcon) : icons.iconN?.icon
//   placeholder → showDefault ? (texts.placeholder1 ?? 'placeholder') : texts.placeholder1
//   hint       → showDefault ? (texts.text2 ?? 'Hint') : texts.text2
// ─────────────────────────────────────────────

// ── InputField1 — email field, left + right icon ──
export function InputField1({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    inputProps = {},
    wrapperProps = {},
    ...rootProps
}) {
    const label       = showDefault ? (texts.text1       ?? 'Email *')                        : texts.text1;
    const placeholder = showDefault ? (texts.placeholder1 ?? 'Shola@aqoUI.com')          : texts.placeholder1;
    const hint        = showDefault ? (texts.text2       ?? 'This is a hint text to help user.') : texts.text2;
    const Icon1       = showDefault ? (icons.icon1?.icon ?? IoMail)                            : icons.icon1?.icon;
    const Icon2       = showDefault ? (icons.icon2?.icon ?? MdInfo)                            : icons.icon2?.icon;

    return (
        <div style={divStyle} {...rootProps}>
            {children || (
                <>
                    {label && <label className={styles.text1 ?? ''}>{label}</label>}

                    <div
                        className={`flex gap-1 ring-2 ring-black/30 w-fit px-1 py-1.5 rounded-lg items-center justify-center my-2 focus-within:ring-purple-500 ${extra ?? ''}`}
                        {...wrapperProps}
                    >
                        {Icon1 && (
                            <Badge1
                                icons={{ icon1: Icon1 }}
                                extra={`w-7 h-7 ${icons.icon1?.extra ?? ''}`}
                                styles={{ icon1: icons.icon1?.iconStyle ?? '' }}
                            />
                        )}
                        {placeholder !== undefined && (
                            <input
                                placeholder={placeholder}
                                className={`text-lg outline-0 ${styles.input1 ?? ''}`}
                                {...inputProps}
                            />
                        )}
                        {Icon2 && (
                            <Badge1
                                icons={{ icon1: Icon2 }}
                                extra={`w-6 h-6 ${icons.icon2?.extra ?? ''}`}
                                styles={{ icon1: icons.icon2?.iconStyle ?? '' }}
                            />
                        )}
                    </div>
                </>
            )}
            {hint && <span className={styles.text2 ?? ''}>{hint}</span>}
        </div>
    );
}


// ── InputField2 — disabled email field ───────
export function InputField2({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    inputProps = {},
    wrapperProps = {},
    ...rootProps
}) {
    const label       = showDefault ? (texts.text1       ?? 'Email *')                          : texts.text1;
    const placeholder = showDefault ? (texts.placeholder1 ?? 'Shola@aqoUI.com')           : texts.placeholder1;
    const hint        = showDefault ? (texts.text2       ?? 'This is a hint text to help user.') : texts.text2;
    const Icon1       = showDefault ? (icons.icon1?.icon ?? IoMail)                             : icons.icon1?.icon;
    const Icon2       = showDefault ? (icons.icon2?.icon ?? MdInfo)                             : icons.icon2?.icon;

    return (
        <div style={divStyle} {...rootProps}>
            {children || (
                <>
                    {label && <label className={styles.text1 ?? ''}>{label}</label>}
                    <div
                        className={`flex gap-1 ring-2 ring-black/30 w-fit px-1 py-1.5 rounded-lg items-center justify-center my-2 bg-black/5 ${extra ?? ''}`}
                        {...wrapperProps}
                    >
                        {Icon1 && (
                            <Badge1
                                icons={{ icon1: Icon1 }}
                                extra={`w-7 h-7 ${icons.icon1?.extra ?? ''}`}
                                styles={{ icon1: icons.icon1?.iconStyle ?? '' }}
                            />
                        )}
                        {placeholder !== undefined && (
                            <input
                                type="text"
                                placeholder={placeholder}
                                disabled
                                className={`text-lg outline-0 ${styles.input1 ?? ''}`}
                                {...inputProps}
                            />
                        )}
                        {Icon2 && (
                            <Badge1
                                icons={{ icon1: Icon2 }}
                                extra={`w-6 h-6 ${icons.icon2?.extra ?? ''}`}
                                styles={{ icon1: icons.icon2?.iconStyle ?? '' }}
                            />
                        )}
                    </div>
                </>
            )}
            {hint && <span className={styles.text2 ?? ''}>{hint}</span>}
        </div>
    );
}


// ── InputField3 — phone field with country dropdown ──
export function InputField3({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    inputProps = {},
    wrapperProps = {},
    dropdownItems = ['US', 'NG', 'UK', 'CA', 'FR', 'DE'],
    defaultItem = 'US',
    ...rootProps
}) {
    const label       = showDefault ? (texts.text1       ?? 'Phone number *')                   : texts.text1;
    const placeholder = showDefault ? (texts.placeholder1 ?? 'Shola@aqoUI.com')           : texts.placeholder1;
    const hint        = showDefault ? (texts.text2       ?? 'This is a hint text to help user.') : texts.text2;
    const Icon2       = showDefault ? (icons.icon2?.icon ?? GoQuestion)                         : icons.icon2?.icon;

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(defaultItem);

    return (
        <div style={divStyle} {...rootProps}>
            {children || (
                <>
                    {label && <label className={styles.text1 ?? ''}>{label}</label>}
                    <div
                        className={`flex gap-1 ring-2 ring-black/30 w-fit px-1 py-1.5 rounded-lg items-center justify-center my-2 focus-within:ring-purple-500 ${extra ?? ''}`}
                        {...wrapperProps}
                    >
                        <div className="flex relative">
                            <div onClick={() => setOpen(!open)}>
                                <Button1
                                    extra="!p-0 !px-1 !w-18 justify-center !gap-2 bg-white"
                                    icons={{ icon2: IoIosArrowDown }}
                                    styles={{ text: 'text-black font-semibold text-xl', icon1: 'hidden', icon2: '!fill-black' }}
                                    texts={{ text1: selected }}
                                />
                            </div>
                            {open && (
                                <div className="absolute top-full mt-1 left-0 bg-white shadow-lg shadow-black/40 p-1 rounded-sm z-20 min-w-[60px] overflow-hidden">
                                    {dropdownItems.map((c) => (
                                        <div key={c} onClick={() => { setSelected(c); setOpen(false); }}>
                                            <SelectMenuItem2
                                                extra="w-full !p-1 rounded-none bg-white hover:bg-gray-100"
                                                texts={{ text1: c, text2: ' ' }}
                                                styles={{ icon1: 'hidden' }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        {placeholder !== undefined && (
                            <input
                                type="text"
                                placeholder={placeholder}
                                className={`text-lg outline-0 ${styles.input1 ?? ''}`}
                                {...inputProps}
                            />
                        )}
                        {Icon2 && (
                            <Badge1
                                icons={{ icon1: Icon2 }}
                                extra={`w-5 h-5 text-black/50 ${icons.icon2?.extra ?? ''}`}
                            />
                        )}
                    </div>
                </>
            )}
            {hint && <span className={styles.text2 ?? ''}>{hint}</span>}
        </div>
    );
}


// ── InputField4 — disabled phone field ───────
export function InputField4({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    inputProps = {},
    wrapperProps = {},
    ...rootProps
}) {
    const label       = showDefault ? (texts.text1       ?? 'Phone number *')                   : texts.text1;
    const placeholder = showDefault ? (texts.placeholder1 ?? 'Shola@aqoUI.com')           : texts.placeholder1;
    const hint        = showDefault ? (texts.text2       ?? 'This is a hint text to help user.') : texts.text2;
    const Icon2       = showDefault ? (icons.icon2?.icon ?? GoQuestion)                         : icons.icon2?.icon;

    return (
        <div style={divStyle} {...rootProps}>
            {children || (
                <>
                    {label && <label className={styles.text1 ?? ''}>{label}</label>}
                    <div
                        className={`flex gap-1 ring-2 ring-black/30 w-fit px-1 py-1.5 rounded-lg items-center justify-center my-2 bg-black/6 ${extra ?? ''}`}
                        {...wrapperProps}
                    >
                        <Button1
                            extra="!p-0 !px-1 !w-18 justify-center !gap-2 !bg-transparent"
                            icons={{ icon2: IoIosArrowDown }}
                            styles={{ text: 'text-black/30 font-semibold text-xl', icon1: 'hidden', icon2: '!fill-black/30' }}
                            texts={{ text1: texts.dropdownLabel ?? 'US' }}
                        />
                        {placeholder !== undefined && (
                            <input
                                type="text"
                                placeholder={placeholder}
                                disabled
                                className={`text-lg outline-0 ${styles.input1 ?? ''}`}
                                {...inputProps}
                            />
                        )}
                        {Icon2 && (
                            <Badge1
                                icons={{ icon1: Icon2 }}
                                extra={`w-5 h-5 text-black/50 ${icons.icon2?.extra ?? ''}`}
                            />
                        )}
                    </div>
                </>
            )}
            {hint && <span className={styles.text2 ?? ''}>{hint}</span>}
        </div>
    );
}


// ── InputField5 — sale amount with currency dropdown (right) ──
export function InputField5({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    inputProps = {},
    wrapperProps = {},
    dropdownItems = ['USD', 'NGN', 'EUR', 'CAD', 'FR', 'DE'],
    defaultItem = 'USD',
    ...rootProps
}) {
    const label        = showDefault ? (texts.text1       ?? 'Sale amount *')                    : texts.text1;
    const placeholder  = showDefault ? (texts.placeholder1 ?? 'Shola@aqoUI.com')          : texts.placeholder1;
    const hint         = showDefault ? (texts.text2       ?? 'This is a hint text to help user.') : texts.text2;
    const Icon2        = showDefault ? (icons.icon2?.icon ?? GoQuestion)                        : icons.icon2?.icon;
    const showDollar   = showDefault || !!icons.icon1;

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(defaultItem);

    return (
        <div style={divStyle} {...rootProps}>
            {children || (
                <>
                    {label && <label className={styles.text1 ?? ''}>{label}</label>}
                    <div
                        className={`flex gap-1 ring-2 ring-black/30 w-fit px-1 py-1.5 rounded-lg items-center justify-center my-2 focus-within:ring-purple-500 ${extra ?? ''}`}
                        {...wrapperProps}
                    >
                        {showDollar && (
                            <Badge1 icons={{ icon1: icons.icon1 ?? CiBadgeDollar }} extra="!w-7" />
                        )}
                        {placeholder !== undefined && (
                            <input
                                type="text"
                                placeholder={placeholder}
                                className={`text-lg outline-0 ${styles.input1 ?? ''}`}
                                {...inputProps}
                            />
                        )}
                        {Icon2 && (
                            <Badge1
                                icons={{ icon1: Icon2 }}
                                extra={`w-5 h-5 text-black/50 ${icons.icon2?.extra ?? ''}`}
                            />
                        )}
                        <div className="flex relative">
                            <div onClick={() => setOpen(!open)}>
                                <Button1
                                    extra="!p-0 !px-1 !w-18 justify-center !gap-2 bg-white"
                                    icons={{ icon2: IoIosArrowDown }}
                                    styles={{ text: 'text-black font-semibold text-xl', icon1: 'hidden', icon2: '!fill-black' }}
                                    texts={{ text1: selected }}
                                />
                            </div>
                            {open && (
                                <div className="absolute top-full mt-1 left-0 bg-white shadow-lg shadow-black/40 p-1 rounded-sm z-20 min-w-[60px] overflow-hidden">
                                    {dropdownItems.map((c) => (
                                        <div key={c} onClick={() => { setSelected(c); setOpen(false); }}>
                                            <SelectMenuItem2
                                                extra="w-full !p-1 rounded-none bg-white hover:bg-gray-100"
                                                texts={{ text1: c, text2: ' ' }}
                                                styles={{ icon1: 'hidden' }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
            {hint && <span className={styles.text2 ?? ''}>{hint}</span>}
        </div>
    );
}


// ── InputField6 — disabled sale amount + currency ──
export function InputField6({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    inputProps = {},
    wrapperProps = {},
    dropdownItems = ['USD', 'NGN', 'EUR', 'CAD', 'FR', 'DE'],
    defaultItem = 'USD',
    ...rootProps
}) {
    const label       = showDefault ? (texts.text1       ?? 'Sale amount *')                    : texts.text1;
    const placeholder = showDefault ? (texts.placeholder1 ?? 'Shola@aqoUI.com')           : texts.placeholder1;
    const hint        = showDefault ? (texts.text2       ?? 'This is a hint text to help user.') : texts.text2;
    const Icon2       = showDefault ? (icons.icon2?.icon ?? GoQuestion)                        : icons.icon2?.icon;
    const showDollar  = showDefault || !!icons.icon1;

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(defaultItem);

    return (
        <div style={divStyle} {...rootProps}>
            {children || (
                <>
                    {label && <label className={styles.text1 ?? ''}>{label}</label>}
                    <div
                        className={`flex gap-1 ring-2 ring-black/30 w-fit px-1 py-1.5 rounded-lg items-center justify-center my-2 focus-within:ring-purple-500 bg-black/5 ${extra ?? ''}`}
                        {...wrapperProps}
                    >
                        {showDollar && (
                            <Badge1 icons={{ icon1: icons.icon1 ?? CiBadgeDollar }} extra="!w-7" />
                        )}
                        {placeholder !== undefined && (
                            <input
                                type="text"
                                placeholder={placeholder}
                                className={`text-lg outline-0 ${styles.input1 ?? ''}`}
                                {...inputProps}
                            />
                        )}
                        {Icon2 && (
                            <Badge1
                                icons={{ icon1: Icon2 }}
                                extra={`w-5 h-5 text-black/50 ${icons.icon2?.extra ?? ''}`}
                            />
                        )}
                        <div className="flex relative">
                            <div onClick={() => setOpen(!open)}>
                                <Button1
                                    extra="!p-0 !px-1 !w-18 justify-center !gap-2 bg-transparent"
                                    icons={{ icon2: IoIosArrowDown }}
                                    styles={{ text: 'text-black/30 font-semibold text-xl', icon1: 'hidden', icon2: '!fill-black/30' }}
                                    texts={{ text1: selected }}
                                />
                            </div>
                            {open && (
                                <div className="absolute top-full mt-1 left-0 bg-white shadow-lg shadow-black/40 p-1 rounded-sm z-20 min-w-[60px] overflow-hidden">
                                    {dropdownItems.map((c) => (
                                        <div key={c} onClick={() => { setSelected(c); setOpen(false); }}>
                                            <SelectMenuItem2
                                                extra="w-full !p-1 rounded-none bg-white hover:bg-gray-100"
                                                texts={{ text1: c, text2: ' ' }}
                                                styles={{ icon1: 'hidden' }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
            {hint && <span className={styles.text2 ?? ''}>{hint}</span>}
        </div>
    );
}


// ── InputField7 — URL field with http:// prefix ──
export function InputField7({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    inputProps = {},
    wrapperProps = {},
    ...rootProps
}) {
    const label       = showDefault ? (texts.text1        ?? 'Website *')                        : texts.text1;
    const prefix      = showDefault ? (texts.prefix       ?? 'http://')                          : texts.prefix;
    const placeholder = showDefault ? (texts.placeholder1 ?? 'www.aqoUI.com')               : texts.placeholder1;
    const hint        = showDefault ? (texts.text2        ?? 'This is a hint text to help user.') : texts.text2;
    const Icon2       = showDefault ? (icons.icon2?.icon  ?? GoQuestion)                         : icons.icon2?.icon;

    return (
        <div style={divStyle} {...rootProps}>
            {children || (
                <>
                    {label && <label className={styles.text1 ?? ''}>{label}</label>}
                    <div
                        className={`flex gap-1 ring-2 ring-black/30 w-fit rounded-lg items-center justify-center my-2 ${extra ?? ''}`}
                        {...wrapperProps}
                    >
                        {prefix && (
                            <LabelBadge1
                                extra="rounded-none h-10 !w-18 flex items-center font-semibold bg-transparent !ring-0 border-r-1"
                                texts={{ text1: prefix }}
                                styles={{ text1: 'text-center' }}
                            />
                        )}
                        <div className="flex justify-center items-center ring-2 focus-within:ring-purple-500">
                            {placeholder !== undefined && (
                                <input
                                    type="text"
                                    placeholder={placeholder}
                                    className={`text-lg outline-0 max-w-60 pl-3 ${styles.input1 ?? ''}`}
                                    {...inputProps}
                                />
                            )}
                            {Icon2 && (
                                <Badge1
                                    icons={{ icon1: Icon2 }}
                                    extra={`w-5 h-5 text-black/50 ${icons.icon2?.extra ?? ''}`}
                                />
                            )}
                        </div>
                    </div>
                </>
            )}
            {hint && <span className={styles.text2 ?? ''}>{hint}</span>}
        </div>
    );
}


// ── InputField8 — card number field ──────────
export function InputField8({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    inputProps = {},
    wrapperProps = {},
    ...rootProps
}) {
    const label       = showDefault ? (texts.text1        ?? 'Card number *')                    : texts.text1;
    const placeholder = showDefault ? (texts.placeholder1 ?? 'Card number')                      : texts.placeholder1;
    const hint        = showDefault ? (texts.text2        ?? 'This is a hint text to help user.') : texts.text2;
    const Icon2       = showDefault ? (icons.icon2?.icon  ?? GoQuestion)                         : icons.icon2?.icon;
    const showCard    = showDefault || !!icons.icon1;

    return (
        <div style={divStyle} {...rootProps}>
            {children || (
                <>
                    {label && <label className={styles.text1 ?? ''}>{label}</label>}
                    <div
                        className={`flex gap-2 ring-2 ring-black/30 w-fit px-2 py-1.5 rounded-lg items-center justify-center my-2 focus-within:ring-purple-500 ${extra ?? ''}`}
                        {...wrapperProps}
                    >
                        {showCard && (
                            <Badge1 icons={{ icon1: icons.icon1 ?? IoCard }} extra="!w-7" />
                        )}
                        {placeholder !== undefined && (
                            <input
                                type="text"
                                placeholder={placeholder}
                                className={`text-lg outline-0 ${styles.input1 ?? ''}`}
                                {...inputProps}
                            />
                        )}
                        {Icon2 && (
                            <Badge1
                                icons={{ icon1: Icon2 }}
                                extra={`w-5 h-5 text-black/50 ${icons.icon2?.extra ?? ''}`}
                            />
                        )}
                    </div>
                </>
            )}
            {hint && <span className={styles.text2 ?? ''}>{hint}</span>}
        </div>
    );
}


// ── InputField9 — multi-tag user input ───────
// tags — array of Tag6 prop objects: [{ images, texts, ... }]
export function InputField9({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    tags = [],
    inputProps = {},
    wrapperProps = {},
    ...rootProps
}) {
    const label    = showDefault ? (texts.text1       ?? 'Users *')                            : texts.text1;
    const hint     = showDefault ? (texts.text2       ?? 'This is a hint text to help user.')  : texts.text2;
    const Icon2    = showDefault ? (icons.icon2?.icon ?? GoQuestion)                           : icons.icon2?.icon;
    const tagList  = showDefault ? (tags.length ? tags : [{}, {}, {}]) : tags;

    return (
        <div style={divStyle} {...rootProps}>
            {children || (
                <>
                    {label && <label className={styles.text1 ?? ''}>{label}</label>}
                    <div
                        className={`flex gap-2 ring-2 ring-black/30 w-fit px-2 py-1.5 rounded-lg items-center justify-center my-2 focus-within:ring-purple-500 ${extra ?? ''}`}
                        {...wrapperProps}
                    >
                        <div className="cursor-pointer">
                            <div className="rounded-lg flex place-items-center">
                                <div className="flex gap-2 flex-wrap">
                                    {tagList.map((tagProps, i) => (
                                        <Tag6 key={i} showDefault={showDefault} {...tagProps} />
                                    ))}
                                    <input type="text" className="min-w-20 w-fit flex-1" {...inputProps} />
                                </div>
                            </div>
                        </div>
                        {Icon2 && (
                            <Badge1
                                icons={{ icon1: Icon2 }}
                                extra={`w-5 h-5 text-black/50 ${icons.icon2?.extra ?? ''}`}
                            />
                        )}
                    </div>
                </>
            )}
            {hint && <span className={styles.text2 ?? ''}>{hint}</span>}
        </div>
    );
}


// ── InputField10 — URL field with copy button ──
export function InputField10({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    inputProps = {},
    wrapperProps = {},
    ...rootProps
}) {
    const label       = showDefault ? (texts.text1        ?? 'Website *')                        : texts.text1;
    const placeholder = showDefault ? (texts.placeholder1 ?? 'www.aqoUI.com')               : texts.placeholder1;
    const hint        = showDefault ? (texts.text2        ?? 'This is a hint text to help user.') : texts.text2;
    const copyLabel   = showDefault ? (texts.copyLabel    ?? 'copy')                              : texts.copyLabel;
    const Icon2       = showDefault ? (icons.icon2?.icon  ?? GoQuestion)                         : icons.icon2?.icon;

    return (
        <div style={divStyle} {...rootProps}>
            {children || (
                <>
                    {label && <label className={styles.text1 ?? ''}>{label}</label>}
                    <div
                        className={`flex gap-1 ring-2 ring-black/30 w-fit rounded-lg items-center justify-center my-2 ${extra ?? ''}`}
                        {...wrapperProps}
                    >
                        <div className="flex justify-center items-center ring-2 focus-within:ring-purple-500">
                            {placeholder !== undefined && (
                                <input
                                    type="text"
                                    placeholder={placeholder}
                                    className={`text-lg outline-0 max-w-60 pl-3 ${styles.input1 ?? ''}`}
                                    {...inputProps}
                                />
                            )}
                            {Icon2 && (
                                <Badge1
                                    icons={{ icon1: Icon2 }}
                                    extra={`w-5 h-5 text-black/50 ${icons.icon2?.extra ?? ''}`}
                                />
                            )}
                        </div>
                        {copyLabel && (
                            <LabelBadge2
                                extra="rounded-none h-10 flex items-center font-semibold bg-transparent !ring-0 border-l-1 border-black"
                                texts={{ text1: copyLabel }}
                                icons={{ icon1: RxCopy }}
                                styles={{ text1: 'text-center', icon1: 'w-5 h-5' }}
                            />
                        )}
                    </div>
                </>
            )}
            {hint && <span className={styles.text2 ?? ''}>{hint}</span>}
        </div>
    );
}


// ─────────────────────────────────────────────
// TEXTAREA FIELDS
// ─────────────────────────────────────────────

// ── TextareaField1 ────────────────────────────
export function TextareaField1({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    textareaProps = {},
    ...rootProps
}) {
    const label       = showDefault ? (texts.text1        ?? 'Description *')                    : texts.text1;
    const placeholder = showDefault ? (texts.placeholder1 ?? 'Enter a description..')            : texts.placeholder1;
    const hint        = showDefault ? (texts.text2        ?? 'This is a hint text to help user.') : texts.text2;

    return (
        <div style={divStyle} {...rootProps}>
            {children || (
                <>
                    {label && <label className={styles.text1 ?? ''}>{label}</label>}
                    <div>
                        {placeholder !== undefined && (
                            <textarea
                                className={`w-full h-40 border border-gray-300 rounded-md p-3 font-semibold text-lg ${styles.textarea1 ?? ''}`}
                                placeholder={placeholder}
                                {...textareaProps}
                            />
                        )}
                    </div>
                </>
            )}
            {hint && <span className={styles.text2 ?? ''}>{hint}</span>}
        </div>
    );
}


// ── TextareaField2 ────────────────────────────
export function TextareaField2({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    textareaProps = {},
    ...rootProps
}) {
    const label       = showDefault ? (texts.text1        ?? 'Description *')                    : texts.text1;
    const placeholder = showDefault ? (texts.placeholder1 ?? 'Enter a description..')            : texts.placeholder1;
    const hint        = showDefault ? (texts.text2        ?? 'This is a hint text to help user.') : texts.text2;

    return (
        <div style={divStyle} {...rootProps}>
            {children || (
                <>
                    {label && <label className={styles.text1 ?? ''}>{label}</label>}
                    <div>
                        {placeholder !== undefined && (
                            <textarea
                                className={`w-full h-40 border border-gray-300 rounded-md p-3 font-semibold text-lg ${styles.textarea1 ?? ''}`}
                                placeholder={placeholder}
                                {...textareaProps}
                            />
                        )}
                    </div>
                </>
            )}
            {hint && <span className={styles.text2 ?? ''}>{hint}</span>}
        </div>
    );
}











