import { RegisteredUser } from "@/types/registeredUser";
import Image from "next/image";

const UserInfo = ({ user }: { user: RegisteredUser }) => {
  return (
    <div className="dark:text-bodydark relative">
      <div className="flex items-center gap-4">
        <span className="text-right lg:block">
          <span className="block text-sm font-bold text-white dark:text-white">
            {user?.userCompanyName}
          </span>
          <span className="block text-xs font-bold text-white">
            {user?.userEmail}
          </span>
          <span className="block text-xs font-bold text-white">
            {user?.userType}
          </span>
        </span>

        <span className="h-12 w-12 dark:rounded-lg">
          <Image
            className="rounded-full"
            width={112}
            height={112}
            src={"/images/user/default-user.png"}
            style={{
              width: "auto",
              height: "auto",
            }}
            alt="User"
            priority={false}
          />
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
