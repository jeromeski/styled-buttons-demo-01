import { Button } from "../components/common/button/styled-button";

export default function Home() {
  return (
    <div>
      <Button
        size="big"
        variant="outlined"
        type="button"
        className="add-button"
      >
        Outlined Button
      </Button>
      <Button size="big" variant="primary" type="button">
        Primary Button
      </Button>
      <Button size="big" variant="secondary" type="button">
        Secondary Button
      </Button>
      <Button size="big" variant="text" type="button">
        Text Button
      </Button>
    </div>
  );
}
