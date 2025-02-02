import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.auth.token);
  if (!token) {
    navigate("/login");
  }
  return children;
};

export default ProtectedRoute;
