import { useState } from "react";
import Input from "../../components/Input";

interface UserDTO {
  userName: string;
  password: string;
  email: string;
  dateOfBirth: string;
  role: string;
}

function CreateUserForm() {
  const [formData, setFormData] = useState<UserDTO>({
    userName: "",
    password: "",
    email: "",
    dateOfBirth: "",
    role: "user",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Tạo người dùng thất bại");
      }

      const result = await response.json();
      console.log("Tạo thành công:", result);
      // Reset hoặc điều hướng
    } catch (error) {
      console.error("Lỗi:", (error as Error).message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Tạo người dùng mới</h2>

      <Input
        label="Tên đăng nhập"
        name="userName"
        value={formData.userName}
        onChange={handleChange}
        required
      />

      <Input
        label="Mật khẩu"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <Input
        label="Ngày sinh"
        name="dateOfBirth"
        type="date"
        value={formData.dateOfBirth}
        onChange={handleChange}
        required
      />

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="role">Vai trò</label>
        <select
          name="role"
          id="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="user">Người dùng</option>
          <option value="admin">Quản trị viên</option>
          <option value="manager">Quản lý</option>
        </select>
      </div>

      <button type="submit">Tạo người dùng</button>
    </form>
  );
}

export default CreateUserForm;
