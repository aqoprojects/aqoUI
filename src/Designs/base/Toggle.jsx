import React from 'react'

const Toggle = () => {
  return (
    <div>
      <Toggle1/> <br />
      <Toggle2/> <br />
      <Toggle3/> <br />
     <ToggleWithText/> <br />
    </div>
  )
}

export default Toggle


// ── Toggle1 — off state (gray) ───────────────
export function Toggle1({
    extra,
    divStyle,
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    return (
        <div
            className={`bg-black/20 w-13 h-7 rounded-xl p-1 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <div className={`bg-white w-5 h-5 rounded-full ${styles.toggle ?? ''}`} />
            )}
        </div>
    );
}

// ── Toggle2 — on state (purple) ──────────────
export function Toggle2({
    extra,
    divStyle,
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    return (
        <div
            className={`w-13 h-7 rounded-xl p-1 ring-2 ring-purple-500 ring-offset-3 flex justify-end-safe bg-purple-500 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <div className={`bg-white w-5 h-5 rounded-full ${styles.toggle ?? ''}`} />
            )}
        </div>
    );
}

// ── Toggle3 — disabled state ─────────────────
export function Toggle3({
    extra,
    divStyle,
    styles = {},
    children,
    showDefault = true,
    ...rootProps
}) {
    return (
        <div
            className={`bg-black/20 w-13 h-7 rounded-xl p-1 flex justify-end-safe ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <div className={`bg-white/30 w-5 h-5 rounded-full ${styles.toggle ?? ''}`} />
            )}
        </div>
    );
}


// ── ToggleWithText ────────────────────────────
//
// toggle  — pre-rendered toggle element (default: <Toggle1 />)
// text1   — primary label (always shown when passed or showDefault=true)
// text2   — secondary hint (independent slot — only shows if passed or showDefault=true)
//
// showDefault=true  → both text1 and text2 show with fallbacks
// showDefault=false → only text slots that were explicitly passed show
export function ToggleWithText({
    extra,
    divStyle,
    texts = {},
    styles = {},
    toggle,
    children,
    showDefault = true,
    ...rootProps
}) {
    const text1 = showDefault ? (texts.text1 ?? 'Remember me')                      : texts.text1;
    const text2 = showDefault ? (texts.text2 ?? 'Save my login details for next time.') : texts.text2;

    // toggle is a pre-rendered element — show it if passed, else show Toggle1 when showDefault=true
    const toggleEl = toggle ?? (showDefault ? <Toggle1 /> : null);

    return (
        <div
            className={`flex gap-2 ${extra ?? ''}`}
            style={divStyle}
            {...rootProps}
        >
            {children || (
                <>
                    {toggleEl}
                    <div>
                        {text1 && <p className={styles.text1 ?? ''}>{text1}</p>}
                        {text2 && <span className={styles.text2 ?? ''}>{text2}</span>}
                    </div>
                </>
            )}
        </div>
    );
}




