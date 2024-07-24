

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isSearchOpen, setSearchOpen] = React.useState(false);
  const logoSrc = useBreakpointValue({ base: '/smalllogo.jpg', md: '/biglogo.jpg' });
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box position="relative">
      <Flex
        bg="white"
        color="gray.800"
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor="gray.200"
        align="center"
        justify="space-between"
        position="fixed"
        width="100%"
        top="0"
        zIndex="1000"
      >
        {/* Mobile Hamburger Menu Button */}
        <Flex display={{ base: 'flex', md: 'none' }} flex={{ base: 1, md: 'auto' }} mr={4}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant="ghost"
            aria-label="Toggle Navigation"
            color="black"
          />
        </Flex>

        {/* Mobile Logo and Icons */}
        <Flex
          align="center"
          flex={{ base: 1, md: 'none' }}
          justify="center"
          
          width="100%"
          maxWidth="600px"
          display={{ base: 'flex', md: 'none' }}
        >
          {/* Centered Logo */}
          <Link to={'/'}>
          <Image
            src="./smalllogo.jpg"
            alt="Logo"
            boxSize="50px"
            objectFit="contain"
          /></Link>

          {/* Icons */}
          <Flex
            align="center"
            position="absolute"
            right="0"
            top="50%"
            transform="translateY(-50%)"
          >
            <IconButton
              icon={<SearchIcon />}
              variant="ghost"
              aria-label="Search"
              onClick={() => setSearchOpen(!isSearchOpen)}
              color="gray.800"
              mr={2}
            />
            <IconButton
              icon={<FavoriteBorderIcon />}
              variant="ghost"
              aria-label="Favorites"
              color="gray.800"
              mr={2}
              _hover={{ color: 'orange.500' }} // Hover color change
            />
            <IconButton
              icon={<ShoppingCartOutlinedIcon />}
              variant="ghost"
              aria-label="Cart"
              color="gray.800"
              _hover={{ color: 'orange.500' }} // Hover color change
            />
          </Flex>
        </Flex>

        {/* Desktop Logo */}
        <Link to={'/'}><Image
          src={logoSrc}
          alt="Logo"
          boxSize={{ base: '50px', md: '150px' }}
          top="-50%"
          objectFit="contain"
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          display={{ base: 'none', md: 'block' }}
        />
        </Link>

        {/* Desktop Search Input */}
        <InputGroup
          display={{ base: 'none', md: 'flex' }}
          transition="all 0.3s ease"
          width={isSearchOpen ? '300px' : '150px'}
          borderBottom="1px solid gray"
          position="relative"
          ml={4}
          onClick={() => setSearchOpen(true)}
        >
          <Input
            type="text"
            placeholder="Search"
            variant="unstyled"
            pr="3rem"
            _placeholder={{ color: 'gray.500' }}
          />
          <InputRightElement
            width="3rem"
            position="absolute"
            top="0"
            right="0"
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop="2px"
          >
            <SearchIcon color="gray.500" w={6} h={6} />
          </InputRightElement>
        </InputGroup>

        {/* Desktop Navigation and Icons */}
        <Flex display={{ base: 'none', md: 'flex' }} align="center" ml="auto">
          <Stack direction="row" spacing={4} alignItems="center">
            <DesktopNav />
            <IconButton
              icon={<FavoriteBorderIcon />}
              variant="ghost"
              aria-label="Favorites"
              color="gray.800"
              _hover={{ color: 'orange.500' }} // Hover color change
            />
            <Link to={'/Cart'}>
            <button>

            <IconButton
              icon={<ShoppingCartOutlinedIcon />}
              variant="ghost"
              aria-label="Cart"
              color="gray.800"
              _hover={{ color: 'orange.500' }} // Hover color change
            />
            </button></Link>
          </Stack>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack bg="white" p={4} display={{ md: 'none' }} spacing={4}>
          <MobileNav />
        </Stack>
      </Collapse>

      {/* Mobile Search Input */}
      {isMobile && isSearchOpen && (
        <Box p={4} bg="white" position="fixed" width="100%" zIndex="999" top="60px">
          <InputGroup>
            <Input type="text" placeholder="Search" variant="unstyled" />
            <InputRightElement>
              <SearchIcon color="gray.500" />
            </InputRightElement>
          </InputGroup>
        </Box>
      )}
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = 'gray.800';
  const linkHoverColor = 'gray.900';
  const popoverContentBgColor = 'white';

  return (
    <Stack direction="row" spacing={4} alignItems="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} position="relative" _hover={{ cursor: 'pointer' }}>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '/signup'}
                fontSize="sm"
                fontWeight={500}
                color={linkColor}
                display="flex"
                alignItems="center"
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                  '.hover-icon': {
                    color: 'orange.500',
                  },
                }}
              >
                {navItem.label === 'Find a\n Store' ? (
                  <Flex align="center" justifyContent="flex-end" width="100%">
                    <Link to={'/addProd'}>
                    <Text color="inherit" whiteSpace="pre">
                      Add a{'\n'}<span style={{ color: 'red' }}>Store</span>
                    </Text></Link>
                    <StorefrontIcon className="hover-icon" style={{ fontSize: 24, marginLeft: 8 }} />
                  </Flex>
                ) : navItem.label === 'Sign Up Now\nGet Credits worth INR 10,000' ? (
                  <>
                    <Stack spacing={0} textAlign="right">
                      <Text fontSize="sm" color="inherit">
                        Sign Up Now
                      </Text>
                      <Text fontSize="sm" color="orange.500">
                        Get Credits worth INR 10,000
                      </Text>
                    </Stack>
                    <PersonIcon className="hover-icon" style={{ fontSize: 24, marginLeft: 8 }} />
                  </>
                ) : navItem.label === 'Learn Design' ? (
                  <FavoriteBorderIcon className="hover-icon" style={{ fontSize: 24 }} />
                ) : navItem.label === 'Hire Designers' ? (
                  <ShoppingCartOutlinedIcon className="hover-icon" style={{ fontSize: 24 }} />
                ) : (
                  <Text color="inherit">{navItem.label}</Text>
                )}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow="xl"
                bg={popoverContentBgColor}
                p={4}
                rounded={0}
                minW="sm"
              >
                <Stack spacing={4}>
                  <Text fontSize="lg" fontWeight={600}>
                    {navItem.children[0].label}
                  </Text>
                  <Text fontSize="sm">{navItem.children[0].subLabel}</Text>
                  <Link to={'/signup'}>
                  <Button colorScheme="red" width="200px" rounded={0}>
                    LOGIN/SIGNUP
                  </Button>
                  </Link>
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack spacing={4}>
      <IconButton
        icon={<FavoriteBorderIcon />}
        variant="ghost"
        aria-label="Favorites"
        color="gray.800"
        _hover={{ color: 'orange.500' }} // Hover color change
      />
      <IconButton
        icon={<ShoppingCartOutlinedIcon />}
        variant="ghost"
        aria-label="Cart"
        color="gray.800"
        _hover={{ color: 'orange.500' }} // Hover color change
      />
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Sign Up Now\nGet Credits worth INR 10,000',
    children: [
      {
        label: 'Welcome',
        subLabel: 'Register now and Get Exclusive Benefits!',
        href: '/signup',
      },
    ],
  },
  {
    label: 'Find a\n Store',
    href: '#',
  },
];

export default Navbar;

