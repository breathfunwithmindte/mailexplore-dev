import { Avatar, Chip, Tooltip } from "@mui/material";
import React, { useMemo } from "react";
import useMain from "../MainContext";

const EmailcardTemplate = ({ email, styles }) => {
  const { state } = useMain();

  const color = useMemo(() => {
    const exist = state.project.categories.find(f => f.category === email.category);
    if(!exist) return "none";
    return exist.color;
  })

  return (
    <div className={styles["email-card"]}>
      {email.users.length === 1 ? (
        <Tooltip
          placement="top"
          title={<em style={{ whiteSpace: "pre-wrap" }}>{email.users.join(",\n")}</em>}
        ><div className={styles["email-card-users"]}>
          <Avatar style={{ width: 24, height: 24, fontSize: "0.69rem" }}>
            MK
          </Avatar>
          <em>{email.users[0].substring(0, 23)}</em>
        </div></Tooltip>
      ) : (
        <Tooltip
          placement="top"
          title={<em style={{ whiteSpace: "pre-wrap" }}>{email.users.join(",\n")}</em>}
        ><div className={styles["email-card-users"]}>
          {email.users.slice(0, 3).map((u) => {
            return (
              <Avatar style={{ width: 24, height: 24, fontSize: "0.69rem" }}>
                {u.substring(0, 2)}
              </Avatar>
            );
          })}
          {email.users.length > 3 && (
              <Avatar
                style={{
                  width: 24,
                  height: 24,
                  fontSize: "0.84rem",
                  color: "yellow",
                  border: "2px solid var(--pr)",
                }}
              >
                +{email.users.length - 3}
              </Avatar>
          )}
        </div></Tooltip>
      )}

      <div className={styles["email-card-primary"]}>
        <strong>{email.title}</strong>{" "}
        {email.data.map((m, ind) => (
          <Chip key={ind} label={m} variant="outlined" />
        ))}
      </div>
      <div style={{ width: "156px", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
        {(email.category && email.category !== "none") && (
          <Chip label={email.category} variant="filled" style={{border: `1px solid ${color}`, marginRight: "0.34rem"}} />
        )}
        {/* <div className={styles["email-category-txt"]}>{email.category}</div> */}
        1day
      </div>
    </div>
  );
};

export default EmailcardTemplate;
