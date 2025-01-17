import { useState } from 'react';
import './CarOfferModal.css';

const CarOfferModal = ({ isOpen, onClose }:any) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    price: '',
    comment: ''
  });

  if (!isOpen) return null;

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Make an Offer</h2>
        <div className="car-details">
          <img src="/car-image.jpg" alt="2012 BMW X6" />
          <div>
            <p><strong>2012 BMW X6</strong></p>
            <p className="price">Ksh 2,950,000</p>
            <p>locally_used</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-row">
            <input 
              type="text" 
              name="phone" 
              placeholder="Phone Number" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="number" 
              name="price" 
              placeholder="Your Price" 
              value={formData.price} 
              onChange={handleChange} 
              required 
            />
          </div>
          <textarea 
            name="comment" 
            placeholder="Have any comment" 
            value={formData.comment} 
            onChange={handleChange}
          ></textarea>
          <div className="modal-actions">
            <button type="button" onClick={onClose} className="btn-close">Close</button>
            <button type="submit" className="btn-submit">Make Offer</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarOfferModal;
