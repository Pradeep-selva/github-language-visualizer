import Axios from "axios";

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
