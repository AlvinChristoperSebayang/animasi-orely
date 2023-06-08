/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        fadeintop :'fadeintop 1s ease-in-out forwards',
        scalecenter:'scalecenter 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        moveleft:'moveleft 0.8s ease-in-out forwards',
        scaleupright:'scaleupright 1s  cubic-bezier(0.390, 0.575, 0.565, 1.000) both;',
        
      },
      keyframes:{
        scalecenter:{
          from:{
            transform:'scale(1.2)'
          },
          to: {
            transform:'scale(1)'
          }
        }, 
         fadeintop:{
          from:{
            opacity:0,
            transform:'translateY(10%)'
          },
          to:{
            opacity:1,
            transform:'translateY(0)'
          },       
        },
        moveleft:{
          from:{
              transform:'rotate(-5deg)',
          
          }, 
          to:{
            transform:'rotate(0deg)',
           
          }
        },
        scaleupright:{
          from:{
            opacity:'0',
            transform: 'translate(40%,100%)',

            
          },
          to:{
            opacity:1,
            transform: 'translateX(0%,0%)',
          }
        }

        
      }
    },
  },
  plugins: [],
}

