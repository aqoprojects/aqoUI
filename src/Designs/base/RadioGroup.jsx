import React from 'react'
import { Avatar1, Avatar2, Avatar3 } from './Avatars'
import { RxStack } from "react-icons/rx";
import { CheckBox1, CheckBox5 } from './Checkbox';
import { Tag12 } from './Tags';
import { SiVisa } from "react-icons/si";
import { Button1, Button4 } from './Buttons';

const RadioGroup = () => {
  return (
    <>
      <RadioGroupItem1 /> <br />
      <RadioGroupItem2 /> <br />
      <RadioGroupItem3 /> <br />
      <RadioGroupItem4 /> <br />
      <RadioGroupItem5 /> <br />
      <RadioGroupItem6 /> <br />
      <RadioGroupItem7 /> <br />
      <RadioGroupItem8 /> <br />
      <RadioGroupItem9 /> <br />
      <RadioGroupItem10 /> <br />
      <RadioGroupItem11 /> <br />
    </>
  )
}

export default RadioGroup



// ── RadioGroupItem1 — plan card, unselected ──
export function RadioGroupItem1({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    checkboxProps = {},
    avatarProps = {},
    ...rootProps
}) {
    const title       = showDefault ? (texts.title       ?? 'Basic plan')    : texts.title;
    const price       = showDefault ? (texts.price       ?? '$10/month')     : texts.price;
    const description = showDefault ? (texts.description ?? 'Includes up to 10 users, 20 GB individual data and access to all features.') : texts.description;
    const Icon1       = showDefault ? (icons.icon1 ?? undefined): icons.icon1;

    return (
        <div
            className={`flex items-start gap-3 ring-2 ring-black/10 w-fit p-3 rounded-xl ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <Avatar3
                        icons={{ icon1: Icon1 }}
                        extra="rounded-md bg-white ring-1 ring-black/40 !w-7 !h-7 !p-1"
                        showDefault={showDefault}
                        {...avatarProps}
                    />
                    <div className="flex-1 leading-none">
                        {(title || price) && (
                            <p className={`font-semibold text-black/50 ${styles.title ?? ''}`}>
                                {title}
                                {price && <span className={`font-normal text-sm ${styles.price ?? ''}`}> {price}</span>}
                            </p>
                        )}
                        {description && (
                            <p className={`text-black/50 text-sm ${styles.description ?? ''}`}>{description}</p>
                        )}
                    </div>
                    <CheckBox1 extra="!w-4 !h-4" checkboxProps={checkboxProps} showDefault={showDefault} />
                </>
            )}
        </div>
    );
}


// ── RadioGroupItem2 — plan card, selected ────
export function RadioGroupItem2({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    checkboxProps = {},
    avatarProps = {},
    ...rootProps
}) {
    const title       = showDefault ? (texts.title       ?? 'Basic plan'): texts.title;
    const price       = showDefault ? (texts.price       ?? '$10/month'): texts.price;
    const description = showDefault ? (texts.description ?? 'Includes up to 10 users, 20 GB individual data and access to all features.') : texts.description;
    const Icon1       = showDefault ? (icons.icon1 ?? undefined): icons.icon1;

    return (
        <div
            className={`flex items-start gap-3 border-1 border-black/10 ring-1 ring-purple-800 ring-offset-3 w-fit p-3 rounded-xl ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <Avatar3
                        icons={{ icon1: Icon1 }}
                        extra="rounded-md bg-white ring-1 ring-black/40 !w-7 !h-7 !p-1"
                        showDefault={showDefault}
                        {...avatarProps}
                    />
                    <div className="flex-1 leading-none">
                        {(title || price) && (
                            <p className={`font-semibold text-black/50 ${styles.title ?? ''}`}>
                                {title}
                                {price && <span className={`font-normal text-sm ${styles.price ?? ''}`}> {price}</span>}
                            </p>
                        )}
                        {description && (
                            <p className={`text-black/50 text-sm ${styles.description ?? ''}`}>{description}</p>
                        )}
                    </div>
                    <CheckBox1
                        extra="!w-4 !h-4 !rounded-sm ring-1 ring-purple-800 ring-offset-2 !border-1"
                        checkboxProps={checkboxProps}
                        showDefault={showDefault}
                    />
                </>
            )}
        </div>
    );
}


