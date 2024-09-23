import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, useLocalSearchParams } from "expo-router";
import OptionItem from "@/src/components/OptionItem";
import { SafeAreaView } from "react-native-safe-area-context";

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
    content: { heading: string }[];
  };
  description: string;
}

const DetailSection = () => {
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
          content: [],
        },
        description:
          "Welcome to an exciting journey of building a cutting-edge FullStack Learning Management System (LMS) application with Next.js 13! In this in-depth tutorial, we will explore the power of Next.js, React.js.\n",
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
          content: [
            {
              heading: "What is HTML?",
            },
            {
              heading: "Basic Structure of an HTML Document",
            },
          ],
          num: "8",
        },
        description:
          "Welcome to an exciting journey of building a cutting-edge FullStack Learning Management System (LMS) application with Next.js 13! In this in-depth tutorial, we will explore the power of Next.js, React.js.",
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
          content: [
            {
              heading: "What is React Hooks?",
            },
            {
              heading: "useState Hook",
            },
            {
              heading: "useEffect",
            },
          ],
          num: "30",
        },
        description:
          "Welcome to an exciting journey of building a cutting-edge FullStack Learning Management System (LMS) application with Next.js 13! In this in-depth tutorial, we will explore the power of Next.js, React.js.",
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
          content: [
            {
              heading: "React component styled with Tailwind CSS",
            },
          ],
          num: "15",
        },
        description:
          "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML. It helps in creating responsive and highly customizable interfaces quickly.",
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
          content: [
            {
              heading: "What is Advanced Java?",
            },
            {
              heading: "Multithreading in Java",
            },
            {
              heading: "Interaction with JDBC",
            },
          ],
          num: "25",
        },
        description:
          "Learning advanced Java is crucial for developing robust, scalable, and high-performance applications. It opens up numerous opportunities in software development, especially in fields requiring back-end services, cloud-based applications, and large-scale enterprise solutions.",
      },
      {
        id: "cm1c6y3oyhwjl06l7kcchco13",
        name: "Basic CSS",
        price: "0",
        level: "basic",
        tags: "css",
        time: "1:30",
        author: "sasayaki",
        url: "https://as2.ftcdn.net/v2/jpg/02/15/11/53/1000_F_215115316_HM7qAcGRMZzX17yKH69gHEeJlO8NJrfR.jpg",
        chapters: {
          id: "cm1c6y3p7hwjm06l7zfzhg47t",
          content: [
            {
              heading: "What is CSS?",
            },
            {
              heading: "Basic CSS Syntax",
            },
          ],
          num: "10",
        },
        description:
          "CSS is essential for web development because it:\nControls the layout of multiple web pages all at once.\nSaves a lot of work by controlling the design of web pages from a single file.\nImproves the user experience by making web pages more interactive and visually appealing.\n",
      },
    ],
  };

  const { id } = useLocalSearchParams<{ id: string }>();

  const [course, setCourse] = useState<Course[]>([]);

  useEffect(() => {
    const filteredCourses = CourseData.courses.filter(
      (course) => course.id === id
    );

    setCourse(filteredCourses);
  }, [id]);

  return course[0] ? (
    <View className="p-2 rounded-2xl bg-white">
      <Image source={{ uri: course[0].url }} className="h-[190] rounded-2xl" />

      <View className="p-2">
        <Text
          className="text-2xl mt-2"
          style={{ fontFamily: "outfit-semibold" }}
        >
          {course[0].name}
        </Text>
        <View className="flex flex-row justify-between mb-2 m-1">
          <OptionItem
            icon={"book-outline"}
            value={course[0].chapters.num + " Chapters"}
          />
          <OptionItem icon={"time-outline"} value={course[0].time + "Hr"} />
        </View>
        <View className="flex flex-row justify-between mb-2 m-1">
          <OptionItem icon={"person-circle-outline"} value={course[0].author} />
          <OptionItem
            icon={"cellular-outline"}
            value={
              course[0].level.charAt(0).toUpperCase() + course[0].level.slice(1)
            }
          />
        </View>
        <View>
          <Text className="text-xl" style={{ fontFamily: "outfit-semibold" }}>
            Description
          </Text>
          <Text
            className="text-gray-500 leading-6 mt-2"
            style={{ fontFamily: "outfit" }}
          >
            {course[0].description}
          </Text>
        </View>
        <View className="flex flex-row justify-evenly gap-2 ">
          <View className="p-5 bg-primary rounded-2xl">
            <TouchableOpacity>
              <Text
                className="text-white text-center text-lg"
                style={{ fontFamily: "outfit" }}
              >
                Enroll For Free
              </Text>
            </TouchableOpacity>
          </View>
          <View className="p-5 justify-center bg-secondary rounded-2xl">
            <TouchableOpacity>
              <Text
                className="text-white text-center text-sm"
                style={{ fontFamily: "outfit" }}
              >
                Membership $2.99/Mon
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  ) : (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

const ChapterSection = () => {
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
          content: [],
        },
        description:
          "Welcome to an exciting journey of building a cutting-edge FullStack Learning Management System (LMS) application with Next.js 13! In this in-depth tutorial, we will explore the power of Next.js, React.js.\n",
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
          content: [
            {
              heading: "What is HTML?",
            },
            {
              heading: "Basic Structure of an HTML Document",
            },
          ],
          num: "8",
        },
        description:
          "Welcome to an exciting journey of building a cutting-edge FullStack Learning Management System (LMS) application with Next.js 13! In this in-depth tutorial, we will explore the power of Next.js, React.js.",
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
          content: [
            {
              heading: "What is React Hooks?",
            },
            {
              heading: "useState Hook",
            },
            {
              heading: "useEffect",
            },
          ],
          num: "30",
        },
        description:
          "Welcome to an exciting journey of building a cutting-edge FullStack Learning Management System (LMS) application with Next.js 13! In this in-depth tutorial, we will explore the power of Next.js, React.js.",
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
          content: [
            {
              heading: "React component styled with Tailwind CSS",
            },
          ],
          num: "15",
        },
        description:
          "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML. It helps in creating responsive and highly customizable interfaces quickly.",
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
          content: [
            {
              heading: "What is Advanced Java?",
            },
            {
              heading: "Multithreading in Java",
            },
            {
              heading: "Interaction with JDBC",
            },
          ],
          num: "25",
        },
        description:
          "Learning advanced Java is crucial for developing robust, scalable, and high-performance applications. It opens up numerous opportunities in software development, especially in fields requiring back-end services, cloud-based applications, and large-scale enterprise solutions.",
      },
      {
        id: "cm1c6y3oyhwjl06l7kcchco13",
        name: "Basic CSS",
        price: "0",
        level: "basic",
        tags: "css",
        time: "1:30",
        author: "sasayaki",
        url: "https://as2.ftcdn.net/v2/jpg/02/15/11/53/1000_F_215115316_HM7qAcGRMZzX17yKH69gHEeJlO8NJrfR.jpg",
        chapters: {
          id: "cm1c6y3p7hwjm06l7zfzhg47t",
          content: [
            {
              heading: "What is CSS?",
            },
            {
              heading: "Basic CSS Syntax",
            },
          ],
          num: "10",
        },
        description:
          "CSS is essential for web development because it:\nControls the layout of multiple web pages all at once.\nSaves a lot of work by controlling the design of web pages from a single file.\nImproves the user experience by making web pages more interactive and visually appealing.\n",
      },
    ],
  };

  const { id } = useLocalSearchParams<{ id: string }>();

  const [course, setCourse] = useState<Course[]>([]);

  useEffect(() => {
    const filteredCourses = CourseData.courses.filter(
      (course) => course.id === id
    );

    setCourse(filteredCourses);
  }, [id]);

  return course[0] ? (
    <View className="p-3 gap-3 mt-5 rounded-2xl bg-white">
      <Text className="text-2xl" style={{ fontFamily: "outfit-semibold" }}>
        Chapters
      </Text>
      {course[0].chapters.content.map((item, index) => (
        <View
          key={index}
          className="flex flex-row items-center justify-between border border-gray-400 rounded-lg gap-3 p-4"
        >
          <View className="flex flex-row items-center gap-3 px-4">
            <Text
              className="text-3xl text-gray-400"
              style={{ fontFamily: "outfit-semibold" }}
            >
              {index + 1}
            </Text>
            <Text
              className="text-xl text-gray-400"
              style={{ fontFamily: "outfit" }}
            >
              {item.heading}
            </Text>
          </View>
          <Ionicons name="lock-closed" size={24} color="gray" />
        </View>
      ))}
    </View>
  ) : (
    <View>
      <Text>Waiting...</Text>
    </View>
  );
};

const CourseDetailScreen = () => {
  return (
    <SafeAreaView>
      <View className="p-5 gap-1">
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Ionicons name="arrow-back-circle" size={40} color="black" />
        </TouchableOpacity>
        <ScrollView className="h-[728px]" showsVerticalScrollIndicator={false}>
          <DetailSection />
          <ChapterSection />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CourseDetailScreen;
