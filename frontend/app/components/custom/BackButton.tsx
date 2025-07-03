import { useNavigate } from "react-router";
import { Button } from "../ui/button";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Button type="button" onClick={() => navigate(-1)} variant="secondary">
      Zpět
    </Button>
  );
}
