import Axios from "axios";

export const getUserRepos = (userName: string) =>
  Axios.get(`https://api.github.com/users/${userName}/repos`)
    .then((response) => response)
    .catch(console.log);

export const getUserRepoLanguages = (userName: string, repoName: string) =>
  Axios.get(`https://api.github.com/repos/${userName}/${repoName}/languages`)
    .then((response) => response)
    .catch(console.log);
