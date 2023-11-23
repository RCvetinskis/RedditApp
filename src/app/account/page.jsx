"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
const route = () => {
  const { data: session } = useSession();

  if (!session) redirect("/");
  return (
    <>
      {session ? (
        <div>
          <h1>{session.user.username}</h1>
          <h1>{session.user.email}</h1>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default route;
