---
name: "Emergency UI Repair: Migrate to StyleSheet"
overview: The current NativeWind/Tailwind implementation is failing critically (likely due to build configuration or web compatibility issues), resulting in a broken, unstyled UI. We will abandon the reliance on class-based styling for the critical sections and migrate the Hero, Navigation, and main layout components to use standard React Native `StyleSheet` and inline styles to guarantee correct rendering.
todos:
  - id: refactor_index_stylesheet
    content: Refactor app/index.tsx to use StyleSheet instead of NativeWind for all major sections
    status: completed
  - id: fix_card_styles
    content: Update Card.tsx to use fallback StyleSheet styles
    status: completed
  - id: fix_button_styles
    content: Update Button.tsx to use fallback StyleSheet styles
    status: completed
---

# Emergency UI Repair: Migrate to StyleSheet

The user reports the UI is "COMPLETELY FUCKED". The NativeWind styles are likely not compiling or injecting correctly for the web build, leaving the app unstyled and broken. We will switch to a fail-safe approach.

## Strategy: Hard-Coded Styles

We will replace the fragile Tailwind classes in the most critical file (`app/index.tsx`) with robust, standard React Native `StyleSheet` definitions. This ensures:

1.  **Guaranteed Layouts:** Flexbox will work exactly as defined in JS.
2.  **Guaranteed Colors:** Colors will be applied directly, bypassing CSS class generation issues.
3.  **Guaranteed Z-Index:** Layering will be handled explicitly in the view hierarchy.

## Steps

1.  **Refactor `app/index.tsx`**:

    -   Remove all `className` props from the Hero, Statistics wrapper, Mission, Practice Areas, and CTA sections.
    -   Create a `const styles = StyleSheet.create({...})` block at the bottom of the file.
    -   Define explicit styles for:
        -   `heroContainer`: Background color `#0f172a`, relative positioning, overflow hidden.
        -   `heroText`: White color, large font size, bold weight.
        -   `sectionContainer`: Padding, background colors.
        -   `gridContainer`: Flex wrap, row direction, gap management.
    -   Apply these styles using the `style={styles.xyz}` prop.

2.  **Verify Components**:

    -   Check `Card.tsx` and `Button.tsx`. If they rely solely on NativeWind and it's failing, we must add `style` props to them as well or refactor them to use `StyleSheet`.
    -   *Decision*: We will patch `Card` and `Button` to accept and prioritize `style` props, but primarily fix the layout containers in `index.tsx` first as that's where the major breakage is.

3.  **Clean Build**:

    -   Clear Metro cache to ensure no stale CSS is lingering.

## Files to Modify

-   [`app/index.tsx`](app/index.tsx): Complete conversion from NativeWind to StyleSheet for main layout.
-   [`src/components/Card.tsx`](src/components/Card.tsx): Ensure it renders a basic styled View if classes fail.
-   [`src/components/Button.tsx`](src/components/Button.tsx): Ensure it renders a basic styled TouchableOpacity if classes fail.