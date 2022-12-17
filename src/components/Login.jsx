import logo from "../assets/imagenes/undraw_access_account_re_8spm.svg";
import { useForms } from "../hooks/useForms";
import { useSendEmail } from "../hooks/useSendEmail";

const Login = () => {

  const { sendEmail } = useSendEmail()
  const { onInputChange, onResetForm, name, email, formState } = useForms({ name: "", email: ""})


  const onSubmit = (e) => {
    e.preventDefault()
    sendEmail({name, email})
    onResetForm()

  }


  return (
    <div className="w-full min-h-screen bg-[#695cfe] flex justify-center items-center">
     
      <div className="w-[90%] lg:max-w-md mx-2 py-8 p-10 shadow-2xl rounded bg-white">

        <img 
          src={logo} 
          alt="logo de la empresa" 
          className="h-60"  
        />

        <form className="mt-4" onSubmit={onSubmit}>
          <input
            type="text"
            className="w-full text-sm border-indigo-200 focus:border-2 border outline-none bg-indigo-50 mb-4 px-4 py-2 rounded"
            placeholder="Nombres"
            name="name"
            value={name}
            onChange={onInputChange}
          />

          <input
            type="email"
            className="w-full  text-sm border-indigo-200 focus:border-2  border outline-none bg-indigo-50 mb-4 px-4 py-2 rounded"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onInputChange}
          />

          <div className="mb-4 block">
            <button className=" w-full py-2 hover:bg-indigo-800 rounded bg-[#695cfe] text-white">Send Email</button>
          </div>

        </form>



      </div>


    </div>
  );
};

export default Login;
