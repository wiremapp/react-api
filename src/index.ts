import { useState } from "react";

export const wmAPI = (url: string, options?: {}) => {
  const [pages, setPages] = useState([]);
  const [entries, setEntries] = useState([]);

  return { entries, pages };
};

export default wmAPI;
