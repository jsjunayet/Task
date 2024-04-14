import "./Task_2.css";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { userColumns, userRows } from "../Data.jsx";
import "@mui/styled-engine"
import { useDemoData } from '@mui/x-data-grid-generator';

const DataTable = () => {
    const [datas, setData] = useState(userRows);


    return (
        <div>
            <DataGrid
                rows={datas}
                columns={userColumns}
                initialState={{
                    ...datas.initialState,
                    pagination: { paginationModel: { pageSize: 10 } },
                }}
                pageSizeOptions={[10, 20, 30, 100]}
                checkboxSelection
            />
        </div>
    );
};

export default DataTable;
