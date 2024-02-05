import { useNavigate } from "react-router-dom";

function Birthdays() {
  const navigate = useNavigate();
  return (
    <div className="mt-[300px] bg-black text-center text-white">
      <h3>Birthdays</h3>
      <button className="text-white" onClick={() => navigate(-1)}>
        Back to galery
      </button>
    </div>
  );
}

export default Birthdays;
