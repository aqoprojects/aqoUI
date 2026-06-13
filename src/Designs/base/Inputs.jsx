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













// ====================== SINGLE BOX INPUTS ======================

// export function IFB1({ extra, textValue, children, childrenStyle = {}, default: isDefault = true }) {
//   return (
//     <div className={`w-15 h-15 ring-2 ring-black/20 flex items-center justify-center rounded-lg focus-within:ring-purple-500 ${extra}`}>
//       {children || <input type="text" inputMode="numeric" maxLength={1} value={textValue} className={`w-full h-full text-5xl font-bold text-center outline-none bg-transparent caret-transparent ${childrenStyle.input1}`} placeholder="0" />}
//     </div>
//   );
// }

// export function IFB2({ extra, textValue, children, childrenStyle = {}, default: isDefault = true }) {
//   return (
//     <div className={`w-15 h-15 ring-2 ring-purple-500 flex items-center justify-center rounded-lg focus-within:ring-red-500 outline-2 outline-purple-500 outline-offset-4 ${extra}`}>
//       {children || <input type="text" inputMode="numeric" maxLength={1} value={textValue} pattern='[0-9]' className={`w-full h-full text-5xl font-bold text-center outline-none bg-transparent caret-transparent ${childrenStyle.input1}`} placeholder="0" />}
//     </div>
//   );
// }

// export function IFB3({ extra, textValue, children, childrenStyle = {}, default: isDefault = true }) {
//   return (
//     <div className={`w-15 h-15 ring-2 ring-black/20 flex items-center justify-center rounded-lg bg-black/5 ${extra}`}>
//       {children || <input type="text" inputMode="numeric" maxLength={1} disabled value={textValue} className={`w-full h-full text-5xl font-bold text-center outline-none bg-transparent caret-transparent text-black/40 ${childrenStyle.input1}`} placeholder="0" />}
//     </div>
//   );
// }

// export function InputField1({
//   extra,
//   textValue1,
//   textValue2,
//   placeholder1,
//   icon: Icon1 = {},
//   icon2: Icon2 = {},
//   children,
//   childrenStyle = {},
//   default: isDefault = true,
//   ...props
// }) {
//   // 👇 per-element logic
//   const showLabel = isDefault || textValue1;
//   const showLeftIcon = isDefault || Icon1.icon || Icon1.extra;
//   const showRightIcon = isDefault || Icon2.icon || Icon2.extra;
//   const showHint = isDefault || textValue2;

//   return (
//     <div>
//       {children || (
//         <>
//           {showLabel && (
//             <label className={`${childrenStyle.text1}`}>
//               {textValue1 || 'Email *'}
//             </label>
//           )}

//           <div className={`flex gap-1 ring-2 ring-black/30 w-fit px-1 py-1.5 rounded-lg items-center justify-center my-2 focus-within:ring-purple-500 ${extra}`}>
            
//             {showLeftIcon && (
//               <Badge1
//                 icon={Icon1.icon || IoMail}
//                 extra={`w-7 h-7 ${Icon1.extra}`}
//                 childrenStyle={{icon1: Icon1.icon1style}}
//               />
//             )}

//             <input
//               placeholder={placeholder1 || 'Shola@aqoUI.com'}
//               className={`text-lg outline-0 ${childrenStyle.input1}`}
//               {...props}
//             />

//             {showRightIcon && (
//               <Badge1
//                 icon={Icon2.icon || MdInfo}
//                 extra={`w-6 h-6 ${Icon2.extra}`}
//               />
//             )}
//           </div>
//         </>
//       )}

//       {showHint && (
//         <span className={`${childrenStyle.text2}`}>
//           {textValue2 || 'This is a hint text to help user.'}
//         </span>
//       )}
//     </div>
//   );
// }

// export function InputField2({ extra, textValue1, textValue2, icon: Icon1 = {}, icon2: Icon2 = {}, children, childrenStyle = {}, default: isDefault = true }) {
//   return (
//     <div>
//       {children || (
//         <>
//           {isDefault && <label className={`${childrenStyle.text1}`}>{textValue1 || 'Email *'}</label>}
//           <div className={`flex gap-1 ring-2 ring-black/30 w-fit px-1 py-1.5 rounded-lg items-center justify-center my-2 bg-black/5 ${extra}`}>
//             {isDefault && <Badge1 icon={Icon1.icon || IoMail} extra={`w-7 h-7 ${Icon1.extra}`} />}
//             <input type="text" placeholder='Shola@aqoUI.com' className={`text-lg outline-0 ${childrenStyle.input1}`} disabled />
//             {isDefault && <Badge1 icon={Icon2.icon || MdInfo} extra={`w-6 h-6 ${Icon2.extra}`} />}
//           </div>
//         </>
//       )}
//       {isDefault && <span className={`${childrenStyle.text2}`}>{textValue2 || 'This is a hint text to help user.'}</span>}
//     </div>
//   );
// }

// export function InputField3({ extra, textValue1, textValue2, icon: Icon1 = {}, icon2: Icon2 = {}, children, childrenStyle = {}, default: isDefault = true }) {
//   const countries = ["US", "NG", "UK", "CA", "FR", "DE"];
//   const [open, setOpen] = useState(false);
//   const [country, setCountry] = useState("US");