// ── RadioGroupItem3 — expanded plan card, unselected ──
export function RadioGroupItem3({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    checkboxProps = {},
    avatarProps = {},
    tagProps = {},
    ...rootProps
}) {
    const title       = showDefault ? (texts.title       ?? 'Basic plan')    : texts.title;
    const price       = showDefault ? (texts.price       ?? '$10')           : texts.price;
    const priceUnit   = showDefault ? (texts.priceUnit   ?? 'per month')     : texts.priceUnit;
    const description = showDefault ? (texts.description ?? 'Includes up to 10 users, 20 GB individual data and access to all features.') : texts.description;
    const Icon1       = showDefault ? (icons.icon1 ?? undefined)             : icons.icon1;

    return (
        <div
            className={`flex flex-col border-1 border-black/10 rounded-xl max-w-170 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <div className="flex items-center-safe justify-between gap-2 border-b-1 p-4 border-black/10">
                        <div className="flex gap-2 items-center-safe">
                            <Avatar3
                                icons={{ icon1: Icon1 }}
                                extra="rounded-md bg-white ring-1 ring-black/40 !w-7 !h-7 !p-1"
                                showDefault={showDefault}
                                {...avatarProps}
                            />
                            {title && (
                                <div className="flex-1 leading-none">
                                    <p className={`font-semibold text-black/50 ${styles.title ?? ''}`}>{title}</p>
                                </div>
                            )}
                        </div>
                        <CheckBox1
                            extra="!w-4 !h-4 !rounded-sm !border-1"
                            checkboxProps={checkboxProps}
                            showDefault={showDefault}
                        />
                    </div>
                    <div className="flex justify-between items-start p-4 flex-col md:flex-row gap-2">
                        <div className="flex flex-col gap-2 order-last md:order-first">
                            {(price || priceUnit) && (
                                <p className={`text-4xl font-bold ${styles.price ?? ''}`}>
                                    {price}
                                    {priceUnit && (
                                        <span className={`text-sm font-normal text-black/40 ${styles.priceUnit ?? ''}`}> {priceUnit}</span>
                                    )}
                                </p>
                            )}
                            {description && (
                                <p className={`text-black/50 text-sm ${styles.description ?? ''}`}>{description}</p>
                            )}
                        </div>
                        <Tag12 showDefault={showDefault} {...tagProps} />
                    </div>
                </>
            )}
        </div>
    );
}


// ── RadioGroupItem4 — expanded plan card, selected ──
export function RadioGroupItem4({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    checkboxProps = {},
    avatarProps = {},
    tagProps = {},
    ...rootProps
}) {
    const title       = showDefault ? (texts.title       ?? 'Basic plan')    : texts.title;
    const price       = showDefault ? (texts.price       ?? '$10')           : texts.price;
    const priceUnit   = showDefault ? (texts.priceUnit   ?? 'per month')     : texts.priceUnit;
    const description = showDefault ? (texts.description ?? 'Includes up to 10 users, 20 GB individual data and access to all features.') : texts.description;
    const Icon1       = showDefault ? (icons.icon1 ?? undefined)             : icons.icon1;

    return (
        <div
            className={`flex flex-col border-1 border-black/10 rounded-xl max-w-170 ring-2 ring-purple-600 ring-offset-2 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <div className="flex items-center-safe justify-between gap-2 border-b-1 p-4 border-black/10">
                        <div className="flex gap-2 items-center-safe">
                            <Avatar3
                                icons={{ icon1: Icon1 }}
                                extra="rounded-md bg-white ring-1 ring-black/40 !w-7 !h-7 !p-1"
                                showDefault={showDefault}
                                {...avatarProps}
                            />
                            {title && (
                                <div className="flex-1 leading-none">
                                    <p className={`font-semibold text-black/50 ${styles.title ?? ''}`}>{title}</p>
                                </div>
                            )}
                        </div>
                        <CheckBox1
                            extra="!w-4 !h-4 !rounded-sm ring-1 ring-purple-800 ring-offset-2 !border-1"
                            checkboxProps={checkboxProps}
                            showDefault={showDefault}
                        />
                    </div>
                    <div className="flex justify-between items-start p-4 flex-col md:flex-row gap-2">
                        <div className="flex flex-col gap-2 order-last md:order-first">
                            {(price || priceUnit) && (
                                <p className={`text-4xl font-bold ${styles.price ?? ''}`}>
                                    {price}
                                    {priceUnit && (
                                        <span className={`text-sm font-normal text-black/40 ${styles.priceUnit ?? ''}`}> {priceUnit}</span>
                                    )}
                                </p>
                            )}
                            {description && (
                                <p className={`text-black/50 text-sm ${styles.description ?? ''}`}>{description}</p>
                            )}
                        </div>
                        <Tag12 showDefault={showDefault} {...tagProps} />
                    </div>
                </>
            )}
        </div>
    );
}


