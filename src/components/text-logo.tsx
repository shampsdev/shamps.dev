import React from "react";
import { cn } from "@/lib/utils";
// import { twMerge } from "tailwind-merge";

interface TextLogoProps extends React.SVGProps<SVGSVGElement> {
  char: "s" | "h" | "a" | "m" | "p" | "full";
}

export const TextLogo: React.FC<TextLogoProps> = ({
  char,
  className,
  ...props
}) => {
  const charSvgMap: Record<TextLogoProps["char"], React.ReactNode> = {
    s: (
      <svg
        width='66'
        height='76'
        viewBox='0 0 66 76'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M11.7605 0.17363H54.7436V11.1301H11.7605V0.17363ZM53.148 11.133H65.8838V22.0895H53.148V11.133ZM22.9028 11.1329H0.615234V33.0459H10.163V42.4321H43.5996V64.3437H65.8871V42.4307H54.738V33.0408H22.9028V11.1329ZM10.163 64.3521H56.33V75.3086H10.163V64.3521ZM11.759 53.3909H0.615234V64.3474H11.759V53.3909Z'
          fill='currentColor'
        />
      </svg>
    ),
    h: (
      <svg
        width='105'
        height='123'
        viewBox='0 0 105 123'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0.837891 0.453934H25.8545V7.90784H32.3002V59.634H39.2012V48.6801H50.3449V59.6366H40.791V70.5905H32.3002V122.168H16.0015V9.39801H0.837891V0.453934ZM82.1809 37.7207H82.7128V100.847H93.8488V111.803H82.7128V119.708H67.5512V48.6772H48.7496V37.7207H67.5512H82.1809ZM104.994 89.8926H93.8498V100.849H104.994V89.8926Z'
          fill='currentColor'
        />
      </svg>
    ),

    a: (
      <svg
        width='86'
        height='86'
        viewBox='0 0 86 86'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M51.3183 0H16.8223V6.56787H5.33203V11.4959H23.4014V6.57067H38.1777V11.4959H57.8897V6.56787H51.3183V0ZM0.400391 11.4999H16.8271V27.9265H0.400391V11.4999ZM62.8252 11.4994H44.7559V78.8487H49.6777V85.4193H79.2457V78.8491H85.8223V73.9211H72.6809V78.8486H62.8252V11.4994ZM44.7522 73.9197H39.8244V78.8473H34.9V85.4164H5.33203V78.8473H0.400391V73.9197V73.9193V68.9917H16.8271V73.9193H39.8242V68.9917H44.7522V73.9197ZM16.8307 55.8509H11.8991V68.9916H0.400391V50.9222H5.33203V45.9949H16.8223V45.9944H23.4004V39.4242H44.7551V45.9949H28.3209V50.9224H16.8307V55.8509Z'
          fill='currentColor'
        />
      </svg>
    ),

    m: (
      <svg
        width='126'
        height='75'
        viewBox='0 0 126 75'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M24.8211 0.174591H8.52241V7.62743H0.943359V15.0808V17.8386H8.52241V74.7086H24.8211V28.0525H34.0681V17.8414H24.8211V0.174591ZM70.3108 0.174591H55.2927H54.0121H41.6473V7.6285H31.2676V17.8397H41.6533V10.3857H54.0121V74.7086H70.3108V28.0525H79.5572V17.8414H70.3108V0.174591ZM100.782 0.174591H115.794V55.3269H125.041V65.5381H115.794V74.7086H99.4957V10.3857H87.1374V17.8397H76.7517V7.6285H87.1363V0.174591H99.4957H100.782Z'
          fill='currentColor'
        />
      </svg>
    ),

    p: (
      <svg
        width='79'
        height='116'
        viewBox='0 0 79 116'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M27.8385 0.174576H11.5398V105.043H1.9791V116H24.2666V105.044H27.8385V73.7373H59.6656V64.3447H69.2267V53.392H78.7739V11.1312H58.0783V53.3882H48.5311V62.7808H27.8385V22.0905H37.3781V11.134H27.8385V0.174576ZM11.5383 11.134H0.394531V22.0905H11.5383V11.134ZM69.2291 0.174576H35.7979V11.1311H69.2291V0.174576Z'
          fill='currentColor'
        />
      </svg>
    ),

    full: (
      <svg
        viewBox='0 0 976 202'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='w-full'
      >
        <path
          d='M958.218 115.85L882.921 152.365V135.015L938.486 109.726L937.919 110.69V108.252L938.486 109.273L882.921 83.9281V66.6346L958.218 103.149V115.85Z'
          fill='currentColor'
        />
        <path
          d='M16.3346 115.85V103.149L91.6319 66.6346V83.9281L36.0661 109.273L36.5764 108.252V110.69L36.0661 109.726L91.6319 135.015V152.365L16.3346 115.85ZM157.972 33.6353L120.55 172.663H105.411L142.833 33.6353H157.972Z'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M264.604 9.14453H294.623V18.0894H302.359V80.1607H310.639V67.0161H324.011V80.1639H312.546V93.3085H302.359V155.202H282.801V19.8774H264.604V9.14453ZM362.215 53.8643H362.852V129.616H376.216V142.764H362.852V152.249H344.658V67.0121H322.098V53.8643H344.658H362.215ZM389.591 116.471H376.219V129.618H389.591V116.471Z'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M697.803 62.8091H678.244V188.651H666.771V201.799H693.517V188.652H697.803V151.084H735.996V139.813H747.469V126.67H758.926V75.9571H734.092V126.666H722.635V137.937H697.803V89.1081H709.251V75.9603H697.803V62.8091ZM678.244 75.9603H664.871V89.1081H678.244V75.9603ZM747.471 62.8091H707.354V75.9569H747.471V62.8091Z'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M529.781 62.8091H510.223V71.7525H501.129V80.6966V84.0059H510.223V152.25H529.781V96.2627H540.877V84.0093H529.781V62.8091ZM584.369 62.8091H566.347H564.811H549.973V71.7539H537.518V84.0073H549.98V75.0625H564.811V152.25H584.369V96.2627H595.467V84.0093H584.369V62.8091ZM620.935 62.8091H638.951V128.992H650.047V141.245H638.951V152.25H619.393V75.0625H604.562V84.0073H592.1V71.7539H604.561V62.8091H619.393H620.935Z'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M787.412 62.8091H838.992V75.9569H787.412V62.8091ZM837.078 75.9604H852.361V89.1082H837.078V75.9604ZM800.784 75.9599H774.039V102.255H785.496V113.519H825.621V139.813H852.366V113.518H838.986V102.25H800.784V75.9599ZM785.496 139.824H840.897V152.972H785.496V139.824ZM787.412 126.67H774.039V139.818H787.412V126.67Z'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M196.109 62.8082H247.689V75.956H196.109V62.8082ZM245.775 75.9595H261.058V89.1073H245.775V75.9595ZM209.481 75.9596H182.736V102.255H194.193V113.518H234.318V139.812H261.063V113.517H247.683V102.249H209.481V75.9596ZM194.193 139.823H249.594V152.971H194.193V139.823ZM196.109 126.669H182.736V139.817H196.109V126.669Z'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M461.981 50.5996H420.586V58.481H406.799V64.3946H428.482V58.4844H446.211V64.3946H469.865V58.481H461.981V50.5996ZM400.879 64.3995H420.591V84.1115H400.879V64.3995ZM475.791 64.3989H454.107V145.218H460.012V153.103H495.493V145.218H503.385V139.305H487.615V145.218H475.791V64.3989ZM454.101 139.304H448.188V145.216H442.28V153.099H406.799V145.216H400.879V139.303V139.303V133.39H420.591V139.303H448.188V133.39H454.101V139.304ZM420.597 117.621H414.677V133.39H400.879V111.706H406.799V105.794H420.586V105.793H428.48V97.9087H454.106V105.793H434.384V111.707H420.597V117.621Z'
          fill='currentColor'
        />
      </svg>
    ),
  };

  return <div className={cn(className)}>{charSvgMap[char]}</div>;
};
