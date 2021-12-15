import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const login = (data) => API.post(`/users/login`, data);
export const register = (data) => API.post(`users/register`, data);
export const get_user_byid = (id) => API.get(`/users/get_user/${id}`);
export const update_profile = (id, data) =>
  API.put(`/users/update_profile/${id}`, data);
export const createPost = (data) => API.post(`/projects/create_project`, data);
export const getPosts = (userId) =>
  API.get(`/projects/get_userprojects/${userId}`);
export const deleteProject = (projectId, userId) =>
  API.delete(`/projects/delete_project/${projectId}/${userId}`);
export const updateProject = (data) =>
  API.put(`/projects/update_project`, data);
export const getTodayTasks = (userId) =>
  API.get(`/todaytask/get_tasks/${userId}`);
export const createTodayTask = (data) =>
  API.post(`/todaytask/create_task`, data);
export const deleteTodayTask = (id, userId) =>
  API.delete(`/todaytask/delete_task`, {
    data: {
      id: id,
      userId: userId,
    },
  });
export const editTodayTask = (id, name, description, completed, userId) =>
  API.put(`/todaytask/update_task`, {
    id: id,
    name: name,
    description: description,
    completed: completed,
    userId: userId,
  });
export const getProjectbyId = (projectId) =>
  API.get(`/projects/getproject_byid/${projectId}`);
export const commentOnProject = (databoi) =>
  API.put(`/projects/comment`, databoi);
export const getProjectTask = (userId) =>
  API.get(`projecttask/get_tasks/${userId}`);
export const createProjectTask = (databoi) =>
  API.post(`projecttask/create_task`, databoi);
export const deleteProjectTask = (id, projectId) =>
  API.delete(`projecttask/delete_task`, {
    data: {
      id: id,
      projectId: projectId,
    },
  });
export const editProjectTask = (id, name, description, completed, projectId) =>
  API.put(`projecttask/update_task`, {
    id: id,
    name: name,
    description: description,
    completed: completed,
    projectId: projectId,
  });
