import { createBrowserRouter } from "react-router-dom";
import {
  Popular,
  ComingSoon,
  NowPlaying,
  DisneyCharacter,
  MarvelHero,
  Archive,
  ErrorPage,
} from "./routes";
import App from "./App";
import { PATH } from "./constants/constants.ts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: `${PATH.POPULAR}`,
        element: <Popular />,
        errorElement: <ErrorPage />,
      },
      {
        path: `${PATH.COMINGSOON}`,
        element: <ComingSoon />,
        errorElement: <ErrorPage />,
      },
      {
        path: `${PATH.NOWPLAYING}`,
        element: <NowPlaying />,
        errorElement: <ErrorPage />,
      },
      {
        path: `${PATH.DISNEY}`,
        element: <DisneyCharacter />,
        errorElement: <ErrorPage />,
      },
      {
        path: `${PATH.MARVEL}`,
        element: <MarvelHero />,
        errorElement: <ErrorPage />,
      },
      {
        path: `${PATH.ARCHIVE}`,
        element: <Archive />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
