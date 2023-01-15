import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import { Box, Grid } from '@mui/material';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Dmain.css';

const DashboardMain = () => {
    return (
        <Fragment> 
                        <div className="main-page">
                            <div className="container-fluid">
                                <div className="page-title-div">
                                    <h2 className="title text-left">Dashboard</h2>
                                </div>
                            </div>
                            <section className="section">
                                <div className="container-fluid">
                                    <Grid container spacing={2}>
                                        <Grid item xs={6} md={4} lg={3} sx={{padding:2}} >
                                            <Link className="dashboard-stat dp-grid dashboard_main_regd"   href="manage-students.php">
                                                <Box className='dp-flex justifyContent'>
                                                    <Box>
                                                        <Diversity3Icon className='fontSize-40' />
                                                    </Box>
                                                    <Box className='dp-grid text-right'>
                                                        <span className="number counter">0</span>
                                                        <span className="name">Regd Users</span>
                                                    </Box>
                                                </Box>
                                            </Link>
                                        </Grid>
                                        <Grid item xs={6} md={4} lg={3} sx={{padding:2}}>
                                            <Link className="dashboard-stat dp-grid dashboard_main_subjects" href="manage-students.php">
                                                <Box className='dp-flex justifyContent'>
                                                    <Box>
                                                        <AutoStoriesIcon className='fontSize-40' />
                                                    </Box>
                                                    <Box className='dp-grid text-right'>
                                                        <span className="number counter">0</span>
                                                        <span className="name">Subjects Listed</span>
                                                    </Box>
                                                </Box>
                                            </Link>
                                        </Grid>
                                        <Grid item xs={6} md={4} lg={3} sx={{padding:2}}>
                                            <Link className="dashboard-stat dp-grid dashboard_main_classes" href="manage-students.php">
                                                <Box className='dp-flex justifyContent'>
                                                    <Box>
                                                        <HouseSidingIcon className='fontSize-40' />
                                                    </Box>
                                                    <Box className='dp-grid text-right'>
                                                        <span className="number counter">0</span>
                                                        <span className="name">Total classes listed</span>
                                                    </Box>
                                                </Box>
                                            </Link>
                                        </Grid>
                                        <Grid item xs={6} md={4} lg={3} sx={{padding:2}}>
                                            <Link className="dashboard-stat dp-grid dashboard_main_results" href="manage-students.php">
                                                <Box className='dp-flex justifyContent'>
                                                    <Box>
                                                        <FileCopyIcon className='fontSize-40' />
                                                    </Box>
                                                    <Box className='dp-grid text-right'>
                                                        <span className="number counter">0</span>
                                                        <span className="name">Results Declared</span>
                                                    </Box>
                                                </Box>
                                            </Link>
                                        </Grid>

                                    </Grid>

                                </div>
                            </section>

                        </div>
 

        </Fragment>
    );
};

export default DashboardMain;