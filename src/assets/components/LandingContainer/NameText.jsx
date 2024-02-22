import React, { useContext } from "react";
import { StateContext } from "../../context/StateContext";

function NameText() {
  const { screenWidth } = useContext(StateContext);
  return (
    <div>
      <svg
        width={`${
          screenWidth < 1000 ? (screenWidth < 600 ? "250" : "513") : "613"
        }`}
        height={`${screenWidth < 600 ? "400" : "508"}`}
        viewBox="0 0 813 508"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.7016 321.745V192.969H61.999C71.3051 192.969 79.0393 194.436 85.2015 197.37C91.4055 200.263 96.0377 204.224 99.0978 209.254C102.2 214.285 103.751 219.986 103.751 226.358C103.751 231.597 102.745 236.083 100.733 239.814C98.7205 243.503 96.0167 246.5 92.6212 248.805C89.2257 251.111 85.432 252.767 81.2401 253.773V255.03C85.8093 255.282 90.1899 256.686 94.3818 259.243C98.6157 261.759 102.074 265.322 104.757 269.933C107.44 274.544 108.781 280.119 108.781 286.659C108.781 293.324 107.167 299.318 103.939 304.642C100.712 309.924 95.849 314.095 89.3515 317.155C82.854 320.215 74.6797 321.745 64.8286 321.745H12.7016ZM36.0298 302.253H61.1187C69.5864 302.253 75.6857 300.639 79.4166 297.411C83.1893 294.141 85.0757 289.949 85.0757 284.835C85.0757 281.021 84.1325 277.583 82.2461 274.523C80.3598 271.421 77.6769 268.99 74.1976 267.229C70.7183 265.427 66.5682 264.525 61.7475 264.525H36.0298V302.253ZM36.0298 247.736H59.1065C63.1308 247.736 66.7569 247.003 69.9847 245.536C73.2125 244.027 75.7486 241.91 77.5931 239.185C79.4794 236.418 80.4226 233.148 80.4226 229.376C80.4226 224.387 78.662 220.279 75.1408 217.051C71.6614 213.824 66.4844 212.21 59.6096 212.21H36.0298V247.736ZM125.534 321.745V192.969H148.862V247.485H208.535V192.969H231.926V321.745H208.535V267.04H148.862V321.745H125.534ZM334.934 192.969H358.262V277.101C358.262 286.323 356.082 294.435 351.722 301.435C347.405 308.436 341.326 313.906 333.487 317.847C325.648 321.745 316.489 323.695 306.009 323.695C295.487 323.695 286.307 321.745 278.468 317.847C270.629 313.906 264.551 308.436 260.233 301.435C255.915 294.435 253.756 286.323 253.756 277.101V192.969H277.085V275.152C277.085 280.518 278.258 285.296 280.606 289.488C282.995 293.68 286.349 296.971 290.667 299.36C294.984 301.708 300.098 302.882 306.009 302.882C311.92 302.882 317.034 301.708 321.352 299.36C325.711 296.971 329.065 293.68 331.412 289.488C333.76 285.296 334.934 280.518 334.934 275.152V192.969ZM450.061 228.37C449.474 222.878 447.001 218.602 442.641 215.542C438.324 212.482 432.706 210.952 425.79 210.952C420.927 210.952 416.756 211.686 413.277 213.153C409.797 214.62 407.136 216.611 405.291 219.126C403.447 221.642 402.503 224.513 402.462 227.741C402.462 230.424 403.069 232.75 404.285 234.72C405.543 236.691 407.24 238.367 409.378 239.751C411.516 241.092 413.885 242.224 416.484 243.146C419.083 244.069 421.703 244.844 424.343 245.473L436.416 248.491C441.279 249.623 445.953 251.153 450.438 253.081C454.966 255.01 459.011 257.441 462.574 260.375C466.179 263.31 469.03 266.852 471.126 271.002C473.222 275.152 474.27 280.015 474.27 285.59C474.27 293.135 472.341 299.78 468.485 305.523C464.628 311.224 459.053 315.688 451.759 318.916C444.507 322.102 435.725 323.695 425.412 323.695C415.394 323.695 406.695 322.144 399.318 319.042C391.982 315.94 386.239 311.412 382.089 305.46C377.98 299.507 375.759 292.255 375.423 283.703H398.374C398.71 288.189 400.093 291.92 402.524 294.896C404.956 297.872 408.121 300.094 412.019 301.561C415.96 303.028 420.361 303.762 425.224 303.762C430.296 303.762 434.74 303.007 438.554 301.498C442.411 299.947 445.429 297.809 447.609 295.085C449.789 292.318 450.9 289.09 450.941 285.401C450.9 282.048 449.914 279.281 447.986 277.101C446.058 274.879 443.354 273.035 439.875 271.568C436.437 270.059 432.413 268.717 427.802 267.543L413.151 263.771C402.545 261.046 394.161 256.917 387.999 251.383C381.879 245.808 378.819 238.409 378.819 229.187C378.819 221.6 380.873 214.955 384.981 209.254C389.131 203.553 394.769 199.131 401.896 195.987C409.022 192.801 417.091 191.208 426.104 191.208C435.243 191.208 443.249 192.801 450.124 195.987C457.041 199.131 462.469 203.511 466.41 209.129C470.35 214.704 472.383 221.118 472.509 228.37H450.061ZM505.988 321.745H481.088L526.424 192.969H555.222L600.621 321.745H575.721L541.326 219.378H540.32L505.988 321.745ZM506.805 271.253H574.715V289.991H506.805V271.253ZM719.867 192.969V321.745H699.117L638.439 234.029H637.37V321.745H614.042V192.969H634.917L695.533 280.748H696.665V192.969H719.867ZM56.3399 487.745H12.7016V358.969H57.2202C70.0056 358.969 80.9885 361.547 90.1689 366.703C99.3912 371.817 106.476 379.174 111.422 388.773C116.369 398.373 118.842 409.859 118.842 423.231C118.842 436.646 116.348 448.173 111.359 457.815C106.413 467.456 99.2655 474.855 89.9174 480.011C80.6113 485.167 69.4188 487.745 56.3399 487.745ZM36.0298 467.561H55.208C64.1788 467.561 71.6614 465.926 77.6559 462.657C83.6504 459.345 88.1568 454.419 91.175 447.88C94.1932 441.299 95.7023 433.082 95.7023 423.231C95.7023 413.38 94.1932 405.206 91.175 398.708C88.1568 392.169 83.6924 387.285 77.7817 384.057C71.913 380.788 64.619 379.153 55.8997 379.153H36.0298V467.561ZM252.535 423.357C252.535 437.232 249.936 449.117 244.738 459.01C239.581 468.861 232.539 476.406 223.61 481.646C214.723 486.886 204.642 489.506 193.365 489.506C182.089 489.506 171.986 486.886 163.057 481.646C154.17 476.364 147.128 468.798 141.93 458.947C136.774 449.054 134.196 437.19 134.196 423.357C134.196 409.482 136.774 397.618 141.93 387.767C147.128 377.874 154.17 370.308 163.057 365.068C171.986 359.828 182.089 357.208 193.365 357.208C204.642 357.208 214.723 359.828 223.61 365.068C232.539 370.308 239.581 377.874 244.738 387.767C249.936 397.618 252.535 409.482 252.535 423.357ZM229.081 423.357C229.081 413.59 227.551 405.353 224.49 398.645C221.472 391.896 217.28 386.803 211.915 383.366C206.549 379.886 200.366 378.147 193.365 378.147C186.365 378.147 180.181 379.886 174.816 383.366C169.45 386.803 165.237 391.896 162.177 398.645C159.159 405.353 157.65 413.59 157.65 423.357C157.65 433.124 159.159 441.382 162.177 448.131C165.237 454.839 169.45 459.932 174.816 463.411C180.181 466.849 186.365 468.567 193.365 468.567C200.366 468.567 206.549 466.849 211.915 463.411C217.28 459.932 221.472 454.839 224.49 448.131C227.551 441.382 229.081 433.124 229.081 423.357ZM259.683 378.524V358.969H362.428V378.524H322.625V487.745H299.485V378.524H259.683ZM378.693 487.745V358.969H462.448V378.524H402.021V413.485H458.11V433.04H402.021V468.19H462.951V487.745H378.693ZM482.707 487.745V358.969H506.035V468.19H562.752V487.745H482.707Z"
          fill="#808080"
        />
        <path
          d="M21.8851 140V34.6788H50.4782V75.8199H88.328V34.6788H116.921V140H88.328V98.8589H50.4782V140H21.8851ZM128.013 140V61.0091H156.4V140H128.013ZM142.206 52.7809C138.367 52.7809 135.075 51.5124 132.332 48.9754C129.59 46.4383 128.218 43.387 128.218 39.8215C128.218 36.2559 129.59 33.2046 132.332 30.6676C135.075 28.1305 138.367 26.862 142.206 26.862C146.08 26.862 149.372 28.1305 152.08 30.6676C154.823 33.2046 156.194 36.2559 156.194 39.8215C156.194 43.387 154.823 46.4383 152.08 48.9754C149.372 51.5124 146.08 52.7809 142.206 52.7809ZM207.43 107.706C207.43 107.03 207.43 106.499 207.43 106.113C207.43 105.63 207.334 105.003 207.141 104.23C206.658 101.817 206.658 96.8929 207.141 89.459C207.527 82.5078 207.285 77.3427 206.417 73.9636C206.803 72.4189 207.044 71.3569 207.141 70.7777C207.237 70.1984 207.189 70.1501 206.996 70.6328C206.513 71.6948 206.851 70.3432 208.01 66.578C207.816 61.9438 207.865 57.5028 208.154 53.2548C208.444 49.0069 208.927 44.8555 209.603 40.8006C209.892 38.8697 210.134 37.0354 210.327 35.2976C210.616 33.5598 210.809 31.8703 210.906 30.229L214.381 28.9257L231.759 30.6635L234.511 34.4287L235.09 43.2625C233.546 44.6141 232.484 46.014 231.904 47.4622C231.325 48.9104 230.987 50.0206 230.891 50.793C230.794 51.5653 230.601 52.7721 230.311 54.4134C230.022 55.9581 229.539 57.1166 228.863 57.889L228.574 59.1923C229.539 61.2198 230.215 62.3783 230.601 62.6679C231.084 62.9576 231.373 63.1989 231.47 63.392C231.663 63.1989 231.615 63.392 231.325 63.9713C231.035 64.454 230.504 65.3712 229.732 66.7228C228.284 69.3295 228.043 70.488 229.008 70.1984C229.491 70.488 228.429 75.6049 225.822 85.549C225.146 87.9626 224.615 89.8935 224.229 91.3416C223.843 92.7898 223.505 93.9483 223.215 94.8172C223.022 95.6861 222.877 96.3137 222.781 96.6998C222.684 97.086 222.636 97.4239 222.636 97.7135C220.898 98.3894 219.402 99.0169 218.147 99.5962C216.892 100.079 216.264 100.61 216.264 101.189C216.264 101.479 216.602 101.817 217.278 102.203C217.954 102.589 218.678 102.975 219.45 103.361C219.933 103.554 220.416 103.796 220.898 104.085C221.477 104.279 222.057 104.472 222.636 104.665L220.029 107.851L207.43 107.706ZM224.808 120.595C224.422 120.884 224.47 121.174 224.953 121.463C225.436 121.753 225.484 121.898 225.098 121.898L224.808 130.877L223.505 135.945C223.119 136.138 222.781 136.283 222.491 136.38C222.105 136.573 221.671 136.766 221.188 136.959C220.802 137.152 220.319 137.345 219.74 137.538C217.326 138.793 215.926 139.421 215.54 139.421L210.182 136.959C206.61 135.318 204.679 134.352 204.389 134.063C205.065 132.035 205.499 129.428 205.692 126.242C205.692 125.47 205.692 124.794 205.692 124.215C205.789 123.636 205.837 123.153 205.837 122.767C205.837 122.284 205.886 121.898 205.982 121.608C206.368 121.512 207.285 121.367 208.734 121.174C210.182 120.981 211.099 120.691 211.485 120.305C211.485 120.498 211.775 120.353 212.354 119.87L213.223 119.291C213.416 119.291 213.802 119.339 214.381 119.436C215.057 119.533 216.071 119.677 217.423 119.87C218.774 120.064 219.74 120.257 220.319 120.45C220.995 120.546 221.381 120.595 221.477 120.595C222.057 120.595 222.443 120.595 222.636 120.595C222.926 120.498 223.119 120.45 223.215 120.45C223.408 120.45 223.553 120.45 223.65 120.45C223.843 120.45 224.229 120.498 224.808 120.595ZM309.366 34.6788V140H280.773V34.6788H309.366ZM368.396 141.234C363.357 141.234 358.9 140.411 355.026 138.766C351.186 137.086 348.169 134.549 345.975 131.155C343.78 127.761 342.683 123.441 342.683 118.195C342.683 113.875 343.42 110.19 344.895 107.139C346.369 104.053 348.426 101.533 351.066 99.5789C353.706 97.6247 356.774 96.1333 360.271 95.1048C363.802 94.0763 367.608 93.4077 371.688 93.0992C376.11 92.7563 379.659 92.3449 382.333 91.8649C385.041 91.3507 386.996 90.6478 388.196 89.7565C389.396 88.8308 389.995 87.6137 389.995 86.1052V85.8995C389.995 83.8424 389.207 82.2653 387.63 81.1683C386.053 80.0712 384.03 79.5226 381.562 79.5226C378.853 79.5226 376.642 80.1226 374.928 81.3225C373.248 82.4882 372.236 84.2881 371.893 86.7223H345.769C346.112 81.9225 347.637 77.4998 350.346 73.4543C353.089 69.3745 357.083 66.1175 362.328 63.6833C367.574 61.2148 374.122 59.9806 381.973 59.9806C387.63 59.9806 392.704 60.6491 397.195 61.9862C401.686 63.289 405.509 65.1232 408.663 67.4888C411.817 69.8202 414.217 72.5629 415.863 75.7171C417.543 78.8369 418.383 82.2311 418.383 85.8995V140H391.847V128.892H391.23C389.653 131.84 387.733 134.223 385.47 136.04C383.241 137.857 380.687 139.177 377.807 140C374.962 140.823 371.825 141.234 368.396 141.234ZM377.653 123.338C379.813 123.338 381.836 122.892 383.721 122.001C385.641 121.109 387.201 119.824 388.401 118.144C389.601 116.464 390.201 114.424 390.201 112.024V105.441C389.447 105.75 388.641 106.041 387.784 106.316C386.961 106.59 386.07 106.847 385.11 107.087C384.184 107.327 383.19 107.55 382.127 107.756C381.099 107.961 380.019 108.15 378.887 108.321C376.693 108.664 374.893 109.23 373.488 110.018C372.116 110.773 371.088 111.716 370.402 112.847C369.751 113.944 369.425 115.178 369.425 116.55C369.425 118.744 370.196 120.424 371.739 121.589C373.282 122.755 375.253 123.338 377.653 123.338ZM429.05 140V61.0091H455.998V76.0256H456.82C458.466 71.0887 461.277 67.1803 465.254 64.3004C469.231 61.4205 473.963 59.9806 479.448 59.9806C485.002 59.9806 489.785 61.4548 493.796 64.4033C497.807 67.3174 500.224 71.1915 501.047 76.0256H501.87C503.207 71.1915 506.053 67.3174 510.407 64.4033C514.761 61.4548 519.869 59.9806 525.732 59.9806C533.309 59.9806 539.445 62.4148 544.142 67.2831C548.874 72.1515 551.239 78.6312 551.239 86.7223V140H522.852V93.922C522.852 90.4593 521.978 87.7508 520.229 85.7966C518.481 83.8081 516.132 82.8139 513.184 82.8139C510.27 82.8139 507.955 83.8081 506.241 85.7966C504.561 87.7508 503.721 90.4593 503.721 93.922V140H476.568V93.922C476.568 90.4593 475.694 87.7508 473.945 85.7966C472.197 83.8081 469.848 82.8139 466.9 82.8139C464.946 82.8139 463.266 83.2596 461.86 84.151C460.455 85.0424 459.357 86.328 458.569 88.008C457.815 89.6536 457.438 91.6249 457.438 93.922V140H429.05Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

export default NameText;