import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-main-container">
      <div className="background-sec">
        <div className="text-title"></div>

        <div className="nvabar-components-main-container">
          <div className="navbar-mid-components">
            <div id="mid-1">
              <h1 className="pitchlab">Pitchlab</h1>
              <div className="caption-heading">
                <h1>
                  Innovate better,
                  <br />
                  <span className="heading-color">faster.</span>
                </h1>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, officia labore qui voluptatum eos perspiciatis quam
                  beatae ab consequuntur vero fugit dolor iure autem delectus
                  dicta sapiente quae, quibusdam alias.
                </p>
                <Link className="get-started" to="/contact">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="mid-2">
              <div className="kerasvg3">
                
              </div>
            <div className="kerasvg2"></div>
              <div className="kerasvg">
                
                <svg
                  width="445"
                  height="426"
                  viewBox="0 0 445 426"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Group 2">
                    <g id="lineonly">
                      <path
                        id="Vector"
                        d="M223.084 418C221.089 417.984 219.07 417.971 217.088 417.909L217.149 415.91C219.111 415.971 221.118 415.998 223.085 416C225.061 416 227.075 415.968 229.072 415.903L229.137 417.901C227.117 417.967 225.082 418 223.084 418ZM205.065 417.155C201.084 416.778 197.063 416.268 193.115 415.638L193.43 413.663C197.336 414.286 201.315 414.792 205.254 415.165L205.065 417.155ZM241.158 417.134L240.967 415.144C244.905 414.767 248.883 414.256 252.789 413.627L253.107 415.602C249.159 416.237 245.138 416.753 241.158 417.134H241.158ZM181.285 413.355C177.387 412.472 173.464 411.448 169.627 410.314L170.194 408.396C173.99 409.519 177.871 410.53 181.728 411.404L181.285 413.355ZM264.934 413.306L264.489 411.356C268.355 410.475 272.234 409.458 276.019 408.334L276.588 410.252C272.763 411.388 268.841 412.415 264.934 413.306H264.934ZM158.189 406.529C154.427 405.147 150.663 403.626 147.002 402.006L147.812 400.178C151.433 401.779 155.156 403.285 158.878 404.652L158.189 406.529ZM288.022 406.451L287.33 404.574C291.029 403.212 294.739 401.707 298.358 400.102L299.169 401.93C295.511 403.553 291.76 405.074 288.021 406.451H288.022ZM136.134 396.772C132.594 394.924 129.059 392.932 125.628 390.852L126.665 389.141C130.06 391.2 133.557 393.17 137.06 394.998L136.134 396.772ZM310.007 396.698L309.081 394.926C312.575 393.099 316.065 391.129 319.45 389.071L320.489 390.78C317.066 392.86 313.54 394.851 310.007 396.698H310.007ZM115.525 384.272C112.247 381.983 108.997 379.557 105.866 377.061L107.113 375.496C110.211 377.967 113.426 380.367 116.67 382.631L115.525 384.272ZM330.575 384.2L329.429 382.562C332.672 380.295 335.883 377.895 338.973 375.427L340.221 376.989C337.098 379.483 333.853 381.909 330.575 384.2ZM96.688 369.247C93.7241 366.557 90.8101 363.737 88.0283 360.869L89.4639 359.477C92.2163 362.314 95.0996 365.104 98.0327 367.767L96.688 369.247ZM349.39 369.178L348.044 367.697C350.97 365.04 353.851 362.249 356.607 359.404L358.043 360.795C355.258 363.671 352.346 366.491 349.39 369.178ZM79.9209 351.959C77.3257 348.916 74.7954 345.751 72.3994 342.552L74.0005 341.353C76.3711 344.519 78.8745 347.65 81.4424 350.66L79.9209 351.959ZM366.148 351.876L364.627 350.579C367.194 347.566 369.698 344.431 372.068 341.261L373.67 342.458C371.274 345.662 368.744 348.831 366.148 351.876V351.876ZM65.4946 332.685C63.3066 329.334 61.2012 325.874 59.2363 322.4L60.9775 321.416C62.9209 324.853 65.0044 328.276 67.1694 331.591L65.4946 332.685ZM380.577 332.576L378.901 331.484C381.067 328.163 383.15 324.733 385.095 321.289L386.837 322.272C384.872 325.754 382.766 329.221 380.577 332.576ZM53.6514 311.738C51.9111 308.139 50.2671 304.439 48.7651 300.742L50.6177 299.99C52.104 303.646 53.7305 307.307 55.4521 310.867L53.6514 311.738ZM392.424 311.582L390.623 310.713C392.344 307.146 393.971 303.477 395.459 299.803L397.313 300.553C395.809 304.267 394.164 307.978 392.424 311.582ZM44.5903 289.44C43.3252 285.642 42.1694 281.756 41.1548 277.891L43.0894 277.383C44.0928 281.206 45.2364 285.051 46.4878 288.808L44.5903 289.44ZM401.479 289.229L399.581 288.6C400.825 284.847 401.965 281.001 402.966 277.17L404.901 277.676C403.889 281.549 402.737 285.436 401.479 289.229ZM38.4717 266.147C37.7075 262.223 37.061 258.222 36.5498 254.254L38.5332 253.998C39.0391 257.924 39.6787 261.882 40.4346 265.764L38.4717 266.147ZM407.57 265.927L405.607 265.548C406.357 261.667 406.993 257.707 407.494 253.778L409.479 254.032C408.972 258.003 408.329 262.005 407.57 265.927V265.927ZM35.3936 242.264C35.1372 238.277 35.0049 234.226 35.0005 230.221L37.0005 230.219C37.0049 234.182 37.1357 238.19 37.3896 242.135L35.3936 242.264ZM410.621 242.04L408.625 241.913C408.874 237.973 409 233.964 409 230L408.999 229.562H410.999L411 229.993C411 234.006 410.872 238.057 410.621 242.04ZM37.3618 218.305L35.3657 218.182C35.6137 214.188 35.9932 210.152 36.4937 206.188L38.478 206.438C37.9824 210.361 37.6069 214.354 37.3618 218.305ZM408.598 217.648C408.338 213.695 407.948 209.704 407.439 205.786L409.422 205.528C409.937 209.488 410.331 213.521 410.594 217.518L408.598 217.648ZM40.3511 194.668L38.3872 194.29C39.1416 190.365 40.0352 186.411 41.042 182.539L42.9776 183.042C41.9815 186.873 41.0977 190.784 40.3511 194.668ZM405.522 194.023C404.761 190.137 403.862 186.229 402.854 182.406L404.788 181.897C405.808 185.76 406.715 189.711 407.485 193.638L405.522 194.023ZM46.3496 171.609L44.4502 170.982C45.7056 167.182 47.103 163.37 48.6045 159.652L50.459 160.401C48.9736 164.079 47.5913 167.85 46.3496 171.609ZM399.444 170.986C398.188 167.232 396.795 163.472 395.302 159.809L397.153 159.054C398.663 162.756 400.072 166.557 401.341 170.351L399.444 170.986ZM55.2832 149.483L53.4805 148.616C55.2153 145.009 57.0913 141.411 59.0557 137.92L60.7988 138.902C58.855 142.355 56.9995 145.915 55.2832 149.483ZM390.455 148.937C388.732 145.386 386.87 141.839 384.917 138.395L386.657 137.409C388.631 140.89 390.514 144.475 392.254 148.065L390.455 148.937ZM66.9805 128.698L65.3037 127.607C67.4849 124.255 69.8047 120.927 72.1982 117.718L73.8018 118.913C71.4336 122.089 69.1382 125.381 66.9805 128.698ZM378.713 128.228C376.549 124.922 374.247 121.641 371.87 118.474L373.47 117.273C375.872 120.475 378.199 123.792 380.387 127.132L378.713 128.228ZM81.2324 109.586L79.709 108.292C82.2993 105.244 85.0225 102.24 87.8027 99.3638L89.2412 100.753C86.4902 103.6 83.7959 106.572 81.2324 109.586ZM364.417 109.174C361.846 106.168 359.143 103.205 356.385 100.367L357.818 98.9732C360.606 101.841 363.338 104.836 365.937 107.875L364.417 109.174ZM97.7944 92.4492L96.4478 90.9707C99.4072 88.2749 102.489 85.6426 105.607 83.1475L106.857 84.709C103.772 87.1777 100.723 89.7822 97.7944 92.4492ZM347.806 92.0864C344.873 89.4317 341.815 86.835 338.716 84.3692L339.962 82.8037C343.094 85.2964 346.185 87.9204 349.147 90.604L347.806 92.0864ZM116.393 77.563L115.246 75.9253C118.518 73.6318 121.909 71.4146 125.323 69.3345L126.364 71.0425C122.986 73.1006 119.631 75.2945 116.393 77.563ZM329.151 77.2446C325.896 74.9785 322.53 72.792 319.148 70.7456L320.184 69.0347C323.602 71.1026 327.004 73.3125 330.294 75.6031L329.151 77.2446ZM136.727 65.1753L135.798 63.4038C139.334 61.5493 142.979 59.7847 146.629 58.1592L147.443 59.9863C143.831 61.5943 140.226 63.3403 136.727 65.1753ZM308.747 64.9009C305.235 63.0728 301.616 61.335 297.989 59.7354L298.797 57.9053C302.462 59.522 306.121 61.2788 309.671 63.1265L308.747 64.9009ZM158.466 55.5L157.771 53.624C161.521 52.2368 165.367 50.9536 169.201 49.8105L169.772 51.7275C165.979 52.8579 162.175 54.1275 158.466 55.5H158.466ZM286.917 55.273C283.2 53.9131 279.392 52.6572 275.598 51.541L276.162 49.622C279.997 50.7504 283.847 52.02 287.605 53.395L286.917 55.273ZM181.298 48.6929L180.852 46.7437C184.743 45.8521 188.721 45.0752 192.675 44.4331L192.996 46.4077C189.083 47.0425 185.147 47.8111 181.298 48.6929ZM264.061 48.5474C260.204 47.6782 256.266 46.9234 252.354 46.3032L252.668 44.3277C256.621 44.9546 260.602 45.7178 264.5 46.5962L264.061 48.5474ZM204.816 44.877L204.623 42.8867C208.593 42.5015 212.638 42.2383 216.643 42.105L216.709 44.104C212.746 44.2359 208.745 44.4961 204.816 44.877ZM240.529 44.815C236.594 44.4473 232.591 44.2012 228.633 44.0835L228.692 42.0845C232.693 42.2037 236.738 42.4522 240.715 42.8238L240.529 44.815Z"
                        fill="white"
                      />
                    </g>
                    <g id="Group 1">
                      <path
                        id="Vector_2"
                        d="M216 94C241.957 94 263 72.9574 263 47C263 21.0426 241.957 0 216 0C190.043 0 169 21.0426 169 47C169 72.9574 190.043 94 216 94Z"
                        fill="#F1F1F1"
                      />
                      <path
                        id="Vector_3"
                        d="M398 222C423.957 222 445 200.957 445 175C445 149.043 423.957 128 398 128C372.043 128 351 149.043 351 175C351 200.957 372.043 222 398 222Z"
                        fill="#F1F1F1"
                      />
                      <path
                        id="Vector_4"
                        d="M341 418C366.957 418 388 396.957 388 371C388 345.043 366.957 324 341 324C315.043 324 294 345.043 294 371C294 396.957 315.043 418 341 418Z"
                        fill="#F1F1F1"
                      />
                      <path
                        id="Vector_5"
                        d="M115 426C140.957 426 162 404.957 162 379C162 353.043 140.957 332 115 332C89.0426 332 68 353.043 68 379C68 404.957 89.0426 426 115 426Z"
                        fill="#F1F1F1"
                      />
                      <path
                        id="Vector_6"
                        d="M47 222C72.9574 222 94 200.957 94 175C94 149.043 72.9574 128 47 128C21.0426 128 0 149.043 0 175C0 200.957 21.0426 222 47 222Z"
                        fill="#F1F1F1"
                      />
                      <path
                        id="Vector_7"
                        d="M236.141 43.2529H219.747C218.256 43.2529 216.827 42.6607 215.773 41.6066C214.719 40.5525 214.126 39.1228 214.126 37.6321V21.2383C214.126 21.1768 214.114 21.1159 214.091 21.059C214.067 21.0022 214.033 20.9506 213.989 20.9071C213.946 20.8636 213.894 20.8291 213.837 20.8055C213.78 20.782 213.72 20.7699 213.658 20.7699H202.885C200.897 20.7699 198.991 21.5595 197.586 22.9649C196.18 24.3704 195.391 26.2766 195.391 28.2642V65.7358C195.391 67.7234 196.18 69.6296 197.586 71.0351C198.991 72.4405 200.897 73.2301 202.885 73.2301H229.115C231.103 73.2301 233.009 72.4405 234.414 71.0351C235.82 69.6296 236.609 67.7234 236.609 65.7358V43.7212C236.609 43.6597 236.597 43.5988 236.574 43.542C236.55 43.4851 236.516 43.4335 236.472 43.39C236.429 43.3465 236.377 43.312 236.32 43.2885C236.263 43.265 236.203 43.2529 236.141 43.2529ZM225.368 61.9886H206.632C206.135 61.9886 205.659 61.7912 205.307 61.4399C204.956 61.0885 204.759 60.612 204.759 60.1151C204.759 59.6181 204.956 59.1416 205.307 58.7902C205.659 58.4389 206.135 58.2415 206.632 58.2415H225.368C225.865 58.2415 226.341 58.4389 226.693 58.7902C227.044 59.1416 227.241 59.6181 227.241 60.1151C227.241 60.612 227.044 61.0885 226.693 61.4399C226.341 61.7912 225.865 61.9886 225.368 61.9886ZM225.368 52.6207H206.632C206.135 52.6207 205.659 52.4233 205.307 52.072C204.956 51.7206 204.759 51.2441 204.759 50.7472C204.759 50.2503 204.956 49.7737 205.307 49.4223C205.659 49.071 206.135 48.8736 206.632 48.8736H225.368C225.865 48.8736 226.341 49.071 226.693 49.4223C227.044 49.7737 227.241 50.2503 227.241 50.7472C227.241 51.2441 227.044 51.7206 226.693 52.072C226.341 52.4233 225.865 52.6207 225.368 52.6207Z"
                        fill="#383A60"
                      />
                      <path
                        id="Vector_8"
                        d="M235.113 39.1064L218.273 22.2664C218.24 22.2338 218.198 22.2117 218.153 22.2027C218.108 22.1938 218.061 22.1984 218.018 22.2161C217.976 22.2337 217.939 22.2636 217.913 22.3019C217.888 22.3402 217.874 22.3853 217.874 22.4315V37.6321C217.874 38.129 218.071 38.6055 218.422 38.9569C218.774 39.3082 219.25 39.5056 219.747 39.5056H234.948C234.994 39.5055 235.039 39.4916 235.077 39.4659C235.116 39.4401 235.146 39.4036 235.163 39.3609C235.181 39.3183 235.185 39.2713 235.176 39.226C235.168 39.1807 235.145 39.1391 235.113 39.1063L235.113 39.1064Z"
                        fill="#383A60"
                      />
                      <path
                        id="Vector_9"
                        d="M347.798 361.741C347.222 361.742 346.663 361.942 346.218 362.308C345.773 362.673 345.468 363.182 345.356 363.747C345.244 364.313 345.331 364.899 345.603 365.407C345.875 365.915 346.315 366.314 346.847 366.534C347.38 366.754 347.972 366.783 348.523 366.615C349.075 366.448 349.551 366.094 349.871 365.615C350.191 365.136 350.335 364.56 350.278 363.987C350.221 363.414 349.968 362.877 349.56 362.47C349.328 362.239 349.054 362.056 348.751 361.93C348.449 361.805 348.125 361.741 347.798 361.741Z"
                        fill="#383A60"
                      />
                      <path
                        id="Vector_10"
                        d="M361.665 351.781V351.773C361.586 351.427 361.412 351.11 361.162 350.857C360.913 350.605 360.598 350.427 360.253 350.345C357.472 349.666 353.097 350.389 348.249 352.331C343.587 354.143 339.321 356.844 335.689 360.284C334.697 361.27 333.776 362.325 332.932 363.441C331.066 363.312 329.196 363.612 327.466 364.319C322.077 366.69 320.538 372.759 320.128 375.251C320.069 375.605 320.092 375.968 320.196 376.311C320.3 376.655 320.482 376.97 320.728 377.232C320.973 377.494 321.276 377.695 321.612 377.821C321.948 377.947 322.309 377.994 322.666 377.957H322.678L328.681 377.302C328.688 377.379 328.696 377.449 328.703 377.513C328.78 378.244 329.106 378.927 329.627 379.447L332.556 382.378C333.075 382.899 333.758 383.226 334.489 383.303L334.69 383.324L334.036 389.319V389.331C334.005 389.636 334.034 389.944 334.121 390.238C334.209 390.531 334.353 390.805 334.547 391.043C334.74 391.28 334.978 391.478 335.247 391.624C335.517 391.769 335.812 391.861 336.117 391.892C336.189 391.9 336.261 391.904 336.333 391.904C336.463 391.904 336.592 391.894 336.72 391.873C339.226 391.469 345.292 389.949 347.657 384.532C348.358 382.807 348.659 380.945 348.539 379.087C349.659 378.245 350.718 377.323 351.707 376.33C355.145 372.732 357.849 368.5 359.669 363.869C361.6 359.076 362.327 354.668 361.665 351.781ZM351.674 368.101C350.907 368.869 349.93 369.392 348.866 369.604C347.802 369.816 346.7 369.708 345.697 369.293C344.695 368.879 343.838 368.176 343.235 367.275C342.632 366.373 342.309 365.313 342.309 364.228C342.308 363.143 342.629 362.083 343.232 361.18C343.834 360.278 344.69 359.575 345.692 359.159C346.694 358.743 347.797 358.634 348.861 358.845C349.925 359.056 350.902 359.578 351.67 360.345L351.674 360.349C352.702 361.361 353.285 362.741 353.296 364.184C353.307 365.627 352.744 367.015 351.732 368.043L351.674 368.101Z"
                        fill="#383A60"
                      />
                      <path
                        id="Vector_11"
                        d="M332.22 383.173C331.859 383.128 331.494 383.217 331.194 383.422C330.598 383.83 329.998 384.233 329.394 384.626C329.131 384.795 328.819 384.871 328.509 384.841C328.198 384.812 327.906 384.679 327.68 384.463C327.454 384.248 327.307 383.963 327.262 383.654C327.218 383.345 327.278 383.03 327.434 382.76L328.568 380.8C328.73 380.563 328.82 380.284 328.828 379.997C328.835 379.709 328.76 379.426 328.611 379.181C328.461 378.936 328.244 378.738 327.986 378.613C327.727 378.488 327.438 378.44 327.153 378.475C325.894 378.634 324.725 379.207 323.828 380.105C323.486 380.447 322.448 381.487 321.889 385.448C321.729 386.586 321.629 387.732 321.588 388.88C321.583 389.076 321.617 389.271 321.687 389.454C321.757 389.637 321.863 389.804 321.998 389.946C322.133 390.089 322.295 390.203 322.474 390.282C322.653 390.362 322.847 390.406 323.043 390.411C323.055 390.411 323.068 390.411 323.081 390.411H323.119C324.268 390.37 325.414 390.271 326.553 390.113C330.516 389.553 331.556 388.513 331.898 388.171C332.799 387.274 333.371 386.099 333.52 384.836C333.568 384.443 333.458 384.047 333.215 383.735C332.971 383.424 332.613 383.221 332.22 383.173Z"
                        fill="#383A60"
                      />
                      <path
                        id="Vector_12"
                        d="M98.8248 404.54H95.4195C94.7421 404.54 94.0925 404.271 93.6135 403.792C93.1346 403.313 92.8655 402.663 92.8655 401.986V386.662C92.8655 385.985 93.1346 385.335 93.6135 384.856C94.0925 384.377 94.7421 384.108 95.4195 384.108H98.8248C99.5021 384.108 100.152 384.377 100.631 384.856C101.11 385.335 101.379 385.985 101.379 386.662V401.986C101.379 402.663 101.11 403.313 100.631 403.792C100.152 404.271 99.5021 404.54 98.8248 404.54Z"
                        fill="#383A60"
                      />
                      <path
                        id="Vector_13"
                        d="M122.662 404.54H119.257C118.579 404.54 117.93 404.271 117.451 403.792C116.972 403.313 116.703 402.663 116.703 401.986V376.446C116.703 375.769 116.972 375.119 117.451 374.64C117.93 374.161 118.579 373.892 119.257 373.892H122.662C123.339 373.892 123.989 374.161 124.468 374.64C124.947 375.119 125.216 375.769 125.216 376.446V401.986C125.216 402.663 124.947 403.313 124.468 403.792C123.989 404.271 123.339 404.54 122.662 404.54Z"
                        fill="#383A60"
                      />
                      <path
                        id="Vector_14"
                        d="M134.581 404.54H131.175C130.498 404.54 129.848 404.271 129.369 403.792C128.89 403.313 128.621 402.663 128.621 401.986V364.527C128.621 363.85 128.89 363.2 129.369 362.721C129.848 362.243 130.498 361.973 131.175 361.973H134.581C135.258 361.973 135.908 362.243 136.386 362.721C136.865 363.2 137.135 363.85 137.135 364.527V401.986C137.135 402.663 136.865 403.313 136.386 403.792C135.908 404.271 135.258 404.54 134.581 404.54Z"
                        fill="#383A60"
                      />
                      <path
                        id="Vector_15"
                        d="M110.743 404.54H107.338C106.661 404.54 106.011 404.271 105.532 403.792C105.053 403.313 104.784 402.663 104.784 401.986V356.014C104.784 355.337 105.053 354.687 105.532 354.208C106.011 353.729 106.661 353.46 107.338 353.46H110.743C111.421 353.46 112.07 353.729 112.549 354.208C113.028 354.687 113.297 355.337 113.297 356.014V401.986C113.297 402.321 113.231 402.653 113.103 402.963C112.975 403.273 112.787 403.555 112.549 403.792C112.312 404.029 112.031 404.217 111.721 404.346C111.411 404.474 111.079 404.54 110.743 404.54Z"
                        fill="#383A60"
                      />
                      <path
                        id="Vector_16"
                        d="M400.252 173.769L397.819 171.335C397.261 170.778 396.506 170.464 395.718 170.462C394.93 170.46 394.173 170.77 393.613 171.324L376.698 186.934C376.077 187.484 375.697 188.256 375.64 189.083C375.622 189.494 375.689 189.904 375.837 190.288C375.984 190.672 376.21 191.021 376.498 191.314L380.132 194.988L380.139 194.994C380.7 195.554 381.46 195.87 382.253 195.872H382.363C382.774 195.849 383.176 195.745 383.546 195.567C383.917 195.388 384.248 195.138 384.522 194.831L400.241 177.994C400.803 177.437 401.12 176.68 401.124 175.889C401.127 175.098 400.816 174.339 400.259 173.777L400.252 173.769Z"
                        fill="#383A60"
                      />
                      <path
                        id="Vector_17"
                        d="M419.804 168.85L419.775 168.821L416.582 165.661C416.395 165.474 416.173 165.327 415.929 165.227C415.684 165.126 415.422 165.076 415.158 165.077C414.731 165.078 414.314 165.213 413.967 165.463C413.967 165.423 413.972 165.384 413.975 165.349C414.104 164.533 413.932 163.698 413.49 162.999C412.787 162.051 412.015 161.156 411.18 160.321L411.172 160.314C408.838 158.074 406.095 156.305 403.092 155.102C401.522 154.457 399.842 154.127 398.146 154.128C395.95 154.108 393.816 154.855 392.112 156.241C391.627 156.704 391.185 157.21 390.791 157.752C390.603 158.012 390.503 158.326 390.508 158.647C390.512 158.968 390.62 159.279 390.815 159.534C391.01 159.789 391.282 159.974 391.591 160.061C391.9 160.149 392.229 160.135 392.529 160.02C392.79 159.923 393.057 159.841 393.328 159.775C393.893 159.656 394.472 159.62 395.047 159.668C396.24 159.793 397.383 160.212 398.373 160.888C398.928 161.356 399.37 161.943 399.665 162.606C399.959 163.27 400.1 163.991 400.074 164.717C399.661 165.895 399.028 166.985 398.211 167.93C397.993 168.217 397.887 168.573 397.911 168.933C397.936 169.293 398.091 169.632 398.346 169.886L401.552 173.093C401.822 173.363 402.184 173.519 402.566 173.53C402.947 173.541 403.318 173.405 403.602 173.15C404.509 172.341 405.89 171.12 406.372 170.821C406.785 170.545 407.252 170.361 407.742 170.28C408.107 170.245 408.475 170.322 408.794 170.502C408.796 170.518 408.794 170.534 408.789 170.55C408.784 170.565 408.776 170.579 408.765 170.591L408.596 170.752L408.568 170.778C408.191 171.153 407.979 171.663 407.978 172.195C407.977 172.727 408.187 173.237 408.562 173.614L408.572 173.624L411.765 176.783C411.952 176.97 412.174 177.117 412.418 177.217C412.663 177.317 412.924 177.368 413.188 177.366C413.719 177.367 414.228 177.159 414.607 176.788L419.778 171.68C419.796 171.662 419.814 171.644 419.83 171.625C420.177 171.245 420.367 170.747 420.363 170.232C420.358 169.718 420.158 169.224 419.804 168.85Z"
                        fill="#383A60"
                      />
                      <path
                        id="Vector_18"
                        d="M54.4623 172.202C54.0934 172.202 53.7327 172.092 53.4259 171.887C53.1191 171.682 52.88 171.391 52.7388 171.05C52.5976 170.709 52.5607 170.334 52.6327 169.972C52.7046 169.61 52.8823 169.278 53.1432 169.017L57.4207 164.739L53.1432 160.462C52.7933 160.112 52.5968 159.637 52.5968 159.142C52.5968 158.648 52.7933 158.173 53.1432 157.823C53.493 157.473 53.9676 157.277 54.4623 157.277C54.9571 157.277 55.4316 157.473 55.7815 157.823L61.3783 163.42C61.5515 163.593 61.689 163.799 61.7827 164.025C61.8765 164.252 61.9247 164.494 61.9247 164.739C61.9247 164.984 61.8765 165.227 61.7827 165.453C61.689 165.679 61.5515 165.885 61.3783 166.058L55.7815 171.655C55.6085 171.829 55.4028 171.966 55.1765 172.06C54.9501 172.154 54.7074 172.202 54.4623 172.202Z"
                        fill="#383A60"
                      />
                      <path
                        id="Vector_19"
                        d="M24.6129 177.798C24.3679 177.798 24.1253 177.75 23.899 177.656C23.6726 177.563 23.467 177.425 23.2937 177.252C23.1205 177.079 22.9831 176.873 22.8893 176.647C22.7956 176.42 22.7473 176.178 22.7473 175.933V174.067C22.7619 171.104 23.9452 168.266 26.04 166.17C28.1349 164.074 30.9721 162.89 33.9353 162.874H58.1936C58.6883 162.874 59.1629 163.07 59.5127 163.42C59.8626 163.77 60.0592 164.244 60.0592 164.739C60.0592 165.234 59.8626 165.709 59.5127 166.058C59.1629 166.408 58.6883 166.605 58.1936 166.605H33.9409C31.9644 166.617 30.0722 167.407 28.6752 168.805C27.2781 170.204 26.4887 172.096 26.4785 174.073V175.933C26.4785 176.178 26.4303 176.42 26.3365 176.647C26.2428 176.873 26.1053 177.079 25.9321 177.252C25.7589 177.425 25.5532 177.563 25.3269 177.656C25.1005 177.75 24.8579 177.798 24.6129 177.798Z"
                        fill="#383A60"
                      />
                      <path
                        id="Vector_20"
                        d="M39.5377 192.723C39.2926 192.723 39.0499 192.675 38.8235 192.582C38.5972 192.488 38.3915 192.35 38.2185 192.177L32.6217 186.58C32.4485 186.407 32.3111 186.201 32.2173 185.975C32.1235 185.748 32.0753 185.506 32.0753 185.261C32.0753 185.016 32.1235 184.773 32.2173 184.547C32.3111 184.32 32.4485 184.115 32.6217 183.942L38.2185 178.345C38.5685 177.995 39.0428 177.799 39.5373 177.8C40.0318 177.8 40.5059 177.996 40.8556 178.346C41.2052 178.696 41.4017 179.17 41.402 179.664C41.4022 180.159 41.2061 180.633 40.8568 180.983L36.5793 185.261L40.8568 189.538C41.1177 189.799 41.2954 190.132 41.3673 190.494C41.4393 190.855 41.4024 191.231 41.2612 191.571C41.12 191.912 40.8809 192.204 40.5741 192.409C40.2673 192.614 39.9066 192.723 39.5377 192.723Z"
                        fill="#383A60"
                      />
                      <path
                        id="Vector_21"
                        d="M35.8065 187.126C35.3117 187.126 34.8372 186.93 34.4873 186.58C34.1375 186.23 33.9409 185.756 33.9409 185.261C33.9409 184.766 34.1375 184.291 34.4873 183.942C34.8372 183.592 35.3117 183.395 35.8065 183.395H60.0591C62.0356 183.383 63.9277 182.593 65.3248 181.195C66.7219 179.796 67.5112 177.904 67.5215 175.927V174.067C67.5215 173.572 67.718 173.098 68.0679 172.748C68.4178 172.398 68.8923 172.202 69.3871 172.202C69.8819 172.202 70.3564 172.398 70.7063 172.748C71.0561 173.098 71.2527 173.572 71.2527 174.067V175.933C71.2381 178.896 70.0548 181.734 67.96 183.83C65.8651 185.926 63.0279 187.11 60.0647 187.126L35.8065 187.126Z"
                        fill="#383A60"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="navbar-section-bottom-container">
            <div className="nav-links-container">
              <Link className="navbarlinks" to="/">
                Home
              </Link>
              <a href="#service" className="navbarlinks">Service</a>
              
              {/* <Link className="navbarlinks" to="/service">
                Service
              </Link> */}
              <Link className="navbarlinks" to="/career">
                Career
              </Link>
              <Link className="navbarlinks" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
