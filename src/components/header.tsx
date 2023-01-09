import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export function Header() {
  return (
    <Box
      component="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      maxWidth={750}
      padding={1}
      height="50px"
      margin="0 auto"
    >
      <Typography component="h1" variant="h5" sx={{ fontSize: "1.4rem", fontWeight: 500 }}>
        Percentage Calculator
      </Typography>

      <Link
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/Dev-CasperTheGhost/percentage-calculator-react"
      >
        Source Code
      </Link>
    </Box>
  );
}
