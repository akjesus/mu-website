import axios from "axios";
const api = axios.create({
  baseURL: "https://api.cms.madukauniversity.edu.ng",
  headers: {
    "Content-Type": "application/json",
  },
});



export const fetchPosts = () => {
  return api.get("/api/v1/post", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const createPost = (formData) => {
  return api.post("/api/v1/post", formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updatePost = (postId, postData) => {
  return api.put(`/api/v1/post/${postId}`, postData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};  


export const deletePost = (postId) => {
  return api.delete(`/api/v1/post/${postId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getPost = (id) => {
  return api.get(`/api/v1/post/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}