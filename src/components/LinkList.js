import React from "react";
import { useNavigate } from "react-router-dom";

const LinkList = () => {
  const navigate = useNavigate();
  const handleWriteDiaryButton = () => {};

  return (
    <div className="LinkList">
      <button
        className="btn btn-outline-primary "
        onClick={() => {
          navigate("/writediary");
        }}
      >
        일지 작성
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          navigate("/exerciseinformation");
        }}
      >
        운동 정보
      </button>
    </div>
  );
};

export default React.memo(LinkList);
