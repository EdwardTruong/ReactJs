import React from "react";
import { Navigate } from "react-router-dom";
/**
 * Ví dụ truy cập vào 1 trang xong để vào
 *  dashboard thì cần login mới vào được:
 *
 * @returns về trang login nếu như chưa login
 */

function Dashboard() {
  //
  const isLoggedIn = false;

  return isLoggedIn ? (
    <h2>Dashboard</h2> // login thành công thì  Dashboard
  ) : (
    <Navigate to="/login" replace /> //
  ); // quay về login đi rồi mới về đây được (chú ý *** replace ***)
  //replace : nó thay thế trang hiện tại, không lưu vào lịch sử trình duyệt
}

export default Dashboard;
/**
 * Truyền query params:
 * <Navigate to="/search?q=react" />
 *
 * Truyền state (dữ liệu không nằm trên URL):
 * <Navigate to="/profile" state={{ from: "login" }} />
 *
 */
