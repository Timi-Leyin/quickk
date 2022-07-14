import {
  Avatar,
  Text,
  Flex,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Logo from "./dashboard.svg";
import { FiLogOut } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";

const DashboardTop = ({ displayName, profilePic }) => {
  return (
    <>
      <Box
        bg={"#fff"}
        color="#000"
        py={"1em"}
        px={["1.5em", "5em"]}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box>
          <img src={Logo} alt="" />
        </Box>

        <Box>
          <Menu>
            <MenuButton>
              <Flex alignItems={"center"} gap={"1em"}>
                <Avatar name={displayName} />
                <Text fontWeight={"bold"} display={["none", "block"]}>
                  {displayName}
                </Text>
                <Text>
                  <BiChevronDown />
                </Text>
              </Flex>
            </MenuButton>

            <MenuList>
              
              <Link to='/profile'>

              <MenuItem>
                <Text mr="1em">
                  <BiUserCircle />
                </Text>{" "}
                Profile.
              </MenuItem>

               </Link>

              <MenuItem>
                <Text mr="1em">
                  <FiLogOut />
                </Text>
                logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </>
  );
};

export default DashboardTop;
