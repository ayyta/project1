import React from "react";

function RedirectButton ( {url} ) {
  const redirectToNewPage = () => {
    window.location.href=url
  }

  return (
    <button onClick={redirectToNewPage}>View Recipe</button>
  );
}

export default RedirectButton