import { forwardRef } from "react";

const Input = forwardRef(({ label, ...props }, ref) => {
  return (
    <p className="control">
      <label>TODO: Output {label} </label>
      {/* Todo: "Forward" remaining props to <input> element */}
      <input {...props} ref={ref} />
    </p>
  );
});

export default Input;
