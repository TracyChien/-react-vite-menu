import { useState } from "react";

const menuList = [
  {
    id: 1,
    name: "珍珠奶茶",
    des: "香濃奶茶搭配QQ珍珠",
    price: 50,
    stockNum: 20,
  },
  {
    id: 2,
    name: "冬瓜檸檬",
    des: "清新冬瓜配上新鮮檸檬",
    price: 45,
    stockNum: 18,
  },
  {
    id: 3,
    name: "翡翠檸檬",
    des: "綠茶與檸檬的完美結合",
    price: 55,
    stockNum: 34,
  },
  {
    id: 4,
    name: "四季春茶",
    des: "香醇四季春茶，回甘無比",
    price: 45,
    stockNum: 10,
  },
  {
    id: 5,
    name: "阿薩姆奶茶",
    des: "阿薩姆紅茶搭配香醇鮮奶",
    price: 50,
    stockNum: 25,
  },
  {
    id: 6,
    name: "檸檬冰茶",
    des: "檸檬與冰茶的清新組合",
    price: 45,
    stockNum: 20,
  },
  {
    id: 7,
    name: "芒果綠茶",
    des: "芒果與綠茶的獨特風味",
    price: 55,
    stockNum: 18,
  },
  {
    id: 8,
    name: "抹茶拿鐵",
    des: "抹茶與鮮奶的絕配",
    price: 60,
    stockNum: 20,
  },
];

const Menu = () => {
  const [list, setList] = useState(
    menuList.map((item) => {
      return { ...item, editing: false };
    })
  );
  const [editItem, setEditItem] = useState();

  const handleMinusClick = (targetItem) => {
    const newList = list.map((newItem) =>
      newItem.id === targetItem.id
        ? {
            ...newItem,
            stockNum:
              Number(newItem.stockNum) - 1 < 0
                ? 0
                : Number(newItem.stockNum) - 1,
          }
        : newItem
    );
    setList(newList);
  };

  const handleAddClick = (targetItem) => {
    const newList = list.map((newItem) =>
      newItem.id === targetItem.id
        ? {
            ...newItem,
            stockNum:
              Number(newItem.stockNum) + 1 >= 100
                ? 100
                : Number(newItem.stockNum) + 1,
          }
        : newItem
    );
    setList(newList);
  };

  const handleEditClick = (targetItem) => {
    const newList = list.map((newItem) => {
      return newItem.id === targetItem.id
        ? { ...editItem, editing: editItem.editing }
        : newItem;
    });
    setList(newList);
  };
  return (
    <div className="container">
      <h1 className=" text-2xl font-bold text-center my-4">餐點管理工具</h1>
      <div className="flex justify-between items-center">
        <p>庫存範圍:0-100</p>
        <button
          className="w-14 border text-black border-gray-200 bg-gray-200 rounded-md py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
          onClick={() => {
            setList(
              menuList.map((item) => {
                return { ...item, editing: false };
              })
            );
          }}
        >
          重置
        </button>
      </div>
      <table className="w-full table-fixed">
        <thead className="bg-gray-100">
          <tr>
            <th scope="col" className="py-3 px-6">
              品項
            </th>
            <th scope="col" className="py-3 px-6">
              描述
            </th>
            <th scope="col" className="py-3 px-6">
              價格
            </th>
            <th scope="col" className="py-3 px-6">
              庫存
            </th>
            <th scope="col" className="py-3 px-6">
              操作
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-600">
          {list.map((item) => {
            return (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="py-2 px-6">
                  {item.editing ? (
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="text-sm w-full px-1 py-1 border border-solid border-gray-600"
                      value={editItem.name}
                      onChange={(e) =>
                        setEditItem({ ...editItem, name: e.target.value })
                      }
                    ></input>
                  ) : (
                    <p>{item.name}</p>
                  )}
                </td>
                <td className="py-2 px-6">
                  {item.editing ? (
                    <input
                      type="text"
                      id="des"
                      name="des"
                      className="text-sm w-full px-1 py-1 border border-solid border-gray-600"
                      value={editItem.des}
                      onChange={(e) =>
                        setEditItem({ ...editItem, des: e.target.value })
                      }
                    ></input>
                  ) : (
                    <p>{item.des}</p>
                  )}
                </td>
                <td className="py-2 px-6 text-center">
                  <div className="flex justify-center">
                    {item.editing ? (
                      <input
                        type="number"
                        id="price"
                        name="price"
                        className="text-sm w-full px-1 py-1 border border-solid border-gray-600"
                        value={editItem.price}
                        onChange={(e) =>
                          setEditItem({
                            ...editItem,
                            price: Number(e.target.value),
                          })
                        }
                      ></input>
                    ) : (
                      <p>{item.price}</p>
                    )}
                    <p>元</p>
                  </div>
                </td>
                <td className="flex justify-center items-center py-2 px-6">
                  <button
                    className="w-7 border border-gray-700 bg-gray-700 text-white rounded-md py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                    onClick={() => {
                      handleMinusClick(item);
                    }}
                  >
                    -
                  </button>
                  {item.stockNum}
                  <button
                    className="w-7 border border-gray-700 bg-gray-700 text-white rounded-md py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                    onClick={() => {
                      handleAddClick(item);
                    }}
                  >
                    +
                  </button>
                </td>
                <td className="py-2 px-6 text-center">
                  {item.editing ? (
                    <div className="flex justify-center items-center">
                      <button
                        className="w-14 border border-green-500 bg-green-500 text-white rounded-md py-1 m-2 transition duration-500 ease select-none hover:bg-green-800 focus:outline-none focus:shadow-outline"
                        onClick={() => {
                          handleEditClick(item);
                        }}
                      >
                        儲存
                      </button>
                      <button
                        className="w-14 border text-black border-gray-200 bg-gray-200 rounded-md py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                        onClick={() => {
                          const newList = list.map((newItem) =>
                            newItem.id === item.id
                              ? { ...newItem, editing: !newItem.editing }
                              : { ...newItem, editing: false }
                          );
                          setList(newList);
                        }}
                      >
                        取消
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-center items-center">
                      <button
                        className="w-14 border border-indigo-500 bg-indigo-500 text-white rounded-md py-1 m-2 transition duration-500 ease select-none hover:bg-indigo-800 focus:outline-none focus:shadow-outline"
                        onClick={() => {
                          const newList = list.map((newItem) =>
                            newItem.id === item.id
                              ? { ...newItem, editing: !newItem.editing }
                              : { ...newItem, editing: false }
                          );
                          setList(newList);
                          setEditItem({ ...item, item: !item.editing });
                        }}
                      >
                        編輯
                      </button>
                      <button
                        className="w-14 border text-black border-gray-200 bg-gray-200 rounded-md py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                        onClick={() => {
                          setList(
                            list.filter((newItem) => newItem.id !== item.id)
                          );
                        }}
                      >
                        刪除
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Menu;
