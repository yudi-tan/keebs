import { useState } from "react";
import { NextPage } from "next";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ItemCarousel from "./item-carousel.tsx";
import Modal from "@mui/material/Modal";
import ItemModelContent from "./item-modal-content.tsx";

interface ItemCardProps {
  itemUrls: string[];
  itemDescription: string;
}

const ItemCard: NextPage<ItemCardProps> = ({
  itemUrls = [],
  itemDescription = "",
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => setModalIsOpen(!modalIsOpen);
  return (
    <div>
      <Modal open={modalIsOpen} onClose={toggleModal}>
        <ItemModelContent />
      </Modal>
      <Card sx={{ maxWidth: 345 }} onClick={toggleModal}>
        <ItemCarousel itemUrls={itemUrls} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {itemDescription}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ItemCard;
