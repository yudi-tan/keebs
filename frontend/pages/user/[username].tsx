import type { NextPage } from "next";
import { useRouter } from "next/router";

const UserPage: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <div>
      <h1> Username: {username} </h1>
    </div>
  );
};

export default UserPage;
