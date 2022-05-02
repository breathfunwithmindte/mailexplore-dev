import { Breadcrumbs, Stack, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router";


const SettingPageBreadcrumbs = () => {
  const location = useLocation();
  const arr = location.pathname.split("/");
  const [category, current] = arr.slice(arr.length - 2, arr.length);
  const navigate = useNavigate();

  return (
    <Stack spacing={2} style={{width: "100%", padding: "var(--p)", position: "sticky", top: 0, backgroundColor: "var(--bg0)"}}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          underline="hover"
          color="inherit"
          style={{fontWeight: 650, cursor: "pointer"}}
          onClick={(e) => { e.preventDefault(); navigate("/") }}
        >
          home-page
        </Link>
        <Link
          underline="hover"
          color="inherit"
          style={{fontWeight: 650, cursor: "pointer"}}
          onClick={(e) => { e.preventDefault(); navigate("/settings") }}
        >
          settings
        </Link>
        {category && (<strong className="muted">
          {category}
        </strong>)}
        <strong>
          {current}
        </strong>
      </Breadcrumbs>
    </Stack>
  );
};

export default SettingPageBreadcrumbs;
