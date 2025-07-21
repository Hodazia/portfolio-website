import React from 'react';

// Define base classes that apply to all badges
const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

// Define variant-specific classes
const variantClasses = {
  default: "border-transparent bg-blue-500 text-white hover:bg-blue-600",
  secondary: "border-transparent bg-gray-200 text-gray-800 hover:bg-gray-300",
  destructive: "border-transparent bg-red-500 text-white hover:bg-red-600",
  outline: "text-gray-800 border-gray-300 bg-white", // Adjusted for a simple outline look
};

/**
 * A simple reusable Badge component.
 *
 * @param {object} props - The component props.
 * @param {'default' | 'secondary' | 'destructive' | 'outline'} [props.variant='default'] - The visual style of the badge.
 * @param {string} [props.className=''] - Additional CSS classes to apply.
 * @param {React.ReactNode} props.children - The content to display inside the badge.
 * @param {React.Ref<HTMLDivElement>} ref - A ref to the underlying HTML div element.
 */
const Badge = React.forwardRef(({
  className = '',
  variant = 'default', // Default variant
  children,
  ...props // Capture any other standard div props
}, ref) => {
  // Combine all class names
  const allClassNames = [
    baseClasses,
    variantClasses[variant],
    className // User-provided class names
  ].filter(Boolean).join(' '); // Filter out any empty strings and join

  return (
    <div
      ref={ref}
      className={allClassNames}
      {...props} // Spread any other standard div props
    >
      {children}
    </div>
  );
});

Badge.displayName = "Badge"; // Good practice for debugging with React DevTools

export default Badge