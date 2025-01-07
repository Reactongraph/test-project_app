// components/CustomTable.jsx
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

/**
 * Responsive table component that adapts to screen size
 * @param {Object} props Component props
 * @param {Array} props.columns Column definitions for the table
 * @param {Array} props.data Data to display in the table
 * @param {Function} props.renderActions Optional callback to render action buttons
 */
const CustomTable = ({ columns, data, renderActions }) => {
  // Determine if viewport is mobile
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <TableContainer>
      <Table size={isMobile ? "small" : "medium"}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.key}>{column.label}</TableCell>
            ))}
            {renderActions && <TableCell>Actions</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={`${row.id}-${column.key}`}>
                  {row[column.key]}
                </TableCell>
              ))}
              {renderActions && <TableCell>{renderActions(row)}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
