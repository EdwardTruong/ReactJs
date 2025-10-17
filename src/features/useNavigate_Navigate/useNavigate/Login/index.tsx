import React from "react";
import { useNavigate } from "react-router-dom";
/**
 *
 * @returns login thành công thì qua dashboard
 */
function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // ... xác thực xong
    navigate("/dashboard", { replace: true });
  };

  return <button onClick={handleLogin}>Đăng nhập</button>; // click vào nút đăng nhập xong là chuyển trang
}

export default Login;
