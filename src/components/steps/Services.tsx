import React from 'react';

interface ServicesProps {
  formData: {
    services: string[];
    [key: string]: any;
  };
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const serviceOptions = [
  { id: 'web', label: 'توسعه وب' },
  { id: 'mobile', label: 'توسعه موبایل' },
  { id: 'design', label: 'طراحی رابط کاربری' },
  { id: 'marketing', label: 'دیجیتال مارکتینگ' },
  { id: 'consulting', label: 'مشاوره فناوری' }
];

const Services: React.FC<ServicesProps> = ({ formData, updateFormData, onNext, onBack }) => {
  const handleServiceToggle = (serviceId: string) => {
    const updatedServices = formData.services.includes(serviceId)
      ? formData.services.filter(id => id !== serviceId)
      : [...formData.services, serviceId];
    
    updateFormData('services', updatedServices);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="step-content">
      <h2>خدمات</h2>
      <p>خدمات مورد نیاز خود را انتخاب کنید</p>
      
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>خدمات مورد نیاز خود را انتخاب کنید</label>
          <div className="services-grid">
            {serviceOptions.map(service => (
              <div 
                key={service.id} 
                className={`service-option ${formData.services.includes(service.id) ? 'selected' : ''}`}
                onClick={() => handleServiceToggle(service.id)}
              >
                <div className="service-checkbox">
                  {formData.services.includes(service.id) && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                {service.label}
              </div>
            ))}
          </div>
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

export default Services; 