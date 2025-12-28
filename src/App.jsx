import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import MenuPage from './Pages/MenuPage'
import IngredientPage from './Pages/IngredientPage'

const App = () => {
  const [recipe, setRecipe] = useState({})
  const navigate = useNavigate()

  const selectIngredient = () => {
    navigate('/ingredient')
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<MenuPage setRecipe={setRecipe} selectIngredient={selectIngredient} />}
      />
      <Route
        path="/ingredient"
        element={<IngredientPage recipe={recipe} />}
      />
    </Routes>
  )
}

export default App
