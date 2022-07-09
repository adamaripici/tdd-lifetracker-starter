import { useState } from "react"
import apiClient from "../../services/apiClient"
import AccessForbidden from "../AccessForbidden/AccessForbidden"
import "./NewPostForm.css"

export default function NewPostForm({ user, addPost, fruit }) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({
    name: "",
    category: "",
    calories: "",
    imageUrl: "",
    quantity:1,
  })

  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async (e) => {
    // e.preventDefault()
    setIsLoading(true)

    const { data, error } = await apiClient.createNutrition( { name : form.name, 
      category : form.category, calories : form.calories, image_url: form.imageUrl, quantity : form.quantity})
      if (error) {
        setError(error)
      }
      if (data) {
      addPost(data.user)
      setForm({
         name: "", 
         category: "",
         calories: 0,
         imageUrl: "",
         quantity: 1
        })
      }
    
      setIsLoading(false)
    
  }
  
  const renderForm = () => {
    if (!user?.email) {
      return <AccessForbidden />
    }
    return (
      <div className="form">
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleOnInputChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            placeholder="category"
            value={form.category}
            onChange={handleOnInputChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="calories">Calories</label>
          <input
            type="number"
            name="calories"
            placeholder="calories"
            value={form.calories}
            min="0" max="10000000000" step="5"
            onChange={handleOnInputChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            placeholder="The image URL for your nutrition"
            value={form.imageUrl}
            onChange={handleOnInputChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            name="quantity"
            placeholder="quantity"
            value={form.quantity}
            onChange={handleOnInputChange}
            step="1"
          />
        </div>
        <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </div>
    )
  }

  return (
    <div className="NewPostForm">
      <div className="card">
        <h2>Create a new Nutrition</h2>

        {Boolean(error) && <span className="error">{error}</span>}

        {renderForm()}
      </div>
    </div>
  )
}