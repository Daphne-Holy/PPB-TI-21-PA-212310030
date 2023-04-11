import React from "react";
import { FlatList, SectionList, Text } from "react-native";
import { UserObj } from "../../widgets/consdata";
import UserItems from "./UserItems";

const ExpSectionList = () => {
  const data = [
    { title: "Recommended Friends", data: UserObj },
    { title: "Similar Contact", data: UserObj },
  ];
  return (
    <SectionList
      sections={data}
      renderItem={({ item }) => <UserItems item={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{ color: "white", fontWeight:"bold", fontSize: 16 }}>{title}</Text>
      )}
    />
  );
};

export default ExpSectionList;