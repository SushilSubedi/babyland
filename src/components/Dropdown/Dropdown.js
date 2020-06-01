import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import MyProfile from "../MyProfile/MyProfile";
import PersonIcon from "@material-ui/icons/Person";

const Dropdown = (props) => {
  const { open, handleClose } = props;

  return (
    <div>
      <Menu
        anchorReference="anchorOrigin"
        anchorOrigin={{
          vertical: "right",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>
          <PersonIcon />
          My Profile
        </MenuItem>
        <MenuItem>My Wishlist</MenuItem>
        <MenuItem>MY Order</MenuItem>
      </Menu>
    </div>
  );
};

export default Dropdown;