// ── RadioGroupItem5 — person card, unselected ─
export function RadioGroupItem5({
    extra,
    divStyle,
    texts = {},
    images = {},
    styles = {},
    children,
    showDefault = true,
    checkboxProps = {},
    avatarProps = {},
    ...rootProps
}) {
    const name   = showDefault ? (texts.name   ?? 'Shola Adele')                    : texts.name;
    const handle = showDefault ? (texts.handle ?? '@Shola')                         : texts.handle;
    const role   = showDefault ? (texts.role   ?? 'Product Manager, Integrations')  : texts.role;
    const image1 = showDefault ? (images.image1 ?? undefined)                       : images.image1;

    return (
        <div
            className={`flex items-start justify-between max-w-160 border-2 border-black/10 p-3 rounded-xl ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <div className="flex items-center-safe gap-3">
                        <Avatar1
                            extra="!w-10 !h-10"
                            images={{ image1 }}
                            showDefault={showDefault}
                            {...avatarProps}
                        />
                        <div>
                            {(name || handle) && (
                                <p className={`font-semibold ${styles.name ?? ''}`}>
                                    {name}
                                    {handle && (
                                        <span className={`font-medium text-black/40 text-md ${styles.handle ?? ''}`}> {handle}</span>
                                    )}
                                </p>
                            )}
                            {role && (
                                <p className={`font-semibold text-black/40 ${styles.role ?? ''}`}>{role}</p>
                            )}
                        </div>
                    </div>
                    <CheckBox1
                        extra="!w-5 !h-5 !border-2 !border-black/20"
                        checkboxProps={checkboxProps}
                        showDefault={showDefault}
                    />
                </>
            )}
        </div>
    );
}


// ── RadioGroupItem6 — person card, selected ──
export function RadioGroupItem6({
    extra,
    divStyle,
    texts = {},
    images = {},
    styles = {},
    children,
    showDefault = true,
    checkboxProps = {},
    avatarProps = {},
    ...rootProps
}) {
    const name   = showDefault ? (texts.name   ?? 'Shola Adele')                    : texts.name;
    const handle = showDefault ? (texts.handle ?? '@Shola')                         : texts.handle;
    const role   = showDefault ? (texts.role   ?? 'Product Manager, Integrations')  : texts.role;
    const image1 = showDefault ? (images.image1 ?? undefined)                       : images.image1;

    return (
        <div
            className={`flex items-start justify-between max-w-160 border-2 border-black/10 p-3 rounded-xl ring-1 ring-purple-600 ring-offset-2 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <div className="flex items-center-safe gap-3">
                        <Avatar1
                            extra="!w-10 !h-10"
                            images={{ image1 }}
                            showDefault={showDefault}
                            {...avatarProps}
                        />
                        <div>
                            {(name || handle) && (
                                <p className={`font-semibold ${styles.name ?? ''}`}>
                                    {name}
                                    {handle && (
                                        <span className={`font-medium text-black/40 text-md ${styles.handle ?? ''}`}> {handle}</span>
                                    )}
                                </p>
                            )}
                            {role && (
                                <p className={`font-semibold text-black/40 ${styles.role ?? ''}`}>{role}</p>
                            )}
                        </div>
                    </div>
                    <CheckBox1
                        extra="!w-5 !h-5 !border-2 !border-black/20 ring-1 ring-purple-600 ring-offset-1"
                        checkboxProps={checkboxProps}
                        showDefault={showDefault}
                    />
                </>
            )}
        </div>
    );
}


