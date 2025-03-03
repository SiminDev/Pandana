import { useLoginContext } from "../../context/LoginContext";
import LoginButton from "./LoginButton";
import ProfileButton from "./ProfileButton";

function UserStatus() {
  const { isLogin } = useLoginContext();
  return <>{isLogin ? <ProfileButton /> : <LoginButton />}</>;
}

export default UserStatus;
