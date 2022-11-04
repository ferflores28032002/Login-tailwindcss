import logo from "../assets/imagenes/undraw_access_account_re_8spm.svg";
import logo2 from "../assets/imagenes/undraw_logistics_x-4-dc (1).svg";

const Login = () => {
  return (
    <div className="w-full min-h-screen bg-[#695cfe] flex justify-center items-center">
     
      <div className="max-w-md mx-2 py-8 p-10 shadow-2xl rounded bg-white">

        <img src={logo2} alt="logo de la empresa" />

        <form className="mt-4">
          <input
            type="text"
            className="w-full border-indigo-200 border-2 outline-none bg-indigo-100 mb-4 px-4 py-4 rounded"
            placeholder="Usuario"
          />

          <input
            type="text"
            className="w-full border-indigo-200 border-2 outline-none bg-indigo-100 mb-4 px-4 py-4 rounded"
            placeholder="Password"
          />

          <div className="mb-4 block">
            <button className=" w-full py-2 hover:bg-indigo-800 rounded bg-[#695cfe] text-white">Entrar</button>
          </div>

        </form>



      </div>


    </div>
  );
};

export default Login;