//   return (
//     <div>
//       {children || (
//         <>
//           {isDefault && <label className={`${childrenStyle.text1}`}>{textValue1 || "Phone number *"}</label>}
//           <div className={`flex gap-1 ring-2 ring-black/30 w-fit px-1 py-1.5 rounded-lg items-center justify-center my-2 focus-within:ring-purple-500 ${extra}`}>
//             <div className="flex relative">
//               <div onClick={() => setOpen(!open)}>
//                 <Button1 extra={"!p-0 !px-1 !w-18 justify-center !gap-2 bg-white"} icon2={IoIosArrowDown} childrenStyle={{ text: "text-black font-semibold text-xl", icon1: "hidden", icon2: "!fill-black" }} textValue={country} />
//               </div>
//               {open && (
//                 <div className="absolute top-full mt-1 left-0 bg-white shadow-lg shadow-black/40 p-1 rounded-sm z-20 min-w-[60px] overflow-hidden">
//                   {countries.map((c) => (
//                     <div key={c} onClick={() => { setCountry(c); setOpen(false); }}>
//                       <SelectMenuItem2 extra={"w-full !p-1 rounded-none bg-white hover:bg-gray-100"} textValue1={c} textValue2={" "} childrenStyle={{ icon1: "hidden" }} />
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <input type="text" placeholder="Shola@aqoUI.com" className={`text-lg outline-0 ${childrenStyle.input1}`} />
//             {isDefault && <Badge1 icon={Icon2.icon || GoQuestion} extra={`w-5 h-5 text-black/50 ${Icon2.extra}`} />}
//           </div>
//         </>
//       )}
//       {isDefault && <span className={`${childrenStyle.text2}`}>{textValue2 || "This is a hint text to help user."}</span>}
//     </div>
//   );
// }

// export function InputField4({ extra, textValue1, textValue2, icon: Icon1 = {}, icon2: Icon2 = {}, children, childrenStyle = {}, default: isDefault = true }) {
//   return (
//     <div>
//       {children || (
//         <>
//           {isDefault && <label className={`${childrenStyle.text1}`}>{textValue1 || "Phone number *"}</label>}
//           <div className={`flex gap-1 ring-2 ring-black/30 w-fit px-1 py-1.5 rounded-lg items-center justify-center my-2 bg-black/6 ${extra}`}>
//             <Button1 extra={"!p-0 !px-1 !w-18 justify-center !gap-2 !bg-transparent"} icon2={IoIosArrowDown} childrenStyle={{ text: "text-black/30 font-semibold text-xl", icon1: "hidden", icon2: "!fill-black/30" }} textValue={'US'} />
//             <input type="text" placeholder="Shola@aqoUI.com" disabled className={`text-lg outline-0 ${childrenStyle.input1}`} />
//             {isDefault && <Badge1 icon={Icon2.icon || GoQuestion} extra={`w-5 h-5 text-black/50 ${Icon2.extra}`} />}
//           </div>
//         </>
//       )}
//       {isDefault && <span className={`${childrenStyle.text2}`}>{textValue2 || "This is a hint text to help user."}</span>}
//     </div>
//   );
// }

// export function InputField5({ extra, textValue1, textValue2, icon: Icon1 = {}, icon2: Icon2 = {}, children, childrenStyle = {}, default: isDefault = true }) {
//   const countries = ["USD", "NGN", "EUR", "CAD", "FR", "DE"];
//   const [open, setOpen] = useState(false);
//   const [country, setCountry] = useState("US");

//   return (
//     <div>
//       {children || (
//         <>
//           {isDefault && <label className={`${childrenStyle.text1}`}>{textValue1 || "Sale amount *"}</label>}
//           <div className={`flex gap-1 ring-2 ring-black/30 w-fit px-1 py-1.5 rounded-lg items-center justify-center my-2 focus-within:ring-purple-500 ${extra}`}>
//             {isDefault && <Badge1 icon={CiBadgeDollar} extra={'!w-7'} />}
//             <input type="text" placeholder="Shola@aqoUI.com" className={`text-lg outline-0 ${childrenStyle.input1}`} />
//             {isDefault && <Badge1 icon={Icon2.icon || GoQuestion} extra={`w-5 h-5 text-black/50 ${Icon2.extra}`} />}
//             <div className="flex relative">
//               <div onClick={() => setOpen(!open)}>
//                 <Button1 extra={"!p-0 !px-1 !w-18 justify-center !gap-2 bg-white"} icon2={IoIosArrowDown} childrenStyle={{ text: "text-black font-semibold text-xl", icon1: "hidden", icon2: "!fill-black" }} textValue={country} />
//               </div>
//               {open && (
//                 <div className="absolute top-full mt-1 left-0 bg-white shadow-lg shadow-black/40 p-1 rounded-sm z-20 min-w-[60px] overflow-hidden">
//                   {countries.map((c) => (
//                     <div key={c} onClick={() => { setCountry(c); setOpen(false); }}>
//                       <SelectMenuItem2 extra={"w-full !p-1 rounded-none bg-white hover:bg-gray-100"} textValue1={c} textValue2={" "} childrenStyle={{ icon1: "hidden" }} />
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </>
//       )}
//       {isDefault && <span className={`${childrenStyle.text2}`}>{textValue2 || "This is a hint text to help user."}</span>}
//     </div>
//   );
// }

