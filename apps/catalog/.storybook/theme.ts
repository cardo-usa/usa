import { create } from '@storybook/theming';
import { getBaseUrl } from '../../../packages/core/util/get-base-url';

const brandLogo = `
<svg width="294" height="84" viewBox="0 0 294 84" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
    <g>
      <path
        d="M38.9034 8.87397L3.04658 20.8377C1.44633 21.3716 0.581899 23.1017 1.11583 24.702L19.9073 81.0225C20.4412 82.6227 22.1713 83.4872 23.7716 82.9532L59.6284 70.9895C61.2286 70.4556 62.0931 68.7255 61.5591 67.1253L42.7677 10.8047C42.2337 9.20447 40.5036 8.34005 38.9034 8.87397Z"
        fill="white" />
      <path
        d="M37.9387 13.2211L6.42815 23.7346C5.62802 24.0016 5.19581 24.8666 5.46278 25.6668L22.8041 77.641C23.0711 78.4411 23.9361 78.8734 24.7362 78.6064L56.2468 68.0928C57.0469 67.8259 57.4791 66.9608 57.2121 66.1607L39.8708 14.1865C39.6038 13.3863 38.7388 12.9541 37.9387 13.2211Z"
        fill="#E54D2E" />
      <path
        d="M24.7704 67.8902C32.045 70.0602 40.8742 61.9905 44.4908 49.8661C48.1074 37.7416 45.142 26.1537 37.8673 23.9838C30.5926 21.8138 21.7635 29.8835 18.1469 42.0079C14.5303 54.1323 17.4957 65.7202 24.7704 67.8902Z"
        fill="white" fill-opacity="0.923" />
    </g>
    <g>
      <path
        d="M116.646 19.6156L80.3292 9.13049C78.7085 8.66255 77.0152 9.5971 76.5473 11.2179L60.0782 68.2608C59.6102 69.8815 60.5448 71.5748 62.1656 72.0427L98.4822 82.5279C100.103 82.9958 101.796 82.0613 102.264 80.4405L118.733 23.3976C119.201 21.7768 118.267 20.0836 116.646 19.6156Z"
        fill="white" />
      <path
        d="M113.386 22.6486L81.471 13.4344C80.6606 13.2004 79.814 13.6677 79.58 14.4781L64.3818 67.1189C64.1479 67.9293 64.6151 68.7759 65.4255 69.0099L97.3402 78.2241C98.1506 78.4581 98.9972 77.9908 99.2312 77.1804L114.429 24.5396C114.663 23.7292 114.196 22.8826 113.386 22.6486Z"
        fill="#30A46C" />
      <path
        d="M71.5319 60.2038C76.2924 66.1171 88.141 64.4791 97.9966 56.545C107.852 48.611 111.983 37.3855 107.222 31.4721C102.462 25.5587 90.6132 27.1968 80.7576 35.1308C70.902 43.0649 66.7715 54.2904 71.5319 60.2038Z"
        fill="white" fill-opacity="0.923" />
    </g>
    <g>
      <path
        d="M79.0162 3.14288L41.3226 0.308847C39.6403 0.182366 38.1741 1.44355 38.0476 3.12578L33.5962 62.3314C33.4697 64.0136 34.7309 65.4799 36.4131 65.6064L74.1067 68.4404C75.789 68.5669 77.2552 67.3057 77.3817 65.6235L81.8331 6.41784C81.9596 4.73561 80.6984 3.26936 79.0162 3.14288Z"
        fill="white" />
      <path
        d="M76.4455 6.7786L43.3208 4.28809C42.4797 4.22485 41.7465 4.85544 41.6833 5.69656L37.5754 60.3333C37.5121 61.1744 38.1427 61.9075 38.9839 61.9707L72.1085 64.4612C72.9497 64.5245 73.6828 63.8939 73.746 63.0528L77.8539 8.41608C77.9172 7.57497 77.2866 6.84184 76.4455 6.7786Z"
        fill="#3E63DD" />
      <path
        d="M43.1596 52.1016C49.029 56.916 60.292 52.8887 68.3161 43.1063C76.3402 33.3239 78.0869 21.4908 72.2174 16.6763C66.348 11.8619 55.0851 15.8892 47.061 25.6716C39.0368 35.454 37.2902 47.2871 43.1596 52.1016Z"
        fill="white" fill-opacity="0.923" />
    </g>
  </g>
  <path
    d="M164.831 30.68L164.719 35.776V46.584C164.719 48.152 165.205 49.3653 166.175 50.224C167.146 51.0827 168.285 51.512 169.591 51.512C170.898 51.512 172.018 51.0827 172.951 50.224C173.922 49.3653 174.407 48.152 174.407 46.584V29.896C174.407 28.1413 174.631 26.8533 175.079 26.032C175.565 25.2107 176.591 24.8 178.159 24.8H183.311C184.506 24.8 185.327 25.1547 185.775 25.864C186.634 27.1333 187.063 32.0427 187.063 40.592C187.063 43.392 187.026 45.5387 186.951 47.032C186.839 50.056 186.13 52.7627 184.823 55.152C183.554 57.504 181.911 59.3893 179.895 60.808C175.826 63.6827 171.215 65.12 166.063 65.12C159.269 65.12 153.65 63.5333 149.207 60.36C146.967 58.7547 145.194 56.6267 143.887 53.976C142.618 51.288 141.965 48.1707 141.927 44.624C141.89 42.8693 141.871 40.2933 141.871 36.896C141.871 33.4613 141.909 30.9973 141.983 29.504C142.095 27.9733 142.394 26.816 142.879 26.032C143.402 25.2107 144.429 24.8 145.959 24.8H160.911C162.405 24.8 163.394 25.192 163.879 25.976C164.514 26.984 164.831 28.552 164.831 30.68ZM210.01 65.12C206.8 65.12 203.794 64.7653 200.994 64.056C198.232 63.3467 196.272 62.6373 195.114 61.928C193.994 61.2187 193.248 60.7147 192.874 60.416C191.904 59.632 191.418 58.5493 191.418 57.168C191.418 56.0853 191.549 55.0587 191.81 54.088C192.296 52.2587 193.173 51.344 194.442 51.344C194.853 51.3813 196.16 51.8107 198.362 52.632C200.602 53.4533 202.357 53.864 203.626 53.864C205.53 53.864 206.482 53.1173 206.482 51.624C206.482 50.728 206.016 49.9067 205.082 49.16C204.149 48.376 203.01 47.6293 201.666 46.92C200.36 46.2107 199.034 45.408 197.69 44.512C196.346 43.5787 195.208 42.3093 194.274 40.704C193.341 39.0613 192.874 37.1573 192.874 34.992C192.874 31.408 194.629 28.608 198.138 26.592C201.648 24.5387 206.184 23.512 211.746 23.512C217.309 23.512 221.714 24.0907 224.962 25.248C228.248 26.368 229.89 27.936 229.89 29.952C229.89 31.408 229.554 32.696 228.882 33.816C228.21 34.8987 227.501 35.44 226.754 35.44C226.493 35.44 225.616 35.16 224.122 34.6C222.666 34.0027 221.341 33.704 220.146 33.704C217.794 33.704 216.618 34.6187 216.618 36.448C216.618 37.344 217.178 38.1653 218.298 38.912C219.418 39.6587 220.762 40.3867 222.33 41.096C223.936 41.768 225.541 42.5333 227.146 43.392C228.752 44.2507 230.114 45.4267 231.234 46.92C232.354 48.4133 232.914 50.224 232.914 52.352C232.914 54.48 232.224 56.4213 230.842 58.176C229.498 59.9307 227.706 61.2933 225.466 62.264C221.024 64.168 215.872 65.12 210.01 65.12ZM273.884 27.432L292.196 58.4C292.942 59.632 293.316 60.6773 293.316 61.536C293.316 62.3573 292.98 62.9733 292.308 63.384C291.636 63.7947 290.852 64 289.956 64H271.924C270.094 64 268.918 63.664 268.396 62.992C268.246 62.768 268.041 62.376 267.78 61.816L266.156 58.344C265.67 57.2613 264.532 56.6453 262.74 56.496H252.156C251.372 56.496 250.774 56.5707 250.364 56.72C249.953 56.8693 249.617 57.2053 249.356 57.728L247.172 62.264C246.798 62.936 246.388 63.4027 245.94 63.664C245.492 63.888 244.838 64 243.98 64H238.94C237.484 64 236.7 63.4773 236.588 62.432C236.55 62.2827 236.532 62.1333 236.532 61.984C236.532 61.1253 236.812 60.304 237.372 59.52L254.9 28.608C256.58 25.696 259.305 24.24 263.076 24.24H267.556C270.542 24.24 272.652 25.304 273.884 27.432ZM255.74 41.768L253.164 46.864C253.014 47.2 252.94 47.4987 252.94 47.76C252.94 48.7307 253.406 49.216 254.34 49.216H259.436C260.22 49.216 260.761 49.0293 261.06 48.656C261.358 48.2453 261.508 47.8907 261.508 47.592C261.508 47.2933 261.452 46.9947 261.34 46.696L259.212 41.88C258.764 40.9093 258.185 40.424 257.476 40.424C256.766 40.424 256.188 40.872 255.74 41.768Z"
    fill="#CA3214" />
</svg>
`;

export const theme = create({
  base: 'light',
  brandTitle: 'usa',
  brandUrl: getBaseUrl({ forceCustomDomain: true }).toString(),
  brandImage: `data:image/svg+xml;base64,${btoa(brandLogo)}`,
});