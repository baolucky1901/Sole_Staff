import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import PageTitle from '@/components/PageTitle';
import { ChangeEvent, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// import { Image } from '@mui/icons-material';
// import { SVGProps } from 'next/image';
import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    CardContent,
    List,
    Button
  } from '@mui/material';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import {
  Container,
  Grid,
  Card,
  CardHeader,
  Typography,
  Divider
} from '@mui/material';
import Footer from 'src/components/Footer';

import Box from '@mui/material/Box';
import {RequesSellSecondHandtDto } from '@/models/crypto_requests';
import Link from 'src/components/Link';
import Label from '@/components/Label';
import { ImageDto } from '@/models/crypto_images';

function Forms() {
  const router = useRouter();
  const {rqId} = router.query;
  // console.log(oId);

  const apiURL = `https://soleauthenticity.azurewebsites.net/api/admin/request-sell-secondhands/${rqId}`;
  // const apiURLOrder = `https://soleauthenticity.azurewebsites.net/api/orders/staff/${oId}`;

  const [isRender, setisRender] = useState<boolean>(false);
  const [datat, setDatat] = useState<RequesSellSecondHandtDto>();
  const [images, setImages] = useState<ImageDto[]>([]);
  // const [dataOrder, setDataOrder] = useState<OrderDto>();
  const [selectedOrders, setSelectedOrders] = useState<number[]>(
    []
  );

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
//   const [image, setImage] = useState<ImageDto>();

//   useEffect(()=>{
//     if (router.asPath !== router.route) {
//       fetch(apiURL)
//       .then((response) => response.json())
//       .then((responsedata) => {
//         setDatat(responsedata.data);
//         setisRender(true);
//       //   console.log(responsedata.data);
//       })
//       // fetch(apiURLImage)
//       // .then((response) => response.json())
//       // .then((responsedata) => {
//       //   setImage(responsedata.data);
//       // //   console.log(responsedata.data);
//       // })
      
//     }
    
//  }, [router.asPath, router.route])

useEffect(() => {
  if (router.asPath !== router.route) {
    const fetchData = async () => {
    //   try {
        const res = await fetch(
          apiURL
        );
        const data = await res.json();
        // console.log(data.data);

        setDatat(data.data);

        // const order = await fetch(
        //     apiURLOrder
        //   );
        // const dataFull = await order.json();
  
        // setDataOrder(dataFull.data);

        setisRender(true);
    //   } 
    //   catch (error) {
    //     console.log(error);
    //   }
    };

    fetchData();
  }
  

}, [router.asPath, router.route]);
// console.log(datat);

const fetchDataForGetImages = async (requestId : number) => {
  console.log(requestId);
  const response = await fetch('https://soleauthenticity.azurewebsites.net/api/product-secondhand-images/request/'+requestId)
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

const fetchDataForStatusAccepted = async (requestId : number) => {
    console.log(requestId);
    const response = await fetch('https://soleauthenticity.azurewebsites.net/api/request-sell-secondhands/request-sell-secondhand/request-status/accept?id='+requestId, {
      method: 'PUT',
      body: JSON.stringify({ /* data to be sent in the request body */ }),
      // headers: { 'Content-Type': 'application/json' }
    })
    location.reload();
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    // })
  
  };
  const fetchDataForStatusCancel = async (requestId : number) => {
    console.log(requestId);
    const response = await fetch('https://soleauthenticity.azurewebsites.net/api/request-sell-secondhands/request-sell-secondhand/request-status/cancel?id='+requestId, {
      method: 'PUT',
      body: JSON.stringify({ /* data to be sent in the request body */ }),
      // headers: { 'Content-Type': 'application/json' }
    })
    location.reload();
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    // })
  
  };
  return (
    <>
        {isRender ? (<>
      <Head>
        <title>Request Sell Second-Hand Detail - Check</title>
      </Head>
      <PageTitleWrapper>
          <Typography variant="h3" component="h3" gutterBottom>
            Request information is Checked, before accept the request!!!
          </Typography>
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
            <Card>
      <CardHeader title="All Order Detail"></CardHeader>
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>RequestId</TableCell>
              <TableCell>ProductName</TableCell>
              <TableCell>BrandName</TableCell>
              <TableCell>Quality</TableCell>
              <TableCell>Warranty</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>UserName</TableCell>
              <TableCell align='right'>IsFullBox</TableCell>
              <TableCell align='right'>PriceBuy</TableCell>
              <TableCell align='right'>PriceSell</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <TableRow>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {datat.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {datat.productName}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {datat.brandName}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {datat.quality}
                      </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {datat.warranty}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {datat.contact}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {datat.userName}
                      <Typography variant="body2" color="text.secondary" noWrap>
                        ID: {datat.userId}
                      </Typography>
                    </Typography>
                  </TableCell>
                  <TableCell align='right'>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {datat.isFullbox === true ? <Label color='primary'>Full</Label> : <Label color='secondary'>Not Full</Label>}
                    </Typography>
                  </TableCell>
                  <TableCell align='right'>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {datat.priceBuy}
                    </Typography>
                  </TableCell>
                  <TableCell align='right'>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {datat.priceSell}
                    </Typography>
                  </TableCell>
                </TableRow>
          </TableBody>
        </Table>
                <List component={Box} display="flex" width={320} justifyContent={'space-between'} >
                    <Button variant="contained" onClick={() => fetchDataForStatusAccepted(datat.id)} component={Link} href="/management/requestsellsecondhands">Accepted</Button>
                    <Button variant="contained" onClick={() => fetchDataForStatusCancel(datat.id)} component={Link} href="/management/requestsellsecondhands">Cancel</Button>
                    <Button variant="contained" href="/management/requestsellsecondhands">Return</Button>
                </List>
</TableContainer>
      </Card>
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
                  {/* <div>
                    <List component={Box} display="flex" width={230} justifyContent={'space-between'} >
                      <Button variant="contained" onClick={() => fetchDataForStatusCheckedAuthentic(datat.id)} component={Link} href="/management/shoechecks">Authentic</Button>
                      <Button variant="contained" onClick={() => fetchDataForStatusCheckedReplica(datat.id)} component={Link} href="/management/shoechecks">Replica</Button>
                    </List>
                  </div> */}
</Box>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
    </Container>
    <Footer />
    </>) : <><Footer /></>}
    </>
    
  );
}

Forms.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Forms;
