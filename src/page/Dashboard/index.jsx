import { useLoaderData } from "react-router-dom";
import DashCard from "../../components/dashboard/DashCard";
import DashTable from "../../components/dashboard/DashTable";
import SearchCard from "../../components/dashboard/SearchCard";

const Dashboard = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div className="h-full flex flex-col gap-6">
      <DashCard />
      <SearchCard />
      <DashTable />
    </div>
  );
};

export default Dashboard;
