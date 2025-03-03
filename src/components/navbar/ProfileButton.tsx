import { useRef, useState } from "react";
import UserMenu from "./UserMenu";
import { UserIcon } from "@heroicons/react/24/outline";
import useClickOutside from "../../hooks/useClickOutside";

function ProfileButton() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const closeMenu = () => {
    setIsOpen(false);
  };

  useClickOutside(menuRef, closeMenu);

  return (
    <div
      className="cursor-pointer"
      onClick={() => setIsOpen((prev) => !prev)}
      ref={menuRef}
    >
      <UserIcon className="size-5" />
      {isOpen && <UserMenu />}
    </div>
  );
}

export default ProfileButton;
