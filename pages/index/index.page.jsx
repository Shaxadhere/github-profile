import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Link,
  Text,
  Tooltip,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import twitterIcon from "../assets/icons/twitter.svg";
import "./style.css";
import { APP_ICONS } from "../config/constants/icons";

export function Page() {
  return (
    <Flex w="full" gap={5} align={"flex-start"}>
      <VStack spacing={5} align={"stretch"} w="400px">
        <Box>
          <Avatar
            borderRadius="0"
            src="https://avatars.githubusercontent.com/u/38428144?v=4"
            rounded="none"
            w="200px"
            h="200px"
          />
          <Heading as="h1" fontSize={"24px"} mt={5}>
            Shehzad Ahmed
          </Heading>
          <Heading fontWeight={"500"} as="h2" color="#aaaaaa" fontSize={"20px"}>
            @Shaxadhere
          </Heading>
          <Text color="#aaaaaa" fontSize={"16px"} mt={5}>
            Building @EvolvLMS, Freelance Developer, Film Maker and a lot more.
          </Text>
        </Box>

        <HStack spacing={0}>
          <IconButton
            as={Link}
            href="https://twitter.com/shaxaddd"
            aria-label="button"
            variant="ghost"
            icon={<Icon color="#aaaaaa" boxSize={5} as={APP_ICONS.TWITTER} />}
          />
          <IconButton
            as={Link}
            href="https://github.com/shaxadhere"
            aria-label="button"
            variant="ghost"
            icon={<Icon color="#aaaaaa" boxSize={5} as={APP_ICONS.GITHUB} />}
          />
          <IconButton
            as={Link}
            href="https://linkedin.com/in/shaxadhere"
            aria-label="button"
            variant="ghost"
            icon={<Icon color="#aaaaaa" boxSize={5} as={APP_ICONS.LINKEDIN} />}
          />
        </HStack>

        <Button h="50px" bg="#000" color="#fff" _hover={{ opacity: 0.7 }}>
          Hire Me
        </Button>

        <HStack>
          <Icon color="#aaaaaa" boxSize={5} as={APP_ICONS.LOCATION} />
          <Text color="#aaaaaa">Karachi, Pakistan.</Text>
        </HStack>
        <HStack>
          <Icon color="#aaaaaa" boxSize={5} as={APP_ICONS.LINK} />
          <Text color="#aaaaaa" as={Link} href="https://shehzadahmed.tech">
            shehzadahmed.tech
          </Text>
        </HStack>

        {/* <Box>
          <Heading fontSize={"18px"} as="h3" mt={5}>
            Folders
          </Heading>

          <Wrap maxW={"50px"} mt={3} spacing={3}>
            <WrapItem>
              <Button
                leftIcon={<Icon mt={1} as={APP_ICONS.FOLDER} boxSize={5} />}
              >
                Landing Pages
              </Button>
              <Button
                leftIcon={<Icon mt={1} as={APP_ICONS.FOLDER} boxSize={5} />}
              >
                Apps
              </Button>
              <Button
                leftIcon={<Icon mt={1} as={APP_ICONS.FOLDER} boxSize={5} />}
              >
                Backends
              </Button>
            </WrapItem>
          </Wrap>
        </Box> */}

        <Box>
          <Heading fontSize={"18px"} as="h3" mt={5}>
            Teams
          </Heading>

          <HStack mt={3} spacing={2}>
            <Tooltip label="Evolv Systems">
              <Avatar
                cursor={"pointer"}
                as={Link}
				href="https://github.com/EvolvSystems"
                border={"1px solid #eaeaea"}
                size="md"
                name="Segun Adebayo"
                src="https://avatars.githubusercontent.com/u/134615525?s=200&v=4"
              />
            </Tooltip>
          </HStack>
        </Box>
      </VStack>
      <Grid
        w="full"
        h="500px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        <GridItem colSpan={1} bg="papayawhip" />
        <GridItem colSpan={1} bg="papayawhip" />
        <GridItem colSpan={1} bg="papayawhip" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid>
    </Flex>
  );
}

function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}
