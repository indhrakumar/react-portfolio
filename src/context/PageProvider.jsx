import { useContext, useState } from "react";
import PageContext from "./PageContext";

export const PageProvider = ({ children }) => {
  const [singlePage, setSinglePage] = useState(true);

  return (
    <PageContext.Provider value={{ singlePage, setSinglePage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => {
  return useContext(PageContext);
};
