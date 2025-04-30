import React from 'react';

interface DescriptionProps {
  formData: {
    description: string;
    [key: string]: any;
  };
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const Description: React.FC<DescriptionProps> = ({ formData, updateFormData, onNext, onBack }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="step-content">
      <h2>توضیحات</h2>
      <p>توضیحات پروژه خود را وارد کنید</p>
      
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="description">نیازهای پروژه خود را توضیح دهید</label>
          <textarea
            id="description"
            rows={5}
            value={formData.description}
            onChange={(e) => updateFormData('description', e.target.value)}
            placeholder="توضیحات پروژه خود را اینجا بنویسید..."
            required
          />
        </div>
        
        <div className="button-container">
          <button type="button" className="secondary" onClick={onBack}>
            مرحله قبل
          </button>
          <button type="submit" className="primary">
            مرحله بعد
          </button>
        </div>
      </form>
    </div>
  );
};

export default Description; 