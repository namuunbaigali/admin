import React from "react";
import Heading from "../components/Heading";
import PostList from "../components/Blogs/PostList";
export default function Articles({ handleShow }) {
  return (
    <>
      <div className="container-sm body-container">
        <Heading title="Blog posts" handleShow={handleShow} />
        <PostList />
      </div>
    </>
  );
}
