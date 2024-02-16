import Error from "./Error";

function FormItem({ label, error, children }) {
  return (
    <div className="flex flex-col text-start">
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <Error>{error}</Error>}
    </div>
  );
}

export default FormItem;
