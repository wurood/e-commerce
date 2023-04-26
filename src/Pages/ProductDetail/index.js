import React from 'react'
import { createTheme } from "@mui/material/styles";
import { Box, Grid ,Container,Typography} from "@mui/material";
import ItemViewer from '../../components/ItemViewer';
import ProductInfo from '../../components/ProductInfo';
import ColorButtons from '../../components/ColorButtons';
import Delivery from '../../components/Delivery';
import { useParams } from "react-router-dom";
import SubTittle from '../../components/SubTittle';
import ProductCard from '../../components/ProductCard';
function ProductDetail({ data }) {
    const { productId } = useParams();
    let dataId = data.find((item) => item.id == productId);
    const { title, rating, description, price } = dataId;
    const theme = createTheme({
        FlexBoxTheme: {
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            marginTop: 6,
        },
        FlexBoxTwoTheme: {
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            marginRight: "150px",
        },
    })
    return (
        <>
            <Container maxWidth="lg">
                <Typography variant="h6" sx={{ color: "#7D8184", margin: "20px" }}>Account / Gaming /  {title} </Typography>
                <Box sx={theme.FlexBoxTheme}>
                    <ItemViewer />
                    <Box sx={theme.FlexBoxTwoTheme}>
                        <ProductInfo {...dataId} />
                        <br/>
                        <ColorButtons />
                        <Delivery />
                    </Box>
                </Box>
                <Container maxWidth={false} sx={{ maxWidth: "95%" }}>
                    <SubTittle text="Related Item" />
                    <br/>
                    <Grid container>
                        {data.map((product, index) => index < 4 && (<Grid key={product.id} item xs={12} sm={6} md={3}> <ProductCard {...product} /> </Grid>))}
                    </Grid>
                </Container>
            </Container>
        </>
    )
}

export default ProductDetail
