import { Textarea } from "@mantine/core";
import { useStyles } from "./styles";

function PromptUser(props?: any) {
  const { data, setData } = props;
  const { classes } = useStyles();

  const handleChange = (k: string, v: string) => {
    setData((prev: any) => ({
      ...prev,
      [k]: v,
    }));
  };

  return (
    <>
      <div className={classes.user}>
        <Textarea
          minRows={15}
          id="User"
          value={data.user}
          label="User"
          onChange={(e) => handleChange("user", e.target.value)}
          sx={{ width: "100%" }}
        />
      </div>
    </>
  );
}

export default PromptUser;
