import React from 'react';

interface BudgetProps {
  formData: {
    budget: string;
    [key: string]: any;
  };
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const budgetOptions = [
  { id: 'small', label: '۱ تا ۵ میلیون تومان', description: 'پروژه کوچک' },
  { id: 'medium', label: '۵ تا ۱۰ میلیون تومان', description: 'پروژه متوسط' },
  { id: 'large', label: '۱۰ تا ۲۰ میلیون تومان', description: 'پروژه بزرگ' },
  { id: 'enterprise', label: 'بیش از ۲۰ میلیون تومان', description: 'پروژه سازمانی' }
];

const Budget: React.FC<BudgetProps> = ({ formData, updateFormData, onNext, onBack }) => {
  const handleBudgetSelect = (budgetId: string) => {
    updateFormData('budget', budgetId);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="step-content">
      <h2>بودجه</h2>
      <p>بودجه مورد نظر خود را انتخاب کنید</p>
      
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>محدوده بودجه خود را انتخاب کنید</label>
          <div className="budget-options">
            {budgetOptions.map(option => (
              <div 
                key={option.id} 
                className={`budget-option ${formData.budget === option.id ? 'selected' : ''}`}
                onClick={() => handleBudgetSelect(option.id)}
              >
                <div className="budget-option-content">
                  <h3>{option.label}</h3>
                  <p>{option.description}</p>
                </div>
                <div className="budget-radio">
                  {formData.budget === option.id && (
                    <div className="radio-selected"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="button-container">
          <button type="button" className="secondary" onClick={onBack}>
            مرحله قبل
          </button>
          <button 
            type="submit" 
            className="primary"
            disabled={!formData.budget}
          >
            مرحله بعد
          </button>
        </div>
      </form>
    </div>
  );
};

export default Budget; 