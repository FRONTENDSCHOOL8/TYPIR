import { useState, useRef } from 'react';

const usePasswordValidation = () => {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const timeoutId = useRef();

  const validatePassword = (inputPassword) => {
    const regex = /^(?=.*[~!@#$%^&*])[A-Za-z\d~!@#$%^&*]{6,16}$/;
    setIsValid(regex.test(inputPassword));
  };

  const handleInputChange = (inputPassword) => {
    setPassword(inputPassword);
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => validatePassword(inputPassword), 300);
  };

  return { password, isValid, handleInputChange };
};

const PasswordInput = () => {
  const { password, isValid, handleInputChange } = usePasswordValidation();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="passwordInput" className="font-bold px-2">
        Password
      </label>
      <div className="relative w-72">
        <input
          type={showPassword ? 'text' : 'password'}
          id="passwordInput"
          value={password}
          onChange={(e) => handleInputChange(e.target.value)}
          className={`w-full h-11 mt-1 border ${isValid ? 'border-gray-300' : 'border-red-500'} rounded-2xl px-4 pr-10 relative`}
          placeholder="비밀번호를 입력하세요"
        />
        <button
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
          style={{ top: '50%', transform: 'translateY(-50%)', marginRight: '10px' }} // 버튼을 인풋 필드 내부 오른쪽 끝에 정렬
        >
          {showPassword ? (
            <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.99935 11.3307C10.7357 11.3307 11.3327 10.7338 11.3327 9.9974C11.3327 9.26102 10.7357 8.66406 9.99935 8.66406C9.26297 8.66406 8.66602 9.26102 8.66602 9.9974C8.66602 10.7338 9.26297 11.3307 9.99935 11.3307ZM9.99935 13.3307C11.8403 13.3307 13.3327 11.8383 13.3327 9.9974C13.3327 8.15645 11.8403 6.66406 9.99935 6.66406C8.1584 6.66406 6.66602 8.15645 6.66602 9.9974C6.66602 11.8383 8.1584 13.3307 9.99935 13.3307Z"
                fill="#A6A6A6"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.60461 7.24015C5.55108 7.97407 4.67274 8.88906 4.0828 9.58605C3.98205 9.70507 3.90748 9.79333 3.84582 9.87099C3.79933 9.92954 3.76947 9.97061 3.7499 10C3.76947 10.0294 3.79933 10.0705 3.84582 10.129C3.90748 10.2067 3.98205 10.2949 4.0828 10.414C4.67274 11.1109 5.55108 12.0259 6.60461 12.7599C7.66445 13.4982 8.82452 14 9.99932 14C11.1741 14 12.3342 13.4982 13.394 12.7599C14.4476 12.0259 15.3259 11.1109 15.9158 10.414C16.0166 10.2949 16.0912 10.2067 16.1528 10.129C16.1993 10.0705 16.2292 10.0294 16.2487 10C16.2292 9.97061 16.1993 9.92954 16.1528 9.87099C16.0912 9.79334 16.0166 9.70507 15.9158 9.58605C15.3259 8.88906 14.4476 7.97408 13.394 7.24015C12.3342 6.50183 11.1741 6 9.99932 6C8.82452 6 7.66445 6.50183 6.60461 7.24015ZM16.2662 9.99988V10C16.2662 9.99992 16.2662 9.99988 16.2662 9.99988ZM5.4614 5.5991C6.70273 4.73434 8.26144 4 9.99932 4C11.7372 4 13.2959 4.73434 14.5372 5.5991C15.7849 6.46825 16.7901 7.52326 17.4424 8.29393C17.4658 8.32158 17.4902 8.35 17.5153 8.37924C17.8339 8.75068 18.2662 9.25478 18.2662 10C18.2662 10.7452 17.8339 11.2493 17.5153 11.6208C17.4902 11.65 17.4658 11.6784 17.4424 11.7061C16.7901 12.4767 15.7849 13.5318 14.5372 14.4009C13.2959 15.2657 11.7372 16 9.99932 16C8.26144 16 6.70273 15.2657 5.46139 14.4009C4.21375 13.5318 3.20853 12.4767 2.55622 11.7061C2.53282 11.6784 2.50844 11.65 2.48337 11.6208C2.16478 11.2493 1.73242 10.7452 1.73242 10C1.73242 9.25478 2.16478 8.75068 2.48337 8.37924C2.50845 8.35 2.53282 8.32158 2.55622 8.29393C3.20853 7.52326 4.21375 6.46825 5.4614 5.5991Z"
                fill="#A6A6A6"
              />
            </svg>
          ) : (
            <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.3135 10.3568C13.3262 10.2388 13.3327 10.1188 13.3327 9.9974C13.3327 8.15645 11.8403 6.66406 9.99935 6.66406C9.87791 6.66406 9.75798 6.67056 9.6399 6.68322L13.3135 10.3568ZM7.0876 8.37356C6.81907 8.85405 6.66602 9.40785 6.66602 9.9974C6.66602 11.8383 8.1584 13.3307 9.99935 13.3307C10.5889 13.3307 11.1427 13.1777 11.6232 12.9091L10.044 11.33C10.0292 11.3305 10.0143 11.3307 9.99935 11.3307C9.26297 11.3307 8.66602 10.7338 8.66602 9.9974C8.66602 9.98244 8.66626 9.96754 8.66675 9.95271L7.0876 8.37356Z"
                fill="#A6A6A6"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.6633 14.952L12.1803 13.469C11.4734 13.8009 10.7393 14 9.99932 14C8.82452 14 7.66445 13.4982 6.60461 12.7599C5.55108 12.0259 4.67274 11.1109 4.0828 10.414C3.98205 10.2949 3.90748 10.2067 3.84582 10.129C3.79933 10.0705 3.76947 10.0294 3.7499 10C3.76947 9.97061 3.79933 9.92954 3.84582 9.87099C3.90748 9.79333 3.98205 9.70507 4.0828 9.58605C4.60081 8.97404 5.34119 8.19395 6.22728 7.51595L4.80253 6.09121C3.85823 6.84425 3.08935 7.66406 2.55622 8.29393C2.53282 8.32158 2.50845 8.34999 2.48338 8.37923L2.48337 8.37924C2.16478 8.75068 1.73242 9.25478 1.73242 10C1.73242 10.7452 2.16478 11.2493 2.48337 11.6208L2.48338 11.6208C2.50846 11.65 2.53282 11.6784 2.55622 11.7061C3.20853 12.4767 4.21375 13.5318 5.46139 14.4009C6.70273 15.2657 8.26144 16 9.99932 16C11.3506 16 12.5936 15.556 13.6633 14.952ZM7.46141 4.50745C8.24646 4.19715 9.09884 4 9.99932 4C11.7372 4 13.2959 4.73434 14.5372 5.5991C15.7849 6.46825 16.7901 7.52326 17.4424 8.29393C17.4658 8.32155 17.4901 8.34994 17.5152 8.37915L17.5153 8.37924C17.8339 8.75068 18.2662 9.25478 18.2662 10C18.2662 10.7452 17.8339 11.2493 17.5153 11.6208L17.5152 11.6209C17.4901 11.6501 17.4658 11.6784 17.4424 11.7061C17.0889 12.1237 16.6318 12.6248 16.0886 13.1346L14.6736 11.7196C15.1648 11.2628 15.5855 10.8042 15.9158 10.414C16.0166 10.2949 16.0912 10.2067 16.1528 10.129C16.1993 10.0705 16.2292 10.0294 16.2487 10C16.2292 9.97061 16.1993 9.92954 16.1528 9.87099C16.0912 9.79334 16.0166 9.70507 15.9158 9.58605C15.3259 8.88906 14.4476 7.97408 13.394 7.24015C12.3342 6.50183 11.1741 6 9.99932 6C9.68375 6 9.36924 6.03621 9.05745 6.10349L7.46141 4.50745Z"
                fill="#A6A6A6"
              />
              <path d="M4.16602 1.66406L17.4993 14.9974" stroke="#A6A6A6" stroke-width="2" />
            </svg>
          )}
        </button>
      </div>
      {!isValid && <p className="text-red-500 text-sm mt-1 px-2">비밀번호는 특수문자를 포함한 6~16자리여야 합니다.</p>}
    </div>
  );
};

export default PasswordInput;
