"use client";
import AnimeListUser from "@/components/Anime/AnimeListUser";
import { Input, Button } from "@nextui-org/react";
import React, { SyntheticEvent, useRef, useState } from "react";

function UserList() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const [submittedUsername, setSubmittedUsername] = useState("");

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (usernameRef.current) {
      setSubmittedUsername(usernameRef.current.value);
    }
  };

  return (
    <>
      <div className="m-auto w-full h-[90%] flex-wrap pb-10">
        <form
          className="w-full h-full flex items-center justify-center pt-3 gap-4 "
          action="get"
          onSubmit={handleSubmit}
        >
          <div className="w-96">
            <Input classNames={{input:["text-black"]}}ref={usernameRef} type="text" label="Nombre de usuario" />
          </div>
          <Button type="submit">Get list</Button>
        </form>
      </div>
      {submittedUsername && <AnimeListUser username={submittedUsername} />}
    </>
  );
}

export default UserList;
