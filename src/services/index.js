import { LIST_EMP_URL } from "../apiUrls";

const getageapi = async (name) => {
    const response = await fetch(LIST_EMP_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  };

export {getageapi}  