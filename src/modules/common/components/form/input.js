const InputForm = ({
  className, type, id, placeholder, name, onChange, value,
}) => (
  <input
    type={type}
    className={className}
    id={id}
    placeholder={placeholder}
    name={name}
    onChange={onChange}
    value={value}
  />
);

export default InputForm;
