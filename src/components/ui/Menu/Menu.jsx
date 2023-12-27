import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import Logo from "@img/ecommerce_10185772.png";
import products from "@img/box_6452366.png";
import home from "@img/store_6452554.png";
import like from "@img/like_6452430.png";
import notificacaoIcone from "@img/notificacao-icone.png";
import configuracoesIcone from "@img/configuracoes-icone.png";
import usuarioIcone from "@img/usuario-icone.png";

const Menu = () => {
  return (
    <div
      style={{
        width: "90%",
        height: "90%",
        justifyContent: "space-between",
        alignItems: "center",
        display: "inline-flex",
        marginLeft: "3%",
      }}
    >
      <Box
        component={Link}
        to={"/"}
        sx={{
          width: 200,
          height: 66.67,
        }}
      >
        <img
          style={{ width: 100, height: 100 }}
          src={Logo}
          alt="Logo"
        />
      </Box>
      <Box
        sx={{
          width: 390,
          height: 95.33,
          justifyContent: "space-between",
          alignItems: "center",
          display: "inline-flex",
        }}
      >

<Box
          component={Link}
          to={"/Home"}
          sx={{
            width: 106,
            height: 92,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 1,
            display: "inline-flex",
            textDecoration: "none",
          }}
        >
          <img
            style={{ width: 64, height: 64 }}
            src={home}
            alt="Ícone para Home"
          />
          <Typography
            sx={{
              width: 106,
              height: 23,
              textAlign: "center",
              color: "#6357F1",
              fontSize: 14,
              fontFamily: "Inter",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            HOME
          </Typography>
        </Box>

        <Box
          component={Link}
          to={"/produtos"}
          sx={{
            width: 106,
            height: 93.23,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 1,
            display: "flex",
            textDecoration: "none",
          }}
        >
          <img
            style={{ width: 64, height: 64 }}
            src={products}
            alt="products"
          />
          <Typography
            sx={{
              width: 106,
              height: 24.23,
              textAlign: "center",
              color: "#6357F1",
              fontSize: 14,
              fontFamily: "Inter",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            PRODUTOS
          </Typography>
        </Box>

        <Box
          component={Link}
          to={"/project"}
          sx={{
            width: 106,
            height: 93.23,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 1,
            display: "flex",
            textDecoration: "none",
          }}
        >
          <img
            style={{ width: 64, height: 64 }}
            src={like}
            alt="informações do projeto"
          />
          <Typography
            sx={{
              width: 106,
              height: 24.23,
              textAlign: "center",
              color: "#6357F1",
              fontSize: 14,
              fontFamily: "Inter",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            PROJECT
          </Typography>
        </Box>

      </Box>
      <Box
        sx={{
          width: 174,
          height: 40,
          justifyContent: "space-between",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <img
          style={{ width: 40, height: 40 }}
          src={configuracoesIcone}
          alt="Ícone para configurações"
        />
        <img
          style={{ width: 40, height: 40 }}
          src={notificacaoIcone}
          alt="Ícone para notificações"
        />
        <img
          style={{ width: 40, height: 40 }}
          src={usuarioIcone}
          alt="Ícone para usuário"
        />
      </Box>
    </div>
  );
};

export default Menu;
