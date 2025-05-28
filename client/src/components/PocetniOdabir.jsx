import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

const steps = ["Vaše informacije", "Vaš cilj"];

const PocetniOdabir = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    weight: "",
    age: "",
    activityLevel: "",
    goal: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep((prev) => prev + 1);
    else {
      // Handle final submission
      console.log("Final data:", formData);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
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
          <Typography variant="h4">početne postavke</Typography>
        </Box>

        {activeStep === 0 && (
          <Box>
            <TextField
              fullWidth
              margin="normal"
              label="Težina (kg)"
              type="number"
              value={formData.weight}
              onChange={handleChange("weight")}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Starost"
              type="number"
              value={formData.age}
              onChange={handleChange("age")}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Nivo fizičke aktivnosti</InputLabel>
              <Select
                value={formData.activityLevel}
                onChange={handleChange("activityLevel")}
                label="Nivo fizičke aktivnosti"
              >
                <MenuItem value="low">Nizak</MenuItem>
                <MenuItem value="medium">Srednji</MenuItem>
                <MenuItem value="high">Visok</MenuItem>
              </Select>
            </FormControl>
          </Box>
        )}

        {activeStep === 1 && (
          <Box>
            <Typography variant="h6" mb={2} gutterBottom>
              Vaš cilj:
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
              {[
                { label: "Mršavljenje", value: "mrsavljenje" },
                { label: "Debljanje", value: "debljanje" },
                { label: "Izgradnja mičića", value: "misicna masa" },
                { label: "Održavanje težine", value: "odrzavanje" },
              ].map((option) => (
                <Paper
                  key={option.value}
                  elevation={formData.goal === option.value ? 6 : 1}
                  onClick={() => setFormData({ ...formData, goal: option.value })}
                  sx={{
                    p: 2,
                    cursor: "pointer",
                    borderRadius: 2,
                    backgroundColor: formData.goal === option.value ? "primary.light" : "grey.100",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "#fff",
                    },
                  }}
                >
                  <Typography variant="body1" align="center" fontWeight="bold">
                    {option.label}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Box>
        )}

        <Box display="flex" justifyContent="space-between" mt={4}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Nazad
          </Button>
          <Button variant="contained" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Završi" : "Dalje"}
          </Button>
        </Box>

        <Stepper activeStep={activeStep} sx={{ mt: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Paper>
    </Container>
  );
};

export default PocetniOdabir;
