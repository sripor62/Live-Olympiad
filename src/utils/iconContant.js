import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import SearchIcon from '@material-ui/icons/Search';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PersonIcon from '@material-ui/icons/Person';
import ListAltIcon from '@material-ui/icons/ListAlt';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import AffirmationIcon from '../components/svgIcons/AffirmationIcon';
import GratitudeIcon from '../components/svgIcons/GratitudeIcon';


export const iconContant = (iconType, type, is_admin) => {
    return iconType == "dashboard" ? <DashboardIcon />
        : iconType == "department_and_designation" ? <AccountTreeOutlinedIcon size="small" />
            : iconType == " interviewer" ? <PeopleAltOutlinedIcon size="small" />
                : iconType == "approver" ? <AssignmentTurnedInOutlinedIcon size="small" />
                    : iconType == "leave" ? <LocalMallOutlinedIcon size="small" />
                        : iconType == "holiday" ? <LocalMallOutlinedIcon size="small" />
                            : iconType == "workshift" ? <AccessTimeOutlinedIcon size="small" />
                                : iconType == "onboardingdoc" ? <FolderOutlinedIcon size="small" />
                                    : (iconType == "openings" && type == "header") ? <AssignmentIndIcon />
                                    : (iconType == "openings" && type == "tile") ? <AssignmentIndIcon fontSize={"large"} color="primary" />
                                        : (iconType == "organisation chart" && type == "header") ? <AccountTreeIcon />
                                        : (iconType == "organisation chart" && type == "tile") ? <AccountTreeIcon fontSize='large' color='primary' />
                                            : (iconType == "attendance" && type == "header") ? <DateRangeIcon />
                                            : (iconType == "attendance" && type == "tile") ? <DateRangeIcon fontSize='large' color='primary'/>
                                                : (iconType == "manage employee" && type == "header") ? is_admin ? <PeopleAltIcon /> : <PersonIcon />
                                                : (iconType == "manage employee" && type == "tile") ? is_admin ? <PeopleAltIcon fontSize='large' color='primary'/> : <PersonIcon fontSize='large' color='primary'/>
                                                    : iconType == "leave requests" ? <ListAltIcon fontSize="large" color="primary" />
                                                        : iconType == "create new position" ? <AccountBalanceOutlinedIcon fontSize="large" color="primary" />
                                                            : (iconType == "recruitment" && type == "header") ? <SearchIcon />
                                                            : (iconType == "recruitment" && type == "tile") ? <SearchIcon fontSize="large" color="primary" />
                                                                : iconType == "onboarding" ? <WorkOutlineIcon fontSize="large" color="primary" />
                                                                    : (iconType == "affirmation" && type == "header") ? <AffirmationIcon />
                                                                    : (iconType == "affirmation" && type == "tile") ? <AffirmationIcon fontSize="large" color="primary" />
                                                                        : (iconType == "gratitude" && type == "header") ? <GratitudeIcon />
                                                                        : (iconType == "gratitude" && type == "tile") ? <GratitudeIcon fontSize="large" color="primary" />
                                                                : null
}