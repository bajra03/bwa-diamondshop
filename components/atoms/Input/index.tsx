import cx from "classnames";

interface InputProps {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
}
export default function Input(props: InputProps) {
  const { label, id, type, name, placeholder, ...nativeProps } = props;
  const inputClass = cx({
    "form-control rounded-pill text-lg": true,
  });
  return (
    <>
      <label
        htmlFor={name}
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className={inputClass}
        {...nativeProps}
      />
    </>
  );
}
