import React from "react";
import PropTypes from "prop-types";

const BlogHeader = () => {
  const blogHeaderImg = `https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fks75sc60ghydd5n2kmab.png`;

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 py-14">
      <div>
        <img className="rounded-lg w-full h-[60vh]" src={blogHeaderImg} alt="Blog Image" />
      </div>
      <div className="space-y-4 cursor-pointer lg:pt-12">
        <h2 className="text-4xl font-bold hover:underline">2024 Cheat Sheet Collection</h2>
        <p>
          <small>17/03/2024</small>
        </p>
        <p>
          In the fast-placed world of software development, time is of the
          essence, and having quick access to...
        </p>
      </div>
    </div>
  );
};

BlogHeader.propTypes = {};

export default BlogHeader;
