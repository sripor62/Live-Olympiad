import HomeLayout from "../../designs/Dashboard/HomeLayout";
import { InfoBoardLayout } from "../../designs/Dashboard/InfoBoardLayout";
import { useStore } from "../../stores";

const InfoBoard = () => {
  const clearCurrentUser = useStore((state) => state.clearCurrentUser);  
  return (
    <HomeLayout logOutHandler={clearCurrentUser}>
      <InfoBoardLayout
      />
    </HomeLayout>
  );
};
export default InfoBoard;