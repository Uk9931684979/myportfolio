import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h1 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      About Me

                      </h1>
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Web Developer!
                      </h2>
                      <p className="mt-6 text-gray-600">
                      I am a skilled web designer, and my passion lies in creating captivating website designs and responsive development. I believe that a well-designed website should not only look visually appealing but also provide a smooth and enjoyable interaction for visitors.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Recently, I completed an internship in web development through Internshala. Over a short period of time, I learned how to create basic static websites using various languages such as HTML, CSS, Bootstrap, JavaScript, DBMS, Express.js, React.js, and GitHub. I continue to explore more about web development through resources like YouTube, MDN references, and open source projects to enhance my knowledge.
                      </p>
                      <p className="mt-4 text-gray-600">
                      I have successfully created several websites, including portfolio sites, TextUtils, and an e-commerce website, which I have deployed on GitHub. Please feel free to check them out.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}