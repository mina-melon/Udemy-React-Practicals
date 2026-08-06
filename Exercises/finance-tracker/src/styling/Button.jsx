export default function Button({
  primary,
  secondary,
  tertiary,
  children,
  disappearing,
  ...props
}) {
  const general_cln = "px-4 py-2 rounded-md cursor-pointer text-sm";
  const primary_cln = "bg-olive-900 hover:bg-olive-800 text-white ";
  const secondary_cln = "bg-olive-700 hover:bg-olive-600 text-white ";
  const tertiary_cln = "bg-black/20 hover:bg-black/15 text-black/50 ";
  const disappearing_cln = "ml-4 c hover:bg-gray-200 rounded-md px-2 py-1";

  return (
    <button
      className={`${general_cln} 
    ${primary && primary_cln}
     ${secondary && secondary_cln}
     ${tertiary && tertiary_cln}
     ${disappearing && disappearing_cln}
    `}
      {...props}
    >
      {children}
    </button>
  );
}