// export function InputField6({ extra, textValue1, textValue2, icon: Icon1 = {}, icon2: Icon2 = {}, children, childrenStyle = {}, default: isDefault = true }) {
//   const countries = ["USD", "NGN", "EUR", "CAD", "FR", "DE"];
//   const [open, setOpen] = useState(false);
//   const [country, setCountry] = useState("US");

//   return (
//     <div>
//       {children || (
//         <>
//           {isDefault && <label className={`${childrenStyle.text1}`}>{textValue1 || "Sale amount *"}</label>}
//           <div className={`flex gap-1 ring-2 ring-black/30 w-fit px-1 py-1.5 rounded-lg items-center justify-center my-2 focus-within:ring-purple-500 bg-black/5 ${extra}`}>
//             {isDefault && <Badge1 icon={CiBadgeDollar} extra={'!w-7'} />}
//             <input type="text" placeholder="Shola@aqoUI.com" className={`text-lg outline-0 ${childrenStyle.input1}`} />
//             {isDefault && <Badge1 icon={Icon2.icon || GoQuestion} extra={`w-5 h-5 text-black/50 ${Icon2.extra}`} />}
//             <div className="flex relative">
//               <div onClick={() => setOpen(!open)}>
//                 <Button1 extra={"!p-0 !px-1 !w-18 justify-center !gap-2 bg-transparent"} icon2={IoIosArrowDown} childrenStyle={{ text: "text-black/30 font-semibold text-xl", icon1: "hidden", icon2: "!fill-black/30" }} textValue={country} />
//               </div>
//               {open && (
//                 <div className="absolute top-full mt-1 left-0 bg-white shadow-lg shadow-black/40 p-1 rounded-sm z-20 min-w-[60px] overflow-hidden">
//                   {countries.map((c) => (
//                     <div key={c} onClick={() => { setCountry(c); setOpen(false); }}>
//                       <SelectMenuItem2 extra={"w-full !p-1 rounded-none bg-white hover:bg-gray-100"} textValue1={c} textValue2={" "} childrenStyle={{ icon1: "hidden" }} />
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </>
//       )}
//       {isDefault && <span className={`${childrenStyle.text2}`}>{textValue2 || "This is a hint text to help user."}</span>}
//     </div>
//   );
// }

// export function InputField7({ extra, textValue1, textValue2, icon: Icon1 = {}, icon2: Icon2 = {}, children, childrenStyle = {}, default: isDefault = true }) {
//   return (
//     <div>
//       {children || (
//         <>
//           {isDefault && <label className={`${childrenStyle.text1}`}>{textValue1 || "Website *"}</label>}
//           <div className={`flex gap-1 ring-2 ring-black/30 w-fit rounded-lg items-center justify-center my-2 ${extra}`}>
//             <LabelBadge1 extra={'rounded-none h-10 !w-18 flex items-center font-semibold bg-transparent !ring-0 border-r-1'} textValue={'http://'} childrenStyle={{ text: 'text-center' }} />
//             <div className='flex justify-center items-center ring-2 focus-within:ring-purple-500'>
//               <input type="text" placeholder="www.aqoUI.com" className={`text-lg outline-0 max-w-60 pl-3 ${childrenStyle.input1}`} />
//               {isDefault && <Badge1 icon={Icon2.icon || GoQuestion} extra={`w-5 h-5 text-black/50 ${Icon2.extra}`} />}
//             </div>
//           </div>
//         </>
//       )}
//       {isDefault && <span className={`${childrenStyle.text2}`}>{textValue2 || "This is a hint text to help user."}</span>}
//     </div>
//   );
// }

// export function InputField8({ extra, textValue1, textValue2, icon: Icon1 = {}, icon2: Icon2 = {}, children, childrenStyle = {}, default: isDefault = true }) {
//   return (
//     <div>
//       {children || (
//         <>
//           {isDefault && <label className={`${childrenStyle.text1}`}>{textValue1 || "Card number *"}</label>}
//           <div className={`flex gap-2 ring-2 ring-black/30 w-fit px-2 py-1.5 rounded-lg items-center justify-center my-2 focus-within:ring-purple-500 ${extra}`}>
//             {isDefault && <Badge1 icon={IoCard} extra={'!w-7'} />}
//             <input type="text" placeholder="Card number" className={`text-lg outline-0 ${childrenStyle.input1}`} />
//             {isDefault && <Badge1 icon={Icon2.icon || GoQuestion} extra={`w-5 h-5 text-black/50 ${Icon2.extra}`} />}
//           </div>
//         </>
//       )}
//       {isDefault && <span className={`${childrenStyle.text2}`}>{textValue2 || "This is a hint text to help user."}</span>}
//     </div>
//   );
// }

