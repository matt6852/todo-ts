import classNames from "classnames";
type ExcludeFromTuple<T extends any[], U> = {
 [K in keyof T]: T[K] extends U ? never : T[K];
}[number];

type Exclusive<T extends PropertyKey[], U = any> = T[number] extends infer E
 ? E extends string
 ? Record<E, U> & { [k in ExcludeFromTuple<T, E>]?: never }
 : never
 : never & {};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
 Partial<{
  outline?: boolean;
  rounded?: boolean;
  children?: JSX.Element | JSX.Element[] | any
 }> &
 Exclusive<["primary", "secondary", "success", "warning", "danger"], boolean>;
const Button: React.FC<ButtonProps> = ({
 children,
 primary,
 secondary,
 success,
 warning,
 danger,
 outline,
 rounded,
 ...rest
}) => {
 const className = classNames(rest.className, "flex items-center px-3 py-1.5 border", {
  "border-blue-500 bg-blue-500 text-white": primary,
  "border-gray-900 bg-gray-900 text-white": secondary,
  "border-green-500 bg-green-500 text-white": success,
  "border-yellow-400 bg-yellow-400 text-white": warning,
  "border-red-500 bg-red-500 text-white": danger,
  "rounded-full": rounded,
  "bg-white": outline,
  "text-blue-500": outline && primary,
  "text-gray-600": outline && secondary,
  "text-green-500": outline && success,
  "text-yellow-900": outline && warning,
  "text-red-900": outline && danger

 })
 return (
  <button {...rest} className={className}>{children}</button>
 )
}

export default Button