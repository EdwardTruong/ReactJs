import React from "react";
import { useNavigate } from "react-router-dom";
/**
 *
 * @returns login thành công thì qua dashboard
 */
function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    /**
     * Dùng 1 trong 3 với 3 mục đích khác nhau
     */

    // ... xác thực xong
    navigate("/dashboard", { replace: true });

    // Điều hướng có query
    navigate("/search?q=react"); //

    // Điều hướng có state (trên url không có thông tin kèm theo)
    navigate("/profile", { state: { from: "login" } });
  };

  return <button onClick={handleLogin}>Đăng nhập</button>; // click vào nút đăng nhập xong là chuyển trang
}

export default Login;
/**
 * Chú ý đến state của navigate vì cái này rất hữu dụng :
 * 1 . phổ biến nhất. Sau khi thực hiện một hành động thành công (như Đăng nhập, Đăng ký, Cập nhật Hồ sơ, Thanh toán), bạn muốn chuyển trang và hiển thị một thông báo ngay lập tức. 
 *    Logic: Thay vì lưu thông báo vào State tổng thể (Redux/Context) và phải dọn dẹp nó sau, bạn truyền nó qua state :
 * 
 * // Trong component Register
    navigate("/account-verification", { 
      state: { successMessage: "Vui lòng kiểm tra email để xác minh tài khoản." } 
    });

    // Trong component AccountVerification
    const { state } = useLocation();
    // Nếu có state.successMessage, hiển thị thông báo đó và sau đó làm mờ nó đi.


  *  2. Như ví dụ của bạn, việc truyền { from: "login" } giúp trang đích biết được nguồn gốc của lần điều hướng này để điều chỉnh giao diện hoặc logic.
  *  Logic: Đôi khi, một trang (ví dụ: /checkout) có thể được truy cập từ nhiều nơi (Giỏ hàng, trang Chi tiết Sản phẩm, Mua lại Lịch sử).
  *  state giúp xác định nguồn gốc để tối ưu hóa quy trình.
  * Ví dụ: Sau khi tạo mới một bản ghi (record) thành công, bạn muốn điều hướng về trang danh sách:
  * 
  * // Trong component CreateNewItem
navigate("/list", { 
  state: { newlyCreatedId: 12345 } 
});

// Trong component List
// Component List sẽ nhận được ID 12345, và dùng ID này để:
// 1. Tự động cuộn đến vị trí của item vừa tạo.
// 2. Highlight (bôi đậm) item đó trong vài giây.
 */
