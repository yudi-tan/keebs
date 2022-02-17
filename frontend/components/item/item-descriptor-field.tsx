import NextPage from "next";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { SvgIconComponent } from "@mui/icons";

interface ItemDescriptorFieldProps {
  icon: SvgIconComponent;
  descriptor: string;
  description: string;
}

const ItemDescriptorField: NextPage<ItemDescriptorFieldProps> = ({
  icon,
  descriptor,
  description,
}) => {
  return (
    <Grid container>
      <Grid item xs={1}>
        {icon}
      </Grid>
      <Grid item xs={1}>
        <Typography>{descriptor}</Typography>
      </Grid>
      <Grid item xs={3} />
      <Grid item xs={7}>
        <Typography>{description}</Typography>
      </Grid>
    </Grid>
  );
};

export default ItemDescriptorField;
