import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});



export const fetchPosts = () => {
  return api.get("/post", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const createPost = (formData) => {
  return api.post("/post", formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updatePost = (postId, postData) => {
  return api.put(`/post/${postId}`, postData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};  


export const deletePost = (postId) => {
  return api.delete(`/post/${postId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getPost = (id) => {
  return api.get(`/post/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}