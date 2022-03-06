import React from 'react';

export default function Copy({ className }) {
    return (
        <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.50008 0.916687H7.44847H7.44846C6.15898 0.91667 5.1195 0.916655 4.29791 1.02121C3.44618 1.1296 2.72358 1.36099 2.13329 1.9019C2.05285 1.97561 1.97567 2.05279 1.90196 2.13323C1.36105 2.72352 1.12966 3.44611 1.02127 4.29785C0.916716 5.11944 0.916731 6.15892 0.916749 7.4484V7.44841V7.50002V7.55163V7.55164C0.916731 8.84112 0.916716 9.8806 1.02127 10.7022C1.12966 11.5539 1.36105 12.2765 1.90196 12.8668C1.97567 12.9473 2.05285 13.0244 2.13329 13.0981C2.72358 13.6391 3.44618 13.8704 4.29791 13.9788C4.76525 14.0383 5.3031 14.0639 5.91736 14.075C5.91933 14.6596 5.92769 15.154 5.96305 15.5728C6.01075 16.1377 6.11157 16.6331 6.35314 17.0891C6.70473 17.7526 7.24747 18.2954 7.91105 18.647C8.36697 18.8885 8.8624 18.9894 9.42731 19.0371C9.97581 19.0834 10.6539 19.0834 11.4947 19.0834H11.5279H12.5001H12.5517C13.8412 19.0834 14.8807 19.0834 15.7023 18.9788C16.554 18.8704 17.2766 18.639 17.8669 18.0981C17.9473 18.0244 18.0245 17.9473 18.0982 17.8668C18.6391 17.2765 18.8705 16.5539 18.9789 15.7022C19.0834 14.8806 19.0834 13.8411 19.0834 12.5516V12.5V11.5278V11.4946C19.0834 10.6539 19.0834 9.97575 19.0371 9.42725C18.9894 8.86234 18.8886 8.36691 18.647 7.91099C18.2954 7.24741 17.7527 6.70467 17.0891 6.35308C16.6332 6.11151 16.1378 6.01069 15.5729 5.96299C15.154 5.92762 14.6597 5.91927 14.0751 5.9173C14.064 5.30304 14.0384 4.76519 13.9789 4.29785C13.8705 3.44611 13.6391 2.72352 13.0982 2.13323C13.0245 2.05279 12.9473 1.97561 12.8669 1.9019C12.2766 1.36099 11.554 1.1296 10.7023 1.02121C9.88067 0.916655 8.84118 0.91667 7.55171 0.916687H7.55169H7.50008ZM14.0834 7.41741C14.0834 7.42773 14.0834 7.43807 14.0834 7.44842V7.50002V7.55162C14.0834 8.84111 14.0834 9.8806 13.9789 10.7022C13.8705 11.5539 13.6391 12.2765 13.0982 12.8668C13.0245 12.9473 12.9473 13.0244 12.8669 13.0981C12.2766 13.6391 11.554 13.8704 10.7023 13.9788C9.88066 14.0834 8.84117 14.0834 7.55168 14.0834H7.50008H7.44848C7.43813 14.0834 7.42779 14.0834 7.41747 14.0834C7.41952 14.6517 7.42742 15.0877 7.45773 15.4466C7.49731 15.9153 7.57104 16.1838 7.67858 16.3868C7.88954 16.7849 8.21518 17.1106 8.61333 17.3215C8.8163 17.4291 9.08478 17.5028 9.55352 17.5424C10.0315 17.5827 10.6461 17.5834 11.5279 17.5834H12.5001C13.8533 17.5834 14.7971 17.5819 15.5129 17.4908C16.2095 17.4022 16.5837 17.2395 16.8535 16.9922C16.9018 16.948 16.9481 16.9017 16.9923 16.8534C17.2396 16.5836 17.4022 16.2095 17.4909 15.5128C17.582 14.797 17.5834 13.8533 17.5834 12.5V11.5278C17.5834 10.6461 17.5828 10.0314 17.5424 9.55346C17.5029 9.08472 17.4291 8.81624 17.3216 8.61327C17.1106 8.21512 16.785 7.88948 16.3868 7.67852C16.1839 7.57098 15.9154 7.49725 15.4466 7.45767C15.0877 7.42736 14.6517 7.41946 14.0834 7.41741ZM3.14667 3.00781C3.41651 2.76055 3.79065 2.59786 4.48727 2.50921C5.2031 2.41811 6.14682 2.41669 7.50008 2.41669C8.85334 2.41669 9.79706 2.41811 10.5129 2.50921C11.2095 2.59786 11.5837 2.76055 11.8535 3.00781C11.9018 3.05204 11.9481 3.09835 11.9923 3.14661C12.2396 3.41645 12.4022 3.79059 12.4909 4.48721C12.582 5.20304 12.5834 6.14676 12.5834 7.50002C12.5834 8.85328 12.582 9.797 12.4909 10.5128C12.4022 11.2095 12.2396 11.5836 11.9923 11.8534C11.9481 11.9017 11.9018 11.948 11.8535 11.9922C11.5837 12.2395 11.2095 12.4022 10.5129 12.4908C9.79706 12.5819 8.85334 12.5834 7.50008 12.5834C6.14682 12.5834 5.2031 12.5819 4.48727 12.4908C3.79065 12.4022 3.41651 12.2395 3.14667 11.9922C3.09841 11.948 3.0521 11.9017 3.00787 11.8534C2.76061 11.5836 2.59792 11.2095 2.50927 10.5128C2.41817 9.797 2.41675 8.85328 2.41675 7.50002C2.41675 6.14676 2.41817 5.20304 2.50927 4.48721C2.59792 3.79059 2.76061 3.41645 3.00787 3.14661C3.0521 3.09835 3.09841 3.05204 3.14667 3.00781Z" fill="currentColor" />
        </svg>
    );
}
