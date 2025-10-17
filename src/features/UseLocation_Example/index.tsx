import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

/**
 * Giả xử như cái object trả về có dạng như sau :
 *  {
 *      pathname: "/posts",
 *      search: "?page=1&size=10&sort=title,ASC&sort=dateUpdate,DESC",
 *      hash: "",
 *      state: null
 *   }
 */

interface Post {
  id: number;
  title: string;
  body: string;
}

function PostList() {
  const location = useLocation();
  const [posts, setPosts] = useState<Post[]>([]); // <- lấy bài post
  const [loading, setLoading] = useState(true); // <- lấy cái reload

  useEffect(() => {
    // ✅ 1. Lấy query từ URL
    const queryParams = new URLSearchParams(location.search); // <- search là nằm trong thư viện của URLSearchParams

    const page = queryParams.get("page") || "0";
    const size = queryParams.get("size") || "10";
    const sort = queryParams.getAll("sort"); // có thể có nhiều sort

    console.log("Page:", page, "Size:", size, "Sort:", sort);

    // ✅ 2. Gọi API với các param này
    setLoading(true);
    const apiUrl = `/api/posts?page=${page}&size=${size}&${sort
      .map((s) => `sort=${s}`)
      .join("&")}`; // <- ví dụ như BE truyền thêm dateUpdate ..v..v thì dùng map để join toàn bộ

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.content || []); // giả sử BE trả theo dạng Spring pageable
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [location.search]); // 👈 Mỗi khi URL query thay đổi, gọi lại API

  if (loading) return <p>Đang tải...</p>;

  return (
    <div>
      <h2>Danh sách bài viết</h2>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li> // danh sách các bài viết
        ))}
      </ul>
    </div>
  );
}

export default PostList;
/**
| Hook               | Vai trò                              |
| ------------------ | ------------------------------------ |
| `useLocation()`    | Đọc URL hiện tại (đặc biệt `search`) |
| `URLSearchParams`  | Phân tách query params               |
| `useEffect([...])` | Tự động fetch lại khi query thay đổi |
| `useState()`       | Lưu danh sách và trạng thái loading  |

 */