// export function InputField9({ extra, textValue1, textValue2, icon: Icon1 = {}, icon2: Icon2 = {}, children, childrenStyle = {}, default: isDefault = true }) {
//   return (
//     <div>
//       {children || (
//         <>
//           {isDefault && <label className={`${childrenStyle.text1}`}>{textValue1 || "Users *"}</label>}
//           <div className={`flex gap-2 ring-2 ring-black/30 w-fit px-2 py-1.5 rounded-lg items-center justify-center my-2 focus-within:ring-purple-500 ${extra}`}>
//             <div className='cursor-pointer'>
//               <div className='rounded-lg flex place-items-center'>
//                 <div className='flex gap-2 flex-wrap'>
//                   <Tag6 />
//                   <Tag6 />
//                   <Tag6 />
//                   <input type="text" className='min-w-20 w-fit flex-1' />
//                 </div>
//               </div>
//             </div>
//             {isDefault && <Badge1 icon={Icon2.icon || GoQuestion} extra={`w-5 h-5 text-black/50 ${Icon2.extra}`} />}
//           </div>
//         </>
//       )}
//       {isDefault && <span className={`${childrenStyle.text2}`}>{textValue2 || "This is a hint text to help user."}</span>}
//     </div>
//   );
// }

// export function InputField10({ extra, textValue1, textValue2, icon: Icon1 = {}, icon2: Icon2 = {}, children, childrenStyle = {}, default: isDefault = true }) {
//   return (
//     <div>
//       {children || (
//         <>
//           {isDefault && <label className={`${childrenStyle.text1}`}>{textValue1 || "Website *"}</label>}
//           <div className={`flex gap-1 ring-2 ring-black/30 w-fit rounded-lg items-center justify-center my-2 ${extra}`}>
//             <div className='flex justify-center items-center ring-2 focus-within:ring-purple-500'>
//               <input type="text" placeholder="www.aqoUI.com" className={`text-lg outline-0 max-w-60 pl-3 ${childrenStyle.input1}`} />
//               {isDefault && <Badge1 icon={Icon2.icon || GoQuestion} extra={`w-5 h-5 text-black/50 ${Icon2.extra}`} />}
//             </div>
//             <LabelBadge2 extra={'rounded-none h-10 flex items-center font-semibold bg-transparent !ring-0 border-l-1 border-black'} textValue={'copy'} icon={RxCopy} childrenStyle={{ text: 'text-center', icon1: 'w-5 h-5' }} />
//           </div>
//         </>
//       )}
//       {isDefault && <span className={`${childrenStyle.text2}`}>{textValue2 || "This is a hint text to help user."}</span>}
//     </div>
//   );
// }

// // ====================== TEXTAREA FIELDS ======================

// export function TextareaField1({ extra, textValue1, textValue2, children, childrenStyle = {}, default: isDefault = true }) {
//   return (
//     <div>
//       {children || (
//         <>
//           {isDefault && <label className={`${childrenStyle.text1}`}>{textValue1 || "Description *"}</label>}
//           <div>
//             <textarea className='w-full h-40 border border-gray-300 rounded-md p-3 font-semibold text-lg' placeholder='Enter a description..' />
//           </div>
//         </>
//       )}
//       {isDefault && <span className={`${childrenStyle.text2}`}>{textValue2 || "This is a hint text to help user."}</span>}
//     </div>
//   );
// }

// export function TextareaField2({ extra, textValue1, textValue2, children, childrenStyle = {}, default: isDefault = true }) {
//   return (
//     <div>
//       {children || (
//         <>
//           {isDefault && <label className={`${childrenStyle.text1}`}>{textValue1 || "Description *"}</label>}
//           <div>
//             <textarea className='w-full h-40 border border-gray-300 rounded-md p-3 font-semibold text-lg' placeholder='Enter a description..'>
//               {/* Note: You can't put divs inside textarea in real HTML. This is likely a mistake. */}
//             </textarea>
//           </div>
//         </>
//       )}
//       {isDefault && <span className={`${childrenStyle.text2}`}>{textValue2 || "This is a hint text to help user."}</span>}
//     </div>
//   );
// }













// import React from 'react'
// import { Badge1, Badge2, Badge3, LabelBadge1, LabelBadge2, LabelBadge5 } from './Badges';
// import { Tag6, TagClose1 } from './Tags';
// import { IoArrowDown, IoInformation, IoMail, IoSearch } from 'react-icons/io5';
// import { MdArrowDownward, MdInfo, MdMail } from 'react-icons/md';
// import { FaArrowDown, FaMailBulk } from 'react-icons/fa';
// import { BiArrowToBottom, BiQuestionMark } from 'react-icons/bi';
// import { FaDollarSign, FaQuestion } from 'react-icons/fa6';
// import { Button1, Button2, Button3, Button5 } from './Buttons';
// import { ButtonGroup12, ButtonGroup13 } from './ButtonGroup';
// import { BsArrowDown } from 'react-icons/bs';
// import { CgArrowDown } from 'react-icons/cg';
// import { Dropdown1, SelectMenuItem1, SelectMenuItem2 } from './Dropdown';
// import { IoIosArrowDown } from "react-icons/io";
// import { GoQuestion } from "react-icons/go";
// import { CiBadgeDollar } from "react-icons/ci";
// import { IoCard } from "react-icons/io5";
// import { RxCopy } from "react-icons/rx";


// const Inputs = () => {
//   return (
//     <div>
//       <IFB1 /> <br />
//       <IFB2 /> <br />
//       <IFB3 /> <br />
//       <InputField1 /> <br />
//       <InputField2 /> <br />
//       <InputField3 /> <br />
//       <InputField4 /> <br />
//       <InputField5 /> <br />
//       <InputField6 /> <br />
//       <InputField7 /> <br />
//       <InputField8 /> <br />
//       <InputField9 /> <br />
//       <InputField10 /> <br />
//       <TextareaField1 /> <br />
//       <TextareaField2 /> <br />
//     </div>
//   )
// }

