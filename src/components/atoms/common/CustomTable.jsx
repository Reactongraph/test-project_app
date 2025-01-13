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
import { useResponsive } from "../../../hooks/useResponsive";

/**
 * Column definition type
 * @typedef {Object} Column
 * @property {string} key - The key to access the data in each row
 * @property {string} label - The display label for the column header
 */

/**
 * Responsive table component that adapts to screen size
 * @param {Object} props Component props
 * @param {Column[]} props.columns - Column definitions for the table
 * @param {Object[]} props.data - Data to display in the table
 * @param {Function} [props.renderActions] - Optional callback to render action buttons
 * @param {string} [props.className] - Optional CSS class name
 */
const CustomTable = ({ columns, data, renderActions, className }) => {
  const { isMobile } = useResponsive();

  return (
    <TableContainer className={className}>
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