// ── RadioGroupItem7 — payment card, unselected ──
export function RadioGroupItem7({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    checkboxProps = {},
    avatarProps = {},
    editProps = {},
    ...rootProps
}) {
    const cardLabel    = showDefault ? (texts.cardLabel    ?? 'Visa ending in 1234') : texts.cardLabel;
    const expiry       = showDefault ? (texts.expiry       ?? 'Expiry 06/2028')      : texts.expiry;
    const defaultLabel = showDefault ? (texts.defaultLabel ?? 'Set as default')      : texts.defaultLabel;
    const editLabel    = showDefault ? (texts.editLabel    ?? 'Edit')                : texts.editLabel;
    const Icon1        = showDefault ? (icons.icon1 ?? undefined)                   : icons.icon1;

    return (
        <div
            className={`flex items-start justify-between max-w-160 border-2 border-black/10 p-4 rounded-xl ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <div className="flex items-start gap-5">
                        <Avatar3
                            extra="bg-white text-indigo-800 !w-10 !h-8 !p-0 ring-1 ring-black/40 rounded-md"
                            icons={{ icon1: Icon1 }}
                            showDefault={showDefault}
                            {...avatarProps}
                        />
                        <div>
                            {cardLabel && (
                                <p className={`font-bold text-black/50 ${styles.cardLabel ?? ''}`}>{cardLabel}</p>
                            )}
                            {expiry && (
                                <p className={`font-medium text-black/40 ${styles.expiry ?? ''}`}>{expiry}</p>
                            )}
                            {(defaultLabel || editLabel) && (
                                <div className={`flex items-center-safe gap-2 font-semibold text-black/40 mt-2 ${styles.meta ?? ''}`}>
                                    {defaultLabel && <p>{defaultLabel}</p>}
                                    {editLabel && (
                                        <Button4
                                            extra="bg-transparent !text-indigo-400 !w-fit !p-0"
                                            texts={{ text1: editLabel }}
                                            styles={{ text1: '!text-base', icon1: 'hidden' }}
                                            showDefault={showDefault}
                                            {...editProps}
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <CheckBox1
                        extra="!w-5 !h-5 !border-2 !border-black/20"
                        checkboxProps={checkboxProps}
                        showDefault={showDefault}
                    />
                </>
            )}
        </div>
    );
}


// ── RadioGroupItem8 — payment card, selected ─
export function RadioGroupItem8({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    checkboxProps = {},
    avatarProps = {},
    editProps = {},
    ...rootProps
}) {
    const cardLabel    = showDefault ? (texts.cardLabel    ?? 'Visa ending in 1234') : texts.cardLabel;
    const expiry       = showDefault ? (texts.expiry       ?? 'Expiry 06/2028')      : texts.expiry;
    const defaultLabel = showDefault ? (texts.defaultLabel ?? 'Set as default')      : texts.defaultLabel;
    const editLabel    = showDefault ? (texts.editLabel    ?? 'Edit')                : texts.editLabel;
    const Icon1        = showDefault ? (icons.icon1 ?? undefined)                   : icons.icon1;

    return (
        <div
            className={`flex items-start justify-between max-w-160 border-2 border-black/10 p-4 rounded-xl ring-1 ring-purple-600 ring-offset-1 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <div className="flex items-start gap-5">
                        <Avatar3
                            extra="bg-white text-indigo-800 !w-10 !h-8 !p-0 ring-1 ring-black/40 rounded-md"
                            icons={{ icon1: Icon1 }}
                            showDefault={showDefault}
                            {...avatarProps}
                        />
                        <div>
                            {cardLabel && (
                                <p className={`font-bold text-black/50 ${styles.cardLabel ?? ''}`}>{cardLabel}</p>
                            )}
                            {expiry && (
                                <p className={`font-medium text-black/40 ${styles.expiry ?? ''}`}>{expiry}</p>
                            )}
                            {(defaultLabel || editLabel) && (
                                <div className={`flex items-center-safe gap-2 font-semibold text-black/40 mt-2 ${styles.meta ?? ''}`}>
                                    {defaultLabel && <p>{defaultLabel}</p>}
                                    {editLabel && (
                                        <Button4
                                            extra="bg-transparent !text-indigo-400 !w-fit !p-0"
                                            texts={{ text1: editLabel }}
                                            styles={{ text1: '!text-base', icon1: 'hidden' }}
                                            showDefault={showDefault}
                                            {...editProps}
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <CheckBox1
                        extra="!w-5 !h-5 !border-2 !border-black/20 ring-1 ring-purple-600 ring-offset-1"
                        checkboxProps={checkboxProps}
                        showDefault={showDefault}
                    />
                </>
            )}
        </div>
    );
}


// ── RadioGroupItem9 — radio plan card, unselected ──
export function RadioGroupItem9({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    checkboxProps = {},
    ...rootProps
}) {
    const title       = showDefault ? (texts.title       ?? 'Basic plan')    : texts.title;
    const price       = showDefault ? (texts.price       ?? '$10/month')     : texts.price;
    const description = showDefault ? (texts.description ?? 'Includes up to 10 users, 20 GB individual data and access to all features.') : texts.description;

    return (
        <div
            className={`flex items-start gap-3 ring-2 ring-black/10 w-fit p-3 rounded-xl ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <CheckBox5
                        extra="!w-4 !h-4 !rounded-full"
                        checkboxProps={checkboxProps}
                        showDefault={showDefault}
                    />
                    <div className="flex-1 leading-none">
                        {(title || price) && (
                            <p className={`font-semibold text-black/50 ${styles.title ?? ''}`}>
                                {title}
                                {price && <span className={`font-normal text-sm ${styles.price ?? ''}`}> {price}</span>}
                            </p>
                        )}
                        {description && (
                            <p className={`text-black/50 text-sm ${styles.description ?? ''}`}>{description}</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}


// ── RadioGroupItem10 — radio plan card, selected ──
export function RadioGroupItem10({
    extra,
    divStyle,
    texts = {},
    styles = {},
    children,
    showDefault = true,
    checkboxProps = {},
    ...rootProps
}) {
    const title       = showDefault ? (texts.title       ?? 'Basic plan')    : texts.title;
    const price       = showDefault ? (texts.price       ?? '$10/month')     : texts.price;
    const description = showDefault ? (texts.description ?? 'Includes up to 10 users, 20 GB individual data and access to all features.') : texts.description;

    return (
        <div
            className={`flex items-start gap-3 border-2 border-black/10 w-fit p-3 rounded-xl ring-1 ring-purple-600 ring-offset-2 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <CheckBox5
                        extra="!w-3 !h-3 !rounded-full ring-1 ring-purple-600 ring-offset-2"
                        checkboxProps={checkboxProps}
                        showDefault={showDefault}
                    />
                    <div className="flex-1 leading-none">
                        {(title || price) && (
                            <p className={`font-semibold text-black/50 ${styles.title ?? ''}`}>
                                {title}
                                {price && <span className={`font-normal text-sm ${styles.price ?? ''}`}> {price}</span>}
                            </p>
                        )}
                        {description && (
                            <p className={`text-black/50 text-sm ${styles.description ?? ''}`}>{description}</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}


// ── RadioGroupItem11 — payment card with extra meta row ──
export function RadioGroupItem11({
    extra,
    divStyle,
    texts = {},
    icons = {},
    styles = {},
    children,
    showDefault = true,
    checkboxProps = {},
    avatarProps = {},
    editProps = {},
    ...rootProps
}) {
    const cardLabel    = showDefault ? (texts.cardLabel    ?? 'Visa ending in 1234') : texts.cardLabel;
    const expiry       = showDefault ? (texts.expiry       ?? 'Expiry 06/2028')      : texts.expiry;
    const defaultLabel = showDefault ? (texts.defaultLabel ?? 'Set as default')      : texts.defaultLabel;
    const editLabel    = showDefault ? (texts.editLabel    ?? 'Edit')                : texts.editLabel;
    const metaExtra    = showDefault ? (texts.metaExtra    ?? 'Expiry 06/2028')      : texts.metaExtra;
    const Icon1        = showDefault ? (icons.icon1 ?? undefined)                   : icons.icon1;

    return (
        <div
            className={`flex items-start justify-between max-w-160 border-2 border-black/10 p-4 rounded-xl ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    <div className="flex items-start gap-5">
                        <Avatar3
                            extra="bg-white text-indigo-800 !w-10 !h-8 !p-0 ring-1 ring-black/40 rounded-md"
                            icons={{ icon1: Icon1 }}
                            showDefault={showDefault}
                            {...avatarProps}
                        />
                        <div>
                            {cardLabel && (
                                <p className={`font-bold text-black/50 ${styles.cardLabel ?? ''}`}>{cardLabel}</p>
                            )}
                            {expiry && (
                                <p className={`font-medium text-black/40 ${styles.expiry ?? ''}`}>{expiry}</p>
                            )}
                            {(defaultLabel || editLabel || metaExtra) && (
                                <div className={`flex items-center-safe gap-2 font-semibold text-black/40 mt-2 ${styles.meta ?? ''}`}>
                                    {defaultLabel && <p>{defaultLabel}</p>}
                                    {editLabel && (
                                        <Button4
                                            extra="bg-transparent !text-indigo-400 !w-fit !p-0"
                                            texts={{ text1: editLabel }}
                                            styles={{ text1: '!text-base', icon1: 'hidden' }}
                                            showDefault={showDefault}
                                            {...editProps}
                                        />
                                    )}
                                    {metaExtra && <p>{metaExtra}</p>}
                                </div>
                            )}
                        </div>
                    </div>
                    <CheckBox1
                        extra="!w-5 !h-5 !border-2 !border-black/20"
                        checkboxProps={checkboxProps}
                        showDefault={showDefault}
                    />
                </>
            )}
        </div>
    );
}












