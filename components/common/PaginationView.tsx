import { Pagination, Stack } from "@mui/material";
import React from "react";

interface Props {
  count: number;
  page: number;
  onPageClick: (event: React.ChangeEvent<unknown>, page: number) => void;
  alignItems?: string;
}

const PaginationView = ({ count, page, onPageClick, alignItems }: Props) => {
  return (
    <Stack
      spacing={2}
      sx={{
        alignItems: alignItems ? alignItems : "center",
      }}
    >
      <Pagination
        count={count}
        showFirstButton
        showLastButton
        page={page}
        onChange={onPageClick}
      />
    </Stack>
  );
};

export default PaginationView;
