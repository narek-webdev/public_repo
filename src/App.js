import React, { lazy, Suspense } from "react";

const Comp1 = lazy(() => import("./Comp1"))
const Comp2 = lazy(() => import("./Comp2"))

function App () {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Comp1 />
      <Comp2 />
    </Suspense>
  );
}

export default App;
