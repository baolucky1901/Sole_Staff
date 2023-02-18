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
import { OrderDetailDto, OrderDto } from '@/models/crypto_order';
import Link from 'src/components/Link';

function Forms() {
  const router = useRouter();
  const {oId} = router.query;
  // console.log(oId);

  const apiURL = `https://soleauthenticity.azurewebsites.net/api/order-details/${oId}`;
  const apiURLOrder = `https://soleauthenticity.azurewebsites.net/api/orders/staff/${oId}`;

  const [isRender, setisRender] = useState<boolean>(false);
  const [datat, setDatat] = useState<OrderDetailDto[]>([]);
  const [dataOrder, setDataOrder] = useState<OrderDto>();
  const [selectedOrders, setSelectedOrders] = useState<number[]>(
    []
  );
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

        const order = await fetch(
            apiURLOrder
          );
        const dataFull = await order.json();
  
        setDataOrder(dataFull.data);

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
const fetchDataForStatusAccepted = async (orderId : number) => {
    console.log(orderId);
    const response = await fetch('https://soleauthenticity.azurewebsites.net/api/orders/order/accepted/'+orderId+"?staffId=3", {
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
        <title>Order Detail - Accepted</title>
      </Head>
      <PageTitleWrapper>
          <Typography variant="h3" component="h3" gutterBottom>
            Checking Information before accepted!!!
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
              <TableCell>Order_Detail_Id</TableCell>
              <TableCell>Order_Id</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>Product_Id</TableCell>
              <TableCell>ProductName</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datat?.map((data) => {
              const isOrderSelected = selectedOrders.includes(
                data.id
              );
              return (
                <TableRow
                  hover
                  key={data.id}
                  selected={isOrderSelected}
                >
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {data.id}
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
                      {data.orderId}
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
                      {data.code}
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
                      {data.productId}
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
                      {data.productName}
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
                      {data.quantity}
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
                      {data.price}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          
          <TableRow>
            <Typography variant="h4" component="h4" gutterBottom padding={2}>
                Total Price: {dataOrder.totalPrice}
            </Typography>
            </TableRow>
        </Table>
                <List component={Box} display="flex" width={230} justifyContent={'space-between'} >
                    <Button variant="contained" onClick={() => fetchDataForStatusAccepted(dataOrder.id)} component={Link} href="/management/transactions">Accepted</Button>
                    <Button variant="contained" href="/management/transactions">Return</Button>
                </List>
</TableContainer>
      </Card>
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
