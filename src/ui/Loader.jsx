import { Oval } from "react-loader-spinner";

function Loader() {
  return (
    <Oval
      visible={true}
      height="80"
      width="80"
      color="#c59b03"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}

export default Loader;
