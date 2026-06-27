export default function Button({ children, primary, ...props }) {
  const classNames = primary
    ? "bg-darkgrey font-normal text-white  rounded-md hover:cursor-pointer hover:bg-darkgrey/80 uppercase"
    : "font-normal text-darkgrey  rounded-md hover:cursor-pointer hover:bg-yellow-50/20 uppercase border-1";
  return (
    <button
      className={`flex flex-row items-center gap-2 px-4 py-2 text-sm ${classNames}`}
      {...props}
    >
      {children}
    </button>
  );
}
