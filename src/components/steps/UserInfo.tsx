import React from 'react';

interface UserInfoProps {
  formData: {
    name: string;
    email: string;
    [key: string]: any;
  };
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ formData, updateFormData, onNext }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="step-content">
      <h2>نام شما</h2>
      <p>نام و ایمیل خود را وارد کنید</p>
      
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">نام خود را وارد کنید</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => updateFormData('name', e.target.value)}
            placeholder="علی محمدی"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">ایمیل خود را وارد کنید</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
            placeholder="example@domain.com"
            required
          />
        </div>
        
        <div className="button-container">
          <div></div>
          <button type="submit" className="primary">
            مرحله بعد
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInfo; 