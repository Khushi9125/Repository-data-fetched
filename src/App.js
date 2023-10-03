import React from "react";
import GitHubRepos from "./GitHubRepos";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <main className="container mx-auto px-3 pb-12">
      <GitHubRepos />;
      </main>
    </div>
  )
}
export default App;
