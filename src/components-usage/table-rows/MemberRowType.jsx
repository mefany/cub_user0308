import { useState } from "react";
import { Delete, Edit, RemoveRedEye } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
import { FlexBox } from "components/flex-box";
import DefaultSwitch from "components/DefaultSwitch";
import { Paragraph, Small } from "components/Typography";
import {
  StyledIconButton,
  StyledTableCell,
  StyledTableRow,
} from "./StyledComponents";

// ========================================================================
const MemberRowType = ({ seller }) => {
  const {
    name,
    phone,
    image,
    balance,
    published,
    shopName,
    package: sellerPackage,
  } = seller;
  const [shopPulish, setShopPublish] = useState(published);
  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="left">
        <FlexBox alignItems="center" gap={1.5}>
          <Avatar src={image} alt={name} />
          <Box>
            <Paragraph>{name}</Paragraph>
            <Small color="grey.600">{phone}</Small>
          </Box>
        </FlexBox>
      </StyledTableCell>

      <StyledTableCell align="left">{shopName}</StyledTableCell>

      <StyledTableCell
        align="left"
        sx={{
          fontWeight: 400,
        }}
      >
        {sellerPackage}
      </StyledTableCell>

      <StyledTableCell
        align="left"
        sx={{
          fontWeight: 400,
        }}
      >
        {balance}
      </StyledTableCell>

      <StyledTableCell align="left">
        <DefaultSwitch
          color="secondary"
          checked={shopPulish}
          onChange={() => setShopPublish((state) => !state)}
        />
      </StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton>
          <Edit />
        </StyledIconButton>

        <StyledIconButton>
          <RemoveRedEye />
        </StyledIconButton>

        <StyledIconButton>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default MemberRowType;
