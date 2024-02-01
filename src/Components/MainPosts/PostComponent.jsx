import React, { useEffect, useRef, useState } from "react";
import "./PostComponent.css";
import Image from "../../Assets/Images/gamer.png";

const PostComponent = () => {
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postVideo, setPostVideo] = useState("");
  const [posts, setPosts] = useState(() => {
    const storedPosts = localStorage.getItem("posts");
    return storedPosts ? JSON.parse(storedPosts) : [];
  });

  const [commentInput, setCommentInput] = useState("");
  const [activeCommentId, setActiveCommentId] = useState(null);

  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const handleIconClick = (inputRef) => {
    inputRef.current.click();
  };

  const handlePostChange = (event) => {
    setPostContent(event.target.value);
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setPostImage(URL.createObjectURL(imageFile));
  };

  const handleVideoChange = (event) => {
    const videoFile = event.target.files[0];
    setPostVideo(URL.createObjectURL(videoFile));
  };

  const handlePostSubmit = () => {
    if (postContent.trim() !== "" || postImage !== "" || postVideo !== "") {
      const newPost = {
        id: Date.now(),
        content: postContent,
        image: postImage,
        video: postVideo,
        likes: 0,
        comments: [],
        timestamp: new Date().toLocaleString(),
      };

      setPosts([newPost, ...posts]);
      setPostContent("");
      setPostImage("");
      setPostVideo("");
    }
  };

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, likes: post.likes === 1 ? 0 : 1 - post.likes }
          : post
      )
    );
  };

  const handleComment = (postId) => {
    setActiveCommentId(activeCommentId === postId ? null : postId);
    setCommentInput("");
  };

  const handleCommentChange = (event) => {
    setCommentInput(event.target.value);
  };

  const handleCommentSubmit = (postId) => {
    if (commentInput.trim() !== "") {
      setPosts(
        posts.map((post) =>
          post.id === postId
            ? { ...post, comments: [...post.comments, commentInput] }
            : post
        )
      );
      setCommentInput("");
      setActiveCommentId(null);
    }
  };

  const handleShare = (postId) => {
    const post = posts.find((p) => p.id === postId);
    if (post) {
      const postLink = window.location.origin + "/post/" + post.id; 
      alert("Share this link: " + postLink);
    }
  };

  return (
    <div className="center-component">
      <div className="post-input">
        <div className="input_avatar">
          <div className="avatar">
            <img src={Image} alt="" />
          </div>
          <textarea
            placeholder="What's on your mind?"
            value={postContent}
            onChange={handlePostChange}
          ></textarea>
        </div>
        <div className="input-icons">
          <i
            className="fa-solid fa-image"
            onClick={() => handleIconClick(imageInputRef)}
          ></i>
          <input
            ref={imageInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <i
            className="fa-solid fa-video"
            onClick={() => handleIconClick(videoInputRef)}
          ></i>
          <input
            ref={videoInputRef}
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            style={{ display: "none" }}
          />
        </div>
        <button onClick={handlePostSubmit}>Post</button>
      </div>
      <div className="selected-files">
        {postImage && (
          <img
            src={postImage}
            alt="Selected Image"
            className="selected-image"
          />
        )}
        {postVideo && (
          <video controls src={postVideo} className="selected-video"></video>
        )}
      </div>
      <div className="feed">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <p>{post.content}</p>
            {post.image && <img src={post.image} alt="Post" />}
            {post.video && <video controls src={post.video}></video>}
            <small>{post.timestamp}</small>
            <div className="actions">
              <button onClick={() => handleLike(post.id)}>
                <i class="fa-regular fa-thumbs-up"></i> &nbsp; Like (
                {post.likes})
              </button>
              <button onClick={() => handleComment(post.id)}>
                <i class="fa-regular fa-comment"></i> &nbsp; Comment
              </button>
              <button onClick={() => handleShare(post.id)}>
                <i className="fa-regular fa-share-square"></i> &nbsp; Share
              </button>
            </div>
            {activeCommentId === post.id && (
              <div className="comment-input">
                <input
                  type="text"
                  value={commentInput}
                  onChange={handleCommentChange}
                  placeholder="Write a comment..."
                />
                <button onClick={() => handleCommentSubmit(post.id)}>
                  Post
                </button>
              </div>
            )}
            <div className="comments">
              {post.comments &&
                post.comments.map((comment, index) => (
                  <p key={index}>
                    <div className="comment-avatar">
                      <img src={Image} alt="" />
                      {comment}
                    </div>
                  </p>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostComponent;
