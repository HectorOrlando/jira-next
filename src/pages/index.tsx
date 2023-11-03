import { Layout } from "@/components/layouts";
import { Typography } from "@mui/material";
import { NextPage } from "next";


export const HomePage: NextPage = () => {
  return (

    <Layout>
      <Typography variant="h1" color="primary">Hola Orlando</Typography>
    </Layout>
  )
}

export default HomePage