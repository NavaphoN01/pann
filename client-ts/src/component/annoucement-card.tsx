import { useState } from "react";
import { Card, CardActionArea, CardActions, CardContent, CardHeader,Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {Delete, Edit} from "@mui/icons-material";
import Announcement from "../model/Announcement";
import Repo from '../repositories'

interface Prop {
    announcement: Announcement
    callbackFetchFn: () => void
}

function AnnouncementCard(props: Prop) {
    const [announcement, setAnnouncement] = useState<Announcement>(props.announcement)
    const [popup, setPopup] = useState(false)

    const onDelete = async () => {
        await Repo.announcements.delete(announcement.id)
        props.callbackFetchFn()
    }

    return (
        <Box>
            <Card sx={{ maxWidth: 500, height: 240}}>
                <CardHeader
                  sx={{ height: '30%'}}
                  title={announcement?.topic}
                  subheader={new Date(announcement?.pubDateTime?.toString()).toLocaleString('en-GB')}
                  action={
                    <IconButton sx={{ '&:hover': { color: 'red'} }} onClick={onDelete}>
                        <Delete />
                    </IconButton>
                  }
                />
                <CardActionArea sx={{ height: '56%' }} onClick={() => setPopup(true)}>
                    <CardContent sx={{ height: '40%' }}>
                        <Grid container spacing={2} columns={5}>
                            <Grid item xs={3}>
                                <Typography component='div'>
                                    {announcement.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'flex-end'}}>
                        <Edit color='primary' />
                    </CardActions>
                </CardActionArea>
            </Card>
        </Box>
    )
}

export default AnnouncementCard