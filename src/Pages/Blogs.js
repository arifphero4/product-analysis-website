import React from "react";
import Header from "../hooks/Header";

const Blogs = () => {
  const datas = [
    {
      question: "1. What is context API?",
      answer:
        "Context api is a way to pass data throuth multiple component without passing props.For a more in-depth definition, it provides a way for you to make particlar data availabel to all component throughoute the component tree no matter how deeply nested that component may be.context API solves one major problem prop drilling. Even if you are not familiar with the term, if you have worked on a React.js-app, it has probably happened to you. Prop drillings is the processing of getting data from component A to component Z by passing it through multiple layers of intermediary React components.",
    },
    {
      question: "2. What are semantic tags in HTML?",
      answer:
        "Semantic tags are tags that enable browsers and developers to understand what they are used for by their names. Semantic tags are able to indicate by their name what they will be used for.  Example:- <form> , <table> , and <article>",
    },
    // {
    //   question:
    //     "3. What is the difference between inline inline-block and block elements?",
    //   answer:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nihil enim et blanditiis dolorum dolore aspernatur eaque provident. Modi eveniet repudiandae mollitia cumque, aliquid id. Autem ipsam officiis pariatur eos blanditiis nostrum? Sunt, sint expedita quas magni, tempora dolorum culpa totam quo minus necessitatibus minima doloremque, nobis quod. Corporis laudantium non at dolore. Culpa natus cumque inventore? Nam itaque ea eaque magni, expedita voluptatem officiis quos mollitia perspiciatis et molestias, quae illo, impedit ducimus tempore iure rerum! Placeat fuga voluptatem vero porro, culpa, praesentium qui aliquam fugiat et sed at omnis recusandae neque exercitationem unde maxime. Nesciunt quas eaque nobis.",
    // },
  ];
  return (
    <div>
      <Header bg="bg-gray-50" bg2="bg-gray-900" />
      <div className="container ">
        <div className="py-20 mt-6">
          {datas?.map((data, index) => (
            <div
              key={index}
              className="flex flex-col shadow-lg p-5 my-4 rounded-md"
            >
              <div className="w-full md:w-8/12 self-start text-xl border-b-2 border-green-500 mb-3 pb-3 rounded-xl sm:text-2xl">
                {data?.question}
              </div>
              <div
                style={{ fontSize: "16px" }}
                className="w-full md:w-8/12 self-center border-b rounded-3xl p-2 sm:p-5 border-green-600"
              >
                {data?.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
