export default function Input({ label, textarea, ...props }) {
  return (
    <div className="input-cont">
      <label className="uppercase text-gray-700 text-sm">{label}</label>
      {textarea ? (
        <textarea
          className="px-2 py-4 border-b-3 border-olive-700/50 bg-olive-200 w-[60%] h-10 hover:outline-0 hover:border-olive-700"
          {...props}
        />
      ) : (
        <input
          className="px-2 py-4 border-b-3 border-olive-700/50 bg-olive-200 w-[60%] h-8 hover:outline-0 hover:border-olive-700"
          {...props}
        />
      )}
    </div>
  );
}
