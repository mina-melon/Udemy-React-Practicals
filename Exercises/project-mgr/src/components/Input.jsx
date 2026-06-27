export default function Input({ ref, textarea, label, ...props }) {
  return (
    <>
      {textarea ? (
        <div className="input-container">
          <label>{label}</label>
          <textarea {...props} ref={ref} />
        </div>
      ) : (
        <div className="input-container">
          <label>{label}</label>
          <input {...props} ref={ref} />
        </div>
      )}
    </>
  );
}
