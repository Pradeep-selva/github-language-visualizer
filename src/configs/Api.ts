import Axios from "axios";
import { GITHUB_TOKEN } from "../secrets";

Axios.defaults.headers.common["Authorization"] = `token ${GITHUB_TOKEN}`;

export const getUserData = (userName: string) =>
  Axios.get<Object>(`https://api.github.com/users/${userName}`)
    .then((response) => response.data)
    .catch((err) => err);

export const getUserRepos = (userName: string) =>
  Axios.get<Object>(`https://api.github.com/users/${userName}/repos`)
    .then((response) => response.data)
    .catch((err) => err);

export const getUserRepoLanguages = (userName: string, repoName: string) =>
  Axios.get<Object>(
    `https://api.github.com/repos/${userName}/${repoName}/languages`
  )
    .then((response) => response.data)
    .catch((err) => err);