// export default Inputs



// export function IFB1({ extra, textValue, children, childrenStyle = {} }) {
//   return (
//     <div className={`w-15 h-15 ring-2 ring-black/20 flex items-center justify-center rounded-lg focus-within:ring-purple-500 ${extra}`}>
//       {children || <input
//         type="text"
//         inputMode="numeric"
//         maxLength={1}
//         value={textValue}
//         className={`w-full h-full text-5xl font-bold text-center outline-none bg-transparent caret-transparent  ${childrenStyle.input1}`}
//         placeholder="0" />
//       }
//     </div>
//   );
// }

// export function IFB2({ extra, textValue, children, childrenStyle = {} }) {
//   return (
//     <div className={`w-15 h-15 ring-2 ring-purple-500 flex items-center justify-center rounded-lg focus-within:ring-red-500 outline-2 outline-purple-500 outline-offset-4 ${extra}`}>
//       {children || <input
//         type="text"
//         inputMode="numeric"
//         maxLength={1}
//         value={textValue}
//         pattern='0-9'
//         className={`w-full h-full text-5xl font-bold text-center outline-none bg-transparent caret-transparent  ${childrenStyle.input1}`}
//         placeholder="0" />
//       }
//     </div>
//   );
// }


// export function IFB3({ extra, textValue, children, childrenStyle = {} }) {
//   return (
//     <div className={`w-15 h-15 ring-2 ring-black/20 flex items-center justify-center rounded-lg bg-black/5 ${extra}`}>
//       {children || <input
//         type="text"
//         inputMode="numeric"
//         maxLength={1}
//         disabled
//         value={textValue}
//         className={`w-full h-full text-5xl font-bold text-center outline-none bg-transparent caret-transparent text-black/40 ${childrenStyle.input1}`}
//         placeholder="0" />
//       }
//     </div>
//   );
// }



// export function InputField1({ extra, textValue1, textValue2, icon: Icon1 = {}, icon2: Icon2 = {}, children, childrenStyle = {} }) {
//   return (
//     <div>
//       {children || <> <label className={`${childrenStyle.text1}`}>{textValue1 || 'Email *'}</label>
//         <div className={`flex gap-1 ring-2 ring-black/30 w-fit px-1 py-1.5 rounded-lg items-center-safe justify-center-safe my-2 focus-within:ring-purple-500 ${extra}`}>
//           <Badge1 icon={Icon1.icon || IoMail} extra={`w-7 h-7 ${Icon1.extra}`} />
//           <input type="text" placeholder='Shola@aqoUI.com' className={`text-lg outline-0 ${childrenStyle.input1}`} />
//           <Badge1 icon={Icon2.icon || MdInfo} extra={`w-6 h-6 ${Icon2.extra}`} />
//         </div> </>
//       }
//       <span className={`${childrenStyle.text2}`}>{textValue2 || 'This is a hint text to help user.'}</span>
//     </div>
//   )
// }

// export function InputField2({ extra, textValue1, textValue2, icon: Icon1 = {}, icon2: Icon2 = {}, children, childrenStyle = {} }) {
//   return (
//     <div>
//       {children || <><label className={`${childrenStyle.text1}`}>{textValue1 || 'Email *'}</label>
//         <div className={`flex gap-1 ring-2 ring-black/30 w-fit px-1 py-1.5 rounded-lg items-center-safe justify-center-safe my-2 bg-black/5 ${extra}`}>
//           <Badge1 icon={Icon1.icon || IoMail} extra={`w-7 h-7 ${Icon1.extra}`} />
//           <input type="text" placeholder='Shola@aqoUI.com' className={`text-lg outline-0 ${childrenStyle.input1}`} disabled />
//           <Badge1 icon={Icon2.icon || MdInfo} extra={`w-6 h-6 ${Icon2.extra}`} />
//         </div> </>
//       }
//       <span className={`${childrenStyle.text2}`}>{textValue2 || 'This is a hint text to help user.'}</span>
//     </div>
//   )
// }


// import { useState } from "react";
// import { BadgeGroup3 } from './BadgeGroup';
// import { ImCoinDollar } from 'react-icons/im';
// import { TbMoodDollar } from 'react-icons/tb';

// export function InputField3({
//   extra,
//   textValue1,
//   textValue2,
//   icon: Icon1 = {},
//   icon2: Icon2 = {},
//   children,
//   childrenStyle = {}
// }) {

//   const countries = ["US", "NG", "UK", "CA", "FR", "DE"];

//   const [open, setOpen] = useState(false);
//   const [country, setCountry] = useState("US");

//   return (
//     <div className="">
//       {children || (
//         <>
//           <label className={`${childrenStyle.text1}`}>
//             {textValue1 || "Phone number *"}
//           </label>

//           <div
//             className={`flex gap-1 ring-2 ring-black/30 w-fit px-1 py-1.5 rounded-lg items-center-safe justify-center-safe my-2 focus-within:ring-purple-500 ${extra}`}
//           >
//             <div className="flex relative">

