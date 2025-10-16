import React from "react";

/**
 * BlackButton
 * A simple, accessible black button component using Tailwind CSS classes.
 * Props:
 *  - children: button content (text or elements)
 *  - onClick: click handler
 *  - size: 'sm' | 'md' | 'lg' (defaults to 'md')
 *  - fullWidth: boolean to stretch button to 100%
 *
 * Example usage:
 *  <BlackButton onClick={() => console.log('clicked')}>Nhấn tôi</BlackButton>
 */

interface BlackButtonProps {
  readonly children: React.ReactNode; // nội dung trong nút
  readonly onClick?: () => void; // hàm thực hiện
  readonly size?: "sm" | "md" | "lg"; // 3 kích thước hợp lệ
  readonly fullWidth?: boolean;
  readonly type?: "button" | "submit" | "reset";
}

// function nameFunction() :<typeReturn> {....}

// function addNumberOfString(a: string | number, b: string | number) {
//   if (typeof a === "number" && typeof b === "number") return a + b;
//   if (typeof a === "string" && typeof b === "string") return a.concat(b);

//   throw new Error("Parameter must be number or string");
// }

// function nameFunctions({"?"}) : {return?}

/**
 * Cách viết chính xác cho cái hàm ==== ***export default function BlackButton(... *** ====
 * Thay vì viết như thế này để lấy field của BlackButton ra rồi tạo ra biến gán cho các field nớ thì viết gọn bằng cái  
 * export default function BlackButton({ 
 * 
 * ---> Cú pháp : function <nameFunction>({
 *        object.field1,
 *        object.field2,
 *                  ...}:Object) <:type return - thường là kệ nó> {... return()}
 * 
 * 
 * 
 * ---> 
 *  function BlackButton(props: BlackButtonProps) {
   const children = props.children;
   const onClick = props.onClick;
   const size = props.size;
  } 
 * 
 *--->
 * function BlackButton({
 * children,
 * onClick,
 * size = "md",
 * fullWidth = false,
 * type = "button",
 * 
 * }:BlackButtonProps ) {}    
 * 
 */

export default function BlackButton({
  // destructuring object
  children,
  onClick,
  size = "md",
  fullWidth = false,
  type = "button",
}: BlackButtonProps) {
  //BlackButtonProps object
  const sizeClasses = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center ${
        sizeClasses[size]
      } ${
        fullWidth ? "w-full" : ""
      } rounded-lg bg-black text-white shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30 transition`}
    >
      {children}
    </button>
  );
}
