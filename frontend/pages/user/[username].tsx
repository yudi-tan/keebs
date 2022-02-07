import type { NextPage } from "next";
import { useRouter } from "next/router";
import UserBadge from "../../components/user/user-badge.tsx";

const UserPage: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <div>
      <h1> Username: {username} </h1>
      <UserBadge />
    </div>
  );
};

export default UserPage;
