export default function Button({
  primary,
  secondary,
  tertiary,
  children,
  ...props
}) {
  const general_cln = "px-4 py-2 rounded-md cursor-pointer text-sm";
  const primary_cln = "bg-olive-900 hover:bg-olive-800 text-white ";
  const secondary_cln = "bg-olive-700 hover:bg-olive-600 text-white ";
  const tertiary_cln = "bg-black/20 hover:bg-black/15 text-black/50 ";

  return (
    <button
      className={`${general_cln} 
    ${primary && primary_cln}
     ${secondary && secondary_cln}
     ${tertiary && tertiary_cln}
    `}
      {...props}
    >
      {children}
    </button>
  );
}
