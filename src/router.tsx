import { createBrowserRouter } from "react-router-dom";
import { Popular, ComingSoon, NowPlaying } from "./routes";
import App from "./App";
import { PATH } from "./constants/constants.ts";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: `${PATH.POPULAR}`, element: <Popular /> },
      { path: `${PATH.COMINGSOON}`, element: <ComingSoon /> },
      { path: `${PATH.NOWPLAYING}`, element: <NowPlaying /> },
    ],
  },
]);
