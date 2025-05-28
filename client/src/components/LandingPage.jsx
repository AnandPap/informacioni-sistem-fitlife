import { useNavigate } from "react-router";
import { Box, Card, CardActionArea, CardContent, Typography, Button, Stack } from "@mui/material";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        color: "white",
        px: 3,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          letterSpacing: 1,
          fontFamily: "'Montserrat', sans-serif",
          background: "linear-gradient(45deg, #4caf50, #ff5722)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        FitLife
      </Typography>
      <Typography
        sx={{
          mb: 14,
        }}
        variant="h6"
      >
        Informacioni sistem za personalizovanu ishranu i fitness
      </Typography>

      <Stack direction="column" alignSelf={"center"} spacing={4} mb={3} width="100%" maxWidth={400}>
        {[
          { label: "Prijava", path: "/login" },
          { label: "Registracija", path: "/register" },
        ].map(({ label, path }) => (
          <Card
            key={label}
            sx={{
              flex: 1,
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 6px 20px rgba(255, 87, 34, 0.6)",
              },
            }}
            onClick={() => navigate(path)}
            elevation={3}
          >
            <CardActionArea>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" color="primary.main">
                  {label}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>

      <Button variant="text" color="" onClick={() => navigate("/home")} sx={{ mt: 2, textTransform: "none" }}>
        Nastavite kao gost
      </Button>
    </Box>
  );
};

export default LandingPage;
