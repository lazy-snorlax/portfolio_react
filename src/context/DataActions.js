// import { createContext, useState, useEffect } from "react";
import axios from "axios";

const dataCalls = axios.create({
  baseURL: "Data.json",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getSkillsAndProjects = () => {
  // const [skills, projects] = async () =>
  //   await Promise.all([dataCalls.get(`/skills`), dataCalls.get(`/projects`)]);

  // return {
  //   skills: skills.data,
  //   projects: projects.data,
  // };
  axios
    .get("Data.json")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