//               {/* Button */}
//               <div onClick={() => setOpen(!open)}>
//                 <Button1
//                   extra={"!p-0 !px-1 !w-18 justify-center-safe !gap-2 bg-white"}
//                   icon2={IoIosArrowDown}
//                   childrenStyle={{
//                     text: "text-black font-semibold text-xl",
//                     icon1: "hidden",
//                     icon2: "!fill-black"
//                   }}
//                   textValue={country}
//                 />
//               </div>

//               {/* Dropdown */}
//               {open && (
//                 <div className="absolute top-full mt-1 left-0 bg-white shadow-lg shadow-black/40 p-1 rounded-sm z-20 min-w-[60px] overflow-hidden">

//                   {countries.map((c) => (
//                     <div
//                       key={c}
//                       onClick={() => {
//                         setCountry(c);
//                         setOpen(false);
//                       }}
//                     >
//                       <SelectMenuItem2
//                         extra={"w-full !p-1 rounded-none bg-white hover:bg-gray-100"}
//                         textValue1={c}
//                         textValue2={" "}
//                         childrenStyle={{ icon1: "hidden" }}
//                       />
//                     </div>
//                   ))}

//                 </div>
//               )}

//             </div>

//             <input
//               type="text"
//               placeholder="Shola@aqoUI.com"
//               className={`text-lg outline-0 ${childrenStyle.input1}`}
//             />

//             <Badge1
//               icon={Icon2.icon || GoQuestion}
//               extra={`w-5 h-5 text-black/50 ${Icon2.extra}`}
//             />
//           </div>
//         </>
//       )}

//       <span className={`${childrenStyle.text2}`}>
//         {textValue2 || "This is a hint text to help user."}
//       </span>
//     </div>
//   );
// }

// export function InputField4({
//   extra,
//   textValue1,
//   textValue2,
//   icon: Icon1 = {},
//   icon2: Icon2 = {},
//   children,
//   childrenStyle = {}
// }) {

//   return (
//     <div className="">
//       {children || (
//         <>
//           <label className={`${childrenStyle.text1}`}>
//             {textValue1 || "Phone number *"}
//           </label>

//           <div
//             className={`flex gap-1 ring-2 ring-black/30 w-fit px-1 py-1.5 rounded-lg items-center-safe justify-center-safe my-2 bg-black/6 ${extra}`}
//           >

//             {/* Button */}
//             <Button1
//               extra={"!p-0 !px-1 !w-18 justify-center-safe !gap-2 !bg-transparent"}
//               icon2={IoIosArrowDown}
//               childrenStyle={{
//                 text: "text-black/30 font-semibold text-xl",
//                 icon1: "hidden",
//                 icon2: "!fill-black/30"
//               }}
//               textValue={'US'}
//             />

//             <input
//               type="text"
//               placeholder="Shola@aqoUI.com"
//               disabled
//               className={`text-lg outline-0 ${childrenStyle.input1}`}
//             />

//             <Badge1
//               icon={Icon2.icon || GoQuestion}
//               extra={`w-5 h-5 text-black/50 ${Icon2.extra}`}
//             />
//           </div>
//         </>
//       )}

//       <span className={`${childrenStyle.text2}`}>
//         {textValue2 || "This is a hint text to help user."}
//       </span>
//     </div>
//   );
// }

// export function InputField5({
//   extra,
//   textValue1,
//   textValue2,
//   icon: Icon1 = {},
//   icon2: Icon2 = {},
//   children,
//   childrenStyle = {}
// }) {

//   const countries = ["USD", "NGN", "EUR", "CAD", "FR", "DE"];

//   const [open, setOpen] = useState(false);
//   const [country, setCountry] = useState("US");

//   return (
//     <div className="">
//       {children || (
//         <>
//           <label className={`${childrenStyle.text1}`}>
//             {textValue1 || "Sale amount *"}
//           </label>

//           <div
//             className={`flex gap-1 ring-2 ring-black/30 w-fit px-1 py-1.5 rounded-lg items-center-safe justify-center-safe my-2 focus-within:ring-purple-500 ${extra}`}
//           >
//             <Badge1 icon={CiBadgeDollar} extra={'!w-7 '} />

//             <input
//               type="text"
//               placeholder="Shola@aqoUI.com"
//               className={`text-lg outline-0 ${childrenStyle.input1}`}
//             />

//             <Badge1
//               icon={Icon2.icon || GoQuestion}
//               extra={`w-5 h-5 text-black/50 ${Icon2.extra}`}
//             />

//             <div className="flex relative">

//               {/* Button */}
//               <div onClick={() => setOpen(!open)}>
//                 <Button1
//                   extra={"!p-0 !px-1 !w-18 justify-center-safe !gap-2 bg-white"}
//                   icon2={IoIosArrowDown}
//                   childrenStyle={{
//                     text: "text-black font-semibold text-xl",
//                     icon1: "hidden",
//                     icon2: "!fill-black"
//                   }}
//                   textValue={country}
//                 />
//               </div>

//               {/* Dropdown */}
//               {open && (
//                 <div className="absolute top-full mt-1 left-0 bg-white shadow-lg shadow-black/40 p-1 rounded-sm z-20 min-w-[60px] overflow-hidden">

