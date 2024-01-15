import { Button } from "@/components/ui/button";
import React from "react";

function page() {
  return (
    <main className="h-full flex justify-center items-center flex-col">
      <div>chai page</div>
      <button>hellow</button>
      <Button variant="chai" size="sm">Shadcn Button</Button>
    </main>
  );
}

export default page;
