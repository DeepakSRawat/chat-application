import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "react-native";
import Loading from "../../components/Loading";
import ChatList from "../../components/ChatList";
import { usersRef } from "../../firebaseConfig";
import { getDocs, query, where } from "firebase/firestore";

export default function Home() {
  const { logout, user } = useAuth();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (user?.uid) getUsers();
  }, []);
  const getUsers = async () => {
    // fetch users
    const q = query(usersRef, where("userId", "!=", user?.uid));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data() });
    });
    setUsers(data);
  };

  // console.log("user data:", user);
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />

      {users.length > 0 ? (
        <ChatList currentUser={user} users={users} />
      ) : (
        <View className="flex items-center" style={{ top: hp(30) }}>
          <ActivityIndicator size="large" className="text-indigo-500" />
          {/* <Loading size={hp(15)} /> */}
        </View>
      )}
    </View>
  );
}
