import { Grid } from '@mui/material'
import React from 'react'
import Header from './Header'
import Sidebar from '../../components/Sidebar'
import { SubjectSelector } from '../Onboarding/SubjectSelector'
import { FilterByStatus } from '../../components/FilterByStatus'
import { UpgradeBox } from './UpgradeBox'
import { KnowledgeTree } from './KnowledgeTreeBox'
import { CustomListItem } from '../../components/CustomListItem'

export default function HomeLayout(props) {
    return <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
            <Header />
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}>
            <Sidebar />
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={10}>
            {props.children}
        </Grid>
    </Grid>
}
