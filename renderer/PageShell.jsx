import { Flex, chakra } from "@chakra-ui/react";
import { PageContextProvider } from "./usePageContext";

export { PageShell };

function PageShell({ pageContext, children }) {
  return (
    <PageContextProvider pageContext={pageContext}>
      <Header url={pageContext.urlPathname} />
      <chakra.main bg="#eaeaea0f" py={10} px={10} mt="65px">{children}</chakra.main>
    </PageContextProvider>
  );
}

export function Header({ url }) {
  return (
    <Flex
      align="center"
      as="header"
      pos="fixed"
      top={0}
      w="100vw"
      h="65px"
	  shadow={"sm"}
    ></Flex>
  );
}
