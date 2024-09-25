import React, { useState } from "react";

const InputField = ({ type, field, onChange }) => {
  // logic
  /**
   * 입력값 부모컴포넌트에 넘겨주기
   * 1. input태그에 onChange이벤트 연결
   * 2. 연결된 함수에서 사용자 입력값 받아오기
   * 3. 받아온 입력값 state에 저장
   * 4. state를 Input의 value에 연결하기
   * 5. 부모에게 입력값 보내주기
   */

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value); // value state 변경
    onChange(value, field); // 부모에게 이벤트, 데이터 보내기
  };

  // view
  return (
    <input
      type={type}
      name={field}
      value={value}
      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
      className="block rounded-xl border border-gray-800 w-full bg-churead-gray-800 text-white placeholder-churead-gray-600 p-5"
      onChange={handleChange}
    />
  );
};

export default InputField;
