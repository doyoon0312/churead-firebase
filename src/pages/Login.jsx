import React, { useState } from "react";
import InputField from "../components/InputField";
import LoginButton from "../components/LoginButton";
import { Link } from "react-router-dom";

const Login = () => {
  // logic
  // const history = useNavigate();

  // const goToHome = () => {
  //   history("/");
  // };

  // 자식으로부터 받은 inputValue의 값을 state에 저장
  /**
   * 1. handleInputChange함수에서 data라는 inputValue와 field라는 해당 input의 필드값을 받아온다.
   * 2. 사용자가 email필드를 입력하면 email state에 inputValue의 값을 넣어준다.
   * 3. 사용자가 password필드를 입력하면 password state에 inputValue의 값을 넣어준다.
   * 4. form태그에서 onSubmit이라는 이벤트를 handleLogin이라는 함수에 연결한다
   * 5. handleLogin에서 email, password 의 값을 확인한다.
   */

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  const handleInputChange = (inputValue, field) => {
    // field: 'email', 'password'
    // const newFormData = { ...formData, [field]: inputValue };
    // setFormData(newFormData);

    if (field === "email") {
      setEmail(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault(); // 폼 제출시 새로고침 방지 메소드
    console.log("email", email);
    console.log("password", password);
    // TODO: 로그인 기능 구현
  };

  // view
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="text-center px-6">
        {/* <h2>Login</h2> */}
        {/* <button type="button" onClick={goToHome}>
          Home화면으로 이동
        </button> */}
        {/* <Link to={"/"} style={{ color: "red" }} className="link">
          Home화면으로 이동
        </Link> */}
        <h1 className="flex justify-center">
          <img src="./images/logo.svg" alt="churead로고" />
        </h1>
        <h3 className="text-red font-bold text-base py-6">
          Churead에서 소통해보세요
        </h3>
        {/* START: 폼 영역 */}
        <form
          id="login-form"
          className="text-center flex flex-col gap-2"
          onSubmit={handleLogin}
        >
          <InputField type="text" field="email" onChange={handleInputChange} />
          <InputField
            type="password"
            field="password"
            onChange={handleInputChange}
          />
          <LoginButton category="login" text="Login" />
        </form>
        {/* END: 폼 영역 */}
        <div className="flex justify-center gap-1 py-6">
          <p className="text-churead-gray-600">계정이 없으신가요?</p>
          <Link to="/sign-up" className="text-churead-blue">
            가입하기
          </Link>
        </div>
        <p className="text-gray-500 text-sm relative mb-4">
          {" "}
          <i className="block w-full h-[1px] bg-churead-gray-300 bg-opacity-15 absolute top-1/2 transform -translate-y-1/2" />{" "}
          <span className="bg-churead-black relative z-10 px-2"> or </span>{" "}
        </p>
        {/* START: 소셜 로그인 영역 */}
        <LoginButton category="socialLogin" text="Continue with Google" />
        {/* END: 소셜 로그인 영역 */}
      </div>
    </div>
  );
};

export default Login;
