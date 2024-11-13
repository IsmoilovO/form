// import React from "react";
import { useForm } from "react-hook-form";
import './login.css'

export const Login = () => {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();
  console.log("render");

  const submit = (data) => {
    console.log(data);
  };





  return (
    <div>

      <div className="block">
        <div className="container">
          <div className="blockk">
            <div className="block_descr
        ">
              <h1 className="title">
                Learn to code by watching others

              </h1>
              <p className="text">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
            </div>
            <div className="block_input">
              <a className="free" href="#">Try it free 7 days then $20/mo. thereafter</a>
              <form className="formm" onSubmit={handleSubmit(submit)}>
                <div className="block_forma">
                  <input className="input_name" placeholder="Ismingiz"
                    minLength={3}
                    {...register("userName", {
                      required: "ismingizni kiriting majburiy",
                      minLength: {
                        value: 1,
                        message: "ismingizni kiriting",
                      },
                      maxLength: {
                        value: 20,
                        message: " iltimos ismingizni to'gri kiriting",
                      },
                    })}
                    type="text"
                  />
                  {errors.userName ? (
                    <p style={{ color: "red" }}>{errors.userName.message}</p>
                  ) : (
                    ""
                  )}


                  <input className="input_name"
                    placeholder="Familyangiz"
                    minLength={3}
                    {...register("lastName", {
                      required: "familya kiritish majburiy",
                      minLength: {
                        value: 1,
                        message: "ismingizni kiriting",
                      },
                      maxLength: {
                        value: 20,
                        message: " iltimos ismingizni to'gri kiriting",
                      },
                    })} type="text" />
                  <input
                    className="input_name"
                    placeholder="Email Address"
                    minLength={3}
                    type="email"
                    {...register("email", {
                      required: "Pochta manzilingizni kiriting",
                      pattern: {
                        value: '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/',
                        message: "Iltimos, to‘g‘ri pochta manzilini kiriting",
                      },
                      minLength: {
                        value: 1,
                        message: "Ismingizni kiriting",
                      },
                      maxLength: {
                        value: 20,
                        message: "Iltimos, ismingizni to'g'ri kiriting",
                      },
                    })}
                  />
                  <input
                    className="input_name"
                    placeholder="Password"
                    type="password"
                    {...register("password", {
                      required: "Parolni kiriting",
                      minLength: {
                        value: 8,
                        message: "Parol kamida 8 ta belgidan iborat bo‘lishi kerak",
                      },
                      pattern: {
                        value: '/^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/',
                        message: "Parol kamida bitta harf va raqamdan iborat bo‘lishi kerak",
                      },
                      maxLength: {
                        value: 20,
                        message: "Parol 20 ta belgidan oshmasligi kerak",
                      },
                    })}
                  />





                  <button className="Btn" type="submit">CLAIM YOUR FREE TRIAL</button>

                  <div className="link">
                    <p className="link_text">By clicking the button, you are agreeing to our </p>
                    <a href="#" className="link_slik">Terms and Services</a>
                  </div>

                </div>



              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
