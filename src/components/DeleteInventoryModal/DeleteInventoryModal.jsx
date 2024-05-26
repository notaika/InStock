import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import axios from 'axios';
import InventoryPage from '../../pages/InventoryPage/InventoryPage'
import exitIcon from '../../assets/icons/close-24px.svg';
import './DeleteInventoryModal.scss';

export default function InventoryDeleteModal() {
    const [inventoryItem, setInventoryItem] = useState([]);  //warehouseItem
    const [loading, setLoading] = useState(true)
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        navigate('/inventory');
    }
    const navigate = useNavigate();
    const { id } = useParams();

    const getInventoryItem = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_LOCALHOST}/api/inventories/${id}`);
            setInventoryItem(response.data);
            setLoading(false);
            setOpen(true);
        } catch (error) {
            console.log(`ERROR: Unable to fetch Warehouse with given ID`, error);
            setLoading(false);
        }
    }

    const deleteInventory = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_LOCALHOST}/api/inventories/${id}`);
            navigate('/')
        } catch (error) {
            console.log(`ERROR: Unable to delete warehouse with given ID`, error)
        }
    }

    const handleDelete = () => {
        deleteInventory();
    }

    useEffect(() => {getInventoryItem();}, [id]);

    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          className="modal"
        >
          <Box className="modal__content">
            <div className="modal__text">
                <h2 id="unstyled-modal-title" className="modal-title">
                  Delete {inventoryItem.item_name} inventory?
                </h2>
                <p id="unstyled-modal-description" className="modal-description">
                  Please confirm that you'd like to delete the {inventoryItem.item_name} from the list of warehouses. You won't be able to undo this action.
                </p>
            </div>
            <div className="modal__content-functions">
                <button className="modal__delete-cancel" onClick={handleClose}>Cancel</button>
                <button className="modal__delete-confirm" onClick={handleDelete}>Delete</button>
                <button className="modal__exit" onClick={handleClose}><img src={exitIcon} alt="An 'X' that represents the exit icon" className="modal__delete-exit" /></button>
            </div>
          </Box>
        </Modal>
        <InventoryPage />
      </div>
    );
  }