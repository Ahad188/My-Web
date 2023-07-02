import { useForm } from "react-hook-form";
import contact from '../../../public/contact.json';
import Lottie from "lottie-react";
import "./Contact.css";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="contact" id='contact'>
     <div className="heading my-10">
               <h3>Contact</h3>
          </div>
    <div className="md:grid md:grid-cols-2">
    <div className="text-div">
          {/* <img className="h-[500px] mx-auto my-10" src={c_img} alt="" /> */}
          {/* <h3 className="text-center mt-10 text-xl">Contact Me</h3> */}
          <Lottie size={400} animationData={contact} loop={true} />

     </div>
      <div className="form-div  ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-[450px] mx-auto border border-[#f0722e] border-r-8 border-b-8 p-10 my-20">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Name :</span>
              </label>
              <input
                type="text"
                {...register("Name", { required: true })}
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-xl">Email :</span>
              </label>
              <input
                type="email"
                {...register("Email", { required: true })}
                placeholder="email"
                className="input input-bordered  max-w-xs"
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-xl">Message:</span>
              </label>
              <textarea
                placeholder="Message"
                className="input input-bordered py-3 max-w-xs"
                {...register("Message", { required: true })}
              />
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn bg-[#ca5c25] w-[340px]" value=" Send" />
            </div>
          </div>
        </form>
      </div>
    </div>
    </section>
  );
};

export default Contact;
