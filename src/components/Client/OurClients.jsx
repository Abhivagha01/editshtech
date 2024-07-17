import React from "react";
import { Titleanimation } from "../../global/Titleanimation";
import company1 from "../../assets/OurCliets/company1.png";
import { Container, Box } from "@mui/material";
import { styled } from "@mui/system";

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  "--s": "130px",
  "--m": "4px", 
  "--f": "calc(1.732 * var(--s) + 4 * var(--m) - 1px)",
}));

const StyledContainer = styled(Box)(({ theme }) => ({
  fontSize: "0", 
  "&::before": {
    content: '""',
    width: "calc(var(--s) / 2 + var(--m))",
    float: "left",
    height: "120%",
    shapeOutside:
      "repeating-linear-gradient(#0000 0 calc(var(--f) - 3px), #000 0 var(--f))",
  },
}));

const StyledDiv = styled(Box)(({ theme }) => ({
  width: "var(--s)",
  margin: "var(--m)",
  height: "calc(var(--s) * 1.1547)",
  display: "inline-block",
  fontSize: "initial",
  clipPath: "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
  background: "#ededee",
  marginBottom: "calc(var(--m) - var(--s) * 0.2885)",
  position: "relative",
  "&:nth-of-type(odd)": {
    background: "#ededee",
    position: "relative",
  },
}));

const StyledImg = styled("img")({
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
});

function OurClients() {
  return (
    <>
      <Titleanimation title="Our clients" />

      <Box
        sx={{
          py: {
            sm: 4,
            md: 6,
            lg: 6,
          },
         margin:'10px 0'
        }}
      >
        <Container>
          <MainContainer>
            <StyledContainer>
              {Array(12)
                .fill()
                .map((_, index) => (
                  <StyledDiv key={index}>
                    <StyledImg src={company1} alt="company" />
                  </StyledDiv>
                ))}
            </StyledContainer>
          </MainContainer>
        </Container>
      </Box>
    </>
  );
}

export default OurClients;
