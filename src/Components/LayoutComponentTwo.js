import useWindowWidth from "./Hooks/useWindowWidth";

const LayoutComponentTwo = () => {
  const   onSmallScreen = useWindowWidth(768);
  return (
    <>
      <div className={onSmallScreen ? "small" : "Large"}>
        <h1>This is another componet</h1>
      </div>
    </>
  );
};

export default LayoutComponentTwo;
