export default function Input({ name, id, label, ...props }) {
  return (
    <p className="control">
      <label htmlFor={id}>
        {label}
      </label>
      <input id={id} name={name || id} {...props} required />
    </p>
  )
}