import { useState, useRef } from "react";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import http from "../../api/http";

const Modal = () => {
  const queryClient = useQueryClient();
  const params = useParams();
  const enterprizeId = params.enterprizeId;
  const closeBtnRef = useRef();
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const handleSubmitBtn = () => {
    if (post.title.trim() === "" || post.content.trim() === "") return;
    http.post(`/board/${enterprizeId}`, post).then(({ data }) => {
      setPost({
        title: "",
        content: "",
      });
      console.log("data", data);
      queryClient.invalidateQueries(["boards", enterprizeId]);
      closeBtnRef.current.click();
    });
  };

  const handleChange = (e) => {
    setPost((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          {/* 모달 상단 */}
          <div className="modal-header">
            <h5 className="modal-title2" id="staticBackdropLabel">
              글쓰기
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              ref={closeBtnRef}
            ></button>
          </div>

          {/* 모달 내용 */}
          <div className="modal-body">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                <strong>제목</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="제목을 입력하세요."
                name="title"
                value={post.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label ">
                <strong>내용</strong>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="10"
                placeholder="내용을 입력하세요."
                name="content"
                value={post.content}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          {/* 모달 하단 */}
          <div className="modal-footer">
            <button
              onClick={handleSubmitBtn}
              type="submit"
              className="btn btn-primary"
            >
              글 작성
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
