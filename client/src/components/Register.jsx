import { Container, Paper, Box, Typography, TextField, Button, Link } from "@mui/material";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 2, p: 4, borderRadius: 3 }}>
        <Box display="flex" justifyContent="center" alignItems="center" gap={1} mb={2}>
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
          <Typography variant="h4">registracija</Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Ime i prezime"
            name="name"
            autoComplete="name"
          />
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
            autoComplete="new-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Potvrdite password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
          />

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, py: 1.5 }}>
            Registrujte se
          </Button>

          <Box mt={2} textAlign="center">
            <Typography variant="body2">
              Već imate račun?{" "}
              <Link
                component="button"
                onClick={() => navigate("/login")}
                underline="hover"
                sx={{ verticalAlign: "baseline", padding: 0, fontSize: "inherit" }}
              >
                Prijavite se!
              </Link>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;
