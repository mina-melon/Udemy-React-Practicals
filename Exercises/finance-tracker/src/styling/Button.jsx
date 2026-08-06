export default function Button({
  primary,
  secondary,

  children,
  ...props
}) {
  const general_cln = "px-4 py-2 rounded-md text-white text-sm cursor-pointer";
  const primary_cln = "bg-olive-900 hover:bg-olive-800";
  const secondary_cln = "bg-olive-700 hover:bg-olive-600";

  return (
    <button
      className={`${general_cln} 
    ${primary && primary_cln}
     ${secondary && secondary_cln}
     
    `}
      {...props}
    >
      {children}
    </button>
  );
}
