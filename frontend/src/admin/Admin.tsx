import React, { useState } from "react";
import Modal from "../components/Modal";

const categories = [
  "veg",
  "non-veg",
  "dessert",
  "beverage",
  "salad",
  "rolls",
  "healthy",
  "dinner",
];

const Admin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    foodName: "",
    price: "",
    category: "",
    restaurantName: "",
    deliveryTime: "",
    description: "",
  });

  const [image, setImage] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.foodName);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("restaurantName", formData.restaurantName);
    data.append("deliveryTime", formData.deliveryTime);

    if (image) {
      data.append("image", image);
    }

    try {
      const response = await fetch("https://food-app-mern-qzo1.onrender.com/api/create-food", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      console.log(result);

      if (result.success) {
        setIsOpen(false);

        setFormData({
          foodName: "",
          price: "",
          category: "",
          restaurantName: "",
          deliveryTime: "",
          description: "",
        });

        setImage(null);
      }
    } catch (error) {
      console.error("Upload Error:", error);
    }
  };

  return (
    <div>
      <button className="btn mt-20" onClick={() => setIsOpen(true)}>
        Upload Food
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="flex flex-col gap-4 w-100 pt-3"
        >
          <input
            type="text"
            name="foodName"
            value={formData.foodName}
            onChange={handleChange}
            placeholder="Food Name"
            className="border p-1 rounded"
          />

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="border p-1 rounded"
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border p-1 rounded"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleChange}
            placeholder="Restaurant Name"
            className="border p-1 rounded"
          />

          <input
            type="text"
            name="deliveryTime"
            value={formData.deliveryTime}
            onChange={handleChange}
            placeholder="Delivery Time (e.g. 25-30 mins)"
            className="border p-1 rounded"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            rows={4}
            className="border p-1 rounded resize-none"
          />

          <input
            type="file"
            accept=".png,.jpg,.jpeg,.webp,image/png,image/jpeg,image/webp"
            onChange={handleFileChange}
            className="border p-1 rounded"
          />

          <button type="submit" className="bg-blue-500 text-white p-1 rounded">
            Upload Food
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Admin;
