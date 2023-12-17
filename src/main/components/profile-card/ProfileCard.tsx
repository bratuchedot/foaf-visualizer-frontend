import { Avatar, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import FoafOptions from '../../../shared/enums/FoafOptions.ts';
import { FoafDetails } from '../../../shared/interfaces/FoafDetails.ts';
import './profile-card.scss';
import {
  checkIfAccountsDataExists,
  checkIfPersonalDataExists,
  checkIfPortfolioDataExists, checkIfSchoolDataExists,
  checkIfSupportDataExists, checkIfWorkDataExists
} from '../../../shared/utils/checkers.ts';
import { getFirstItemOfArray, getFirstLetterOfName } from '../../../shared/utils/getters.ts';
import { parseEmails, parsePhones } from '../../../shared/utils/parsers.ts';
import ProfileDataEntry from '../profile-data-entry/ProfileDataEntry.tsx';

function ProfileCard({ data }: { data: FoafDetails | null }) {

  const renderHeader = () => (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={2}
    >
      <Avatar className='profile-picture' alt={data?.name} src={data?.depiction || getFirstItemOfArray(data?.images)}>{getFirstLetterOfName(data?.name || '')}</Avatar>
      {data?.name && <Typography variant='h4'><strong>{data?.name}</strong></Typography>}
      {data?.knows && <Typography variant='button' color='primary'>{data?.knows?.length} friend{data.knows.length !== 1 && 's'}</Typography>}
    </Stack>
  );

  const renderContent = () => (
    <>
      {checkIfPersonalDataExists(data) && <Grid item xs={12}><Typography variant='h5'>Personal</Typography></Grid>}
      {data?.title && <ProfileDataEntry option={FoafOptions.TITLE} value={data.title}/>}
      {data?.name && <ProfileDataEntry option={FoafOptions.NAME} value={data.name}/>}
      {data?.firstName && <ProfileDataEntry option={FoafOptions.FIRST_NAME} value={data.firstName}/>}
      {(data?.givenName || data?.givenname) && <ProfileDataEntry option={FoafOptions.GIVEN_NAME} value={data.givenName || data.givenname}/>}
      {data?.surname && <ProfileDataEntry option={FoafOptions.SURNAME} value={data.surname}/>}
      {data?.lastName && <ProfileDataEntry option={FoafOptions.LAST_NAME} value={data.lastName}/>}
      {(data?.familyName || data?.family_name) && <ProfileDataEntry option={FoafOptions.FAMILY_NAME} value={data.familyName || data.family_name}/>}
      {data?.nick && <ProfileDataEntry option={FoafOptions.NICKNAME} value={data.nick}/>}
      {data?.age && <ProfileDataEntry option={FoafOptions.AGE} value={data.age}/>}
      {data?.birthday && <ProfileDataEntry option={FoafOptions.BIRTHDAY} value={data.birthday}/>}
      {data?.gender && <ProfileDataEntry option={FoafOptions.GENDER} value={data.gender}/>}
      {data?.mboxes && <ProfileDataEntry option={FoafOptions.EMAIL} value={parseEmails(data.mboxes)}/>}
      {data?.phones && <ProfileDataEntry option={FoafOptions.PHONE} value={parsePhones(data.phones)}/>}
      {data?.basedNear && <ProfileDataEntry option={FoafOptions.BASED_NEAR} value={data.basedNear}/>}
      {data?.myersBriggs && <ProfileDataEntry option={FoafOptions.MYERS_BRIGGS} value={data.myersBriggs}/>}
      {data?.interests && <ProfileDataEntry option={FoafOptions.INTERESTS} value={data.interests}/>}
      {data?.homepage && <ProfileDataEntry option={FoafOptions.HOMEPAGE} value={data.homepage} link/>}
      {data?.page && <ProfileDataEntry option={FoafOptions.PAGE} value={data.page} link/>}
      {data?.weblog && <ProfileDataEntry option={FoafOptions.WEBLOG} value={data.weblog} link/>}
      {data?.depiction && <ProfileDataEntry option={FoafOptions.DEPICTION} value={data.depiction} link/>}
      {data?.images && <ProfileDataEntry option={FoafOptions.IMAGES} value={data.images} link/>}
      {checkIfSchoolDataExists(data) && <Grid item xs={12}><Divider className='card-divider'/><Typography variant='h5'>School</Typography></Grid>}
      {data?.schoolHomepage && <ProfileDataEntry option={FoafOptions.SCHOOL_HOMEPAGE} value={data.schoolHomepage} link/>}
      {checkIfWorkDataExists(data) && <Grid item xs={12}><Divider className='card-divider'/><Typography variant='h5'>Work</Typography></Grid>}
      {data?.workplaceHomepage && <ProfileDataEntry option={FoafOptions.WORKPLACE_HOMEPAGE} value={data.workplaceHomepage} link/>}
      {data?.workInfoHomepage && <ProfileDataEntry option={FoafOptions.WORK_INFO_HOMEPAGE} value={data.workInfoHomepage} link/>}
      {checkIfPortfolioDataExists(data) && <Grid item xs={12}><Divider className='card-divider'/><Typography variant='h5'>Portfolio</Typography></Grid>}
      {data?.currentProject && <ProfileDataEntry option={FoafOptions.CURRENT_PROJECT} value={data.currentProject} link/>}
      {data?.pastProject && <ProfileDataEntry option={FoafOptions.PAST_PROJECT} value={data.pastProject} link/>}
      {data?.madeList && <ProfileDataEntry option={FoafOptions.CREATED} value={data.madeList} link/>}
      {data?.publications && <ProfileDataEntry option={FoafOptions.PUBLICATIONS} value={data.publications} link/>}
      {checkIfAccountsDataExists(data) && <Grid item xs={12}><Divider className='card-divider'/><Typography variant='h5'>Accounts</Typography></Grid>}
      {data?.accounts && <ProfileDataEntry option={FoafOptions.ACCOUNT} value={data.accounts} link/>}
      {data?.aimChatID && <ProfileDataEntry option={FoafOptions.AIM_CHAT_ID} value={data.aimChatID}/>}
      {data?.icqChatID && <ProfileDataEntry option={FoafOptions.ICQ_CHAT_ID} value={data.icqChatID}/>}
      {data?.jabberID && <ProfileDataEntry option={FoafOptions.JABBER_ID} value={data.jabberID}/>}
      {data?.msnChatID && <ProfileDataEntry option={FoafOptions.MSN_CHAT_ID} value={data.msnChatID}/>}
      {data?.openID && <ProfileDataEntry option={FoafOptions.OPEN_ID} value={data.openID}/>}
      {data?.skypeID && <ProfileDataEntry option={FoafOptions.SKYPE_ID} value={data.skypeID}/>}
      {data?.yahooChatID && <ProfileDataEntry option={FoafOptions.YAHOO_CHAT_ID} value={data.yahooChatID}/>}
      {checkIfSupportDataExists(data) && <Grid item xs={12}><Divider className='card-divider'/><Typography variant='h5'>Support me</Typography></Grid>}
      {data?.tipJar && <ProfileDataEntry option={FoafOptions.TIP_JAR} value={data.tipJar} link/>}
    </>
  );

  return (
    <Paper component='section' id='profile-card-container'>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          {renderHeader()}
        </Grid>
        <Grid item container xs={12} md={8} sx={{ height: 'fit-content' }}>
          {renderContent()}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ProfileCard;
