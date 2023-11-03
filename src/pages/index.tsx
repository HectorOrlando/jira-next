import { Layout } from "@/components/layouts";
import { EntryList } from "@/components/ui";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { NextPage } from "next";


export const HomePage: NextPage = () => {
  return (

    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Pendientes" />
              <EntryList />
              {/* listado de las entradas */}
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="En Progreso" />
            <EntryList />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Completadas" />
            <EntryList />
          </Card>
        </Grid>

      </Grid>
    </Layout>
  )
}

export default HomePage