//                   {countries.map((c) => (
//                     <div
//                       key={c}
//                       onClick={() => {
//                         setCountry(c);
//                         setOpen(false);
//                       }}
//                     >
//                       <SelectMenuItem2
//                         extra={"w-full !p-1 rounded-none bg-white hover:bg-gray-100"}
//                         textValue1={c}
//                         textValue2={" "}
//                         childrenStyle={{ icon1: "hidden" }}
//                       />
//                     </div>
//                   ))}

//                 </div>
//               )}

//             </div>
//           </div>
//         </>
//       )}

//       <span className={`${childrenStyle.text2}`}>
//         {textValue2 || "This is a hint text to help user."}
//       </span>
//     </div>
//   );
// }

// export function InputField6({
//   extra,
//   textValue1,
//   textValue2,
//   icon: Icon1 = {},
//   icon2: Icon2 = {},
//   children,
//   childrenStyle = {}
// }) {

//   const countries = ["USD", "NGN", "EUR", "CAD", "FR", "DE"];

//   const [open, setOpen] = useState(false);
//   const [country, setCountry] = useState("US");

//   return (
//     <div className="">
//       {children || (
//         <>
//           <label className={`${childrenStyle.text1}`}>
//             {textValue1 || "Sale amount *"}
//           </label>

//           <div
//             className={`flex gap-1 ring-2 ring-black/30 w-fit px-1 py-1.5 rounded-lg items-center-safe justify-center-safe my-2 focus-within:ring-purple-500 bg-black/5 ${extra}`}
//           >
//             <Badge1 icon={CiBadgeDollar} extra={'!w-7 bg-transparen'} />

//             <input
//               type="text"
//               placeholder="Shola@aqoUI.com"
//               className={`text-lg outline-0 ${childrenStyle.input1}`}
//             />

//             <Badge1
//               icon={Icon2.icon || GoQuestion}
//               extra={`w-5 h-5 text-black/50 ${Icon2.extra}`}
//             />

//             <div className="flex relative">

//               {/* Button */}
//               <div onClick={() => setOpen(!open)}>
//                 <Button1
//                   extra={"!p-0 !px-1 !w-18 justify-center-safe !gap-2 bg-transparent"}
//                   icon2={IoIosArrowDown}
//                   childrenStyle={{
//                     text: "text-black/30 font-semibold text-xl",
//                     icon1: "hidden",
//                     icon2: "!fill-black/30"
//                   }}
//                   textValue={country}
//                 />
//               </div>

//               {/* Dropdown */}
//               {open && (
//                 <div className="absolute top-full mt-1 left-0 bg-white shadow-lg shadow-black/40 p-1 rounded-sm z-20 min-w-[60px] overflow-hidden">

//                   {countries.map((c) => (
//                     <div
//                       key={c}
//                       onClick={() => {
//                         setCountry(c);
//                         setOpen(false);
//                       }}
//                     >
//                       <SelectMenuItem2
//                         extra={"w-full !p-1 rounded-none bg-white hover:bg-gray-100"}
//                         textValue1={c}
//                         textValue2={" "}
//                         childrenStyle={{ icon1: "hidden" }}
//                       />
//                     </div>
//                   ))}

//                 </div>
//               )}

//             </div>
//           </div>
//         </>
//       )}

//       <span className={`${childrenStyle.text2}`}>
//         {textValue2 || "This is a hint text to help user."}
//       </span>
//     </div>
//   );
// }

// export function InputField7({
//   extra,
//   textValue1,
//   textValue2,
//   icon: Icon1 = {},
//   icon2: Icon2 = {},
//   children,
//   childrenStyle = {}
// }) {

//   return (
//     <div className="">
//       {children || (
//         <>
//           <label className={`${childrenStyle.text1}`}>
//             {textValue1 || "Website *"}
//           </label>

//           <div
//             className={`flex gap-1 ring-2 ring-black/30 w-fit  rounded-lg items-center-safe justify-center-safe my-2  ${extra}`}
//           >
//             <LabelBadge1 extra={'rounded-none h-10 !w-18 flex items-center font-semibold bg-transparent !ring-0 border-r-1'} textValue={'http://'} childrenStyle={{ text: 'text-center' }} />

//             <div className='flex justify-center-safe items-center-safe ring-2 focus-within:ring-purple-500'>
//               <input
//                 type="text"
//                 placeholder="www.aqoUI.com"
//                 className={`text-lg outline-0 max-w-60 pl-3 ${childrenStyle.input1}`}
//               />

//               <Badge1
//                 icon={Icon2.icon || GoQuestion}
//                 extra={`w-5 h-5 text-black/50 ${Icon2.extra}`}
//               />

//             </div>


//           </div>
//         </>
//       )}

//       <span className={`${childrenStyle.text2}`}>
//         {textValue2 || "This is a hint text to help user."}
//       </span>
//     </div>
//   );
// }


// export function InputField8({
//   extra,
//   textValue1,
//   textValue2,
//   icon: Icon1 = {},
//   icon2: Icon2 = {},
//   children,
//   childrenStyle = {}
// }) {

//   return (
//     <div className="">
//       {children || (
//         <>
//           <label className={`${childrenStyle.text1}`}>
//             {textValue1 || "Cad number *"}
//           </label>

//           <div
//             className={`flex gap-2 ring-2 ring-black/30 w-fit px-2 py-1.5 rounded-lg items-center-safe justify-center-safe my-2 focus-within:ring-purple-500 ${extra}`}
//           >
//             <Badge1 icon={IoCard} extra={'!w-7'} />

