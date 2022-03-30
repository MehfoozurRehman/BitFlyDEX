import React, { useEffect } from "react";

function SideBar() {
  return <div className="docs__container__wrapper__sidebar">hello</div>;
}
function DocsContent() {
  return <div lassName="docs__container__wrapper__content">hello</div>;
}

export default function Docs({ setIsDocs }) {
  useEffect(() => {
    setIsDocs(true);
  }, []);

  return (
    <div className="docs__container">
      <div className="docs__container__wrapper">
        <SideBar />
        <DocsContent />
      </div>
    </div>
  );
}
