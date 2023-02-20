import { Box, Stack } from "@mui/material";
import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import DataTable from "./DataTable";
import AssetsList from "./AssetsList";

function Home() {
  return (
    <div>
      <Box>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />

          <Feed />
        </Stack>
      </Box>
    </div>
  );
}

export default Home;
