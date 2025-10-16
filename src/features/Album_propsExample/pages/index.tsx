import React from "react";
import AlbumList from "../AlbumList";
import type { AlbumItem } from "../AlbumItem";
import BlackButton from "../../../components/oldButton/BlackButton";
import { useNavigate } from "react-router-dom";

function AlBuns() {
  // Theo thông thường đây chính là nơi gọi API.
  const navigate = useNavigate(); // có cái này mới quay lại home được.
  /**
   * Sẽ có bài chi tiếc về navigate.
   * Nó sẽ được dùng để quay về trang trước đó 
   * 
   * Ngoài ra còn rất nhiều công dụng như :
   * 1. Truyền dữ liệu và kèm theo khi điều hướng : navigate("/profile", { state: { userId: 123 } });
   * 2.Thay thế trang hiện tại (không thêm vào lịch sử):  navigate("/login", { replace: true });
   * 3. Login thành công :
   *  const handleLogin = async () => {
      const isAuth = await loginApi();
      if (isAuth) {
      navigate("/dashboard"); // chuyển trang sau khi login thành công
    }
      ... Tóm lại điều hướng trong React Router bằng logic code (submid hoặc xử lý sự kiện), thay vì phải dùng thẻ <Link>
  };
   */

  const listAlbum: AlbumItem[] = [
    {
      id: 1,
      name: "Today's V-Pop Hits!",
      url: "",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/0/9/3/e/093ee44b561cc850c8b05917961f3110.jpg",
    },
    {
      id: 2,
      name: "V-Pop Đầy Hứa Hẹn!!",
      url: "",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/1/b/6/2/1b627f6294806e865d24edfff5e633a2.jpg",
    },
    {
      id: 3,
      name: "V-Pop nghe buồn ngủ",
      url: "",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/c/2/e/a/c2ea9f4def85d2aa7f71426c0e09d5ff.jpg",
    },
    {
      id: 4,
      name: "HipHop today <3!!! ",
      url: "",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/e/6/f/9/e6f93f682a4660f0ee01aa17a0a4a4aa.jpg",
    },
  ];

  return (
    <div>
      <h1>Danh sách albums</h1>
      <AlbumList listAlbum={listAlbum}></AlbumList>
      <BlackButton onClick={() => navigate("/")}>HomePage</BlackButton>
    </div>
  );
}

export default AlBuns;
