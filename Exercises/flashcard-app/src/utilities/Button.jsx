export default function Button({ primary, secondary, children, ...props }) {
  const primaryClasses =
    "px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer";
  const secondaryClasses =
    "px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition cursor-pointer";
  return (
    <button
      className={`${primary && primaryClasses} ${secondary && secondaryClasses}`}
      {...props}
    >
      {children}
    </button>
  );
}
