import React from "react";
import activities from '../../utils/activities'
// import { Card } from "@material-ui/core";
// import { CardHeader } from "@mui/material";
// import { CardContent } from "@material-ui/core";
import { Container } from '@mui/material'
import { Grid } from '@mui/material'
// import activity from "../../routes/activity/activity";
import Warm from "../warm/warm";

function CardWarm() {
	


		return(
     <Container>
			 <Grid container spacing={3}>
				{activities.map(activity => (
					<Grid item key={activity.id} xs={12} md={6} lg={4}>
						{/* <Paper>{activity.activity}</Paper> */}
						<Warm activity={activity} />
					</Grid>
				 ))}
			 </Grid>
		 </Container>
		)
	}


  export default CardWarm;