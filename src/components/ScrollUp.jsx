import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const ScrollTopButton = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: "#d4af37", // Custom gold color
  color: "#fff",
  "&:hover": {
    backgroundColor: "#b38e30",
  },
}));

const ScrollUp = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <ScrollTopButton onClick={scrollToTop} size="small">
          <KeyboardArrowUp />
        </ScrollTopButton>
      )}
    </>
  );
};

export default ScrollUp;
