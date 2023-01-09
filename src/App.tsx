import { Header } from "./components/header";
import { CalculatePercentageSection } from "./components/calculate-percentage";
import { GetPercentageSection } from "./components/get-percentage";

export function App() {
  return (
    <>
      <Header />

      <CalculatePercentageSection />
      <GetPercentageSection />
    </>
  );
}

/*

CALCULATION:

percentage /  100 * a = amount

100 / amount * a = needed

*/
