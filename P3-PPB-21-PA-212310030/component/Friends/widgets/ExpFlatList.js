import React from "react";
import { FlatList } from "react-native";
import { Users } from "../../const-data/Dummy";
import UserItems from "./UserItems";

const ExpFlatList = () => {
  return (
    <FlatList
      data={Users}
      renderItem={({ item }) => <UserItems item={item} />}
    />
  );
};

export default ExpFlatList;