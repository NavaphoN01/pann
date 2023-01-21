import { useState, useEffect, ChangeEvent } from "react";
import {Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AnnouncementCard from "../component/annoucement-card";
import PannAppBar from "../component/pann-app-bar";
import Announcement from "../model/Announcement";
import Repo from '../repositories'

function AnnouncementList() {
    const [announcementList, setAnnouncementList] = useState<Announcement[]>([])
    const [searchFilter, setSearchFilter] = useState('')

    const fetchAnnouncementList = async () => {
        let params = {
            keyword: searchFilter
        }
        const result = await Repo.announcements.getAll(params)
        if (result) {
            if (announcementList.length) {
                setAnnouncementList([])
            }
            setAnnouncementList(result)
        }
    }

    const handleChangeSearchFilter = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchFilter(event.target.value)
    }

    useEffect(() => {
        fetchAnnouncementList()
    }, [searchFilter])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <PannAppBar></PannAppBar>
            <TextField sx={{ m: 2, minWidth: 120}} label='Search' placeholder="Topic, Description" variant="outlined" value={searchFilter} onChange={handleChangeSearchFilter} />
            {announcementList.length
              ?
              <Grid container sx={{ p: 2}} spacing={{ xs:2, md: 3}} columns={{ xs: 2, sm: 8, md: 12, lg:12, xl:10}}>
                {announcementList.map((ann, index) =>
                    <Grid item xs={2} sm={4} md={4} lg={3} xl={2} key={index}>
                        <AnnouncementCard announcement={ann} callbackFetchFn={fetchAnnouncementList}></AnnouncementCard>
                    </Grid>
                )} 
              </Grid>
              :
              <Box sx={{ display: 'flex', alignItems:'center', justifyContent: 'center', minHeight: 400 }}>
                <Typography variant="body2" color='text.secondary'>No Announcement Found</Typography>
              </Box>
            }
        </Box>
    )
}

export default AnnouncementList