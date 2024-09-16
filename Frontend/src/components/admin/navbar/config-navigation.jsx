// import SvgColor from 'src/components/svg-color';

import { Box } from "@mui/material";

// ----------------------------------------------------------------------

{
  /* <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} /> */
}
const icon = (name) => (
  <Box
    component="span"
    className="svg-color"
    // ref={ref}
    sx={{
      width: 24,
      height: 24,
      display: "inline-block",
      bgcolor: "currentColor",
      mask: `url(/assets/icons/navbar/${name}.svg) no-repeat center / contain`,
      WebkitMask: `url(/assets/icons/navbar/${name}.svg) no-repeat center / contain`,
      // width: 1,
      // height: 1,
    }}
  />
);

const navConfig = [
  {
    title: "Tổng quan",
    path: "/admin",
    icon: icon("ic_analytics"),
  },
  {
    title: "Người dùng",
    path: "/admin/user",
    icon: icon("ic_user"),
  },
  // {
  //   title: 'Thêm trạm',
  //   path: '/admin/bus/stop',
  //   icon: icon('ic_cart'),
  // },
  {
    title: "Trạm xe",
    path: "/admin/stoplist",
    icon: icon("ic_icon"),
  },
  {
    title: "Nhân viên",
    path: "/admin/approval",
    icon: icon("ic_lock"),
  },
  // {
  //   title: 'Thêm tuyến',
  //   path: '/admin/bus/connection',
  //   icon: icon('ic_disabled'),
  // },
  {
    title: "Tuyến xe",
    path: "/admin/bus/connection/list",
    icon: icon("ic_disabled"),
  },
];

export default navConfig;
