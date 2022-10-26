import useWindowWidth from "./Hooks/useWindowWidth";

const LayoutComponents = () => {
  const onSmallScreen = useWindowWidth(600);
  return (
    <>
      <h1>
        You are browsing on
        {onSmallScreen ? "small" : "Large"} device
      </h1>
    </>
  );
};

export default LayoutComponents;
