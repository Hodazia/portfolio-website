// define a reusable button component,
/*
i want a size, variant, classname and onclick handler as props
*/
import React from "react";

const baseClasses = `inline-flex items-center justify-center rounded-md 
text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50`;

// Define variant-specific classes
const variantClasses = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    ghost: "hover:bg-gray-100 text-gray-800",
    link: "text-blue-500 underline-offset-4 hover:underline",
  };

  // Define size-specific classes
const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
    icon: "h-10 w-10", // For square icon buttons
  };

const Button = React.forwardRef(({
    className = '',
    variant = 'default', // Default variant
    size = 'default',    // Default size
    onClick,
    children,
    ...props // Capture any other standard button props (e.g., type, disabled)
  }, ref) => {
    // Combine all class names
    const allClassNames = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className // User-provided class names
    ].filter(Boolean).join(' '); // Filter out any empty strings and join
  
    return (
      <button
        ref={ref}
        className={allClassNames}
        onClick={onClick}
        {...props} // Spread any other standard button props
      >
        {children}
      </button>
    );
  });
  
  Button.displayName = "Button"; // Good practice for debugging with React DevTools
  
export default Button