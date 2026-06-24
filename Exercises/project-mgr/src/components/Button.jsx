export default function Button({ children, primary, ...props }) {
  const classNames = primary
    ? "bg-darkgrey font-normal text-white text-base px-4 py-2 rounded-md hover:cursor-pointer hover:bg-darkgrey/80 uppercase"
    : "font-normal text-darkgrey px-4 py-2 rounded-md hover:cursor-pointer hover:bg-yellow-50/20 uppercase border-1";
  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
}
