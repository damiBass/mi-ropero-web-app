import React, { useState } from "react";

import {
  IconButton,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  Box,
  Link,
  Icon,
  Button,
} from "@mui/material";
import BellNotif from "../../assets/BellNotif.png";
import Cart from "../../assets/Cart.png";
import Avatar from "../../assets/Avatar.png";
import { StyledBadge, StyledMenu } from "./style";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import theme from "../../styles/theme";
import { CgCloseO } from "react-icons/cg";
import AvatarMR from "../AvatarMR/AvatarMR";
import { IoStorefrontOutline, IoLocationOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiFilePaperLine } from "react-icons/ri";

const NavIcons = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [avatarMenu, setAvatarMenu] = useState(null);
  const [cartMenu, setCartMenu] = useState(null);
  const [notifMenu, setNotifMenu] = useState(null);
  const [session, setSession] = useState(null);
  const openNotif = Boolean(notifMenu);
  const openAvatar = Boolean(avatarMenu);
  const openCart = Boolean(cartMenu);
  const handleClickNotif = (event) => {
    setNotifMenu(event.currentTarget);
  };
  const handleClickAvatar = (event) => {
    setAvatarMenu(event.currentTarget);
  };
  const handleClickCart = (event) => {
    setCartMenu(event.currentTarget);
  };
  const handleCloseNotif = () => {
    setNotifMenu(null);
  };

  const handleCloseAvatar = () => {
    setAvatarMenu(null);
  };
  const handleCloseCart = () => {
    setCartMenu(null);
  };
  const onLogIn = () => {
    setSession(!null);
  };
  const closeSession = () => {
    setSession(null);
  };

  const optionUser = [
    {
      title: "Mi tienda",
      icon: <IoStorefrontOutline />,
    },
    {
      title: "Mis datos",
      icon: <HiOutlineUser />,
    },
    {
      title: "Mis favoritos",
      icon: <AiOutlineHeart />,
    },
    {
      title: "Mis direcciones",
      icon: <IoLocationOutline />,
    },
    {
      title: "Mis compras",
      icon: <RiFilePaperLine />,
    },
    {
      title: "Mis ofertas realizadas",
      icon: <FaRegMoneyBillAlt />,
    },
    {
      title: "Mis mensajes",
      icon: <BiMessage />,
    },
  ];

  const getMenuBell = () => {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <Box sx={{ mb: "4px" }}>
          <CgCloseO size={24} color="hsla(8, 100%, 56%, 1)" />
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: theme.typography.fontSize[3],
              fontFamily: theme.typography.fontFamily,
              fontWeight: theme.typography.fontWeightMedium,
              color: "hsla(8, 100%, 56%, 1)",
            }}
          >
            NO TENÉS NOTIFICACIONES
          </Typography>
        </Box>
      </Stack>
    );
  };

  const getMenuAvatar = () => {
    if (!session) {
      return (
        <Stack
          sx={{
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.fontSize[2],
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ pt: "12px" }}>
            <Typography sx={{ textAlign: "center", pb: "8px" }}>
              ¿Ya te registraste?
            </Typography>
            <Button
              sx={{
                border: "1px solid #423B3C",
                borderRadius: "20px",
                padding: "0px 36px 0px 36px",
                color: "hsla(351, 6%, 25%, 1)",
                minHeight: "32px",
                minWidth: "188px",
              }}
              onClick={onLogIn}
            >
              Ingresar
            </Button>
          </Box>
          <Box sx={{ pt: "26px", pb: "24px" }}>
            <Typography sx={{ textAlign: "center", pb: "8px" }}>
              ¿Todavía no te registraste?
            </Typography>
            <Button
              sx={{
                border: "1px solid hsla(8, 100%, 56%, 1)",
                borderRadius: "20px",
                padding: "0px 36px 0px 36px",
                color: "hsla(8, 100%, 56%, 1)",
                minHeight: "32px",
                minWidth: "188px",
              }}
            >
              Crear cuenta
            </Button>
          </Box>
        </Stack>
      );
    }
    return (
      <Stack>
        <Box
          sx={{ paddingLeft: "8px", paddingTop: "8px", paddingBottom: "8px" }}
        >
          <AvatarMR></AvatarMR>
        </Box>
        <Box
          sx={{
            fontSize: theme.typography.fontSize[1],
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {optionUser.map((item) => (
            <MenuItem sx={{ width: "100%", minHeight: "40px" }}>
              <Icon sx={{ fontSize: "15px" }}>{item.icon}</Icon>
              <Typography sx={{ pl: "15px" }}>{item.title}</Typography>
            </MenuItem>
          ))}
        </Box>
        <Box sx={{ textAlign: "center", pb: "10px", pt: "7px" }}>
          <Link
            sx={{
              color: "hsla(8, 100%, 56%, 1)",
              fontSize: theme.typography.fontSize[0],
              fontFamily: theme.typography.fontFamily,
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={closeSession}
          >
            Cerrar Sesión
          </Link>
        </Box>
      </Stack>
    );
  };

  const getMenuCart = () => {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <Box sx={{ mb: "4px" }}>
          <CgCloseO size={24} color="hsla(8, 100%, 56%, 1)" />
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: theme.typography.fontSize[3],
              fontFamily: theme.typography.fontFamily,
              fontWeight: theme.typography.fontWeightMedium,
              color: "hsla(8, 100%, 56%, 1)",
            }}
          >
            TU CARRITO ESTÁ VACÍO
          </Typography>
        </Box>
      </Stack>
    );
  };

  return (
    <Stack direction="row" spacing={isMobile ? 1 : 3}>
      <IconButton onClick={handleClickNotif}>
        <StyledBadge
          badgeContent={120}
          color="secondary"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <img src={BellNotif} alt="logo-mi-ropero" width="17px" />
        </StyledBadge>
      </IconButton>
      <StyledMenu
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        anchorEl={notifMenu}
        open={openNotif}
        onClose={handleCloseNotif}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              left: 125,
              width: 13,
              height: 13,
              borderRadius: "2px",
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        {getMenuBell()}
      </StyledMenu>
      <IconButton onClick={handleClickAvatar}>
        <StyledBadge
          badgeContent={3}
          color="secondary"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <img src={Avatar} alt="logo-mi-ropero" width="20px" />
        </StyledBadge>
        {!avatarMenu ? (
          <ExpandMoreIcon
            sx={{ position: "absolute", top: "12px", left: "30px" }}
          />
        ) : (
          <ExpandLessIcon
            sx={{ position: "absolute", top: "12px", left: "30px" }}
          />
        )}
      </IconButton>
      <StyledMenu
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        anchorEl={avatarMenu}
        open={openAvatar}
        onClose={handleCloseAvatar}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 120,
              width: 13,
              height: 13,
              borderRadius: "2px",
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        {getMenuAvatar()}
      </StyledMenu>
      <IconButton onClick={handleClickCart}>
        <StyledBadge
          badgeContent={1}
          color="secondary"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <img src={Cart} alt="logo-mi-ropero" width="21px" />
        </StyledBadge>
        {!cartMenu ? (
          <ExpandMoreIcon
            sx={{ position: "absolute", top: "12px", left: "30px" }}
          />
        ) : (
          <ExpandLessIcon
            sx={{ position: "absolute", top: "12px", left: "30px" }}
          />
        )}
      </IconButton>
      <StyledMenu
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        anchorEl={cartMenu}
        open={openCart}
        onClose={handleCloseCart}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 120,
              width: 13,
              height: 13,
              borderRadius: "2px",
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        {getMenuCart()}
      </StyledMenu>
    </Stack>
  );
};

export default NavIcons;
