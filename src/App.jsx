import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WarehousePage from './pages/WarehousePage/WarehousePage';
import WarehouseAdd from './components/WarehouseAdd/WarehouseAdd';
import WarehouseEdit from './components/WarehouseEdit/WarehouseEdit';
import WarehouseItem from './components/WarehouseItem/WarehouseItem';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import InventoryAdd from './components/InventoryAdd/InventoryAdd';
import DeleteInventoryModal from './components/DeleteInventoryModal/DeleteInventoryModal'
import InventoryItem from './components/InventoryItem/InventoryItem';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import DeleteModal from './components/DeleteModal/DeleteModal';
import './index.scss'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<WarehousePage />}/>
      <Route path='/warehouse/:id' element={<WarehouseItem />}/>
      <Route path='/warehouse/edit/:id' element={<WarehouseEdit />}/>
      <Route path='/warehouse/add' element={<WarehouseAdd />}/>
      <Route path='/warehouse/delete/:id' element={<DeleteModal />}/>
      <Route path='/inventory' element={<InventoryPage />} />
      <Route path='/inventory/:id' element={<InventoryItem />} />
      <Route path='/inventory/edit/:id' element={<InventoryAdd addItem={false} />} />
      <Route path='/inventory/add' element={<InventoryAdd addItem={true}/>} />
      <Route path='/inventory/delete/:id' element={<DeleteInventoryModal />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
