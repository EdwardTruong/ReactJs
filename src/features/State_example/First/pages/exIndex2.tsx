import React, { useState } from "react";

interface Icon {
  id: number;
  value: string;
}

const listExample: Icon[] = [
  { id: 1, value: "red" },
  { id: 2, value: "blue" },
  { id: 3, value: "green" },
  { id: 4, value: "yellow" },
  { id: 5, value: "orange" },
  { id: 6, value: "purple" },
  { id: 7, value: "pink" },
  { id: 8, value: "black" },
  { id: 9, value: "white" },
  { id: 10, value: "gray" },
];
// //   const { listIcon, onClick }: props;

function RemoveIndexInList() {
  const [currentList, setCurrentList] = useState(listExample);
  console.log(`${JSON.stringify(currentList)}`);

  function removeIndex(id: number): void {
    const newList = currentList.filter((value) => value.id != id);
    return setCurrentList(newList);
  }

  return (
    <div>
      <ul>
        {currentList.map((index) => (
          <li key={index.id}>
            <button
              onClick={() => {
                removeIndex(index.id);
              }}
            >
              Id : {index.id} && Value :{index.value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RemoveIndexInList;
