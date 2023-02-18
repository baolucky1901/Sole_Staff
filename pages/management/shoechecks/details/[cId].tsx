import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import PageTitle from '@/components/PageTitle';
import { ChangeEvent, useState, useEffect, CSSProperties } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'src/components/Link';

import PageTitleWrapper from '@/components/PageTitleWrapper';
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  List,
  Button,
  Divider
} from '@mui/material';
import Footer from 'src/components/Footer';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

import Switch from '@mui/material/Switch';

import { CheckDtoForStaff, CheckDto, CheckStatus } from '@/models/crypto_checks';
import { ImageDto } from '@/models/crypto_images';
import { responsiveProperty } from '@mui/material/styles/cssUtils';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
];

function Forms() {
  const router = useRouter();
  const {cId} = router.query;
  console.log(cId);

  const apiURL = `https://soleauthenticity.azurewebsites.net/api/shoe-checks/admin/shoe-check/${cId}`;
  // const apiURLImage = `https://soleauthenticity.azurewebsites.net/api/shoe-check-images/${cId}`;
  // console.log("api", apiURLImage);

  const [isRender, setisRender] = useState<boolean>(false);
  const [datat, setDatat] = useState<CheckDto>();
  const [images, setImages] = useState<ImageDto[]>([]);
  const [img1, setImg1] = useState<string>();
  const [img2, setImg2] = useState<string>();
  const [img3, setImg3] = useState<string>();
  const [img4, setImg4] = useState<string>();
  const [img5, setImg5] = useState<string>();
  const [img6, setImg6] = useState<string>();
  const [img7, setImg7] = useState<string>();
  const [img8, setImg8] = useState<string>();
  const [img9, setImg9] = useState<string>();
  const [img10, setImg10] = useState<string>();

useEffect(() => {
  if (router.asPath !== router.route) {
    const fetchData = async () => {
      try {
        const res = await fetch(
          apiURL
        );
        const data = await res.json();
        setDatat(data.data);
        setisRender(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }
}, [router.asPath, router.route]);

const fetchDataForGetImages = async (checkId : number) => {
  console.log(checkId);
  const response = await fetch('https://soleauthenticity.azurewebsites.net/api/shoe-check-images/'+checkId)
  .then(response => response.json())
  .then(data => {
      setImages(data.data);
      if(data.data[0] != null && data.data[0] != undefined)
      {
          setImg1(data.data[0].imgPath);
      }
      else
      {
        setImg1("https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg");
      }
      if(data.data[1] != null && data.data[1] != undefined)
      {
          setImg2(data.data[1].imgPath);
      }
      else
      {
        setImg2("https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg");
      }
      if(data.data[2] != null && data.data[2] != undefined)
      {
          setImg3(data.data[2].imgPath);
      }
      else
      {
        setImg3("https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg");
      }
      if(data.data[3] != null && data.data[3] != undefined)
      {
          setImg4(data.data[3].imgPath);
      }
      else
      {
        setImg4("https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg");
      }
      if(data.data[4] != null && data.data[4] != undefined)
      {
          setImg5(data.data[4].imgPath);
      }
      else
      {
        setImg5("https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg");
      }
      if(data.data[5] != null && data.data[5] != undefined)
      {
          setImg6(data.data[5].imgPath);
      }
      else
      {
        setImg6("https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg");
      }
if(data.data[6] != null && data.data[6] != undefined)
      {
          setImg7(data.data[6].imgPath);
      }
      else
      {
        setImg7("https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg");
      }
      if(data.data[7] != null && data.data[7] != undefined)
      {
          setImg8(data.data[7].imgPath);
      }
      else
      {
        setImg8("https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg");
      }
      if(data.data[8] != null && data.data[8] != undefined)
      {
          setImg9(data.data[8].imgPath);
      }
      else
      {
        setImg9("https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg");
      }
      if(data.data[9] != null && data.data[9] != undefined)
      {
          setImg10(data.data[9].imgPath);
      }
      else
      {
        setImg10("https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg");
      }
  })

};
const fetchDataForStatusCheckedAuthentic = async (shoeCheckId : number) => {
  console.log(shoeCheckId);
  let updatedData = {isAuthentic: true, staffId: 3, statusChecking: "CHECKED"}
  const response = await fetch('https://soleauthenticity.azurewebsites.net/api/shoe-checks/shoe-check/confirm/'+shoeCheckId, {
    method: 'PUT',
    body: JSON.stringify(updatedData),
    headers: { 'Content-Type': 'application/json' }
  })
  location.reload();
};

const fetchDataForStatusCheckedReplica = async (shoeCheckId : number) => {
  console.log(shoeCheckId);
  let updatedData = {isAuthentic: false, staffId: 3, statusChecking: "CHECKED"}
  const response = await fetch('https://soleauthenticity.azurewebsites.net/api/shoe-checks/shoe-check/confirm/'+shoeCheckId, {
    method: 'PUT',
    body: JSON.stringify(updatedData),
    headers: { 'Content-Type': 'application/json' }
  })
  location.reload();
};
  return (
    <>
        {isRender ? (<>
      <Head>
        <title>Shoe Check Details - Authentic or Replica</title>
      </Head>
      <PageTitleWrapper>
          <Typography variant="h3" component="h3" gutterBottom>
            Check - Details
          </Typography>
        {/* <PageTitle
          heading="Check - Details"
          // subHeading="Components that are used to build interactive placeholders used for data collection from users."
          // docs="https://material-ui.com/components/text-fields/"
        /> */}
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Fields of Shoe Check" />
<Divider />
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                        id="outlined-read-only-input"
                        label="ID"
                        defaultValue={datat.id}
                        multiline
                        InputProps={{
                          readOnly: true
                        }}
                      />
                    <TextField
                        id="outlined-read-only-input"
                        label="Code"
                        defaultValue={datat.code}
                        multiline
                        InputProps={{
                          readOnly: true
                        }}
                      />
                    <TextField
                        id="outlined-read-only-input"
                        label="Is Authentic"
                        defaultValue={datat.isAuthentic}
                        multiline
                        InputProps={{
                          readOnly: true
                        }}
                      />
                    <TextField
                        id="outlined-read-only-input"
                        label="Is Active"
                        defaultValue={datat.isActive}
                        multiline
                        InputProps={{
                          readOnly: true
                        }}
                      />
                  </div>
                  <div>
                    <TextField
                        id="outlined-read-only-input"
                        label="Customer Name"
                        defaultValue={datat.customerName}
                        multiline
                        InputProps={{
                          readOnly: true
                        }}
                      />
                    <TextField
                        id="outlined-read-only-input"
                        label="Date Submitted"
                        defaultValue={datat.dateSubmitted}
                        multiline
                        InputProps={{
                          readOnly: true
                        }}
                      />
                    <TextField
                        id="outlined-read-only-input"
                        label="Date Completed"
                        defaultValue={datat.dateCompletedChecking}
                        multiline
                        InputProps={{
                          readOnly: true
                        }}
                      />
                    <TextField
                        id="outlined-read-only-input"
                        label="Status"
                        defaultValue={datat.statusChecking}
                        multiline
                        InputProps={{
                          readOnly: true
                        }}
                      />
                    </div>
                    <div>
                      <TextField
                          id="outlined-read-only-input"
                          label="Shoe Name"
                          defaultValue={datat.shoeName}
                          multiline
                          InputProps={{
                            readOnly: true
                          }}
                      />
                    </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Image Shoe Check" />
              <Divider />
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <List component={Box} display="flex" width={320} justifyContent={'space-between'} >
                      <Button variant="contained" onClick={() => fetchDataForGetImages(datat.id)}>Show Images</Button>
                    </List>
                  </div>
                  <div style={{
                      padding: '20px',
                      display: 'flex',
                      flexWrap: 'nowrap',
                      justifyContent: 'space-around',
                    }}>
                    {
                      <a href={img1} target="_blank">
                      <img width={100} height={100} src={img1}/>
                      </a>
                    }
                    
                    {
                      <a href={img2} target="_blank">
                      <img width={100} height={100} src={img2}/>
                      </a>
                  
                    }
                    {
                      <a href={img3} target="_blank">
                      <img width={100} height={100} src={img3}/>
                      </a>
                  
                    }
                    </div>
                    <div style={{
                      padding: '20px',
                      display: 'flex',
                      flexWrap: 'nowrap',
                      justifyContent: 'space-around',
                    }}>
                    {
                      <a href={img4} target="_blank">
                      <img width={100} height={100} src={img4}/>
                      </a>
                  
                    }
                    
                    
                    {
                      <a href={img5} target="_blank">
                      <img width={100} height={100} src={img5}/>
                      </a>
                  
                    }
                    {
                      <a href={img6} target="_blank">
                      <img width={100} height={100} src={img6}/>
                      </a>
                  
                    }
                    </div>
                    <div style={{
                      padding: '20px',
                      display: 'flex',
                      flexWrap: 'nowrap',
                      justifyContent: 'space-around',
                    }}>
                    {
                      <a href={img7} target="_blank">
                      <img width={100} height={100} src={img7}/>
                      </a>
                  
                    }
                    {
                      <a href={img8} target="_blank">
                      <img width={100} height={100} src={img8}/>
                      </a>
                  
                    }
                    {
                      <a href={img9} target="_blank">
                      <img width={100} height={100} src={img9}/>
                      </a>

                    }
                    </div>
                    <div style={{
                      padding: '20px',
                      marginLeft: '107px'
                    }}>
                    {
                      <a href={img10} target="_blank">
                      <img width={100} height={100} src={img10}/>
                      </a>
                  
                    }
                    </div>
                  <div>
                    <List component={Box} display="flex" width={230} justifyContent={'space-between'} >
                      <Button variant="contained" onClick={() => fetchDataForStatusCheckedAuthentic(datat.id)} component={Link} href="/management/shoechecks">Authentic</Button>
                      <Button variant="contained" onClick={() => fetchDataForStatusCheckedReplica(datat.id)} component={Link} href="/management/shoechecks">Replica</Button>
                    </List>
                  </div>
</Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      
      <Footer />
    </>) : <></>}
    </>
    
  );
}

Forms.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Forms;
