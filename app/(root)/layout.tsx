import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid-background flex items-center justify-center bg-slate-950 align-middle">
      {children}
    </div>
  );
};

export default layout;
