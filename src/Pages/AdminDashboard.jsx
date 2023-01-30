import {
  Box,
  Flex,
  Grid,
  GridItem,
  Select,
  VStack,
  HStack,
  Button,
  Text,
  useTimeout,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayProducts from "../Components/DisplayProducts";
import Sorting from "../Components/Sorting";
import "../CSS/admin.css";
import { getData } from "../Redux/Sorting/actiontype";
import { useState, useEffect } from "react";
import ProductManagement from "../Components/ProductManagement";
import { UserAuth } from "./Context/UserAuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { store } from "../Redux/store";
import { useToast } from "@chakra-ui/react";

function AdminDashboard() {
  const toast=useToast();
  const { user, logOut } = UserAuth();
  // console.log(user)
  const location = useLocation();
  const [flag, setflag] = useState(false);
  const navigate = useNavigate();
  const [searchParams,setSearchParams]=useSearchParams();
  // console.log(store.getState());
  // console.log(user);
  const data = useSelector((state) => state.Sortingreducer.data);
  // console.log(data)
  const [Data, setData] = useState([]);
  // console.log(Data)

  const handleLogout = async () => {
    try {
      await logOut;
      toast({
        title: "Signed out from Admin",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position:"top"
      });
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  // console.log(data);

  const dispatch = useDispatch();

  const handleSort = (e) => {
    // setData(data)
    console.log(e.target.value);
    if (e.target.value == "High") {
      data.sort((a, b) => {
        // console.log(el)
        return b.price - a.price;
      });
    } else {
      data.sort((a, b) => {
        // console.log(el)
        return a.price - b.price;
      });
    }
    // console.log(Data)
    setflag(!flag);
    // console.log(data)
    setData(data);
  };

  // useEffect(() => {
  //   dispatch(getData("biryani"));
  // }, []);

  useEffect(() => {
    setData(data);
  }, [flag, location.search]);

  useEffect(() => {
    if(location||data.length==0){
        const getbooksParams={
            params:{
                option:searchParams.getAll("option"),   
            }
        }
        console.log(getbooksParams)
        dispatch(getData(getbooksParams));
    }
    // console.log(books)
}, [data.length,dispatch,location.search]);

  return (
    //display sales status on daily, weekly and monthly bases
    <>
      <div id="admin_display">
        {/* <div>
          <h3>Sold 2 products today</h3>
        </div>
        <div>
          <h3>Sold 15 products this week</h3>
  </div>*/}
        {/* <div>
        <Text fontSize="2xl" fontWeight="bold" >Welcome to Admin Page: </Text>
        </div> */}
        <div style={{display:"flex"}} >
          {/* <h3>{user && "welocme to admin page"} </h3> */}
          <Text fontSize="2xl" fontWeight="bold"><Text  color="red.400" >Welcome : {user.displayName}</Text></Text>
        </div> 
        <div>
          <Button
            colorScheme="red"
            size="sm"
            // style={{ borderRadius: "10px", margin: ".2rem" }}
            onClick={handleLogout}
            >
            Sign out
          </Button>
            </div>
        </div>
      {/* <Grid templateColumns="repeat(2, 1fr)"> */}
      <HStack id="filteri_ng">
        <VStack position="absolute" top="80px">
          <Sorting />
          <Divider />
          <Text fontSize="2xl" style={{ marginBottom: "4%",marginTop:"5%" }}>Sorting Component</Text>
          <Select
            w={"200px"}
            color="black"
            bg={""}
            onChange={(e) => handleSort(e)}
            placeholder="Sort By Price"
          >
            <option value="High">High</option> <option value="Low">Low</option>
          </Select>
          <Divider />
          <ProductManagement />
        </VStack>

        {/* <GridItem marginTop="70px" h={"auto"} ml="25%" > */}

        <DisplayProducts data={data == [] ? Data : data} />
        {/* </GridItem> */}
      </HStack>
      {/* </Grid> */}
    </>
  );
}

export default AdminDashboard;
