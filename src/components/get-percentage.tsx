import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function GetPercentageSection() {
  const [answer, setAnswer] = React.useState<`${number}%` | null>(null);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    const target = event.target as HTMLFormElement;
    const elements = target.elements as unknown as Record<"amount1" | "amount2", HTMLInputElement>;

    const amount1 = elements.amount1.valueAsNumber;
    const amount2 = elements.amount2.valueAsNumber;

    if (!amount1 || !amount2) return;

    const answer = (100 / amount2) * amount1;

    setAnswer(`${answer}%`);
  }

  return (
    <Box component="section" borderTop="3px solid black" margin="20px auto" pt={3} maxWidth={750}>
      <Typography variant="h4">Get Percentage</Typography>

      <Box component="form" sx={{ marginBottom: 2 }} onSubmit={onSubmit}>
        <TextField
          margin="normal"
          fullWidth
          label="Enter Amount"
          type="number"
          helperText="For example: 100"
          name="amount1"
        />

        <TextField
          margin="normal"
          fullWidth
          label="Enter Second Amount"
          type="number"
          helperText="For example: 1000"
          name="amount2"
        />

        <Button fullWidth variant="contained" color="inherit" type="submit">
          Get Percentage!
        </Button>
      </Box>

      <Box>
        <Typography variant="h4">Answer is: {answer ?? "-"}</Typography>
      </Box>
    </Box>
  );
}
