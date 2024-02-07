import { Stack } from "@mui/material";
import Alert from "@mui/material/Alert";
import Skeleton from "@mui/material/Skeleton";

export const ErrorMsg = () => {
  return (
    <Alert severity="error" sx={{ my: 2 }}>
      Veriler çekilemedi.
    </Alert>
  );
};

export const NoDataMsg = () => {
  return <Alert severity="warning">Gösterilecek veri bulunamadı. </Alert>;
};

export const CardSkeleton = ({ children }) => {
  return (
    <Stack sx={{ justifyContent: "center", alignItems: "center" }} my={3}>
      <Skeleton variant="rectangular">{children}</Skeleton>
    </Stack>
  );
};

const TableSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width="100%" height={80} />
      <Skeleton variant="rectangular" width="100%" height={30} />
      <Skeleton variant="rectangular" width="100%" height={30} />
      <Skeleton variant="rrectangular" width="100%" height={30} />
    </Stack>
  );
};

export default TableSkeleton;
