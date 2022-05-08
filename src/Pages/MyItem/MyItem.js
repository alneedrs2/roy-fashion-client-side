import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Item from "./Item/Item";

const MyItem = () => {
  const [myItems, setMyItems] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getMyItem = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/myItem?email=${email}`;
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setMyItems(data);
    };
    getMyItem();
  }, [user]);
  return (
    <div className="container">
      <h1 className="text-center mt-3">My Items</h1>
      <div className="items-container">
        {myItems.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default MyItem;
