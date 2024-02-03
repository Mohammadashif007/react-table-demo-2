import { useReactTable } from "@tanstack/react-table";
import mData from "./MOCK_DATA.json";
import { useMemo } from "react";

const BasicTable = () => {
    /*
    {
        "id": 1,
        "first_name": "Donnie",
        "last_name": "Myderscough",
        "email": "dmyderscough0@parallels.com",
        "gender": "Male",
        "dob": "12/3/2023"
    }
    */

    const data = useMemo(() => mData, []);

    const columns = [
        {
            header: "ID",
            accessorKey: "id",
        },
        {
            header: "First Name",
            accessorKey: "first_name",
        },
        {
            header: "Last Name",
            accessorKey: "last_name",
        },
        {
            header: "Email",
            accessorKey: "email",
        },
        {
            header: "Gender",
            accessorKey: "gender",
        },
        {
            header: "Date of Birth",
            accessorKey: "dob",
        },
    ];

    const table = useReactTable({ data, columns });
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BasicTable;
