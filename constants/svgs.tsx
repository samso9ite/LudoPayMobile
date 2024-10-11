import {SvgXml} from 'react-native-svg'


export default function VerifiedSVG() {
    const verified = `
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_261_9933)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M32.6849 1.18126C32.3356 0.822938 31.918 0.538171 31.4569 0.343736C30.9958 0.149302 30.5004 0.0491333 29.9999 0.0491333C29.4995 0.0491333 29.0041 0.149302 28.543 0.343736C28.0819 0.538171 27.6643 0.822938 27.3149 1.18126L24.9224 3.63751C24.4515 4.12134 23.8587 4.46906 23.2066 4.64397C22.5545 4.81888 21.8673 4.81449 21.2174 4.63126L17.9174 3.70126C17.4358 3.56571 16.9318 3.52793 16.4353 3.59015C15.9388 3.65238 15.4598 3.81334 15.0265 4.06355C14.5931 4.31377 14.2142 4.64818 13.9121 5.04709C13.6101 5.44599 13.3908 5.90132 13.2674 6.38626L12.4199 9.70876C12.2538 10.3628 11.9142 10.9599 11.437 11.4371C10.9599 11.9143 10.3628 12.2539 9.7087 12.42L6.3862 13.2638C5.90126 13.3872 5.44593 13.6064 5.04703 13.9085C4.64812 14.2106 4.31371 14.5894 4.06349 15.0228C3.81328 15.4561 3.65231 15.9351 3.59009 16.4316C3.52787 16.9281 3.56565 17.4321 3.7012 17.9138L4.6312 21.2175C4.81443 21.8673 4.81882 22.5546 4.64391 23.2067C4.469 23.8588 4.12128 24.4516 3.63745 24.9225L1.1812 27.315C0.822877 27.6644 0.53811 28.0819 0.343675 28.543C0.149241 29.0042 0.0490723 29.4996 0.0490723 30C0.0490723 30.5005 0.149241 30.9958 0.343675 31.457C0.53811 31.9181 0.822877 32.3356 1.1812 32.685L3.63745 35.0813C4.12062 35.5518 4.46795 36.144 4.64283 36.7953C4.81772 37.4467 4.8137 38.1332 4.6312 38.7825L3.7012 42.0825C3.56565 42.5642 3.52787 43.0681 3.59009 43.5646C3.65231 44.0611 3.81328 44.5402 4.06349 44.9735C4.31371 45.4068 4.64812 45.7857 5.04703 46.0878C5.44593 46.3899 5.90126 46.6091 6.3862 46.7325L9.7087 47.58C10.3628 47.7462 10.9599 48.0857 11.437 48.5629C11.9142 49.0401 12.2538 49.6372 12.4199 50.2913L13.2637 53.6138C13.3867 54.099 13.6056 54.5548 13.9075 54.9541C14.2094 55.3534 14.5883 55.6882 15.0216 55.9388C15.455 56.1894 15.9342 56.3507 16.4309 56.4132C16.9276 56.4756 17.4318 56.438 17.9137 56.3025L21.2174 55.3725C21.8669 55.1888 22.554 55.1838 23.2061 55.3581C23.8582 55.5323 24.4511 55.8793 24.9224 56.3625L27.3149 58.8188C27.6643 59.1771 28.0819 59.4618 28.543 59.6563C29.0041 59.8507 29.4995 59.9509 29.9999 59.9509C30.5004 59.9509 30.9958 59.8507 31.4569 59.6563C31.918 59.4618 32.3356 59.1771 32.6849 58.8188L35.0812 56.3625C35.5521 55.88 36.1445 55.5334 36.7958 55.3591C37.4472 55.1849 38.1335 55.1895 38.7824 55.3725L42.0824 56.3025C42.5644 56.438 43.0686 56.4756 43.5653 56.4132C44.062 56.3507 44.5411 56.1894 44.9745 55.9388C45.4079 55.6882 45.7867 55.3534 46.0886 54.9541C46.3905 54.5548 46.6095 54.099 46.7324 53.6138L47.5799 50.2913C47.7461 49.6372 48.0857 49.0401 48.5628 48.5629C49.04 48.0857 49.6371 47.7462 50.2912 47.58L53.6137 46.7363C54.099 46.6133 54.5547 46.3944 54.954 46.0924C55.3533 45.7905 55.6882 45.4117 55.9388 44.9783C56.1894 44.5449 56.3506 44.0658 56.4131 43.5691C56.4756 43.0724 56.4379 42.5682 56.3024 42.0863L55.3724 38.7863C55.1887 38.1368 55.1838 37.4497 55.358 36.7976C55.5322 36.1455 55.8793 35.5526 56.3624 35.0813L58.8187 32.685C59.177 32.3356 59.4618 31.9181 59.6562 31.457C59.8506 30.9958 59.9508 30.5005 59.9508 30C59.9508 29.4996 59.8506 29.0042 59.6562 28.543C59.4618 28.0819 59.177 27.6644 58.8187 27.315L56.3624 24.9225C55.8793 24.4512 55.5322 23.8582 55.358 23.2061C55.1838 22.554 55.1887 21.867 55.3724 21.2175L56.3024 17.9175C56.4379 17.4356 56.4756 16.9314 56.4131 16.4347C56.3506 15.938 56.1894 15.4588 55.9388 15.0254C55.6882 14.5921 55.3533 14.2132 54.954 13.9113C54.5547 13.6094 54.099 13.3905 53.6137 13.2675L50.2912 12.42C49.6371 12.2539 49.04 11.9143 48.5628 11.4371C48.0857 10.9599 47.7461 10.3628 47.5799 9.70876L46.7362 6.38626C46.6128 5.90132 46.3936 5.44599 46.0915 5.04709C45.7894 4.64818 45.4105 4.31377 44.9772 4.06355C44.5438 3.81334 44.0648 3.65238 43.5683 3.59015C43.0718 3.52793 42.5679 3.56571 42.0862 3.70126L38.7862 4.63126C38.1358 4.81521 37.4478 4.81998 36.795 4.64505C36.1421 4.47012 35.5487 4.122 35.0774 3.63751L32.6849 1.18126ZM44.1487 23.5875C44.6858 23.0693 44.995 22.359 45.0083 21.6129C45.0217 20.8667 44.7381 20.1458 44.2199 19.6088C43.7018 19.0717 42.9915 18.7625 42.2453 18.7491C41.4992 18.7357 40.7783 19.0193 40.2412 19.5375L24.7387 34.5075L19.7999 29.5763C19.2713 29.0491 18.555 28.7536 17.8085 28.7547C17.062 28.7557 16.3464 29.0533 15.8193 29.5819C15.2922 30.1105 14.9967 30.8268 14.9977 31.5734C14.9988 32.3199 15.2963 33.0354 15.8249 33.5625L22.7212 40.44C23.242 40.9604 23.9461 41.2558 24.6823 41.2628C25.4185 41.2698 26.1281 40.9879 26.6587 40.4775L44.1487 23.5875Z" fill="#1C70EB"/>
        </g>
        <defs>
        <clipPath id="clip0_261_9933">
        <rect width="60" height="60" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    `;
  
    // Return the SvgXml component with the SVG string
    return <SvgXml xml={verified} />;
}