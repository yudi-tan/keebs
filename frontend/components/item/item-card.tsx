import { useState } from "react";
import { NextPage } from "next";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ItemCarousel from "./item-carousel.tsx";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ItemModalContent from "./item-modal-content.tsx";

interface ItemCardProps {
  itemImageUrls: string[];
  itemName: string;
  itemDescription?: string;
  itemDescriptors: Map<string, string>;
}

const ItemCard: NextPage<ItemCardProps> = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => setModalIsOpen(!modalIsOpen);
  const { itemImageUrls, itemName, itemDescription, itemDescriptors } = props;
  // TODO: item card optionally shows other fields of item
  return (
    <Box display="flex" justifyContent="center">
      <Modal open={modalIsOpen} onClose={toggleModal}>
        <ItemModalContent {...props} />
      </Modal>
      <Card sx={{ width: "100%" }} onClick={toggleModal}>
        <ItemCarousel itemUrls={itemImageUrls} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {itemName}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ItemCard;
