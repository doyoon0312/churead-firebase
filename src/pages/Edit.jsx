import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PostInput from "../components/PostInput";

const Edit = ({ editItem, onEdited }) => {
  // logic
  const history = useNavigate();
  const [churead, setChuread] = useState("");

  const handleChange = (value) => {
    setChuread(value);
  };

  const handleEdit = (event) => {
    event.preventDefault(); // 폼 제출시 새로고침 방지 메소드

    const editedItem = { ...editItem, churead };
    onEdited(editedItem);
    history("/"); // home화면으로 이동
  };

  // view
  return (
    <div className="h-full">
      <header className="fixed max-w-[572px] mx-auto px-4 py-6 text-center top-0 left-0 right-0">
        <Link
          to="/"
          className="absolute left-4 text-churead-gray-300 text-opacity-60"
        >
          취소
        </Link>
        <h3 className="font-bold">새로운 스레드</h3>
      </header>
      <main className="h-full pt-[72px] pb-[88px] overflow-hidden">
        <div className="h-full overflow-auto">
          <form id="post" onSubmit={handleEdit}>
            {/* START: 사용자 입력 영역 */}
            <PostInput
              defaultValue={editItem.churead}
              userName={editItem.userName}
              userProfileImage={editItem.userProfileImage}
              onChange={handleChange}
            />
            {/* END: 사용자 입력 영역 */}
            {/* START: 수정 버튼 영역 */}
            <div className="w-full max-w-[572px] flex items-center fixed bottom-0 lef p-6">
              <p className="text-churead-gray-300 text-opacity-60">
                누구에게나 답글 및 인용 허용
              </p>
              <button
                type="submit"
                className="ml-auto px-5 py-2 bg-white text-churead-black rounded-3xl font-bold"
              >
                수정
              </button>
            </div>
            {/* END: 수정 버튼 영역 */}
          </form>
        </div>
      </main>
    </div>
  );
};

export default Edit;
