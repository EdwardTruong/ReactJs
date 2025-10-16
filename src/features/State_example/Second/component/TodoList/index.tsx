import type { Item } from "../TodoItem";
import "./style.scss";
import classNames from "classnames";

// tạo ra list để handle cái hiển thị
export interface TodoListProps {
  items: Item[];
  clickAItem: (item: Item) => void;
  id?: number;
  status?: string;
}

function TodoList(props: Readonly<TodoListProps>) {
  const { items, clickAItem } = props;

  const handlerClick = (value: Item) => {
    clickAItem?.(value); //Gọi hàm callback từ cha : chỉ gọi callback, không tự đổi status ở đây
    console.log(` 
      Các bước logic render chỗ này :
      1.Nó render từ cha -> prop con.  
      2.handlerClick đã tồn tại trong cái button. *** Nó dùng để tham chiếu đến clickAItem={changeStatus} ở component cha là TodoListNew().
      3.Khi click vào button thì handlerClick chạy.
      4.Khi handlerClick chạy thì clickAItem của TodoListProps có giá trị. 
      5.Đồng nghĩa clickAItem={changeStatus} ở chạy -> thực hiện hàm changeStatus.
      6.useCallback thực hiện logic 
      7.useCallback truyền lại thông tin xuống dưới dưới props con (TodoList)
      8.TodoList re-render lại. 
      9.Quay lại bước 2 -> gọi lên cha để cập nhật giá trị và nó re-render lại.  `);
  };
  return (
    <div>
      <h1>TodoList </h1>
      <ul className="styled-list">
        {items.map((value) => (
          <li
            key={value.id}
            className={classNames({
              check: value.status === "check",
            })}
          >
            <button onClick={() => handlerClick(value)}>{value.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
// Cũ nhất :
//  <li
//             key={value.id}
//             className={classNames({
//               "li-style": true,
//               check: value.status === "check",
//             })}
//           >
//             {value.title}{" "}
//           </li>

// <li key={value.id}>
//   <button
//     onClick={() => clickAItem(value)}
//     className={classNames({
//       check: value.status === "check",
//     })}
//   >
//     {value.title}
//   </button>
// </li>
