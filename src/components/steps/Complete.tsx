import React, { useState } from 'react';

interface CompleteProps {
  formData: {
    name: string;
    email: string;
    [key: string]: any;
  };
  updateFormData: (field: string, value: any) => void;
  onBack: () => void;
}

const Complete: React.FC<CompleteProps> = ({ formData, updateFormData, onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [finalEmail, setFinalEmail] = useState(formData.email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit the form data to your backend here
    console.log('Submitting form data:', formData);
    setSubmitted(true);
  };

  return (
    <div className="step-content complete-step">
      <h2>تکمیل ثبت</h2>
      <p>
        با تشکر از وقتی که گذاشتید. لطفا ایمیل خود را وارد کنید
        و ما در عرض ۲۴ ساعت با شما تماس خواهیم گرفت.
      </p>
      
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="final-email">ایمیل خود را وارد کنید</label>
          <input
            type="email"
            id="final-email"
            value={finalEmail}
            onChange={(e) => setFinalEmail(e.target.value)}
            placeholder="your@email.com"
            required
          />
        </div>
        
        <div className="button-container">
          <button type="button" className="secondary" onClick={onBack}>
            مرحله قبل
          </button>
          <button type="submit" className="primary">
            تکمیل ثبت
          </button>
        </div>
      </form>
      
      {submitted && (
        <div className="success-message">
          <div className="success-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
          </div>
          <h3>از ثبت اطلاعات شما متشکریم!</h3>
          <p>اطلاعات شما دریافت شد و به زودی با شما تماس خواهیم گرفت.</p>
        </div>
      )}
    </div>
  );
};

export default Complete; 