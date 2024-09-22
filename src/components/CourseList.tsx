import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

interface Course {
  id: string;
  name: string;
  price: string;
  level: string;
  tags: string;
  time: string;
  author: string;
  url: string;
  chapters: {
    id: string;
    num: string;
  };
}

type Props = {
  level: String;
};

const CourseList = ({ level }: Props) => {
  const CourseData = {
    courses: [
      {
        id: "bp",
        name: "Basic Python",
        price: "0",
        level: "basic",
        tags: "python",
        time: "2:30",
        author: "sasayaki",
        url: "https://i.pinimg.com/736x/55/8b/9c/558b9cc2c1e24e73290aba1a43430b17.jpg",
        chapters: {
          id: "cm1atas340z8t08l6r7m8gh04",
          num: "10",
        },
      },
      {
        id: "bh",
        name: "Basic HTML",
        price: "$1.99",
        level: "basic",
        tags: "html",
        time: "2:30",
        author: "sasayaki",
        url: "https://png.pngtree.com/png-clipart/20220502/original/pngtree-programming-web-technology-network-development-banner-png-image_7640473.png",
        chapters: {
          id: "cm1au358917kf07mm8l1zu6s1",
          num: "8",
        },
      },
      {
        id: "rct",
        name: "React Course",
        price: "$2.99",
        level: "advance",
        tags: "react",
        time: "4:00",
        author: "sasayaki",
        url: "https://i.pinimg.com/736x/55/8b/9c/558b9cc2c1e24e73290aba1a43430b17.jpg",
        chapters: {
          id: "cm1av10vd1gia07mm1id1ky77",
          num: "30",
        },
      },
      {
        id: "tw",
        name: "Tailwind CSS",
        price: "0",
        level: "moderate",
        tags: "tailwindCss",
        time: "1:30",
        author: "sasayaki",
        url: "https://thumbs.dreamstime.com/b/computer-programmeing-vector-concept-metaphor-css-html-programming-languages-coding-female-programmer-cartoon-character-176603179.jpg",
        chapters: {
          id: "cm1c5qseki2hd08l6awuek27p",
          num: "15",
        },
      },
      {
        id: "jv",
        name: "Java Advance Programming",
        price: "$2.99",
        level: "advance",
        tags: "java",
        time: "5:00",
        author: "sasayaki",
        url: "https://as2.ftcdn.net/v2/jpg/02/15/11/53/1000_F_215115316_HM7qAcGRMZzX17yKH69gHEeJlO8NJrfR.jpg",
        chapters: {
          id: "cm1c60gz3i3yd08l6cvhhgcl1",
          num: "25",
        },
      },
      {
        id: "bc",
        name: "Basic CSS",
        price: "0",
        level: "basic",
        tags: "css",
        time: "1:30",
        author: "sasayaki",
        url: "https://as2.ftcdn.net/v2/jpg/02/15/11/53/1000_F_215115316_HM7qAcGRMZzX17yKH69gHEeJlO8NJrfR.jpg",
        chapters: {
          id: "cm1c6y3p7hwjm06l7zfzhg47t",
          num: "10",
        },
      },
    ],
  };

  const [courseList, setCourseList] = useState<Course[]>([]);

  useEffect(() => {
    const filteredCourses = CourseData.courses.filter(
      (course) => course.level === level
    );

    setCourseList(filteredCourses);
  }, [level]);

  return (
    <View>
      <Text
        className={`text-2xl ${level === "basic" ? "text-white" : ""}`}
        style={{ fontFamily: "outfit-bold" }}
      >
        {level.charAt(0).toUpperCase() + level.slice(1)} Courses
      </Text>
      <FlatList
        data={courseList}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              router.push("../../app/(tabs)/(details)/CourseDetailsScreen");
            }}
          >
            <View className="p-4 me-3 bg-white rounded-xl">
              <Image
                source={{ uri: item.url }}
                className="w-[210px] h-40 bg-primary rounded-xl"
              />
              <View className="p-2">
                <Text
                  className="text-lg"
                  style={{ fontFamily: "outfit-semibold" }}
                >
                  {item.name}
                </Text>

                <View className="flex flex-row justify-between">
                  <View className="flex flex-row items-center gap-2 mt-1">
                    <Ionicons name="book-outline" size={18} color="black" />
                    <Text style={{ fontFamily: "outfit" }}>
                      {item.chapters.num} Chapters
                    </Text>
                  </View>
                  <View>
                    <View className="flex flex-row items-center gap-2 mt-1">
                      <Ionicons name="time-outline" size={18} color="black" />
                      <Text style={{ fontFamily: "outfit" }}>
                        {item.time} Hr
                      </Text>
                    </View>
                  </View>
                </View>

                <Text
                  className="mt-1 text-primary"
                  style={{ fontFamily: "outfit-semibold" }}
                >
                  {item.price == "0" ? "Free" : item.price}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CourseList;
