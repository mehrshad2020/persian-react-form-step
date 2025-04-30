import { useState } from 'react';
import UserInfo from './steps/UserInfo';
import Description from './steps/Description';
import Services from './steps/Services';
import Budget from './steps/Budget';
import Complete from './steps/Complete';
import StepIndicator from './StepIndicator';
import '../styles/MultiStepForm.css';

const steps = [
  { id: 1, title: 'نام شما', icon: 'user' },
  { id: 2, title: 'توضیحات', icon: 'description' },
  { id: 3, title: 'خدمات', icon: 'services' },
  { id: 4, title: 'بودجه', icon: 'budget' },
  { id: 5, title: 'تکمیل', icon: 'complete' }
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    services: [],
    budget: ''
  });

  const updateFormData = (fieldName: string, value: any) => {
    setFormData({
      ...formData,
      [fieldName]: value
    });
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <UserInfo formData={formData} updateFormData={updateFormData} onNext={handleNext} />;
      case 2:
        return <Description formData={formData} updateFormData={updateFormData} onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <Services formData={formData} updateFormData={updateFormData} onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <Budget formData={formData} updateFormData={updateFormData} onNext={handleNext} onBack={handleBack} />;
      case 5:
        return <Complete formData={formData} updateFormData={updateFormData} onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <div className="multi-step-form">
      <div className="form-header">
        <h1>مثال فرم چند مرحله‌ای</h1>
        <p>در {steps.length - 1} مرحله ساده، برنامه خود را تکمیل کنید.</p>
      </div>
      <div className="form-container">
        <div className="steps-container">
          <StepIndicator steps={steps} currentStep={currentStep} />
        </div>
        <div className="form-content">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm; 