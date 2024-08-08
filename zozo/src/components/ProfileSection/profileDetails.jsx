
  import React, { useState } from 'react';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import '@fortawesome/fontawesome-free/css/all.min.css';
 
  import './profileDetails.css';
  
  const ImageUploadComponent = () => {
    const [photos, setPhotos] = useState(Array(6).fill(null));
    const [formData, setFormData] = useState({
      firstName: '',
      email: '',
      birthdayDay: '',
      birthdayMonth: '',
      birthdayYear: '',
      gender: '',
      showGender: false,
      interestedIn: '',
      city: '',
      state: '',
      zip: '',
    });
  
    const handleFileChange = (index, e) => {
      const file = e.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const newPhotos = [...photos];
          newPhotos[index] = event.target.result;
          setPhotos(newPhotos);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleRemovePhoto = (index) => {
      const newPhotos = [...photos];
      newPhotos[index] = null;
      setPhotos(newPhotos);
    };
  
    const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Data:', { ...formData, photos });
    };
  
    return (
      <div className="container d-flex justify-content-center vh-100 p-1">
        <div className="bg-white p-4 shadow-sm rounded w-100" style={{ maxWidth: '800px' }}>
          <h1 className="text-center mb-2">Create Account</h1>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="firstName">Full Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="zozo@gmail.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Birthday</label>
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        name="birthdayDay"
                        className="form-control"
                        placeholder="DD"
                        value={formData.birthdayDay}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        name="birthdayMonth"
                        className="form-control"
                        placeholder="MM"
                        value={formData.birthdayMonth}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        name="birthdayYear"
                        className="form-control"
                        placeholder="YYYY"
                        value={formData.birthdayYear}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <div className="btn-group btn-group-toggle d-flex" data-bs-toggle="buttons">
                    <label className="btn btn-outline-secondary flex-fill">
                      <input
                        type="radio"
                        name="gender"
                        value="man"
                        id="gender-man"
                        className='form_radio_input'
                        checked={formData.gender === 'man'}
                        onChange={handleInputChange}
                        autoComplete="off"
                      />
                      Man
                    </label>
                    <label className="btn btn-outline-secondary flex-fill">
                      <input
                        type="radio"
                        name="gender"
                        value="woman"
                        id="gender-woman"
                        className='form_radio_input'
                        checked={formData.gender === 'woman'}
                        onChange={handleInputChange}
                        autoComplete="off"
                      />
                      Woman
                    </label>
                    <label className="btn btn-outline-secondary flex-fill">
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        id="gender-other"
                        className='form_radio_input'
                        checked={formData.gender === 'other'}
                        onChange={handleInputChange}
                        autoComplete="off"
                      />
                      Other
                    </label>
                  </div>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="showGender"
                    name="showGender"
                    checked={formData.showGender}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="showGender" className="form-check-label">Show my gender on my profile</label>
                </div>
                <div className="form-group">
                  <label>Interested In</label>
                  <div className="btn-group btn-group-toggle d-flex" data-bs-toggle="buttons">
                    <label className="btn btn-outline-secondary flex-fill">
                      <input
                        type="radio"
                        name="interestedIn"
                        value="man"
                        className='form_radio_input'
                        id="interested-man"
                        checked={formData.interestedIn === 'man'}
                        onChange={handleInputChange}
                        autoComplete="off"
                      />
                      Man
                    </label>
                    <label className="btn btn-outline-secondary flex-fill">
                      <input
                        type="radio"
                        name="interestedIn"
                        value="woman"
                        id="interested-woman"
                        className='form_radio_input'
                        checked={formData.interestedIn === 'woman'}
                        onChange={handleInputChange}
                        autoComplete="off"
                      />
                      Woman
                    </label>
                    <label className="btn btn-outline-secondary flex-fill">
                      <input
                        type="radio"
                        name="interestedIn"
                        value="other"
                        id="interested-other"
                        className='form_radio_input'
                        checked={formData.interestedIn === 'other'}
                        onChange={handleInputChange}
                        autoComplete="off"
                      />
                      Everyone
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label>Profile photos</label>
                <div className="row photo-grid" id="photo-grid">
                  {photos.map((photo, index) => (
                    <div className="col-4 mb-3" key={index}>
                      <div className={`photo ${photo ? 'has-image' : 'add-photo'}`} onClick={() => document.getElementById(`file-input-${index}`).click()}>
                        {photo ? (
                          <>
                            <img src={photo} alt={`Profile ${index + 1}`} />
                            <button type="button" onClick={(e) => {
                              e.stopPropagation();
                              handleRemovePhoto(index);
                            }}>×</button>
                          </>
                        ) : (
                          <>
                            <i className="fas fa-plus"></i>
                            <input
                              id={`file-input-${index}`}
                              type="file"
                              className="hidden"
                              accept="image/*"
                              onChange={(e) => handleFileChange(index, e)}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-muted photo_text_guide">Upload 2 photos to start. Add 4+ for a standout profile</p>
              </div>
              <div className="col-md-6">
                <label htmlFor="city" className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="state" className="form-label">State</label>
                <select
                  id="state"
                  className="form-select"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                >
                  <option value="">Durg</option>
                  <option value="">Rajnandgao</option>
                  <option value="">test1</option>
                  <option value="">test...</option>
                  {/* Add more options here */}
                </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="zip" className="form-label">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-outline-secondary text-center submit_button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
export default ImageUploadComponent;
  