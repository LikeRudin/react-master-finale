import { motion } from "framer-motion";
import styled from "styled-components";

const Svg = styled.svg`
  width: 20px;
  height: 20px;
  path {
    stroke: white;
    stroke-width: 1;
  }
`;
const DirectionSvg = styled.svg`
  width: 50px;
  height: 50px;
  color: rgb(8, 2, 163);
  path {
    stroke: white;
    stroke-width: 1;
  }
`;

const svgVariants = {
  initial: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
  animate: {
    pathLength: 1,
    stroke: "white",
    fill: "rgba(255, 255, 255, 1)",
  },
};

const svgNowPlayingVariants = {
  initial: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
  animate: {
    pathLength: 1,
    stroke: "white",
    fill: "rgba(255, 255, 255, 1)",
  },
};

const innerFireVariants = {
  initial: { pathLength: 0, fill: "rgba(255, 255, 255, 0)", scale: 0 },
  animate: {
    stroke: "red",
    strokeWidth: 1,
    fill: "rgba(198, 61, 47, 0.8)",
    pathLength: 1,
    scale: 2,
  },
};

const PopularIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={0.2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <motion.path
        variants={svgVariants}
        initial="initial"
        animate="animate"
        transition={{
          default: { duration: 0.6 },
          fill: { duration: 0.6, delay: 0.25 },
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
      />
      <motion.path
        variants={innerFireVariants}
        initial="initial"
        animate="animate"
        transition={{
          default: { duration: 0.6 },
          fill: { duration: 0.6, delay: 0.25 },
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
      />
    </Svg>
  );
};

const NowPlayingIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <motion.path
        variants={svgNowPlayingVariants}
        initial="initial"
        animate="animate"
        transition={{
          default: { duration: 0.6 },
          fill: { duration: 0.6, delay: 0.25 },
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
      />
    </Svg>
  );
};

const ComingSoonIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <motion.path
        variants={svgVariants}
        initial="initial"
        animate="animate"
        transition={{
          default: { duration: 0.6 },
          fill: { duration: 0.6, delay: 0.25 },
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
      />
    </Svg>
  );
};

const DisneyIcon = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.756 192.756">
      <motion.path
        variants={svgVariants}
        initial="initial"
        animate="animate"
        transition={{
          default: { duration: 0.6 },
          fill: { duration: 0.6, delay: 0.25 },
        }}
        d="M0 0h192.756v192.756H0z"
      />
      <motion.path d="M96.954 66.126a5.674 5.674 0 0 1 3.451 1.38c1.312 1.242 1.656 3.313 1.035 4.97-2.414 4.969-8.155 8.288-12.078 9.386-2.347.552-5.314.552-7.454-.276-1.036.621-1.91 2.628-3.175 1.794-1.831-1.43-.246-3.668-1.303-5.256-.218-.327-.767-.351-1.043-.886-1.45-3.175.345-6.212 2.346-8.627 3.336-3.722 12.907-7.869 18.221-2.485zM85.842 68.61c-1.864.345-3.969 1.156-5.107 2.485-1.139 1.328-1.863 2.623-1.173 4.003 2.416-1.794 3.589-4.279 6.281-5.797-.001-.277.413-.484-.001-.691zm11.251.691c-4.763-.415-8.352 3.175-11.734 6.625-.207.552-1.449 1.173-.483 1.794 4.556.414 8.904-.896 12.217-3.934.967-.897 1.655-2.07 1.174-3.313-.207-.482-.694-.965-1.174-1.172zM138.364 89.868c2.209 5.384 4.072 13.872 0 19.049-1.104 1.242-3.036 2.387-4.278 1.449-4.556-3.657-6.487-8.903-9.317-13.597-.414-.207-.414.346-.621.553-1.035 4.762.897 10.974-2.346 14.7-1.242.207-2.404-.432-2.83-1.656-1.588-4.9.067-10.008.481-14.908.967-2.485 1.381-5.383 3.521-7.247 3.451 1.38 5.107 5.246 7.107 8.076 1.451 2.139 2.623 4.555 4.279 6.487 1.449-.621.736-2.515.691-3.658-.554-4.486-1.796-8.627-2.97-12.906-.067-1.104-.688-2.968.483-3.658 3.11 1.381 4.419 4.624 5.8 7.316zM117.521 88.211c0 1.036-.828 2.33-1.52 2.485-6.625 1.035-14.01.414-20.221 2.484-.207.759.69.897 1.173 1.104 5.313.828 10.905 1.035 16.082 2.347 2.737.695 3.728 3.935 3.935 6.626.127 2.122-.689 4.693-2.761 6.143-5.106 3.244-12.905 3.105-18.083.139-1.979-1.11-3.865-2.898-4.003-5.107.012-1.754.76-3.135 2.002-3.796 4.97-2.002 11.112-.896 15.392 1.656.274 1.381-1.22 1.306-1.935 1.795-4.763 2.761-8.351-3.104-12.768-.967-.621.414-1.07 1.569-.345 1.933 5.452 2.416 11.526.69 16.909-.828.621-.207 1.381-.828 1.449-1.449-.207-2.209-2.691-2.691-4.279-3.312-4.693-1.173-9.869-1.173-14.908-1.656-.966-.207-2.197-.88-2.484-1.656-.552-1.656-.552-3.934.69-5.314 6.418-5.66 16.149-5.176 24.293-3.658.553.203 1.174.41 1.382 1.031zM87.361 90.834c.621 6.625.966 12.769.828 19.739-.138.896-1.173 1.104-1.863 1.449-1.104.207-2.531-.028-2.968-.621-1.587-2.555-1.035-6.004-1.173-9.11.207-4.899.138-10.214 1.519-14.77.264-.662 1.035-1.242 1.656-.829 1.656.829 1.932 2.486 2.001 4.142zM164.041 89.868c.332.558.679 1.42 0 1.794-3.106 1.38-7.315.759-10.905 1.173-.966.828-1.726 2.208-1.382 3.451.347.207.656.522 1.037.482 2.207.139 5.521-1.035 6.972 1.035.354.616-.048 2.916-1.035 2.968-2.693.347-7.121-.338-8.422.347-1.656 1.104-1.519 3.243-2.14 4.97 1.174.759 2.403-.018 3.795-.208 2.556-.414 5.386-1.173 7.938-.621.483.897 1.174 1.864.69 2.968-4.351 3.451-9.963 6.988-15.942 4.486-2.244-1.006-3.244-4.417-2.484-7.314.482-2.071 2.621-4.072 1.311-6.281-.207-.967.346-1.794 1.174-2.001 2.277 0 1.793-2.83 2.967-4.142-1.311-1.449-4.623-1.38-4.278-4.279 1.588-.828 3.521-.552 5.313-.828 4.072-.829 8.627-1.312 12.771-.829.825.166 1.93 1.794 2.62 2.829zM65.482 74.132c6.369 5.206 14.632 14.08 13.597 24.294-1.243 8.076-9.801 14.149-17.048 16.082-7.04 2.07-15.874 1.863-23.053.207-.483 1.312-.966 2.898-2.484 3.451-.966.345-2.209.138-2.968-.483-2.139-2.002-.414-5.867-3.52-7.108-6.074-2.554-12.631-7.593-15.736-13.804-.414-1.242.069-2.484.828-3.45 4.763-3.796 10.767-5.314 16.772-6.488.345.138.207-.345.483-.483.345-4.141.483-8.352 1.794-12.079.299-.523 1.035-.69 1.519-.345 3.796 2.898 2.001 8.352 3.658 12.285 7.247.345 14.494.69 20.222 4.763 1.933 1.587 2.404 4.618 1.794 6.35-.609 1.729-2.622 2.968-4.486 3.104-1.243 0-3.589.121-3.451-.827.138-.949 4.222-2.502 2.968-3.797-1.803-1.861-10.824-2.968-16.415-3.658-.69-.138-1.323.069-1.323.828-.138 5.245-.552 11.042.345 16.082.069.346.483.76.829.827 9.869 1.588 20.291.69 28.021-4.969 3.589-2.897 4.763-6.972 4.141-11.457-3.106-12.492-16.15-20.016-26.848-24.847-10.421-4.555-21.948-6.902-34.302-6.28-1.967.144-5.084.823-5.107 1.519-.023.696 3.531.477 3.105 1.794-.425 1.316-4.037.535-5.107.207-1.07-.328-.966-1.864-.69-2.83 2.692-4.762 10.204-5.147 13.597-5.314 18.772-.484 36.925 6.665 48.865 16.426zM31.663 92.629c-4.763.069-9.801.552-14.218 2.208-.897.345-2.002 1.311-1.312 2.485 1.794 2.415 4.36 4.398 6.764 5.797 2.404 1.397 5.591 3.175 8.49 3.59.69-4.487.69-8.904.621-13.528-.277-.138-.001-.414-.345-.552zM174.323 86.348c-.207 6.004-5.799 9.732-5.799 15.736.207.207.347.483.621.347 4.488-4.901 8.904-11.872 15.461-13.942 1.728-.138 3.289 1.363 3.935 2.485 2.278 4.555 1.728 10.974-1.448 15.115-3.277 4.065-8.974 8.144-15.459 7.453-2.691 6.626-4.558 13.597-5.593 20.844-.552 1.449-1.862.138-2.69-.138-5.59-4.417-1-16.11-.621-17.602.379-1.488 1.875-4.998 2.969-7.937-2.623-4.692-.967-10.353 1.172-14.701 1.656-2.899 3.936-5.798 6.627-8.006.342.001.618.07.825.346zm11.114 7.454c-.828-.138-1.174.967-1.863 1.174-3.174 3.589-6.35 7.178-7.938 11.457 2.141.276 3.934-1.104 5.799-1.863 3.174-2.002 5.176-5.313 4.969-9.11-.139-.623-.691-1.106-.967-1.658z" />
    </Svg>
  );
};

const MarvelIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 80"
      aria-hidden="true"
    >
      <rect fill="#EC1D24" width="100%" height="100%"></rect>
      <motion.path
        variants={svgVariants}
        initial="initial"
        animate="animate"
        transition={{
          default: { duration: 0.5 },
          fill: { duration: 0.5, delay: 0.25 },
        }}
        d="M126.222 40.059v7.906H111.58V4h7.885v36.059h6.757zm-62.564-14.5c-.61.294-1.248.44-1.87.442v-14.14h.04c.622-.005 5.264.184 5.264 6.993 0 3.559-1.58 5.804-3.434 6.705zM40.55 34.24l2.183-18.799 2.265 18.799H40.55zm69.655-22.215V4.007H87.879l-3.675 26.779-3.63-26.78h-8.052l.901 7.15c-.928-1.832-4.224-7.15-11.48-7.15-.047-.002-8.06 0-8.06 0l-.031 39.032-5.868-39.031-10.545-.005-6.072 40.44.002-40.435H21.278L17.64 26.724 14.096 4.006H4v43.966h7.95V26.78l3.618 21.192h4.226l3.565-21.192v21.192h15.327l.928-6.762h6.17l.927 6.762 15.047.008h.01v-.008h.02V33.702l1.845-.27 3.817 14.55h7.784l-.002-.01h.022l-5.011-17.048c2.538-1.88 5.406-6.644 4.643-11.203v-.002C74.894 19.777 79.615 48 79.615 48l9.256-.027 6.327-39.85v39.85h15.007v-7.908h-7.124v-10.08h7.124v-8.03h-7.124v-9.931h7.124z"
      ></motion.path>
      <motion.path fill="#EC1D24" d="M0 0h30v52H0z"></motion.path>
      <motion.path
        variants={svgVariants}
        initial="initial"
        animate="animate"
        transition={{
          default: { duration: 0.5 },
          fill: { duration: 0.5, delay: 0.25 },
        }}
        d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"
      ></motion.path>
    </Svg>
  );
};

export const Icons = [
  PopularIcon,
  ComingSoonIcon,
  NowPlayingIcon,
  DisneyIcon,
  MarvelIcon,
];

export const RightIcon = () => {
  return (
    <DirectionSvg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </DirectionSvg>
  );
};

export const LeftIcon = () => {
  return (
    <DirectionSvg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </DirectionSvg>
  );
};