//             <input
//               type="text"
//               placeholder="Card number"
//               className={`text-lg outline-0 ${childrenStyle.input1}`}
//             />

//             <Badge1
//               icon={Icon2.icon || GoQuestion}
//               extra={`w-5 h-5 text-black/50 ${Icon2.extra}`}
//             />


//           </div>
//         </>
//       )}

//       <span className={`${childrenStyle.text2}`}>
//         {textValue2 || "This is a hint text to help user."}
//       </span>
//     </div>
//   );
// }

// export function InputField9({
//   extra,
//   textValue1,
//   textValue2,
//   icon: Icon1 = {},
//   icon2: Icon2 = {},
//   children,
//   childrenStyle = {}
// }) {

//   return (
//     <div className="">
//       {children || (
//         <>
//           <label className={`${childrenStyle.text1}`}>
//             {textValue1 || "Users *"}
//           </label>

//           <div
//             className={`flex gap-2 ring-2 ring-black/30 w-fit px-2 py-1.5 rounded-lg items-center-safe justify-center-safe my-2 focus-within:ring-purple-500 ${extra}`}
//           >

//             <div className='cursor'>

//               <div className='rounded-lg flex place-items-center '>
//                 <div className='flex gap-2 flex-wrap'>
//                   <Tag6 />
//                   <Tag6 />
//                   <Tag6 />
//                   <input type="text" className='min-w-20 w-fit flex-1' />
//                 </div>
//               </div>

//             </div>

//             <Badge1
//               icon={Icon2.icon || GoQuestion}
//               extra={`w-5 h-5 text-black/50 ${Icon2.extra}`}
//             />


//           </div>
//         </>
//       )}

//       <span className={`${childrenStyle.text2}`}>
//         {textValue2 || "This is a hint text to help user."}
//       </span>
//     </div>
//   );
// }


// export function InputField10({
//   extra,
//   textValue1,
//   textValue2,
//   icon: Icon1 = {},
//   icon2: Icon2 = {},
//   children,
//   childrenStyle = {}
// }) {

//   return (
//     <div className="">
//       {children || (
//         <>
//           <label className={`${childrenStyle.text1}`}>
//             {textValue1 || "Website *"}
//           </label>

//           <div
//             className={`flex gap-1 ring-2 ring-black/30 w-fit  rounded-lg items-center-safe justify-center-safe my-2  ${extra}`}
//           >
           
//             <div className='flex justify-center-safe items-center-safe ring-2 focus-within:ring-purple-500'>
//               <input
//                 type="text"
//                 placeholder="www.aqoUI.com"
//                 className={`text-lg outline-0 max-w-60 pl-3 ${childrenStyle.input1}`}
//               />

//               <Badge1
//                 icon={Icon2.icon || GoQuestion}
//                 extra={`w-5 h-5 text-black/50 ${Icon2.extra}`}
//               />

//             </div>

//              <LabelBadge2 extra={'rounded-none h-10 flex items-center font-semibold bg-transparent !ring-0 border-l-1 border-black'} textValue={'copy'} icon={RxCopy} childrenStyle={{ text: 'text-center', icon1: 'w-5 h-5' }} />



//           </div>
//         </>
//       )}

//       <span className={`${childrenStyle.text2}`}>
//         {textValue2 || "This is a hint text to help user."}
//       </span>
//     </div>
//   );
// }


// export function TextareaField1({
//   extra,
//   textValue1,
//   textValue2,
//   icon: Icon1 = {},
//   icon2: Icon2 = {},
//   children,
//   childrenStyle = {}
// }) {

//   return (
//     <div className="">
//       {children || (
//         <>
//           <label className={`${childrenStyle.text1}`}>
//             {textValue1 || "Description *"}
//           </label>

//           <div>
//             <textarea className='w-100 h-40 border-1 rounded-md p-3 font-semibold text-lg' placeholder='Enter a description..'></textarea>
//           </div>
//         </>
//       )}

//       <span className={`${childrenStyle.text2}`}>
//         {textValue2 || "This is a hint text to help user."}
//       </span>
//     </div>
//   );
// }

// export function TextareaField2({
//   extra,
//   textValue1,
//   textValue2,
//   icon: Icon1 = {},
//   icon2: Icon2 = {},
//   children,
//   childrenStyle = {}
// }) {

//   return (
//     <div className="">
//       {children || (
//         <>
//           <label className={`${childrenStyle.text1}`}>
//             {textValue1 || "Description *"}
//           </label>

//           <div>
//             <textarea className='w-100 h-40 border-1 rounded-md p-3 font-semibold text-lg' placeholder='Enter a description..'>
//                <div className='cursor'>

//               <div className='rounded-lg flex place-items-center '>
//                 <div className='flex gap-2 flex-wrap'>
//                   <Tag6 />
//                   <Tag6 />
//                   <Tag6 />
//                   <input type="text" className='min-w-20 w-fit flex-1' />
//                 </div>
//               </div>

//             </div>

//             </textarea>
//           </div>
//         </>
//       )}

//       <span className={`${childrenStyle.text2}`}>
//         {textValue2 || "This is a hint text to help user."}
//       </span>
//     </div>
//   );
// }


