import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import BlackButton from "../../components/oldButton/BlackButton";
/**
 * Cơ bản
 */
const name = "Yo Zu";
const age = 18;
const isFemale = false;
const student = { name: "Hello neggie" };
const colors = ["red", "green", "blue"];

export interface Employee {
  id: number;
  name: string;
  room?: string; // Thuộc tính tùy chọn (optional)
}

const employee01: Employee = {
  id: 1,
  name: "Ông Chủ số 1",
  room: "001",
};

const listEmployees: Employee[] = [
  { id: 1, name: "Ông số 1", room: "001" },
  { id: 2, name: "Ông số 2", room: "001" },
  { id: 3, name: "Ông số 3", room: "001" },
  { id: 4, name: "Ông số 4", room: "001" },
  { id: 5, name: "Ông số 5", room: "001" },
];

function ShowInfoExample() {
  const navigate = useNavigate(); // có cái này mới quay lại home được.

  console.log(`Ông chủ :  ${JSON.stringify(employee01)}`);
  console.log(`mouses :  ${JSON.stringify(listEmployees)}`);
  return (
    <div>
      <p>=============== Đơn ===============</p>
      <p> Đơn : Xin chào {name}</p>
      <p> Đơn : Tuổi {age}</p>
      <p>
        Mấy cái ni sẽ không render lên màng hình : {null}, {isFemale} ,{" "}
        {undefined}
      </p>
      <br />
      <p>=============== Có 3 cách viết if else ===============</p>
      {/* Cách 1 : */}

      <p>Giới tính : {isFemale ? "Đây là nữ !" : "Đây là nam"}</p>

      {/* Cách 2 : */}
      {isFemale ? (
        <p>Đây là nữ nhưng mà sử dụng trong "Ngoặc ngọn : '{}'"</p>
      ) : (
        <p>Đây là nam nhưng mà sử dụng trong "Ngoặc ngọn : '{}'"</p>
      )}

      {/* Cách 3 : Sử dụng cho đoạn code lớn : (Bắt đầu)*/}
      {isFemale && (
        <div>
          <p>
            Đoạn code lớn : kết quả : {isFemale ? "Đây là nữ !" : "Đây là nam"}
          </p>
        </div>
      )}
      {/* ============================== */}
      {/* Logic tách biệt */}
      {/* ============================== */}
      {!isFemale && (
        <div>
          <p>
            Đoạn code lớn : kết quả : {isFemale ? "Đây là nữ !" : "Đây là nam"}
          </p>
        </div>
      )}
      {/* Cách 3 : Sử dụng cho đoạn code lớn : (kết thúc)*/}
      <br />
      <p>=============== Object ===============</p>

      <div>
        Hiển thị object thì hiển thị được thuộc tính (field) của object, không
        load nguyên cái object được {student.name}
      </div>
      <div>
        <p>ID: {employee01.id}</p>
        <p>Name: {employee01.name}</p>
        <p>Room: {employee01.room}</p>
      </div>

      <p>=============== Mảng màu ===============</p>
      <ul>
        {/* thẻ li style : gọi thẳng kiểu object { {} },  key={} : id duy nhất của mảng, và <li>{tên}<li> */}

        {colors.map((color) => (
          <li style={{ color }} key={color}>
            {color}
          </li> // Cái này phải có key thì mới hiển thị tránh thông báo được . Cái này giống như id của object tránh trùng lặp của react
        ))}
      </ul>

      {/* {colors.map((value)=>())} : Cấu trúc thực hiện map.*/}

      <BlackButton onClick={() => navigate("/")}>HomePage</BlackButton>
    </div>
  );
}

export default ShowInfoExample;
