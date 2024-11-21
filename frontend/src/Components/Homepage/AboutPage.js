import React from "react";

const AboutPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(to bottom, #6a1b9a, #8e24aa, #ab47bc)",
      }}
    >
      <div className="container mx-auto p-8 bg-purple-800 text-purple-100 rounded-lg shadow-xl max-w-3xl">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          About Us
        </h1>
        <p className="text-lg leading-7 mb-6 text-center">
          Welcome to{" "}
          <span className="font-semibold text-purple-300">QuizWiz</span>! We are
          a platform designed to help you create, attempt, and enjoy quizzes
          across various subjects. Whether you're preparing for an exam or just
          want to test your knowledge, QuizWiz is the right place for you.
        </p>
        <p className="text-lg leading-7 text-center">
          Our goal is to provide a fun and educational experience for learners
          of all ages. With easy-to-create quizzes and a wide range of topics,{" "}
          <span className="font-semibold text-purple-300">QuizWiz</span> is the
          go-to quiz maker and quiz platform for everyone.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
