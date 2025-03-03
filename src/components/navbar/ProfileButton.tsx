import { useRef, useState } from "react";
import UserMenu from "./UserMenu";
import { UserIcon } from "@heroicons/react/24/outline";


function ProfileButton() {


  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="cursor-pointer"
      onClick={() => setOpenMenu((prev) => !prev)}
      ref={menuRef}
    >
      <UserIcon className="size-5" />
      {openMenu && (
        <UserMenu
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          menuRef={menuRef}
        />
      )}
    </div>
  );
}

export default ProfileButton;
