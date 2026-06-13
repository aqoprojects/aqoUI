import { LabelBadge1, LabelBadge2, LabelBadge3, LabelBadge4, LabelBadge6 } from "./Badges";

import React from 'react'

const BadgeGroup = () => {
  return (
    <div>
      
            <BadgeGroup1/> <br />
            <BadgeGroup2/> <br />
            <BadgeGroup3/> <br />
            <BadgeGroup4/> <br />
    </div>
  )
}

export default BadgeGroup


// ── BadgeGroup1 ──────────────────────────────
// [ LabelBadge1 ] · message · [ LabelBadge6 ]
export function BadgeGroup1({
    extra,
    divStyle,
    texts = {},
    icons = {},
    badgeProps = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? "We've just released a new feature") : texts.text1;

    return (
        <div
            className={`${extra ?? ''} flex justify-between gap-2 text-nowrap w-fit bg-gray-100 px-2 py-2 rounded-full`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {(showDefault || !!texts.badge1) && (
                        <LabelBadge1
                            showDefault={showDefault}
                            texts={{ text1: texts.badge1 }}
                            {...(badgeProps.badge1 ?? {})}
                        />
                    )}
                    {text1 && <p>{text1}</p>}
                    {(showDefault || !!icons.icon2) && (
                        <LabelBadge6
                            showDefault={showDefault}
                            icons={{ icon1: icons.icon2 }}
                            {...(badgeProps.badge2 ?? {})}
                        />
                    )}
                </>
            )}
        </div>
    );
}


// ── BadgeGroup2 ──────────────────────────────
// message · [ LabelBadge4 ]
export function BadgeGroup2({
    extra,
    divStyle,
    texts = {},
    icons = {},
    badgeProps = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? "We've just released a new feature") : texts.text1;

    return (
        <div
            className={`${extra ?? ''} flex justify-between gap-2 text-nowrap w-fit bg-gray-100 px-2 py-2 rounded-full`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {text1 && <p>{text1}</p>}
                    {(showDefault || !!texts.badge1 || !!icons.icon1) && (
                        <LabelBadge4
                            showDefault={showDefault}
                            texts={{ text1: texts.badge1 }}
                            icons={{ icon1: icons.icon1 }}
                            {...(badgeProps.badge1 ?? {})}
                        />
                    )}
                </>
            )}
        </div>
    );
}


// ── BadgeGroup3 ──────────────────────────────
// [ LabelBadge2 ] · message · [ LabelBadge6 ]
export function BadgeGroup3({
    extra,
    divStyle,
    texts = {},
    icons = {},
    badgeProps = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? "We've just released a new feature") : texts.text1;

    return (
        <div
            className={`${extra ?? ''} flex justify-between gap-2 text-nowrap w-fit bg-gray-100 px-2 py-2 rounded-full`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {(showDefault || !!texts.badge1 || !!icons.icon1) && (
                        <LabelBadge2
                            showDefault={showDefault}
                            texts={{ text1: texts.badge1 }}
                            icons={{ icon1: icons.icon1 }}
                            {...(badgeProps.badge1 ?? {})}
                        />
                    )}
                    {text1 && <p>{text1}</p>}
                    {(showDefault || !!icons.icon2) && (
                        <LabelBadge6
                            showDefault={showDefault}
                            icons={{ icon1: icons.icon2 }}
                            {...(badgeProps.badge2 ?? {})}
                        />
                    )}
                </>
            )}
        </div>
    );
}


// ── BadgeGroup4 ──────────────────────────────
// [ LabelBadge6 ] · message · [ LabelBadge4 ]
export function BadgeGroup4({
    extra,
    divStyle,
    texts = {},
    icons = {},
    badgeProps = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? "We've just released a new feature") : texts.text1;

    return (
        <div
            className={`${extra ?? ''} flex justify-between gap-2 text-nowrap w-fit bg-gray-100 px-2 py-2 rounded-full`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {(showDefault || !!icons.icon1) && (
                        <LabelBadge6
                            showDefault={showDefault}
                            icons={{ icon1: icons.icon1 }}
                            {...(badgeProps.badge1 ?? {})}
                        />
                    )}
                    {text1 && <p>{text1}</p>}
                    {(showDefault || !!texts.badge2 || !!icons.icon2) && (
                        <LabelBadge4
                            showDefault={showDefault}
                            texts={{ text1: texts.badge2 }}
                            icons={{ icon1: icons.icon2 }}
                            {...(badgeProps.badge2 ?? {})}
                        />
                    )}
                </>
            )}
        </div>
    );
}

