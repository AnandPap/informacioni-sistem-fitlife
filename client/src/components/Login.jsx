import { useNavigate } from "react-router";
import { Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography, Paper, Link } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in...");
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 8, p: 4, borderRadius: 3 }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={1}
          mb={2} // optional: bottom spacing
        >
          <Typography
            variant="h4"
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
          <Typography variant="h4">prijava</Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email adresa"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Zapamti me" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, py: 1.5 }}>
            Prijava
          </Button>
          <Box mt={2} textAlign="center">
            <Typography variant="body2">
              Nemate račun?{" "}
              <Link
                component="button"
                onClick={() => navigate("/register")}
                underline="hover"
                sx={{ verticalAlign: "baseline", padding: 0, fontSize: "inherit" }}
              >
                Registrujte se!
              </Link>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
