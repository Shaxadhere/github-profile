// `usePageContext` allows us to access `pageContext` in any Preact component.
// See https://vike.dev/pageContext-anywhere

import { ChakraProvider } from "@chakra-ui/react";
import { createContext } from "preact";
import { useContext } from "preact/hooks";

export { PageContextProvider };
export { usePageContext };

const Context = createContext(undefined);

function PageContextProvider({ pageContext, children }) {
  return (
    <ChakraProvider>
      <Context.Provider value={pageContext}>{children}</Context.Provider>;
    </ChakraProvider>
  );
}

function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
