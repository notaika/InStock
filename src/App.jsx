import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WarehousePage from './pages/WarehousePage/WarehousePage';
import WarehouseAdd from './components/WarehouseAdd/WarehouseAdd';
import WarehouseDelete from './components/WarehouseDelete/WarehouseDelete';
import WarehouseEdit from './components/WarehouseEdit/WarehouseEdit';
import WarehouseItem from './components/WarehouseItem/WarehouseItem';
import WarehouseList from './components/WarehouseList/WarehouseList';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import InventoryAdd from './components/InventoryAdd/InventoryAdd';
import InventoryDelete from './components/InventoryDelete/InventoryDelete';
import InventoryItem from './components/InventoryItem/InventoryItem';
import InventoryEdit from './components/InventoryEdit/InventoryEdit';
import InventoryList from './components/InventoryList/InventoryList';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import './index.scss'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<WarehousePage />}/>
      <Route path='/warehouse' element={<WarehousePage />}/>
      <Route path='/warehouse/:id' element={<WarehouseItem />}/>
      <Route path='/warehouse/edit/:id' element={<WarehouseEdit />}/>
      <Route path='/warehouse/add' element={<WarehouseAdd />}/>
      <Route path='/warehouse/delete/:id' element={<WarehouseDelete />}/>
      <Route path='/inventory' element={<InventoryPage />} />
      <Route path='/inventory/:id' element={<InventoryItem />} />
      <Route path='/inventory/edit/:id' element={<InventoryEdit />} />
      <Route path='/inventory/add' element={<InventoryAdd />} />
      <Route path='/inventory/delete/:id' element={<InventoryDelete />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
