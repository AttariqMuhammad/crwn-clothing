import "./form-input.styles.scss";

export default function FormInput({ label, ...otherProps }) {
  return (
    <div className="group">
      {label && (
        <label
          className=" shrink form-input-label"
          //   className={`${
          //     otherProps.value.length ? 'shrink' : ''
          //   } form-input-label`}
        >
          {label}
        </label>
      )}
      <input className="form-input" {...otherProps} />
    </div>
  );
}
