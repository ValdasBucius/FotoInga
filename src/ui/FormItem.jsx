import Error from "./Error";

function FormItem({ label, error, children }) {
  return (
    <div className="flex justify-between gap-2 rounded-lg px-4 py-2">
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <Error>{error}</Error>}
    </div>
  );
}

export default FormItem;
